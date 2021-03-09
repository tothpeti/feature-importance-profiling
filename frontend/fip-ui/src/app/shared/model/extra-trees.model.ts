import {IAlgorithm} from './algo-interface.model';

export class ExtraTreesModel implements IAlgorithm {
  readonly algoName: string = 'ExtraTreesClassifier';

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
