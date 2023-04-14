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
    dispatch(createProduct(product))
    .then(() => {
      alert("Product has been added.")
    })
  };

  const updateExistingProductHandler = (productId, product) => {
    dispatch(updateExistingProduct( productId, product ));
  };

  const removeProductHandler = (productId) => {
    console.log("hey")
    if (window.confirm("Are you sure you want to delete this product?")) {
      dispatch(removeProduct(productId))
        .then(() => {
          alert("Product has been deleted.");
        });
    }
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

