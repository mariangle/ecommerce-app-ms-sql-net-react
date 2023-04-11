import { createSlice } from '@reduxjs/toolkit';
import { fetchProducts } from '../actions/productActions';

const initialState = {
  products: [], 
  loading: false,
  error: null,
  status: 'idle',
};

const productSlice = createSlice({
  name: 'product',
  status: "idle",
  initialState,
  reducers: {
  },
    setLoad: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const {
  loadProducts,
  setLoad,
  setError,
  removeSelectedProduct,
  selectedProduct,
  setProduct,
} = productSlice.actions;

export default productSlice.reducer;