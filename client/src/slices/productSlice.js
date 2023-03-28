import { createSlice, nanoid } from '@reduxjs/toolkit';
import { generateProductData } from '../productData';

const initialState = {
  products: generateProductData(),
  selectedProduct: null,
};

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
      setProduct: (state, action) => {
          console.log('Selected Product ID:', action.payload);
          state.selectedProduct = state.products.find(product => product.id === action.payload) || null;
        },
    },
  });

export const { setProduct } = productSlice.actions;

export default productSlice.reducer;