import { connect } from 'react-redux';
import SortPanel from './component';
import { sortData } from '@/actions/filterActions';

const mapStateToProps = undefined;

const mapDispatchToProps = dispatch => ({
  sort: type => dispatch(sortData(type))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SortPanel);