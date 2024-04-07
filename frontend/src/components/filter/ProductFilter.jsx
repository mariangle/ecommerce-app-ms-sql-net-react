import { useDispatch } from "react-redux";
import {
  setMinPrice,
  setMaxPrice,
  setSort,
} from "@/store/reducers/filter-store";
import useFilter from "@/hooks/useFilter";
import Button from "@/components/ui/Button";

export default function ProductFilter() {
  const dispatch = useDispatch();
  const { filter } = useFilter();

  const handleSetMinPrice = (event) => {
    dispatch(setMinPrice(Number(event.target.value)));
  };

  const handleSetMaxPrice = (event) => {
    dispatch(setMaxPrice(Number(event.target.value)));
  };

  const handleSort = () => {
    if (filter.sort === "asc") {
      dispatch(setSort("desc"));
    } else {
      dispatch(setSort("asc"));
    }
  };

  return (
    <div className="min-w-[250px]">
      <Button onClick={handleSort}>
        Sort Price ({filter.sort === "asc" ? "Ascending" : "Descending"})
      </Button>
      <div className="space-y-2">
        <div className="uppercase font-semibold">Price</div>
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
