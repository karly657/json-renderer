import React from 'react';

import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(1),
    textTransform: 'uppercase',
    transition: 'all 0.5s ease',
    background: 'white',
    textDecoration: 'none',
    '&:hover': {
      boxShadow: `0px 1px 13px 5px ${theme.palette.lightBlue}`
    }
  },
  image: {
    maxWidth: '100%'
  },
  link: {
    textDecoration: 'none',
    color: theme.palette.blue
  },
  description: {
    paddingTop: `${theme.spacing(2)}`
  }
}));

const Tile = ({ product: { id, images, title, price, tags, rating } }) => {
  const classes = useStyles();

  return (
    <Link to="/" className={classes.link}>
      <div className={classes.root}>
        <img src={images[0]} className={classes.image} />
        <div classname={classes.description}>
          <Box fontSize={12}>{tags}</Box>
          <Box color="text.primary">{title}</Box>
          <Box
            color="text.primary"
            fontWeight="fontWeightBold"
          >{`${price}$`}</Box>
          <Box>
            <Rating value={rating} readOnly />
          </Box>
        </div>
      </div>
    </Link>
  );
};

export default Tile;
