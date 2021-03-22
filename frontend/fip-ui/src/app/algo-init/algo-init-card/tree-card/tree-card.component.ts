import {Component, Input, OnInit} from '@angular/core';
import {IAlgorithm} from '../../../shared/model/algo-interface.model';
import {InMemoryDataStoreService} from '../../../shared/service/in-memory-data-store.service';
import {FormControl, FormGroup} from '@angular/forms';
import {RandomForestModel} from '../../../shared/model/random-forest.model';
import {ExtraTreesModel} from '../../../shared/model/extra-trees.model';

@Component({
  selector: 'app-tree-card',
  templateUrl: './tree-card.component.html',
  styleUrls: ['./tree-card.component.css']
})
export class TreeCardComponent implements OnInit {
  @Input() initAlgorithm: IAlgorithm;
  @Input() initIndex: number;

  editAlgorithmForm: FormGroup;

  constructor(private inMemoryDataStoreService: InMemoryDataStoreService) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    const name = this.initAlgorithm.algoName;
    const nEstimators = this.initAlgorithm.nEstimators;
    const maxDepth = this.initAlgorithm.maxDepth;
    const minSamplesSplit = this.initAlgorithm.minSamplesSplit;
    const minSamplesLeaf = this.initAlgorithm.minSamplesLeaf;
    const maxFeatures = this.initAlgorithm.maxFeatures;
    const criterion = this.initAlgorithm.criterion;

    this.editAlgorithmForm = new FormGroup({
      name: new FormControl(name),
      nEstimators: new FormControl(nEstimators),
      maxDepth: new FormControl(maxDepth),
      minSamplesSplit: new FormControl(minSamplesSplit),
      minSamplesLeaf: new FormControl(minSamplesLeaf),
      maxFeatures: new FormControl(maxFeatures),
      criterion: new FormControl(criterion)
    });
  }

  onRemove(): void {
    this.inMemoryDataStoreService.deleteInitializedAlgorithm(this.initIndex);
  }

  onSubmit(): void {
    let newAlgo = null;
    if (this.editAlgorithmForm.value.name === 'RandomForestClassifier') {
      newAlgo = new RandomForestModel(
        this.editAlgorithmForm.value.nEstimators,
        this.editAlgorithmForm.value.maxDepth,
        this.editAlgorithmForm.value.minSamplesSplit,
        this.editAlgorithmForm.value.minSamplesLeaf,
        this.editAlgorithmForm.value.maxFeatures,
        this.editAlgorithmForm.value.criterion
      );
    } else {
      newAlgo = new ExtraTreesModel(
        this.editAlgorithmForm.value.nEstimators,
        this.editAlgorithmForm.value.maxDepth,
        this.editAlgorithmForm.value.minSamplesSplit,
        this.editAlgorithmForm.value.minSamplesLeaf,
        this.editAlgorithmForm.value.maxFeatures,
        this.editAlgorithmForm.value.criterion
      );
    }

    this.inMemoryDataStoreService.updateInitializedAlgorithm(this.initIndex, newAlgo);
  }
}
