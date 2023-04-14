import { createSlice } from '@reduxjs/toolkit';
import { fetchProducts } from '../actions/productActions';

const initialState = {
  products: [],
  loading: false,
  error: null,
  status: 'idle',
  filter: {
    minPrice: null,
    maxPrice: null,
    sizes: [],
  },
};

const productSlice = createSlice({
  name: 'product',
  status: "idle",
  initialState,
  reducers: {
    filterProducts: (state, action) => {
      const { minPrice, maxPrice, sizes } = action.payload;
      state.products = state.products.filter(product => {
        const isInPriceRange = (minPrice === null || product.defaultPrice >= minPrice) && (maxPrice === null || product.defaultPrice <= maxPrice);
        const hasSize = sizes.length === 0 || product.sizes.some(size => sizes.includes(size));
        return isInPriceRange && hasSize;
      });
    },   
    searchProducts: (state, action) => {
      const query = action.payload.toLowerCase();
      const originalProducts = state.originalProducts || state.products;
      const filteredProducts = originalProducts.filter(product => {
        return (
          product.name.toLowerCase().includes(query) ||
          product.description.toLowerCase().includes(query)
        );
      });
      state.products = filteredProducts;
      state.originalProducts = originalProducts;
      if (query.length === 0) {
        state.products = originalProducts;
        state.originalProducts = null;
      }
    },    
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
  filterProducts,
  searchProducts,
  setLoad,
  setError,
  removeSelectedProduct,
  selectedProduct,
  setProduct,
} = productSlice.actions;

export default productSlice.reducer;