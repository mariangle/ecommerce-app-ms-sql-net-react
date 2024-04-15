import { useDispatch } from "react-redux";

import MobileFilter from "@/components/MobileFilter";
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
      <div className="hidden lg:flex lg:justify-between">
        {loading ? (
          <div>
            <div className="h-4 w-12 animate-pulse bg-gray-300" />
          </div>
        ) : (
          <div className="text-sm font-semibold">
            {products.length} product{products.length !== 1 ? "s  " : ""}
          </div>
        )}
        {loading ? (
          <div>
            <div className="h-4 w-32 animate-pulse bg-gray-300" />
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
      <div className="sticky top-[57px] z-20 flex items-center divide-x border-b bg-white lg:hidden">
        <select
          value={filter.sort}
          onChange={handleSort}
          className="h-12 w-full border-none text-center text-sm"
        >
          <option value="asc">Sort Price (Ascending)</option>
          <option value="desc">Sort Price (Descending)</option>
        </select>
        <MobileFilter loading={loading} />
      </div>
    </>
  );
}
