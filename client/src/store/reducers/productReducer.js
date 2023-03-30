import { createSlice } from '@reduxjs/toolkit';
import { generateProductData } from '../../productData';

const initialState = {
  products: generateProductData(),
  loading: false,
  error: null,
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    loadProducts: (state) => {
      state.loading = true;
    },
    setLoad: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    removeSelectedProduct: (state) => {
      state.selectedProduct = null;
    },
    setProduct: (state, action) => {
      state.selectedProduct = state.products.find(
        (product) => product.id === action.payload
      );
    },
  },
});

export const {
  loadProducts,
  setLoad,
  setError,
  removeSelectedProduct,
  setProduct,
} = productSlice.actions;

export default productSlice.reducer;