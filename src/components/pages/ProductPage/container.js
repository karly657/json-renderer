import { connect } from 'react-redux';

import ProductPage from './component';

const mapStateToProps = state => ({
  products: state.data.products
});

export default connect(mapStateToProps)(ProductPage);
