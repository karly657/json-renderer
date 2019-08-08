import React from 'react';

const HomePage = ({filteredProducts, isLoaded}) => {
  return (
    isLoaded && (
      <div>Home page</div>
    )
  );
}

export default HomePage;
