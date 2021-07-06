import {useState} from "react";
import {FormControl, InputLabel, MenuItem, Select, TextField} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 250,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const TreesForm = ({name}) => {
  const algoName = name
  const classes = useStyles()

  const [nEstimators, setNEstimators] = useState(100)
  const [maxDepth, setMaxDepth] = useState()
  const [minSamplesSplit, setMinSamplesSplit] = useState(2)
  const [minSamplesLeaf, setMinSamplesLeaf] = useState(1)
  const [maxFeatures, setMaxFeatures] = useState('auto')
  const [criterion, setCriterion] = useState('gini')

  console.log(algoName)

  return ([
    <FormControl className={classes.formControl}>
      <TextField
        id="nEstimatorsId"
        label="n_estimators"
        value={nEstimators}
        type="number"
        onChange={e => setNEstimators(e.target.value)}
      />
      <TextField
          id="maxDepthId"
          label="max_depth"
          value={maxDepth}
          type="number"
          onChange={e => setMaxDepth(e.target.value)}
      />
      <TextField
          id="minSamplesSplitId"
          label="min_samples_split"
          value={minSamplesSplit}
          type="number"
          onChange={e => setMinSamplesSplit(e.target.value)}
      />
      <TextField
          id="minSamplesLeafId"
          label="min_samples_leaf"
          value={minSamplesLeaf}
          type="number"
          onChange={e => setMinSamplesLeaf(e.target.value)}
      />
    </FormControl>,
    <FormControl className={classes.formControl}>
      <InputLabel id="maxFeaturesLabel">max_features</InputLabel>
      <Select
          labelId= "maxFeaturesLabel"
          id="maxFeaturesId"
          value={maxFeatures}
          onChange={e => setMaxFeatures(e.target.value)}
      >
        <MenuItem value="auto">auto</MenuItem>
        <MenuItem value="sqrt">sqrt</MenuItem>
        <MenuItem value="log2">log2</MenuItem>
      </Select>
    </FormControl>,
    <FormControl className={classes.formControl}>
      <InputLabel id="criterionLabel">criterion</InputLabel>
      <Select
          labelId= "criterionLabel"
          id="criterionId"
          value={criterion}
          onChange={e => setCriterion(e.target.value)}
      >
        <MenuItem value="gini">gini</MenuItem>
        <MenuItem value="entropy">entropy</MenuItem>
      </Select>
    </FormControl>
  ]);
}

export default TreesForm;
