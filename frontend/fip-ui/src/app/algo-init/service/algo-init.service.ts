import { Injectable } from '@angular/core';
import {IAlgoParameterModel} from '../../shared/model/algo-parameter.model';

@Injectable({
  providedIn: 'root'
})
export class AlgoInitService {

  readonly algorithmList: string[] = [
    'randomForest',
    'extraTrees',
    'linearSVC',
    'xgb',
    'mutualInfo'
  ];

  initializedAlgoList: IAlgoParameterModel[] = [
    {algoName: 'randomForest'}
  ];

  constructor() { }

  getAlgorithmList(): string[] {
    return this.algorithmList.slice();
  }
}
