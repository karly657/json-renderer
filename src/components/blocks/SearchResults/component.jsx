import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, Box } from '@material-ui/core';
import Tile from '@/components/blocks/Tile';

const useStyles = makeStyles(theme => ({
  root: {
    minHeight: '100vh'
  },
  title: {
    borderBottom: `1px solid ${theme.palette.lightGrey}`,
    paddingBottom: theme.spacing(2)
  }
}));

const SearchResults = ({ results, request }) => {
  const classes = useStyles();

  const tiles = results.map(element => (
    <Grid item md={3} sm={6} key={`tile-${element._id.$oid}`}>
      <Tile product={element} />
    </Grid>
  ));
  return (
    <Container maxWidth="lg" className={classes.root}>
      <Box
        component="h2"
        className={classes.title}
      >{`Search results for: ${request}`}</Box>
      <Grid container spacing={3}>
        {results.length ? (
          tiles
        ) : (
          <Grid item xs={12}>
            <Box component="h3">Nothing found</Box>
          </Grid>
        )}
      </Grid>
    </Container>
  );
};

SearchResults.defaultProps = {
  data: []
};

export default SearchResults;
