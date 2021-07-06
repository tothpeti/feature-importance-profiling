import {makeStyles} from "@material-ui/core/styles";
import {FormControl, InputLabel, MenuItem, Select, TextField} from "@material-ui/core";
import {useState} from "react";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 250,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const LinearSVCForm = () => {
  const classes = useStyles()
  const [maxIter, setMaxIter] = useState(1000)
  const [c, setC] = useState(1.0)
  const [penalty, setPenalty] = useState("l1")
  const [tol, setTol] = useState(0.0001)

  const penalties = [
    {id: 1, name: 'l1'},
    {id: 2, name: 'l2'}
  ]

  return ([
     <FormControl className={classes.formControl}>
       <TextField
           id="maxIter"
           label="max_iter"
           value={maxIter}
           type="number"
           onChange={e => setMaxIter(e.target.value)}
       />
       <TextField
           id="c"
           label="C"
           value={c}
           type="number"
           onChange={e => setC(e.target.value)}
       />

       <TextField
           id="tolId"
           label="tol"
           value={tol}
           type="number"
           onChange={e => setTol(e.target.value)}
       />
    </FormControl>,
    <FormControl className={classes.formControl}>
      <InputLabel id="penaltyLabel">penalty</InputLabel>
      <Select
          labelId= "penaltyLabel"
          id="penalty"
          value={penalty}
          onChange={e => setPenalty(e.target.value)}
      >
        <MenuItem value="l1">l1</MenuItem>
        <MenuItem value="l2">l2</MenuItem>
      </Select>
    </FormControl>
  ]);
}

export default LinearSVCForm;
