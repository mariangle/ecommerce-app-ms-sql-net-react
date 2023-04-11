import productApi from '../../utils/api/productApi';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async () => {
      const products = await productApi.getProducts();
      return products;
    }
  );
  
  export const fetchProductById = createAsyncThunk('products/fetchProductById', async (productId) => {
    const product = await productApi.getProduct(productId);
    return product;
  });
  
  export const createProduct = createAsyncThunk('products/createProduct', async (product) => {
    const createdProduct = await productApi.addProduct(product);
    return createdProduct;
  });
  
  export const updateExistingProduct = createAsyncThunk(
    'products/updateExistingProduct',
    async ({ productId, product }) => {
      const updatedProduct = await productApi.updateProduct(productId, product);
      return updatedProduct;
    }
  );
  
  export const removeProduct = createAsyncThunk('products/removeProduct', async (productId) => {
    const deletedProduct = await productApi.deleteProduct(productId);
    return deletedProduct;
  });