import React from 'react';
import PropTypes from 'prop-types';
import { Checkbox, FormControl, FormControlLabel, Typography, Select, MenuItem } from '@material-ui/core';
import FilterList from '@/components/blocks/FilterList';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      lowPrice: '',
      topPrice: '',
      color: [],
      size: [],
      tags: []
    };
  }

  render() {
    const { colors, sizes, tags } = this.props;
    return (
      <>
        <FilterList name="color" values={colors} />
        <FilterList name="size" values={sizes} />
        <FilterList name="tags" values={tags} />
      </>
    );
  }
}

Sidebar.propTypes = {
  colors: PropTypes.arrayOf(PropTypes.string),
  sizes: PropTypes.arrayOf(PropTypes.string),
  tags: PropTypes.arrayOf(PropTypes.string)
};

Sidebar.defaultProps = {
  colors: [],
  sizes: [],
  tags: []
};

export default Sidebar;
