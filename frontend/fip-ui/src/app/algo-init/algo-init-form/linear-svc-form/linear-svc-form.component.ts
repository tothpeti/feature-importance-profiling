import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {IAlgorithm} from '../../../shared/model/algo-interface.model';
import {InMemoryDataStoreService} from '../../../shared/service/in-memory-data-store.service';
import {LinearSvcModel} from '../../../shared/model/linear-svc.model';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-linear-svc-form',
  templateUrl: './linear-svc-form.component.html',
  styleUrls: ['./linear-svc-form.component.css']
})
export class LinearSvcFormComponent implements OnInit, OnDestroy {

  @Input() selectedDefaultAlgorithm: IAlgorithm;
  editIdx: number;
  algorithmForm: FormGroup;
  editInitAlgorithm$: Subscription;
  editAlgorithm: IAlgorithm;
  editMode = false;

  constructor(private inMemoryDataStoreService: InMemoryDataStoreService) { }

  ngOnInit(): void {
    this.initForm();
    this.editInitAlgorithm$ = this.inMemoryDataStoreService.editInitAlgorithm$.subscribe(
      ({index, algorithm}) => {
        this.editIdx = index;
        this.editAlgorithm = algorithm;
        this.editMode = true;

        this.algorithmForm.setValue({
          name: this.editAlgorithm.algoName,
          maxIter: this.editAlgorithm.maxIter,
          cPenalty: this.editAlgorithm.cPenalty,
          penalty: this.editAlgorithm.penalty,
          tol: this.editAlgorithm.tol
        });
      }
    );
  }

  ngOnDestroy(): void {
    this.editInitAlgorithm$.unsubscribe();
  }

  initForm(): void {
    let name = '';
    let maxIter = 0;
    let cPenalty = 0.0;
    let penalty = '';
    let tol = 0.0;


    if (!this.editMode) {
      name = this.selectedDefaultAlgorithm.algoName;
      maxIter = this.selectedDefaultAlgorithm.maxIter;
      cPenalty = this.selectedDefaultAlgorithm.cPenalty;
      penalty = this.selectedDefaultAlgorithm.penalty;
      tol = this.selectedDefaultAlgorithm.tol;
    }

    this.algorithmForm = new FormGroup({
      name: new FormControl(name),
      maxIter: new FormControl(maxIter),
      cPenalty: new FormControl(cPenalty),
      penalty: new FormControl(penalty),
      tol: new FormControl(tol),
    });
  }

  onReset(): void {
    this.algorithmForm.setValue({
      name: this.selectedDefaultAlgorithm.algoName,
      maxIter: this.selectedDefaultAlgorithm.maxIter,
      cPenalty: this.selectedDefaultAlgorithm.cPenalty,
      penalty: this.selectedDefaultAlgorithm.penalty,
      tol: this.selectedDefaultAlgorithm.tol,
    });
  }

  onSubmit(): void {
    const newAlgo = new LinearSvcModel(
      this.algorithmForm.value.cPenalty,
      this.algorithmForm.value.penalty,
      this.algorithmForm.value.tol,
      this.algorithmForm.value.maxIter
    );

    if (this.editMode) {
      this.inMemoryDataStoreService.updateInitializedAlgorithm(this.editIdx, newAlgo);
      this.editMode = false;
    } else {
      this.inMemoryDataStoreService.addInitializedAlgorithm(newAlgo);
    }
    this.onReset();
  }
}
