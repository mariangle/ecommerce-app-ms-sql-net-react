import { useDispatch, useSelector } from "react-redux";

import { setCurrency as setNewCurrency } from "@/store/reducers/currencySlice";
import { currencies } from "@/store/reducers/currencySlice";

export const useCurrency = () => {
  const dispatch = useDispatch();
  const currency = useSelector((state) => state.currency);
  const locale = useSelector((state) => state.currency.locale);

  const validCurrency = currencies.find((c) => c.locale === locale);

  const setCurrency = (currency) => {
    dispatch(setNewCurrency(currency));
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat(validCurrency.locale, {
      style: "currency",
      currency: validCurrency.code,
    }).format(price * validCurrency.exchangeRate);
  };

  return { currency, setCurrency, formatPrice };
};

export default useCurrency;
