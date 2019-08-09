import React from 'react';

import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import { Twitter, Instagram, Facebook, Google } from 'mdi-material-ui'

import { HOME_PAGE_PATH, PRODUCTS_PAGE_PATH } from '@/constants';

const useStyles = makeStyles(theme => ({
  root: {},
  logo: {
    margin: 0
  },
  link: {},
  icon: {}
}));

const Header = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container maxWidth="lg">
        <Grid container justify="space-between" alignItems="center">
          <Grid item>
            <Box
              letterSpacing={6}
              m={1}
              fontSize="h4.fontSize"
              fontWeight="fontWeightBold"
              className={classes.logo}
            >
              JSON
            </Box>
            <Box
              letterSpacing={1}
              m={1}
              fontSize="h5.fontSize"
              className={classes.logo}
            >
              Renderer
            </Box>
          </Grid>
          {/* Menu */}
          <Grid item>
            <Link to={HOME_PAGE_PATH}>Home</Link>
            <Link to={PRODUCTS_PAGE_PATH}>Products</Link>
          </Grid>
          {/* Socials */}
          <Grid item>
            <Facebook />
            <Google />
            <Instagram />
            <Twitter />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Header;
