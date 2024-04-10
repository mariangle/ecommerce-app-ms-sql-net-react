import * as React from "react";

import { useDispatch, useSelector } from "react-redux";

import { getProductPrice } from "@/utils/getProductPrice";
import {
  setMinPrice,
  setMaxPrice,
  setInitial,
} from "@/store/reducers/filter-store";

export default function useFilter() {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filter);

  const [unfilteredProducts, setUnfilteredProducts] = React.useState([]);
  const [filteredProducts, setFilteredProducts] = React.useState([]);

  const initialize = ({ products }) => {
    let filteredProducts = products;

    setUnfilteredProducts(filteredProducts);

    const prices = products.map((product) => getProductPrice(product));

    const minPrice = prices.length > 0 ? Math.min(...prices) : null;
    const maxPrice = prices.length > 0 ? Math.max(...prices) : null;

    const sizes = products.flatMap((product) =>
      product.sizes.map((size) => size.size),
    );

    const uniqueSizes = [...new Set(sizes)];

    dispatch(setMinPrice(minPrice));
    dispatch(setMaxPrice(maxPrice));
    dispatch(
      setInitial({
        price: { min: minPrice, max: maxPrice },
        sizes: uniqueSizes,
      }),
    );
  };

  const getFilteredProducts = React.useCallback(
    (products) => {
      let filtered = products.filter((product) => {
        if (
          filter.price.min !== 0 &&
          getProductPrice(product) < filter.price.min
        )
          return false;
        if (
          filter.price.max !== 0 &&
          getProductPrice(product) > filter.price.max
        )
          return false;

        if (filter.sizes.length > 0) {
          if (!product.sizes.some((size) => filter.sizes.includes(size.size)))
            return false;
        }
        return true;
      });

      filtered.sort((a, b) => {
        if (filter.sort === "asc") {
          return getProductPrice(a) - getProductPrice(b);
        } else {
          return getProductPrice(b) - getProductPrice(a);
        }
      });
      return filtered;
    },
    [filter],
  );

  React.useEffect(() => {
    const filteredProducts = getFilteredProducts(unfilteredProducts);
    setFilteredProducts(filteredProducts);
  }, [filter, unfilteredProducts, getFilteredProducts]);

  return {
    initialize,
    filteredProducts,
    filter,
  };
}
