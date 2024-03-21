import * as React from "react";

import { useDispatch, useSelector } from "react-redux";
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
    setUnfilteredProducts(products);

    const prices = products.map((product) => product.price);
    const minPrice = Math.min(...prices);
    const maxPrice = Math.max(...prices);

    dispatch(setMinPrice(minPrice));
    dispatch(setMaxPrice(maxPrice));
    dispatch(setInitial({ price: { min: minPrice, max: maxPrice } }));
  };

  const getFilteredProducts = React.useCallback(
    (products) => {
      let filtered = products.filter((product) => {
        if (filter.price.min !== 0 && product.price <= filter.price.min)
          return false;
        if (filter.price.max !== 0 && product.price >= filter.price.max)
          return false;
        return true;
      });

      filtered.sort((a, b) => {
        if (filter.sort === "asc") {
          return a.price - b.price;
        } else {
          return b.price - a.price;
        }
      });

      return filtered;
    },
    [filter]
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
