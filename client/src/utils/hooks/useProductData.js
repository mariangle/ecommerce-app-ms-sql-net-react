import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, setProduct } from '../../store/reducers/productSlice';

export const useProductData = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.product.products);
  const loading = useSelector(state => state.product.loading);
  const error = useSelector(state => state.product.error);
  const selectedProduct = useSelector(state => state.product.selectedProduct);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const setSelectedProduct = (id) => {
    dispatch(setProduct(id));
  };

  return { products, loading, error, selectedProduct, setSelectedProduct };
};
