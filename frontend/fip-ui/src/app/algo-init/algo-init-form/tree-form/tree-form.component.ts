import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {InMemoryDataStoreService} from '../../../shared/service/in-memory-data-store.service';
import {IAlgorithm} from "../../../shared/model/algo-interface.model";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-tree-form',
  templateUrl: './tree-form.component.html',
  styleUrls: ['./tree-form.component.css']
})
export class TreeFormComponent implements OnInit, OnDestroy {
  @Input() selectedDefaultAlgorithm: IAlgorithm;

  selectedAlgoSubscription$: Subscription;
  algorithmForm: FormGroup;
  editMode = false;

  constructor(private inMemoryDataStoreService: InMemoryDataStoreService) { }

  ngOnInit(): void {
    console.log(this.selectedDefaultAlgorithm);
    this.initForm();
    /*
    this.selectedAlgoSubscription$ = this.inMemoryDataStoreService.selectedAlgorithmIdx$.subscribe(
      (index: number) => {
        this.selectedDefaultAlgo = this.inMemoryDataStoreService.getDefaultAlgorithmById(index);
        this.initForm();
        console.log(this.selectedDefaultAlgo);
      }
    );
     */
  }

  ngOnDestroy(): void {
    // this.selectedAlgoSubscription$.unsubscribe();
  }

  private initForm() {
    const name = this.selectedDefaultAlgorithm.algoName;
    let nEstimators = this.selectedDefaultAlgorithm.nEstimators;
    let maxDepth = this.selectedDefaultAlgorithm.maxDepth;
    let minSamplesSplit = this.selectedDefaultAlgorithm.minSamplesSplit;
    let minSamplesLeaf = this.selectedDefaultAlgorithm.minSamplesLeaf;
    let maxFeatures = this.selectedDefaultAlgorithm.maxFeatures;
    let criterion = this.selectedDefaultAlgorithm.criterion;

    this.algorithmForm = new FormGroup({
      name: new FormControl(name),
      nEstimators: new FormControl(nEstimators),
      maxDepth: new FormControl(maxDepth),
      minSamplesSplit: new FormControl(minSamplesSplit),
      minSamplesLeaf: new FormControl(minSamplesLeaf),
      maxFeatures: new FormControl(maxFeatures),
      criterion: new FormControl(criterion)
    });
    console.log(this.algorithmForm);
  }

  onReset(): void {
    this.algorithmForm.setValue({
      name: this.selectedDefaultAlgorithm.algoName,
      nEstimators: this.selectedDefaultAlgorithm.nEstimators,
      maxDepth: null,
      minSamplesSplit: this.selectedDefaultAlgorithm.minSamplesSplit,
      minSamplesLeaf: this.selectedDefaultAlgorithm.minSamplesLeaf,
      maxFeatures: this.selectedDefaultAlgorithm.maxFeatures,
      criterion: this.selectedDefaultAlgorithm.criterion
    });
  }

  onSubmit(): void {
    this.inMemoryDataStoreService.addInitializedAlgorithm(this.algorithmForm.value);
    this.onReset();
  }

}
