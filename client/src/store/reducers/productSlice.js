import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import productApi from '../../utils/api/productApi';

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    const products = await productApi.getProducts();
    return products;
  }
);

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
    loadProducts: async (state) => {
      state.loading = true;
      try {
        const products = await productApi.getProducts();
        state.products = products;
        state.loading = false;
      } catch (error) {
        state.error = error.message;
        state.loading = false;
      }
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
        (product) => product.productID === action.payload
        );
    },
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