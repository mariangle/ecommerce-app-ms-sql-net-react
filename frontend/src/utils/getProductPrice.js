export function getProductPrice(product) {
  return product.price.default * (1 - (product.price.discount || 0));
}
