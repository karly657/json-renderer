import React from 'react';
import { Link } from 'react-router-dom';
import { HOME_PAGE_PATH, PRODUCTS_PAGE_PATH } from '@/constants';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    '&>*': {
      margin: theme.spacing(2),
      transition: 'all 0.5s ease',
      textDecoration: 'none',
      color: theme.palette.text.primary,
      fontWeight: 'bold'
    },
    '&>*:hover': {
      cursor: 'pointer',
      color: theme.palette.text.hover
    }
  }
}));

const Menu = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Link to={HOME_PAGE_PATH}>Home</Link>
      <Link to={PRODUCTS_PAGE_PATH}>Products</Link>
    </div>
  );
};

export default Menu;
