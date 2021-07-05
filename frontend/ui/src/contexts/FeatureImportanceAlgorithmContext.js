import { createContext, useReducer } from "react";
import { featureImportanceAlgorithmReducer } from "../reducers/FeatureImportanceAlgorithmReducer";

export const FeatureImportanceAlgorithmContext = createContext();

const FeatureImportanceAlgorithmContextProvider = (props) => {
  const [fipAlgorithms, dispatch] = useReducer(featureImportanceAlgorithmReducer, []);

  return (
      <FeatureImportanceAlgorithmContext.Provider value={{fipAlgorithms, dispatch}}>
        { props.children }
      </FeatureImportanceAlgorithmContext.Provider>
  )
}

export default FeatureImportanceAlgorithmContextProvider;
