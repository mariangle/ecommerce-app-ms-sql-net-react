import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers/reducers';


const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production'
});

export default store;