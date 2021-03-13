import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {IAlgorithm} from '../../../shared/model/algo-interface.model';
import {XgboostModel} from "../../../shared/model/xgboost.model";
import {InMemoryDataStoreService} from "../../../shared/service/in-memory-data-store.service";

@Component({
  selector: 'app-xgboost-form',
  templateUrl: './xgboost-form.component.html',
  styleUrls: ['./xgboost-form.component.css']
})
export class XgboostFormComponent implements OnInit {
  @Input() selectedDefaultAlgorithm: IAlgorithm;
  algorithmForm: FormGroup;

  constructor(private inMemoryDataStoreService: InMemoryDataStoreService) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
     const name = this.selectedDefaultAlgorithm.algoName;
     let eta = this.selectedDefaultAlgorithm.eta;
     let maxDepth = this.selectedDefaultAlgorithm.maxDepth;
     let minChildWeight = this.selectedDefaultAlgorithm.minChildWeight;
     let gamma = this.selectedDefaultAlgorithm.gamma;
     let subsample = this.selectedDefaultAlgorithm.subsample;
     let colsampleByTree = this.selectedDefaultAlgorithm.colsampleByTree;
     let alpha = this.selectedDefaultAlgorithm.alpha;

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

    this.inMemoryDataStoreService.addInitializedAlgorithm(newAlgo);
    this.onReset();
  }

}
