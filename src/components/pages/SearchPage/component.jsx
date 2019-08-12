import React from 'react';
import { findProducts } from '@/helpers/products';
import SearchResults from '@/components/blocks/SearchResults';

class SearchPage extends React.Component {
  searchProducts = () => {
    const {
      products,
      match: {
        params: { request }
      }
    } = this.props;

    return findProducts(products, request);
  };

  render() {
    const {
      match: {
        params: { request }
      }
    } = this.props;
    return <SearchResults results={this.searchProducts()} request={request} />;
  }
}

export default SearchPage;
