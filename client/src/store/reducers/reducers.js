import { combineReducers } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import productReducer from './productSlice';
import productSizeReducer from './productSizeSlice';
import userReducer from "./userSlice"

const rootReducer = combineReducers({
  cart: cartReducer,
  product: productReducer,
  productSize: productSizeReducer,
  user: userReducer,
});

export default rootReducer;