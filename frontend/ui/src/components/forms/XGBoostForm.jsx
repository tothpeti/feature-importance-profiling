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

const XGBoostForm = () => {
  const classes = useStyles()

  const [eta, setEta] = useState(0.3)
  const [maxDepth, setMaxDepth] = useState(6)
  const [minChildWeight, setMinChildWeight] = useState(1)
  const [gamma, setGamma] = useState(0)
  const [alpha, setAlpha] = useState(0)

  return (
      <FormControl className={classes.formControl}>
        <TextField
          id="etaId"
          label="eta"
          value={eta}
          type="number"
          onChange={e => setEta(e.target.value)}
        />
        <TextField
            id="maxDepthId"
            label="max_depth"
            value={maxDepth}
            type="number"
            onChange={e => setMaxDepth(e.target.value)}
        />
        <TextField
            id="minChildWeightId"
            label="min_child_weight"
            value={minChildWeight}
            type="number"
            onChange={e => setMinChildWeight(e.target.value)}
        />
        <TextField
            id="gammaId"
            label="gamma"
            value={gamma}
            type="number"
            onChange={e => setGamma(e.target.value)}
        />
        <TextField
            id="alphaId"
            label="alpha"
            value={alpha}
            type="number"
            onChange={e => setAlpha(e.target.value)}
        />
      </FormControl>
  );
}

export default XGBoostForm
