/* eslint-disable import/prefer-default-export */
export const mapProducts = productsArr => {
  const colors = new Set();
  const sizes = new Set();
  const tags = new Set();

  productsArr.forEach(product => {
    product.color.forEach(color => colors.add(color));
    product.size.forEach(size => sizes.add(size));
    product.tags.forEach(tag => tags.add(tag));
  });

  return {
    colors: Array.from(colors),
    sizes: Array.from(sizes),
    tags: Array.from(tags)
  };
};

export const findProducts = (products, request) => {
  const res = products.filter(product => {
    const titles = product.title.toLowerCase().indexOf(request.toLowerCase()) !== -1;
    const tags = product.tags.map(tag => tag.toLowerCase()).indexOf(request.toLowerCase()) !== -1;
    const colors = product.color.map(color => color.toLowerCase()).indexOf(request.toLowerCase()) !== -1;
    const description = product.description.toLowerCase().indexOf(request.toLowerCase()) !== -1;

    return titles || tags || colors || description;
  });

  return res;
};
