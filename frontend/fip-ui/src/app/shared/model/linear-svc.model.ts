import {IAlgorithm} from './algo-interface.model';

export class LinearSvcModel implements IAlgorithm {
  readonly algoName: string = 'LinearSVC';

  constructor(
    public cPenalty: number = 1.0,
    public penalty: string = 'l1',
    public tol: number = 0.0001,
    public maxIter: number = 1000
  ) {
  }

}
