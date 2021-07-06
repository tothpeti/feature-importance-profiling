import {FormControl, Select, InputLabel, MenuItem} from '@material-ui/core';
import {useState} from "react";
import {makeStyles} from '@material-ui/core/styles';
import LinearSVCForm from "./forms/LinearSVCForm";
import MutualInfoForm from "./forms/MutualInfoForm";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 250,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const AlgorithmSelection = () => {
  const classes = useStyles();
  const [selectedAlgorithm, setSelectedAlgorithm] = useState('');
  const availableMLAlgorithms = [
    {id: 1, algorithmId: "linearSVC", fullName: "Linear SVC"},
    {id: 2, algorithmId: "mutualInfo", fullName: "Mutual Information"},
    {id: 3, algorithmId: "extraTreesClassifier", fullName: "ExtraTreesClassifier"},
    {id: 4, algorithmId: "randomForestClassifier", fullName: "RandomForestClassifier"},
    {id: 5, algorithmId: "xgboostClassifier", fullName: "XGBoostClassifier"}
  ]

  const handleChange = (event) => {
    setSelectedAlgorithm(event.target.value);
  }

  return (
      <FormControl className={classes.formControl}>
        <InputLabel id="selectAlgorithmLabel">Select an ML algorithm:</InputLabel>
        <Select
            labelId= "selectAlgorithmLabel"
            id="selectAlgorithm"
            value={selectedAlgorithm}
            onChange={handleChange}
        >
          {availableMLAlgorithms.map(algorithm => {
            return (<MenuItem id={algorithm.id} value={algorithm.algorithmId} > { algorithm.fullName } </MenuItem>)
          })}
        </Select>
        {selectedAlgorithm === 'linearSVC' ? (<LinearSVCForm />) : (<div/>)}
        {selectedAlgorithm === 'mutualInfo' ? (<MutualInfoForm />) : (<div/>)}
      </FormControl>

  );
};

export default AlgorithmSelection
