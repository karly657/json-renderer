import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Socials from '@/components/blocks/Socials';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor:'#000',
    marginTop: theme.spacing(3),
    color: '#fff',
  },
  top: {
    borderBottom: `1px solid ${theme.palette.grey}`,
    padding: theme.spacing(3)
  },
  bot: {}
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.top}>
        <Container maxWidth="lg">
          <Grid container>
            <Grid item>Menu</Grid>
          </Grid>
        </Container>
      </div>
      <div className={classes.bot}>
        <Container maxWidth="lg">
          <Grid container justify="space-between"alignItems="center">
            <Grid item>Lorem ipsum dolor sit amet</Grid>
            <Grid item>
              <Socials />
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  );
};

export default Footer;
