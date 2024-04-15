import * as React from "react";

import { cn } from "@/utils/cn";
import ProductFilter from "@/components/ProductFilter";
import { icons } from "@/constants/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function MobileFilter({ loading }) {
  const [isOpen, setIsOpen] = React.useState(false);

  const close = () => setIsOpen(false);

  return (
    <div className="w-full lg:hidden">
      <button onClick={() => setIsOpen(true)} className="h-12 w-full text-sm">
        Filtrer
      </button>
      {isOpen && (
        <div
          className="fixed inset-0 z-20 bg-black/50 backdrop-blur-md"
          onClick={close}
        ></div>
      )}
      <div
        className={cn(
          "fixed right-0 top-0 z-20 h-full w-full max-w-xs transform bg-white transition-transform duration-300 ease-in-out",
          isOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="grid grid-cols-3 border-b p-4">
          <div role="button" onClick={close}>
            <FontAwesomeIcon icon={icons.close} />
          </div>
          <div className="text-center font-semibold uppercase">Filter</div>
        </div>
        <div className="p-4">
          <ProductFilter loading={loading} />
        </div>
      </div>
    </div>
  );
}
