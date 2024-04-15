import * as React from "react";

import { useLocation, useParams } from "react-router-dom";
import { toKebabCase } from "@/utils/toKebabCase";

import productsJSON from "@/constants/Products.json";

export default function useProducts(slug) {
  const location = useLocation();
  const params = useParams();

  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [product, setProduct] = React.useState(null);
  const [products, setProducts] = React.useState([]);

  const getProduct = (slug) => {
    setLoading(true);
    setTimeout(() => {
      try {
        const product = products.find(
          (product) => toKebabCase(product.name) === slug,
        );
        setProduct(product);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }, 300);
  };

  React.useEffect(() => {
    slug ? getProduct(slug) : getProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slug, location.pathname]);

  const getProducts = () => {
    setLoading(true);
    setTimeout(() => {
      let products = productsJSON;
      const isSalesPage = location.pathname.includes("/sale");

      if (params.brand) {
        products = products.filter(
          (product) => toKebabCase(product.brand) === params.brand,
        );
      }

      if (isSalesPage) {
        console.log("SALE");
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

  return {
    products,
    product,
    loading,
    error,
  };
}
