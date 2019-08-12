export const filterByPrice = (products, { botPrice, topPrice }) => {
  return products.filter(product => product.price >= botPrice && product.price <= topPrice);
};

// const found = arr1.some(r => arr2.indexOf(r) >= 0)
export const filterByColors = (products, colors) => {
  if(!colors || !colors.length) return products;
  return products.filter(product => colors.some(color => product.color.indexOf(color) !== -1));
};

export const filterByTags = (products, tags) => {
  if(!tags || !tags.length) return products;
  return products.filter(product => tags.some(tag => product.tags.indexOf(tag) !== -1));
};

export const filterBySizes = (products, sizes) => {
  if(!sizes || !sizes.length) return products;
  return products.filter(product => sizes.some(size => product.size.indexOf(size) !== -1));
};

export const filter = (products, activeFilters) => {
  const filters = [
    {callback: filterByColors, key: 'color'},
    {callback: filterBySizes, key: 'size'},
    {callback: filterByTags, key: 'tags'},
  ]

  const filtered = filters.reduce((res, current) => current.callback(res, activeFilters[current.key]), products);

  return filtered;
};
