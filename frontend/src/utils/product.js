import { toKebabCase } from "@/utils/toKebabCase";

export const getProductPrice = (product) => {
  return product.price.default * (1 - (product.price.discount || 0));
};

export const getProductUrl = (product) => {
  return `/products/${toKebabCase(product.name)}`;
};
