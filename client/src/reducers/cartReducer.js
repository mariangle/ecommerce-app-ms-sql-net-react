import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: []
  },
  reducers: {
    addToCart: (state, action) => {
      state.items.push(action.payload);
      console.log("ADDED: " + action.payload.product.id + " - " + action.payload.product.model + " (size: " + action.payload.size + ")");

    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter(item => item.product.id !== action.payload.product.id);
    }
  }
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;