import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {InMemoryDataStoreService} from '../../../shared/service/in-memory-data-store.service';
import {IAlgorithm} from "../../../shared/model/algo-interface.model";
import {Subscription} from "rxjs";
import {RandomForestModel} from "../../../shared/model/random-forest.model";
import {ExtraTreesModel} from "../../../shared/model/extra-trees.model";

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
    let newAlgo = null;
    if (this.algorithmForm.value.name === 'RandomForestClassifier') {
      newAlgo = new RandomForestModel(
        this.algorithmForm.value.nEstimators,
        this.algorithmForm.value.maxDepth,
        this.algorithmForm.value.minSamplesSplit,
        this.algorithmForm.value.minSamplesLeaf,
        this.algorithmForm.value.maxFeatures,
        this.algorithmForm.value.criterion
      );
    } else {
      newAlgo = new ExtraTreesModel(
        this.algorithmForm.value.nEstimators,
        this.algorithmForm.value.maxDepth,
        this.algorithmForm.value.minSamplesSplit,
        this.algorithmForm.value.minSamplesLeaf,
        this.algorithmForm.value.maxFeatures,
        this.algorithmForm.value.criterion
      );
    }

    this.inMemoryDataStoreService.addInitializedAlgorithm(newAlgo);
    console.log(this.algorithmForm.value);
    this.onReset();
  }

}
