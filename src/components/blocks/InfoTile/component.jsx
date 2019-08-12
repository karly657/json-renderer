import React from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.tan,
    padding: theme.spacing(1),
    textAlign: 'center'
  },
  title: {
    textTransform: 'uppercase'
  }
}));

const InfoTile = ({ title, descr }) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Box fontWeight="fontWeightBold" className={classes.title}>{title}</Box>
      <Box>{descr}</Box>
    </Box>
  );
};

export default InfoTile;
