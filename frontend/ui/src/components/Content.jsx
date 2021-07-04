import { Grid } from '@material-ui/core';
import RankingMethodSelection from './RankingMethodSelection';
import AlgorithmSelection from './AlgorithmSelection';

const Content = () => {
  return (
      <Grid container direction="column">
        <Grid item sm={3}>
          <RankingMethodSelection />
        </Grid>

        <Grid item sm={5}>
          <AlgorithmSelection />
        </Grid>

        <Grid item>
          <h1>Selected Algorithms</h1>
        </Grid>
      </Grid>
  );
}

export default Content
