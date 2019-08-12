import React from 'react';
import { Container, Grid, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import InfoTile from '@/components/blocks/InfoTile';
// import Tiles from '@/components/blocks/Tiles';
import Preloader from '@/components/blocks/Preloader';

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

import sliderImage from '@/assets/slider1.jpg';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  carouselBg: {
    background:
      'linear-gradient(90deg, rgba(251, 251, 253, 1) 0%, rgb(244, 244, 244, 1) 100%);'
  },
  customCarousel: {
    '& selected': {
      color: 'red'
    }
  },
  carouselText: {
    position: 'absolute',
    zIndex: 2,
    top: '30%',
    left: '10%',
    fontWeight: 'bold',
    fontSize: '3.5vw',
    textTransform: 'uppercase',
    textAlign: 'left',
    '&>*': {
      margin: theme.spacing(1)
    }
  },
  '@keyframes fadeIn': {
    from: { opacity: 0 },
    to: { opacity: 1 }
  }
}));

const HomePage = ({ filteredProducts, isLoaded }) => {
  const classes = useStyles();
  return isLoaded ? (
    <>
      <Box className={classes.carouselBg} mb={3}>
        <Container maxWidth="lg">
          <Grid container>
            <Grid item>
              <Carousel
                showThumbs={false}
                showStatus={false}
                interval={4000}
                transitionTime={700}
                emulateTouch
                autoPlay
                infiniteLoop
                className={classes.customCarousel}
              >
                <div>
                  <div className={classes.carouselText}>
                    <Box component="h5">Title</Box>
                    <Box component="h6">Subtitle</Box>
                  </div>
                  <img src={sliderImage} />
                </div>
                <div>
                  <div className={classes.carouselText}>
                    <Box component="h5">Title</Box>
                    <Box component="h6">Subtitle</Box>
                  </div>
                  <img src={sliderImage} />
                </div>
              </Carousel>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Container maxWidth="lg" className={classes.root}>
        <Grid container spacing={3}>
          <Grid item sm={4}>
            <InfoTile
              title="Lorem ipsum dolor sit amet"
              descr="consectetur adipiscin"
            />
          </Grid>
          <Grid item sm={4}>
            <InfoTile
              title="Lorem ipsum dolor sit amet"
              descr="consectetur adipiscin"
            />
          </Grid>
          <Grid item sm={4}>
            <InfoTile
              title="Lorem ipsum dolor sit amet"
              descr="consectetur adipiscin"
            />
          </Grid>
        </Grid>
      </Container>
      {/* <Container maxWidth="lg">
        <Tiles data={getMostPopular()} />
      </Container> */}
    </>
  ) : (
    <Preloader />
  );
};

export default HomePage;
