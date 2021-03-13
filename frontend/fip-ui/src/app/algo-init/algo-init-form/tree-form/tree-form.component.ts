import {Component, OnDestroy, OnInit} from '@angular/core';
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

  selectedDefaultAlgo: IAlgorithm;
  selectedAlgoSubscription$: Subscription;
  algorithmForm: FormGroup;
  editMode = false;

  constructor(private inMemoryDataStoreService: InMemoryDataStoreService) { }

  ngOnInit(): void {
    /*
    this.algorithmForm = new FormGroup({
      nEstimators: new FormControl(),
      maxDepth: new FormControl(),
      minSamplesSplit: new FormControl(),
      minSamplesLeaf: new FormControl(),
      maxFeatures: new FormControl(),
      criterion: new FormControl()
    });
     */
    this.selectedAlgoSubscription$ = this.inMemoryDataStoreService.selectedAlgorithmIdx$.subscribe(
      (index: number) => {
        this.selectedDefaultAlgo = this.inMemoryDataStoreService.getDefaultAlgorithmById(index);
        console.log(this.selectedDefaultAlgo);
      }
    );
    this.initForm();
  }

  ngOnDestroy(): void {
    this.selectedAlgoSubscription$.unsubscribe();
  }

  private initForm() {
    let nEstimators = this.selectedDefaultAlgo.nEstimators;
    let maxDepth = this.selectedDefaultAlgo.maxDepth;
    let minSamplesSplit = this.selectedDefaultAlgo.minSamplesSplit;
    let minSamplesLeaf = this.selectedDefaultAlgo.minSamplesLeaf;
    let maxFeatures = this.selectedDefaultAlgo.maxFeatures;
    let criterion = this.selectedDefaultAlgo.criterion;
    console.log(nEstimators);

    this.algorithmForm = new FormGroup({
      nEstimators: new FormControl(nEstimators),
      maxDepth: new FormControl(maxDepth),
      minSamplesSplit: new FormControl(minSamplesSplit),
      minSamplesLeaf: new FormControl(minSamplesLeaf),
      maxFeatures: new FormControl(maxFeatures),
      criterion: new FormControl(criterion)
    });
    console.log(this.algorithmForm);
  }

}
