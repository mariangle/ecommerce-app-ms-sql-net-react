import { combineReducers } from "@reduxjs/toolkit";
import cartReducer from "./reducers/cartSlice";
import sizeReducer from "./reducers/sizeSlice";
import userReducer from "./reducers/userSlice";
import filterReducer from "./reducers/filter-store";
import wishlistReducer from "./reducers/wishlistSlice";

const rootReducer = combineReducers({
  cart: cartReducer,
  productSize: sizeReducer,
  user: userReducer,
  filter: filterReducer,
  wishlist: wishlistReducer,
});

export default rootReducer;
