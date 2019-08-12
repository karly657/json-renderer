import { connect } from 'react-redux';
import SearchPage from './component';

const mapStateToProps = state => ({
  products: state.data.products
});

export default connect(mapStateToProps)(SearchPage);
