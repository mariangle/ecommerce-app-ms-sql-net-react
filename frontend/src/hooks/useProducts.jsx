import * as React from "react";

import { useLocation } from "react-router-dom";

import Products from "@/content/Products.json";

export default function useProducts(productId) {
  const location = useLocation();
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
  }, [productId, location.pathname]);

  const getProducts = () => {
    setLoading(true);
    setTimeout(() => {
      try {
        setProducts(Products);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }, 500);
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
