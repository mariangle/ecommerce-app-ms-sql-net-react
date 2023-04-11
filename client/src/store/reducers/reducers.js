import { combineReducers } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import productReducer from './productSlice';
import sizeReducer from './sizeSlice';
import userReducer from "./userSlice"

const rootReducer = combineReducers({
  cart: cartReducer,
  product: productReducer,
  productSize: sizeReducer,
  user: userReducer,
});

export default rootReducer;