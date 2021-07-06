import {Grid, hexToRgb} from '@material-ui/core';
import RankingMethodSelection from './RankingMethodSelection';
import AlgorithmSelection from './AlgorithmSelection';
import {useContext} from "react";
import {AlgorithmDetailsContext} from "../contexts/AlgorithmDetails";

const Content = () => {
  const { algoDetails } = useContext(AlgorithmDetailsContext);

  return (
      <Grid container direction="column">

        {
        /*
        {algoDetails.map(algo => {
          return (
              <div key={algo.id}>
                {algo.parameters.map(elem => {
                  return([
                      <p>{elem.head}</p>,
                      <p>{elem.body}</p>
                  ])
                })}
              </div>
          )
        })}
        */
        }

        <Grid item>
          <RankingMethodSelection />
        </Grid>

        <Grid item>
          <AlgorithmSelection />
        </Grid>

        <Grid item>
          <h1>Selected Algorithms</h1>
        </Grid>
      </Grid>
  );
}

export default Content
