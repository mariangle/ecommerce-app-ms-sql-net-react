import { combineReducers } from '@reduxjs/toolkit';
import cartReducer from './cartReducers';
import productReducer from '../slices/productSlice';

const rootReducer = combineReducers({
  cart: cartReducer,
  product: productReducer,
});

export default rootReducer;