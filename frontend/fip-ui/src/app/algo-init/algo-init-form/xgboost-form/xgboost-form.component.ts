import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {IAlgorithm} from '../../../shared/model/algo-interface.model';
import {XgboostModel} from '../../../shared/model/xgboost.model';
import {InMemoryDataStoreService} from '../../../shared/service/in-memory-data-store.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-xgboost-form',
  templateUrl: './xgboost-form.component.html',
  styleUrls: ['./xgboost-form.component.css']
})
export class XgboostFormComponent implements OnInit {

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
          eta: this.editAlgorithm.eta,
          maxDepth: this.editAlgorithm.maxDepth,
          minChildWeight: this.editAlgorithm.minChildWeight,
          gamma: this.editAlgorithm.gamma,
          subsample: this.editAlgorithm.subsample,
          colsampleByTree: this.editAlgorithm.colsampleByTree,
          alpha: this.editAlgorithm.alpha
        });
      }
    );
  }

  initForm(): void {
     const name = this.selectedDefaultAlgorithm.algoName;
     const eta = this.selectedDefaultAlgorithm.eta;
     const maxDepth = this.selectedDefaultAlgorithm.maxDepth;
     const minChildWeight = this.selectedDefaultAlgorithm.minChildWeight;
     const gamma = this.selectedDefaultAlgorithm.gamma;
     const subsample = this.selectedDefaultAlgorithm.subsample;
     const colsampleByTree = this.selectedDefaultAlgorithm.colsampleByTree;
     const alpha = this.selectedDefaultAlgorithm.alpha;

     this.algorithmForm = new FormGroup({
       name: new FormControl(name),
       eta: new FormControl(eta),
       maxDepth: new FormControl(maxDepth),
       minChildWeight: new FormControl(minChildWeight),
       gamma: new FormControl(gamma),
       subsample: new FormControl(subsample),
       colsampleByTree: new FormControl(colsampleByTree),
       alpha: new FormControl(alpha)
     });
  }

  onReset(): void {
    this.algorithmForm.setValue({
      name: this.selectedDefaultAlgorithm.algoName,
      eta: this.selectedDefaultAlgorithm.eta,
      maxDepth: this.selectedDefaultAlgorithm.maxDepth,
      minChildWeight: this.selectedDefaultAlgorithm.minChildWeight,
      gamma: this.selectedDefaultAlgorithm.gamma,
      subsample: this.selectedDefaultAlgorithm.subsample,
      colsampleByTree: this.selectedDefaultAlgorithm.colsampleByTree,
      alpha: this.selectedDefaultAlgorithm.alpha
    });
  }

  onSubmit(): void {
    const newAlgo = new XgboostModel(
      this.algorithmForm.value.eta,
      this.algorithmForm.value.maxDepth,
      this.algorithmForm.value.minChildWeight,
      this.algorithmForm.value.gamma,
      this.algorithmForm.value.subsample,
      this.algorithmForm.value.colsampleByTree,
      this.algorithmForm.value.alpha
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
