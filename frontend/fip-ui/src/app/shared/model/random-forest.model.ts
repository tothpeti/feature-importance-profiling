import {IAlgorithm} from './algo-interface.model';

export class RandomForestModel implements IAlgorithm {
  readonly algoName: string = 'RandomForestClassifier';

  constructor(
    public nEstimators: number = 100,
    public maxDepth?: number,
    public minSamplesSplit: number = 2,
    public minSamplesLeaf: number = 1,
    public maxFeatures: string = 'auto',
    public criterion: string = 'gini',
  ) {
  }

}
