import { useDispatch } from "react-redux";
import {
  setMinPrice,
  setMaxPrice,
  setSort,
} from "@/store/reducers/filter-store";
import useFilter from "@/hooks/useFilter";

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
    <div className="p-4 bg-white shadow rounded">
      <h2 className="text-lg font-semibold mb-4">Filter Products</h2>
      <button onClick={handleSort}>
        Sort Price ({filter.sort === "asc" ? "Ascending" : "Descending"})
      </button>
      <div className="space-y-2">
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
