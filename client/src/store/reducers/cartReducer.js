import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    subtotal: 0,
    delivery: 0,
    total: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      const { product, size, quantity = 1 } = action.payload; // set default quantity property
      const existingItem = state.items.find(item => item.product.id === product.id && item.size === size);
      if (existingItem) { 
        existingItem.quantity += quantity;
      } else {
        state.items.push({ product, size, quantity }); 
      }
    },
    removeFromCart: (state, action) => {
      const { product, size } = action.payload; 
      state.items = state.items.filter(item => item.product.id !== product.id || item.size !== size); // remove items that doesnt pass
    },
    updateQuantity: (state, action) => {
      const { productId, size, quantity } = action.payload;
      const cartItemIndex = state.items.findIndex(item => item.product.id === productId && item.size === size);
      if (cartItemIndex !== -1) { 
        state.items[cartItemIndex].quantity = quantity;
      }
    },  
    calculateSubtotal: (state) => {
      let subtotal = 0;
      state.items.forEach((item) => { 
        subtotal += item.product.price * item.quantity;
      });
      state.subtotal = subtotal;
    },
    updateDeliveryCost: (state, action) => {
      state.delivery = action.payload.deliveryCost;
    },
    getTotal: (state) => {
      state.total = state.subtotal + state.delivery;
    }
  }
});

export const { addToCart, removeFromCart, updateQuantity, calculateSubtotal, updateDeliveryCost, getTotal } = cartSlice.actions;

export default cartSlice.reducer;
