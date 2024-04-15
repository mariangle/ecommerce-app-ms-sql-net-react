import { createSlice } from "@reduxjs/toolkit";
import Denmark from "@/assets/icons/denmark.svg";
import Germany from "@/assets/icons/germany.svg";
import UnitedKingdom from "@/assets/icons/united-kingdom.svg";

export const currencies = [
  {
    locale: "da-DK",
    code: "DKK",
    symbol: "kr",
    exchangeRate: 1,
    src: Denmark,
  },
  {
    locale: "de-DE",
    code: "EUR",
    symbol: "€",
    exchangeRate: 0.13,
    src: Germany,
  },
  {
    locale: "en-GB",
    code: "GBP",
    symbol: "£",
    exchangeRate: 0.11,
    src: UnitedKingdom,
  },
];

const initialState = {
  locale: localStorage.getItem("currency-locale")
    ? JSON.parse(localStorage.getItem("currency-locale"))
    : "da-DK",
};

const filterSlice = createSlice({
  name: "currency",
  initialState,
  reducers: {
    setCurrency: (state, action) => {
      localStorage.setItem("currency-locale", JSON.stringify(state.locale));
      state.locale = action.payload;
    },
  },
});

export const { setCurrency } = filterSlice.actions;

export default filterSlice.reducer;
