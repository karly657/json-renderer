import React from 'react';

import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Container, Box } from '@material-ui/core';
import Socials from '@/components/blocks/Socials';
import Menu from '@/components/blocks/Menu';

import { HOME_PAGE_PATH } from '@/constants';

const useStyles = makeStyles(theme => ({
  root: {
    textTransform: 'uppercase'
  },
  logo: {
    margin: 0,
    textAlign: 'center'
  },
  link: {
    textDecoration: 'none',
    color: theme.palette.grey
  },
  icon: {}
}));

const Header = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container maxWidth="lg">
        <Grid container justify="space-between" alignItems="center">
          <Grid item>
            <Link to={HOME_PAGE_PATH} className={classes.link}>
              <Box
                letterSpacing={10}
                m={1}
                fontSize="h4.fontSize"
                fontWeight="fontWeightBold"
                className={classes.logo}
              >
                JSON
              </Box>
              <Box m={1} fontSize="h5.fontSize" className={classes.logo}>
                Renderer
              </Box>
            </Link>
          </Grid>
          {/* Menu */}
          <Grid item>
            <Menu />
          </Grid>
          {/* Socials */}
          <Grid item>
            <Socials />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Header;
