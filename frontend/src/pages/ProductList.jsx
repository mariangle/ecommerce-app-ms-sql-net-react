import * as React from "react";
import { useLocation } from "react-router-dom";

import useProducts from "@/hooks/useProducts";
import useFilter from "@/hooks/useFilter";
import SearchBar from "@/components/SearchBar";
import Container from "@/components/ui/Container";
import ProductListGrid from "@/components/product/ProductList";
import FilterPanel from "@/components/filter/FilterPanel";
import { navLinks } from "@/constants/navLinks";

export default function ProductList() {
  const [heading, setHeading] = React.useState("");
  const location = useLocation();
  const { loading, products } = useProducts();
  const { initialize, filteredProducts } = useFilter();

  React.useEffect(() => {
    if (!loading) {
      const categoryData = navLinks.find(
        (item) => item.url === location.pathname
      );

      setHeading(categoryData?.label);

      initialize({
        products: products,
        brand: categoryData?.label === "Sale" ? "" : categoryData?.label,
        sale: categoryData?.label === "Sale",
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location, loading]);

  return (
    <>
      <SearchBar />
      <div className="border-b h-24 grid place-content-center">
        <h1 className="text-center font-medium uppercase text-2xl">
          {heading}
        </h1>
      </div>
      <Container>
        <div className="flex flex-col md:items-start md:justify-start md:flex-row gap-8 py-8">
          <FilterPanel loading={loading} />
          <ProductListGrid products={filteredProducts} loading={loading} />
        </div>
      </Container>
    </>
  );
}
