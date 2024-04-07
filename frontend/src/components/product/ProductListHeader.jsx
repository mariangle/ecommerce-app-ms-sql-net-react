import { useDispatch } from "react-redux";

import MobileFilter from "@/components/filter/MobileFilter";
import { setSort } from "@/store/reducers/filter-store";
import useFilter from "@/hooks/useFilter";

export default function ProductListHeader({ loading, products }) {
  const dispatch = useDispatch();
  const { filter } = useFilter();

  const handleSort = () => {
    if (filter.sort === "asc") {
      dispatch(setSort("desc"));
    } else {
      dispatch(setSort("asc"));
    }
  };

  return (
    <>
      <div className="hidden md:flex md:justify-between">
        {loading ? (
          <div>
            <div className="w-12 animate-pulse h-4 bg-gray-300" />
          </div>
        ) : (
          <div className="text-sm font-semibold">
            {products.length} product{products.length !== 1 ? "s  " : ""}
          </div>
        )}
        {loading ? (
          <div>
            <div className="w-32 animate-pulse h-4 bg-gray-300" />
          </div>
        ) : (
          <select
            value={filter.sort}
            onChange={handleSort}
            className="border-none text-sm"
          >
            <option value="asc">Sort Price (Ascending)</option>
            <option value="desc">Sort Price (Descending)</option>
          </select>
        )}
      </div>
      <div className="flex md:hidden divide-x border-y items-center">
        <select
          value={filter.sort}
          onChange={handleSort}
          className="w-full border-none h-12 text-sm text-center"
        >
          <option value="asc">Sort Price (Ascending)</option>
          <option value="desc">Sort Price (Descending)</option>
        </select>
        <MobileFilter loading={loading} />
      </div>
    </>
  );
}
