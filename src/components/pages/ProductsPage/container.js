import { connect } from 'react-redux';

import ProductsPage from './component';

const mapStateToProps = state => ({
  filteredProducts: state.data.filteredProducts,
  isLoaded: state.data.isLoaded
});

export default connect(mapStateToProps)(ProductsPage);
