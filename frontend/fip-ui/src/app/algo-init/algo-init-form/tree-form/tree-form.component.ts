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
    this.selectedAlgoSubscription$.unsubscribe();
  }

  private initForm() {
    let nEstimators = this.selectedDefaultAlgorithm.nEstimators;
    let maxDepth = this.selectedDefaultAlgorithm.maxDepth;
    let minSamplesSplit = this.selectedDefaultAlgorithm.minSamplesSplit;
    let minSamplesLeaf = this.selectedDefaultAlgorithm.minSamplesLeaf;
    let maxFeatures = this.selectedDefaultAlgorithm.maxFeatures;
    let criterion = this.selectedDefaultAlgorithm.criterion;
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
