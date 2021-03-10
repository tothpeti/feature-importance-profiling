import { Injectable } from '@angular/core';
import {IAlgorithm} from '../../shared/model/algo-interface.model';
import {Subject} from 'rxjs';
import {RandomForestModel} from '../../shared/model/random-forest.model';
import {MutualInformationModel} from '../../shared/model/mutual-information.model';
import {ExtraTreesModel} from '../../shared/model/extra-trees.model';
import {LinearSvcModel} from '../../shared/model/linear-svc.model';
import {XgboostModel} from '../../shared/model/xgboost.model';

@Injectable({
  providedIn: 'root'
})
export class AlgoInitService {

  selectedAlgorithmIdx$: Subject<number> = new Subject<number>();

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

  initializedAlgoList: IAlgorithm[] = [];

  constructor() { }

  getAlgorithmList(): string[] {
    return this.algorithmList.slice();
  }

  getAlgorithmById(index: number): IAlgorithm {
    return this.defaultAlgoList[index];
  }

  updateAlgorithm(index: number, updatedAlgo: IAlgorithm): void {
    this.defaultAlgoList[index] = updatedAlgo;
  }

  deleteAlgorithm(index: number): void {
    this.defaultAlgoList.splice(index, 1);
  }
}
