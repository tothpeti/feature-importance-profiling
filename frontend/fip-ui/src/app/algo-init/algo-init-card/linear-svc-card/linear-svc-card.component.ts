import {Component, Input, OnInit} from '@angular/core';
import {IAlgorithm} from '../../../shared/model/algo-interface.model';
import {InMemoryDataStoreService} from '../../../shared/service/in-memory-data-store.service';
import {FormControl, FormGroup} from "@angular/forms";
import {LinearSvcModel} from "../../../shared/model/linear-svc.model";

@Component({
  selector: 'app-linear-svc-card',
  templateUrl: './linear-svc-card.component.html',
  styleUrls: ['./linear-svc-card.component.css']
})
export class LinearSvcCardComponent implements OnInit {

  @Input() initAlgorithm: IAlgorithm;
  @Input() initIndex: number;

  editAlgorithmForm: FormGroup;

  constructor(private inMemoryDataStoreService: InMemoryDataStoreService) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    const name = this.initAlgorithm.algoName;
    const maxIter = this.initAlgorithm.maxIter;
    const cPenalty = this.initAlgorithm.cPenalty;
    const penalty = this.initAlgorithm.penalty;
    const tol = this.initAlgorithm.tol;

    this.editAlgorithmForm = new FormGroup({
      name: new FormControl(name),
      maxIter: new FormControl(maxIter),
      cPenalty: new FormControl(cPenalty),
      penalty: new FormControl(penalty),
      tol: new FormControl(tol),
    });
  }

  onSubmit(): void {
    const newAlgo = new LinearSvcModel(
      this.editAlgorithmForm.value.cPenalty,
      this.editAlgorithmForm.value.penalty,
      this.editAlgorithmForm.value.tol,
      this.editAlgorithmForm.value.maxIter
    );

    this.inMemoryDataStoreService.updateInitializedAlgorithm(this.initIndex, newAlgo);
  }

  onRemove(): void {
    this.inMemoryDataStoreService.deleteInitializedAlgorithm(this.initIndex);
  }

}
