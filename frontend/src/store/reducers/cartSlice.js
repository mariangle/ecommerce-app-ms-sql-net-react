import { createSlice } from "@reduxjs/toolkit";

export const DELIVERY_THRESHOLD = 1200;

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: localStorage.getItem("cart-items")
      ? JSON.parse(localStorage.getItem("cart-items"))
      : [],
    subtotal: 0,
    delivery: 0,
    discount: 0,
    total: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      state.items.push(product);
      localStorage.setItem("cart-items", JSON.stringify(state.items));
    },
    removeFromCart: (state, action) => {
      const productId = action.payload;
      state.items = state.items.filter((item) => item.id !== productId);
      localStorage.setItem("cart-items", JSON.stringify(state.items));
    },
    updateQuantity: (state, action) => {
      const { productId, size, quantity } = action.payload;
      const cartItemIndex = state.items.findIndex(
        (item) => item.product.id === productId && item.size === size
      );
      if (cartItemIndex !== -1) {
        state.items[cartItemIndex].quantity = quantity;
        localStorage.setItem("cart-items", JSON.stringify(state.items));
      }
    },
    clearCart: (state, action) => {
      state.items = [];
      localStorage.removeItem("cart-items");
    },
    calculateSubtotal: (state, action) => {
      const subtotal = state.items.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );

      if (subtotal >= DELIVERY_THRESHOLD) {
        state.delivery = 0;
        state.subtotal = subtotal;
      } else {
        state.delivery = 60;
        state.subtotal = subtotal;
      }
    },
    updateDelivery: (state, action) => {
      state.delivery = action.payload.deliveryCost;
    },
    applyDiscount: (state, action) => {
      state.discount = action.payload.discount;
      console.log("discount sat:", state.discount);
    },
    getTotal: (state) => {
      state.total =
        state.subtotal - state.subtotal * state.discount + state.delivery;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  updateQuantity,
  clearCart,
  calculateSubtotal,
  updateDelivery,
  applyDiscount,
  getTotal,
} = cartSlice.actions;

export default cartSlice.reducer;
