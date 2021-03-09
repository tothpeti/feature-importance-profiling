export interface IAlgorithm {
  algoName: string; // name of the chosen algorithm

  nEstimators?: number; // the number of trees in the forest
  maxDepth?: number; // the maximum depth of the tree
  minSamplesSplit?: number; // the minimum number of samples required to split an internal node
  minSamplesLeaf?: number; // the minimum number of samples required to be at a leaf node
  maxFeatures?: string; // the number of features to consider when looking for the best split
  criterion?: string; // the function to measure the quality of a split (gini or entropy)

  cPenalty?: number; // regularization parameter
  penalty?: string; // specifies the norm used in the penalization (l1 or l2)
  tol?: number; // tolerance for stopping criteria
  maxIter?: number; // the maximum number of iterations to be run

  eta?: number; // GBM's learning rate
  minChildWeight?: number; // defines the minimum sum of weights of all observations required in a child
  gamma?: number; // specifies the minimum loss reduction required to make a split
  subsample?: number; // denotes the fraction of observations to be randomly samples for each tree
  colsampleByTree?: number; // denotes the fraction of columns to be randomly samples for each tree.
  alpha?: number; // L1 regularization term on weight (analogous to Lasso regression)
}
