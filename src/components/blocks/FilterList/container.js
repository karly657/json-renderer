import { connect } from 'react-redux';

import Filterlist from './component';
import { filterData } from '@/actions/filterActions';

const mapStateToProps = undefined;

const mapDispatchToProps = dispatch => ({
  setFilters: filters => dispatch(filterData(filters))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Filterlist);
