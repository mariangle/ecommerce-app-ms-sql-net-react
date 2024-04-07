import * as React from "react";

import { cn } from "@/utils/cn";
import ProductFilter from "@/components/filter/ProductFilter";
import { icons } from "@/constants/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function MobileFilter({ loading }) {
  const [isOpen, setIsOpen] = React.useState(false);

  const close = () => setIsOpen(false);

  return (
    <div className="md:hidden w-full">
      <button onClick={() => setIsOpen(true)} className="w-full h-12 text-sm">
        Filtrer
      </button>
      {isOpen && (
        <div
          className="fixed z-10 inset-0 bg-black/50 backdrop-blur-md"
          onClick={close}
        ></div>
      )}
      <div
        className={cn(
          "fixed top-0 right-0 h-full w-full bg-white z-20 transform transition-transform duration-300 ease-in-out max-w-xs",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="grid grid-cols-3 p-4 border-b">
          <div role="button" onClick={close}>
            <FontAwesomeIcon icon={icons.close} />
          </div>
          <div className="text-center uppercase font-semibold">Filter</div>
        </div>
        <div className="p-4">
          <ProductFilter loading={loading} />
        </div>
      </div>
    </div>
  );
}
