import { Injectable } from '@angular/core';
import {IAlgoParameterModel} from '../../shared/model/algo-parameter.model';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlgoInitService {

  selectedAlgorithm: Subject<number> = new Subject<number>();

  private readonly algorithmList: string[] = [
    'RandomForestClassifier',
    'ExtraTreesClassifier',
    'LinearSVC',
    'XGBoostClassifier',
    'MutualInformation'
  ];

  initializedAlgoList: IAlgoParameterModel[] = [
    { algoName: 'RandomForestClassifier',
      parameters: {
        nEstimators: 110,
        criterion: 'gini',
        maxDepth: 2,
        minSamplesSplit: 2,
        minSamplesLeaf: 1,
        maxFeatures: 'auto'
      }
    },
    {
      algoName: 'ExtraTreesClassifier',
      parameters: {
        nEstimators: 100,
        criterion: 'gini',
        maxDepth: 1,
        minSamplesSplit: 2,
        minSamplesLeaf: 1,
        maxFeatures: 'sqrt'
      }
    },
    {
      algoName: 'LinearSVC',
      parameters: {
        penalty: 'l1',
        tol: 0.0001,
        cPenalty: 1.0
      }
    },
    {
      algoName: 'XGBoostClassifier',
      parameters: {
        eta: 0.3,
        minChildWeight: 1,
        maxDepth: 6,
        gamma: 0,
        subsample: 1,
        colsampleByTree: 0.5,
        alpha: 0
      }
    },
    {
      algoName: 'MutualInformation'
    }
  ];

  constructor() { }

  getAlgorithmList(): string[] {
    return this.algorithmList.slice();
  }

  getAlgorithmById(index: number): IAlgoParameterModel {
    return this.initializedAlgoList[index];
  }

  updateAlgorithm(index: number, updatedAlgo: IAlgoParameterModel): void {
    this.initializedAlgoList[index] = updatedAlgo;
  }

  deleteAlgorithm(index: number): void {
    this.initializedAlgoList.splice(index, 1);
  }
}
