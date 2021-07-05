import {createContext, useState} from "react";

export const AlgorithmDetailsContext = createContext(undefined);

const AlgorithmDetailsContextProvider = (props) => {

  const [algoDetails, setAlgoDetails] = useState([
    {id: 1, name: 'linearSVC', parameters: [
        {head: 'max_iter: int, default=1000', body: 'The maximum number of iterations to be run.' },
        {head: 'C: float, default=1.0' , body: 'Regularization parameter. The strength of the regularization is inversely proportional to C. Must be strictly positive.' },
        {head: 'penalty: {l1, l2}, default=l1}', body: 'Specifies the norm used in the penalization. The ‘l2’ penalty is the standard used in SVC. The ‘l1’ leads to coef_ vectors that are sparse.'},
        {head: 'tol: float, default=0.0001', body: 'Tolerance of stopping criteria.'}]},
    {id: 2, name: 'mutualInfo', parameters: [
        {head: 'There is no parameters to choose from!', body: ''}]},
    {id: 3, name: 'extraTreesClassifier', parameters: [
        {head: 'n_estimators: int, default=100', body: 'The number of trees in the forest.'},
        {head: 'max_depth: int, default=None', body: 'The maximum depth of the tree. If None, then nodes are expanded until all leaves are pure or until all leaves contain less than min_samples_split samples.'},
        {head: 'min_samples_split: int or float, default=2', body: 'The minimum number of samples required to split an internal node.'},
        {head: 'min_samples_leaf: int or float, default=1', body: 'The minimum number of samples required to be at a leaf node.'},
        {head: 'max_features: {auto, sqrt, log2}, default="auto"', body: 'The number of features to consider when looking for the best split'},
        {head: 'criterion: {gini, entropy}, default="gini"', body: 'The function to measure the quality of a split. Supported criteria are “gini” for the Gini impurity and “entropy” for the information gain.' }
      ]},
    {id: 4, name: 'randomForestClassifier', parameters: [
        {head: 'n_estimators: int, default=100', body: 'The number of trees in the forest.'},
        {head: 'max_depth: int, default=None', body: 'The maximum depth of the tree. If None, then nodes are expanded until all leaves are pure or until all leaves contain less than min_samples_split samples.'},
        {head: 'min_samples_split: int or float, default=2', body: 'The minimum number of samples required to split an internal node.'},
        {head: 'min_samples_leaf: int or float, default=1', body: 'The minimum number of samples required to be at a leaf node.'},
        {head: 'max_features: {auto, sqrt, log2}, default="auto"', body: 'The number of features to consider when looking for the best split'},
        {head: 'criterion: {gini, entropy}, default="gini"', body: 'The function to measure the quality of a split. Supported criteria are “gini” for the Gini impurity and “entropy” for the information gain.' }
      ]},
    {id: 5, name: 'xgboostClassifier', parameters: [
        {head: 'eta: float, default=0.3', body: 'Analogous to learning rate in GBM. Makes the model more robust by shrinking the weights on each step. Typical final values to be used: 0.01-0.2' },
        {head: 'max_depth: int, default=6', body: 'The maximum depth of a tree. Used to control over-fitting as higher depth will allow model to learn relations very specific to a particular sample. Typical values: 3-10'},
        {head: 'min_child_weight: int, default=1', body: 'Defines the minimum sum of weights of all observations required in a child. Used to control over-fitting.\n' +
              'Higher values prevent a model from learning relations which might be highly specific to the particular sample selected for a tree.\n' +
              'Too high values can lead to under-fitting.'},
        {head: 'gamma: int, default=0', body: 'Minimum loss reduction required to make a further partition on a leaf node of the tree. The larger gamma is, the more conservative the algorithm will be.'},
        {head: 'alpha: float, default=0', body: 'L1 regularization term on weights. Increasing this value will make model more conservative.'}
      ]}
  ])

  return (<AlgorithmDetailsContext.Provider value={{algoDetails}}>
    { props.children }
  </AlgorithmDetailsContext.Provider>)
}

export default AlgorithmDetailsContextProvider;
