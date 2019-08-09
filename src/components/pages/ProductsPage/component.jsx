import React from 'react';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Tiles from '@/components/blocks/Tiles';

const ProductsPage = ({ isLoaded, filteredProducts }) => {
  return (
    isLoaded && (
      <Container maxWidth="lg">
        <Grid container>
          <Grid item md={3}>
            Sidebar
          </Grid>
          <Grid item md={9}>
            <Tiles data={filteredProducts} />
          </Grid>
        </Grid>
      </Container>
    )
  );
};

export default ProductsPage;
