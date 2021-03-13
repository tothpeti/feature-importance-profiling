import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';
import {IAlgorithm} from '../model/algo-interface.model';
import {RandomForestModel} from '../model/random-forest.model';
import {ExtraTreesModel} from '../model/extra-trees.model';
import {LinearSvcModel} from '../model/linear-svc.model';
import {XgboostModel} from '../model/xgboost.model';
import {MutualInformationModel} from '../model/mutual-information.model';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataStoreService {

  selectedAlgorithmIdx$: Subject<number> = new Subject<number>();
  initializedAlgoListChanged$: Subject<IAlgorithm[]> = new Subject<IAlgorithm[]>();

  private readonly algorithmList: string[] = [
    'RandomForestClassifier',
    'ExtraTreesClassifier',
    'LinearSVC',
    'XGBoostClassifier',
    'MutualInformation'
  ];

  defaultAlgoList: IAlgorithm[] = [
    new RandomForestModel(),
    new ExtraTreesModel(),
    new LinearSvcModel(),
    new XgboostModel(),
    new MutualInformationModel()
  ];

  initializedAlgoList: IAlgorithm[];

  constructor() {
    this.initializedAlgoList = [];
  }

  getAlgorithmList(): string[] {
    return this.algorithmList.slice();
  }

  getDefaultAlgorithmById(index: number): IAlgorithm {
    return this.defaultAlgoList[index];
  }

  addInitializedAlgorithm(newAlgo: IAlgorithm): void {
    this.initializedAlgoList.push(newAlgo);
    this.initializedAlgoListChanged$.next(this.initializedAlgoList.slice());
  }

  updateInitializedAlgorithm(index: number, newAlgo: IAlgorithm): void {
    this.initializedAlgoList[index] = newAlgo;
    this.initializedAlgoListChanged$.next(this.initializedAlgoList.slice());
  }

  deleteInitializedAlgorithm(index: number): void {
    this.initializedAlgoList.splice(index, 1);
    this.initializedAlgoListChanged$.next(this.initializedAlgoList.slice());
  }

}
