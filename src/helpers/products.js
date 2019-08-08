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
