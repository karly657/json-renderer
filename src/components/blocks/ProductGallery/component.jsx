import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const useStyles = makeStyles(theme => ({
  root: {
    '&>thumbs': {
      paddingLeft: theme.spacing(0)
    }
  },
  image: {
    width: '100%'
  }
}));

const ProductGallery = ({ images }) => {
  const classes = useStyles();
  const handleOnDragStart = e => e.preventDefault();
  const items = images.map(image => (
    <img
      key={image}
      src={image}
      onDragStart={handleOnDragStart}
      className={classes.image}
      alt={image}
    />
  ));
  return (
    <Carousel
      showStatus={false}
      emulateTouch
      infiniteLoop
      showIndicators={false}
      className={classes.root}
    >
      {items}
    </Carousel>
  );
};

export default ProductGallery;
