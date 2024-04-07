import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  price: {
    min: 0,
    max: 0,
  },
  sort: "asc",
  sizes: [],
  initial: {
    price: {
      min: 0,
      max: 0,
    },
    sizes: [],
  },
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setMinPrice: (state, action) => {
      state.price.min = action.payload;
    },
    setMaxPrice: (state, action) => {
      state.price.max = action.payload;
    },
    setSizes: (state, action) => {
      state.sizes = action.payload;
    },
    setSort: (state, action) => {
      state.sort = action.payload;
    },
    setInitial: (state, action) => {
      state.initial = action.payload;
    },
  },
});

export const { setMinPrice, setMaxPrice, setSort, setInitial, setSizes } =
  filterSlice.actions;

export default filterSlice.reducer;
