import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Search from '@/components/forms/Search';

const useStyles = makeStyles(theme => ({
  root: {
    borderBottom: `1px solid ${theme.palette.lightGrey}`,
    padding: theme.spacing(1)
  }
}));

const TopPanel = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container maxWidth="lg">
        <Grid container alignItems="center" justify="space-between">
          <Grid item>
            <Box color="text.secondary">Phones | info</Box>
          </Grid>
          <Grid item>
            <Search />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default TopPanel;
