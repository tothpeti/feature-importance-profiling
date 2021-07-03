import { Grid } from '@material-ui/core';
import RankingMethodSelection from './RankingMethodSelection';

const Content = () => {
  return (
      <Grid container direction="column">
        <Grid item>
          <RankingMethodSelection />
        </Grid>

        <Grid item>
          <h1>Algorithms</h1>
        </Grid>

        <Grid item>
          <h1>Selected Algorithms</h1>
        </Grid>
      </Grid>
  );
}

export default Content
