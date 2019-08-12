import React from 'react';
import { Grid, Box, Select } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(1)
  }
}));

class SortPanel extends React.Component {
  
  handleChange = event => {
    const { sort } = this.props;
    sort(event.target.value);
  };

  render() {
    const { sort } = this.props;

    return (
      <div>
        <Select native onChange={this.handleChange}>
          <option value="" />
          <option value="priceLowToHigh">by price(low to high)</option>
          <option value="priceHighToLow">by price(higt to low)</option>
          <option value="rating">by ratin</option>
        </Select>
      </div>
    );
  }
}

export default SortPanel;
