import { connect } from 'react-redux';

import { setFilters } from '@/actions/filterActions';

import Sidebar from './component';

const mapStateToProps = state => ({
  colors: state.filters.list.colors,
  sizes: state.filters.list.sizes,
  tags: state.filters.list.tags
});

const mapDispatchToProps = dispatch => ({
  setFilters: filters => dispatch(setFilters(filters))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar);
