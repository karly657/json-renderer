import React from 'react';

import { Container, Grid } from '@material-ui/core';
import Tiles from '@/components/blocks/Tiles';
import Preloader from '@/components/blocks/Preloader';
import Sidebar from '@/components/blocks/Sidebar';
import SortPanel from '@/components/blocks/SortPanel';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    minHeight: '100vh'
  },
  description: {
    borderTop: `1px solid ${theme.palette.lightGrey}`,
    paddingTop: theme.spacing(2)
  }
}));

const ProductsPage = ({ isLoaded, filteredProducts }) => {
  const classes = useStyles();
  return isLoaded ? (
    <Container maxWidth="lg" className={classes.root}>
      <Grid container spacing={3}>
        <Grid item md={3}>
          <Sidebar />
        </Grid>
        <Grid item md={9}>
          <Grid container direction="column" spacing={3}>
            <Grid item>
              <SortPanel />
            </Grid>
            <Grid item>
              <Tiles data={filteredProducts} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  ) : (
    <Preloader />
  );
};

export default ProductsPage;
