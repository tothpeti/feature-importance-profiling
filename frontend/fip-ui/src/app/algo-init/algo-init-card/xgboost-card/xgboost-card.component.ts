import {Component, Input, OnInit} from '@angular/core';
import {IAlgorithm} from '../../../shared/model/algo-interface.model';
import {InMemoryDataStoreService} from '../../../shared/service/in-memory-data-store.service';
import {FormControl, FormGroup} from "@angular/forms";
import {XgboostModel} from "../../../shared/model/xgboost.model";

@Component({
  selector: 'app-xgboost-card',
  templateUrl: './xgboost-card.component.html',
  styleUrls: ['./xgboost-card.component.css']
})
export class XgboostCardComponent implements OnInit {

  @Input() initAlgorithm: IAlgorithm;
  @Input() initIndex: number;

  editAlgorithmForm: FormGroup;

  constructor(private inMemoryDataStoreService: InMemoryDataStoreService) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    const name = this.initAlgorithm.algoName;
    const eta = this.initAlgorithm.eta;
    const maxDepth = this.initAlgorithm.maxDepth;
    const minChildWeight = this.initAlgorithm.minChildWeight;
    const gamma = this.initAlgorithm.gamma;
    const subsample = this.initAlgorithm.subsample;
    const colsampleByTree = this.initAlgorithm.colsampleByTree;
    const alpha = this.initAlgorithm.alpha;

    this.editAlgorithmForm = new FormGroup({
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

  onSubmit(): void {
    const newAlgo = new XgboostModel(
      this.editAlgorithmForm.value.eta,
      this.editAlgorithmForm.value.maxDepth,
      this.editAlgorithmForm.value.minChildWeight,
      this.editAlgorithmForm.value.gamma,
      this.editAlgorithmForm.value.subsample,
      this.editAlgorithmForm.value.colsampleByTree,
      this.editAlgorithmForm.value.alpha
    );

    this.inMemoryDataStoreService.updateInitializedAlgorithm(this.initIndex, newAlgo);
  }

  onRemove(): void {
    this.inMemoryDataStoreService.deleteInitializedAlgorithm(this.initIndex);
  }
}
