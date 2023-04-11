import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, createProduct, updateExistingProduct, removeProduct } from '../../store/actions/productActions';

export const useProduct = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);
  const loading = useSelector((state) => state.product.loading);
  const error = useSelector((state) => state.product.error);
  const status = useSelector((state) => state.product.status);

  const fetchProductsHandler = () => {
    dispatch(fetchProducts());
  };

  const createProductHandler = (product) => {
    dispatch(createProduct(product));
  };

  const updateExistingProductHandler = (productId, product) => {
    dispatch(updateExistingProduct({ productId, product }));
  };

  const removeProductHandler = (productId) => {
    dispatch(removeProduct(productId));
  };

  return { 
    fetchProducts: fetchProductsHandler, 
    createProduct: createProductHandler, 
    updateExistingProduct: updateExistingProductHandler, 
    removeProduct: removeProductHandler, 
    products, 
    loading, 
    error,
    status,  
    };
};
