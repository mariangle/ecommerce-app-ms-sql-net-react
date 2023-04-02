import { combineReducers } from '@reduxjs/toolkit';
import cartReducer from './cartReducer';
import productReducer from './productSlice';

const rootReducer = combineReducers({
  cart: cartReducer,
  product: productReducer,
});

export default rootReducer;