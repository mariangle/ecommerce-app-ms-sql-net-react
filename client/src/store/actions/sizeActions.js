import sizeApi from '../../utils/api/sizeApi';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchProductSizes = createAsyncThunk( 'productSizes/fetchProductSizes', async () => {
    const productSizes = await sizeApi.getProductSizes();
    return productSizes;
    }
  );
  
  export const fetchProductSizesByProductId = createAsyncThunk( 'productSizes/fetchProductSizes', async (productId) => {
      const productSizes = await sizeApi.getProductSizesByProductId(productId);
      return { productId, productSizes };
    }
  );
  
  export const addSize = createAsyncThunk('productSizes/addSize', async ({ size, price, quantity, productId }) => {
      const newSize = { size, price, quantity, productId };
      const createdProductSize = await sizeApi.addProductSize(newSize);
      return createdProductSize;
    }
  );
  
  export const updateSize = createAsyncThunk(
    'products/updateExistingSize',
    async ({ sizeId, size }) => {
      try {
        const updatedSize = await sizeApi.updateProductSize(sizeId, size);
        return updatedSize;
      } catch (error) {
        console.error('Error updating size: ', error);
        throw error;
      }
    }
  );
  
  export const deleteSize = createAsyncThunk('products/deleteSize', async (productSizeId) => {
    const deletedSize = await sizeApi.deleteProductSize(productSizeId);
    return deletedSize;
  });