import { createSlice } from '@reduxjs/toolkit';
import { fetchProductSizes, addSize } from '../actions/sizeActions';

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
  }
});

export const {  } = productSizeSlice.actions;

export default productSizeSlice.reducer;
