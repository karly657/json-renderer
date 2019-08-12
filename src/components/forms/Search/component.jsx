import React from 'react';
import { Formik } from 'formik';
import Input from '@material-ui/core/Input';
import IconButton from '@material-ui/core/IconButton';
import { Magnify } from 'mdi-material-ui';
import { SEARCH_PAGE_PATH } from '@/constants';
import { withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import { compose } from 'redux';

const styles = theme => ({
  button: {
    color: theme.palette.grey,
    '&:hover': {
      color: theme.palette.rose
    }
  }
});

class Search extends React.Component {
  handleSearch = ({ search }) => {
    const { history } = this.props;
    history.push(SEARCH_PAGE_PATH.replace(':request', search));
  };

  render() {
    const { classes } = this.props;

    return (
      <Formik initialValues={{ search: '' }} onSubmit={this.handleSearch}>
        {({ values, isSubmitting, handleSubmit, handleChange }) => (
          <form onSubmit={handleSubmit}>
            <Input
              name="search"
              placeholder="Search..."
              onChange={handleChange}
              value={values.search}
            />
            <IconButton
              type="submit"
              color="primary"
              className={classes.button}
            >
              <Magnify />
            </IconButton>
          </form>
        )}
      </Formik>
    );
  }
}

export default compose(
  withStyles(styles),
  withRouter
)(Search);
