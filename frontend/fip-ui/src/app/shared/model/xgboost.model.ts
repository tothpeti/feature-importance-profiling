import {IAlgorithm} from './algo-interface.model';

export class XgboostModel implements IAlgorithm {
  readonly algoName: string = 'XGBoostClassifier';

  constructor(
    public eta: number = 0.3,
    public maxDepth: number = 6,
    public minChildWeight: number = 1,
    public gamma: number = 0,
    public subsample: number = 1,
    public colsampleByTree: number = 1,
    public alpha: number = 0

  ) {
  }

}
