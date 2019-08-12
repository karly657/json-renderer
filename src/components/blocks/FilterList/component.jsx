import React from 'react';
import PropTypes from 'prop-types';

import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Checkbox,
  Collapse
} from '@material-ui/core';
import { ExpandLess, ExpandMore } from '@material-ui/icons';

class FilterList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      checked: [],
      open: false
    };
  }

  handleToggle = value => () => {
    const { name, setFilters } = this.props;
    const { checked } = this.state;

    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    this.setState(
      () => ({ checked: newChecked }),
      () => setFilters({ type: name, value: newChecked })
    );
  };

  handleOpenList = () => {
    this.setState(state => ({ open: !state.open }));
  };

  render() {
    const { name, values } = this.props;
    const { checked, open } = this.state;
    return (
      <>
        <ListItem button onClick={this.handleOpenList}>
          <ListItemText primary={name} />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <List>
          {values.map(value => {
            const labelId = `checkbox-list-label-${value}`;
            return (
              <Collapse in={open} timeout="auto" unmountOnExit key={labelId}>
                <List component="div" disablePadding>
                  <ListItem
                    key={value}
                    role={undefined}
                    dense
                    button
                    onClick={this.handleToggle(value)}
                  >
                    <ListItemIcon>
                      <Checkbox
                        edge="start"
                        checked={checked.indexOf(value) !== -1}
                        tabIndex={-1}
                        disableRipple
                        inputProps={{ 'aria-labelledby': labelId }}
                      />
                    </ListItemIcon>
                    <ListItemText id={labelId} primary={value} />
                  </ListItem>
                </List>
              </Collapse>
            );
          })}
        </List>
      </>
    );
  }
}

FilterList.propTypes = {
  name: PropTypes.string,
  values: PropTypes.arrayOf(PropTypes.string),
  setFilters: PropTypes.func
};

FilterList.defaultProps = {
  name: '',
  values: [],
  setFilters: () => {}
};

export default FilterList;
