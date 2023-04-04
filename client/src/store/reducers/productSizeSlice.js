import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import productSizeApi from '../../utils/api/productSizeApi';

export const fetchProductSizes = createAsyncThunk( 'productSizes/fetchProductSizes', async () => {
  const productSizes = await productSizeApi.getProductSizes();
  return productSizes;
  }
);

export const fetchProductSizesByProductId = createAsyncThunk( 'productSizes/fetchProductSizes', async (productId) => {
    const productSizes = await productSizeApi.getProductSizesByProductId(productId);
    return { productId, productSizes };
  }
);

export const createProductSize = createAsyncThunk('productSizes/createProductSize', async ({ size, price, quantity, productId }) => {
    const productSize = { size, price, quantity, productId };
    const createdProductSize = await productSizeApi.addProductSize(productSize);
    return createdProductSize;
  }
);

export const updateExistingSize = createAsyncThunk(
  'products/updateExistingSize',
  async ({ productId, product }) => {
    try {
      const updatedSize = await productSizeApi.updateProductSize(productId, product);
      return updatedSize;
    } catch (error) {
      console.error('Error updating size: ', error);
      throw error;
    }
  }
);

export const deleteSize = createAsyncThunk('products/deleteSize', async (productSizeId) => {
  console.log("hi from slice: " + productSizeId)
  const deletedSize = await productSizeApi.deleteProductSize(productSizeId);
  return deletedSize;
});


const initialState = {
  productSizes: [],
  loading: 'idle',
  error: null
};

export const productSizeSlice = createSlice({
  name: 'productSizes',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductSizes.pending, (state) => {
        state.loading = 'pending';
      })
      .addCase(fetchProductSizes.fulfilled, (state, action) => {
        const { productId, productSizes } = action.payload;
        if (productId === state.productId) {
          state.loading = 'idle';
          state.productSizes = productSizes;
        }
      })
      .addCase(fetchProductSizes.rejected, (state, action) => {
        state.loading = 'idle';
        state.error = action.error.message;
      })
      .addCase(createProductSize.fulfilled, (state, action) => {
        state.productSizes.push(action.payload);
      });
  }
});

export const {  } = productSizeSlice.actions;

export default productSizeSlice.reducer;
