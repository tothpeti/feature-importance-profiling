import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {InMemoryDataStoreService} from '../../../shared/service/in-memory-data-store.service';
import {IAlgorithm} from '../../../shared/model/algo-interface.model';
import {Subscription} from 'rxjs';
import {RandomForestModel} from '../../../shared/model/random-forest.model';
import {ExtraTreesModel} from '../../../shared/model/extra-trees.model';

@Component({
  selector: 'app-tree-form',
  templateUrl: './tree-form.component.html',
  styleUrls: ['./tree-form.component.css']
})
export class TreeFormComponent implements OnInit, OnDestroy {

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
          nEstimators: this.editAlgorithm.nEstimators,
          maxDepth: this.editAlgorithm.maxDepth,
          minSamplesSplit: this.editAlgorithm.minSamplesSplit,
          minSamplesLeaf: this.editAlgorithm.minSamplesLeaf,
          maxFeatures: this.editAlgorithm.maxFeatures,
          criterion: this.editAlgorithm.criterion
        });
      }
    );
  }

  ngOnDestroy(): void {
    this.editInitAlgorithm$.unsubscribe();
  }

  private initForm(): void {
    const name = this.selectedDefaultAlgorithm.algoName;
    const nEstimators = this.selectedDefaultAlgorithm.nEstimators;
    const maxDepth = this.selectedDefaultAlgorithm.maxDepth;
    const minSamplesSplit = this.selectedDefaultAlgorithm.minSamplesSplit;
    const minSamplesLeaf = this.selectedDefaultAlgorithm.minSamplesLeaf;
    const maxFeatures = this.selectedDefaultAlgorithm.maxFeatures;
    const criterion = this.selectedDefaultAlgorithm.criterion;

    this.algorithmForm = new FormGroup({
      name: new FormControl(name),
      nEstimators: new FormControl(nEstimators),
      maxDepth: new FormControl(maxDepth),
      minSamplesSplit: new FormControl(minSamplesSplit),
      minSamplesLeaf: new FormControl(minSamplesLeaf),
      maxFeatures: new FormControl(maxFeatures),
      criterion: new FormControl(criterion)
    });
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

    if (this.editMode) {
      this.inMemoryDataStoreService.updateInitializedAlgorithm(this.editIdx, newAlgo);
      this.editMode = false;
    } else {
      this.inMemoryDataStoreService.addInitializedAlgorithm(newAlgo);
    }
    this.onReset();
  }

}
