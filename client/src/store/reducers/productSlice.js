import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import productApi from '../../utils/api/productApi';

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
    try {
      const updatedProduct = await productApi.updateProduct(productId, product);
      return updatedProduct;
    } catch (error) {
      console.error('Error updating product: ', error);
      throw error;
    }
  }
);

export const removeProduct = createAsyncThunk('products/removeProduct', async (productId) => {
  const deletedProduct = await productApi.deleteProduct(productId);
  return deletedProduct;
});

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
    setPrice: (state, action) => {
      const { id, size, price } = action.payload;
      state[id] = state[id] || {};
      state[id][size] = price;
    },
  },
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
        console.log(state.selectedProduct)
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
  setPrice
} = productSlice.actions;

export default productSlice.reducer;