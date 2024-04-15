import { createSlice } from "@reduxjs/toolkit";

import { getProductPrice } from "@/utils/product";

import products from "@/constants/Products.json";

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
      state.items.push(action.payload);
      localStorage.setItem("cart-items", JSON.stringify(state.items));
    },
    removeFromCart: (state, action) => {
      const productId = action.payload;
      state.items = state.items.filter((item) => item.id !== productId);
      localStorage.setItem("cart-items", JSON.stringify(state.items));
    },
    updateQuantity: (state, action) => {
      const { id, newQuantity } = action.payload;
      const item = state.items.find((item) => item.id === id);
      item.quantity = newQuantity;
      localStorage.setItem("cart-items", JSON.stringify(state.items));
    },
    clearCart: (state) => {
      state.items = [];
      localStorage.removeItem("cart-items");
    },
    calculateSubtotal: (state) => {
      const subtotal = state.items.reduce(
        (acc, item) =>
          acc +
          getProductPrice(products?.find((p) => p.id === item.productId)) *
            item.quantity,
        0,
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
