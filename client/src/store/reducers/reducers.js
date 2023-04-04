import { combineReducers } from '@reduxjs/toolkit';
import cartReducer from './cartReducer';
import productReducer from './productSlice';
import productSizeReducer from './productSizeSlice';

const rootReducer = combineReducers({
  cart: cartReducer,
  product: productReducer,
  productSize: productSizeReducer,
});

export default rootReducer;