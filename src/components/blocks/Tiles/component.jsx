import React from 'react';
import Tile from '@/components/blocks/Tile';
import Grid from '@material-ui/core/Grid';

const Tiles = ({ data }) => {
  const tiles = data.map(element => (
    <Grid item md={4} sm={6} key={`tile-${element._id.$oid}`}>
      <Tile product={element} />
    </Grid>
  ));
  return (
    <Grid container spacing={3}>
      {tiles}
    </Grid>
  );
};

export default Tiles;
