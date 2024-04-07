import { cn } from "@/utils/cn";

import { useDispatch } from "react-redux";
import {
  setMinPrice,
  setMaxPrice,
  setSizes,
} from "@/store/reducers/filter-store";
import useFilter from "@/hooks/useFilter";

export default function ProductFilter({ loading }) {
  const dispatch = useDispatch();
  const { filter } = useFilter();

  const handleSetMinPrice = (event) => {
    dispatch(setMinPrice(Number(event.target.value)));
  };

  const handleSetMaxPrice = (event) => {
    dispatch(setMaxPrice(Number(event.target.value)));
  };

  const toggleSetSize = (size) => {
    filter.sizes.includes(size)
      ? dispatch(setSizes(filter.sizes.filter((s) => s !== size)))
      : dispatch(setSizes([...filter.sizes, size]));
  };

  if (loading) return <ProductFilterSkeleton />;

  return (
    <div className="min-w-[250px]">
      <div className="mb-4">
        <div className="uppercase font-semibold mb-2">Sizes</div>
        <div className="grid grid-cols-2 gap-2">
          {filter.initial.sizes.map((size, index) => (
            <button
              key={index}
              className={cn(
                "border text-xs py-2",
                filter.sizes.includes(size) && "bg-neutral-100"
              )}
              onClick={() => toggleSetSize(size)}
            >
              {size}
            </button>
          ))}
        </div>
      </div>
      <div className="space-y-2 mb-4">
        <div className="uppercase font-semibold mb-2">Price</div>
        <div>
          <label className="block text-sm font-medium">Min Price</label>
          <input
            type="range"
            min={filter.initial.price.min}
            max={filter.initial.price.max}
            value={filter.price.min}
            onChange={handleSetMinPrice}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          />
          <div>Selected: {filter.price.min}</div>
        </div>
        <div>
          <label className="block text-sm font-medium">Max Price</label>
          <input
            type="range"
            min={filter.initial.price.min}
            max={filter.initial.price.max}
            value={filter.price.max}
            onChange={handleSetMaxPrice}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          />
          <div>Selected: {filter.price.max}</div>
        </div>
      </div>
    </div>
  );
}

export function ProductFilterSkeleton() {
  return (
    <div className="min-w-[250px]">
      <div className="animate-pulse h-6 mb-4 w-12 bg-gray-300"></div>
      <div className="grid grid-cols-2 gap-4 mb-6">
        {[...Array(4)].map((_, index) => (
          <div className="animate-pulse h-8 w-full bg-gray-300"></div>
        ))}
      </div>
      <div className="animate-pulse h-6 mb-4 w-12 bg-gray-300"></div>
      <div className="animate-pulse h-6 mb-4 w-full bg-gray-300"></div>
      <div className="animate-pulse h-6 mb-4 w-full bg-gray-300"></div>
    </div>
  );
}
