import React, { useState } from 'react';
import ReactImageMagnify from 'react-image-magnify';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  current: {},
  items: {},
  placeholder: {}
}));

// TODO handle no images with image placeholder
const ProductGallery = ({ images }) => {
  const classes = useStyles();
  const [currentImage, setCurrentImage] = useState(images[0]);

  const items = images.map(img => (
    <div onClick={() => setCurrentImage(img)} key={img}>
      <img src={img} alt={`img-${img}`} />
    </div>
  ));

  return (
    <>
      <div className={classes.current}>
        <ReactImageMagnify
          {...{
            smallImage: {
              alt: `img-${currentImage}`,
              isFluidWidth: true,
              src: currentImage
            },
            largeImage: {
              src: currentImage,
              width: 1200,
              height: 1800
            }
          }}
        />
      </div>
      <div className={classes.items}>{items}</div>
    </>
  );
};

export default ProductGallery;
