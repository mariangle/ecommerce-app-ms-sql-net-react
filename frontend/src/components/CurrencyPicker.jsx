import * as React from "react";

import { useCurrency } from "@/hooks/useCurrency";
import { currencies } from "@/store/reducers/currencySlice";

export default function CurrencyPicker() {
  const { currency, setCurrency } = useCurrency();
  const [open, setOpen] = React.useState(false);
  const selectedCurrency = currencies.find((c) => c.locale === currency.locale);

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setOpen(!open)}
        className="inline-flex w-full items-center justify-center gap-2 rounded-md border border-gray-300 bg-white px-2.5 py-1.5 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        <img src={selectedCurrency.src} alt="country flag" className="size-3" />
        {selectedCurrency.code}
      </button>
      {open && (
        <div className="absolute right-0 mt-2 w-36 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {currencies.map((currency, index) => (
              <button
                onClick={() => {
                  setCurrency(currency.locale);
                  setOpen(false);
                }}
                key={index}
                className="flex w-full items-center justify-between px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                role="menuitem"
              >
                {currency.code}
                <span>{currency.symbol}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
