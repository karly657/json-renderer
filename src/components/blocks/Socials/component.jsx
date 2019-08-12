import React from 'react';
import { Twitter, Instagram, Facebook, Google } from 'mdi-material-ui';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    '&>*': {
      margin: theme.spacing(1),
      transition: 'all 0.5s ease'
    },
    '&>*:hover': {
      cursor: 'pointer',
      color: theme.palette.blue
    }
  }
}));

const Socials = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Facebook />
      <Google />
      <Instagram />
      <Twitter />
    </div>
  );
};

export default Socials;
