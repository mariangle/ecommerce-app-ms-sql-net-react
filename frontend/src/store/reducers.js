import { combineReducers } from "@reduxjs/toolkit";
import cartReducer from "./reducers/cartSlice";
import sizeReducer from "./reducers/sizeSlice";
import userReducer from "./reducers/userSlice";
import filterReducer from "./reducers/filterStore";
import wishlistReducer from "./reducers/wishlistSlice";
import currencyReducer from "./reducers/currencySlice";

const rootReducer = combineReducers({
  currency: currencyReducer,
  cart: cartReducer,
  productSize: sizeReducer,
  user: userReducer,
  filter: filterReducer,
  wishlist: wishlistReducer,
});

export default rootReducer;
