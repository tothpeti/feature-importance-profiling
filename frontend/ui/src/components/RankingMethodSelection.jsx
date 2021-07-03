import { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  formControl: {
    margin: theme.spacing(3),
  },
}));

const RankingMethodSelection = () => {
  const classes = useStyles();
  const [state, setState] = useState({
    average: true,
    weightedAverage: false,
    frequency: false,

  });

  const handleChange = (event) => {
    setState({...state, [event.target.name]: event.target.checked})
  };

  const {average, weightedAverage, frequency} = state;
  const error = [average, weightedAverage, frequency].filter((value) => value).length === 0;

  return (
      <div className={classes.root}>
        <FormControl required error={error} component="fieldset" className={classes.formControl}>
          <FormLabel component="legend">Select Ranking method: </FormLabel>
          <FormGroup>
            <FormControlLabel
                control={<Checkbox checked={average} onChange={handleChange} name="average" />}
                label="Average based"
            />
            <FormControlLabel
                control={<Checkbox checked={weightedAverage} onChange={handleChange} name="weightedAverage" />}
                label="Weighted Average based"
            />
            <FormControlLabel
                control={<Checkbox checked={frequency} onChange={handleChange} name="frequency" />}
                label="Frequency based"
            />

          </FormGroup>
          <FormHelperText>Select at least 1 method!</FormHelperText>
        </FormControl>
      </div>
  );
}

export default RankingMethodSelection
