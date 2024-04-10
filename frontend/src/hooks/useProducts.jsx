import * as React from "react";

import { useLocation, useParams } from "react-router-dom";

import Products from "@/content/Products.json";

import { brands } from "@/constants/navLinks";
import { toKebabCase } from "@/utils/toKebabCase";

export default function useProducts(productId) {
  const location = useLocation();
  const params = useParams();

  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [product, setProduct] = React.useState(null);
  const [products, setProducts] = React.useState([]);

  const getProduct = (productId) => {
    setLoading(true);
    setTimeout(() => {
      try {
        const product = Products.find((product) => product.id === productId);
        setProduct(product);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }, 300);
  };

  React.useEffect(() => {
    productId ? getProduct(productId) : getProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productId, location.pathname]);

  const getProducts = () => {
    setLoading(true);
    setTimeout(() => {
      let products = Products;

      if (params.brand) {
        products = products.filter(
          (product) => toKebabCase(product.brand) === params.brand,
        );
      }

      if (params.sale) {
        products = products.filter((product) => product.price.discount !== 0);
      }

      try {
        setProducts(products);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }, 200);
  };

  const returnProducts = () => Products;

  return {
    products,
    product,
    loading,
    error,
    returnProducts,
  };
}
