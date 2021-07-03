import {AppBar, Grid, Toolbar, Typography} from "@material-ui/core";

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Grid item xs={0} sm={1} />
        <Typography> <h3>Feature Importance Profiler</h3> </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
