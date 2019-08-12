import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, Box } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';

import ProductGallery from '@/components/blocks/ProductGallery';

const useStyles = makeStyles(theme => ({
  root: {},
  description: {
    borderTop: `1px solid ${theme.palette.lightGrey}`,
    paddingTop: theme.spacing(2)
  }
}));

const Productpage = ({
  products,
  match: {
    params: { productID }
  }
}) => {
  const classes = useStyles();

  // console.log(props.match.params.productID);
  const info = products.find(prod => prod._id.$oid === productID);

  // TODO sizes, colors, gallery
  return (
    <Container maxWidth="lg">
      {info && (
        <Grid container spacing={5}>
          <Grid item md={5} sm={12}>
            <ProductGallery images={info.images} />
          </Grid>
          <Grid item md={7} sm={12}>
            <Box>{`Tags: ${info.tags}`}</Box>
            <Box mt={1}>
              <Rating value={info.rating} readOnly />
            </Box>
            <Box component="h1" fontWeight="fontWeightLight">
              {info.title}
            </Box>
            <Box component="h2" fontWeight="fontWeightBold">{`${
              info.price
            }$`}</Box>
            <Box className={classes.description}>{info.description}</Box>
          </Grid>
        </Grid>
      )}
    </Container>
  );
};

export default Productpage;
