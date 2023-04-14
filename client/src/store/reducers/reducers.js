import { combineReducers } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import productReducer from './productSlice';
import sizeReducer from './sizeSlice';
import userReducer from "./userSlice"
import wishlistReducer from "./wishlistSlice"
import searchReducer from "./wishlistSlice"

const rootReducer = combineReducers({
  cart: cartReducer,
  product: productReducer,
  productSize: sizeReducer,
  user: userReducer,
  wishlist: wishlistReducer,
});

export default rootReducer;