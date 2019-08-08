import { connect } from 'react-redux';

import HomePage from './component';

const mapStateToProps = state => ({
  filteredProducts: state.data.filteredProducts,
  isLoaded: state.data.isLoaded
});

export default connect(mapStateToProps)(HomePage);
