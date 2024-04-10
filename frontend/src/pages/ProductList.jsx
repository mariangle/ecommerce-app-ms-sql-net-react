import * as React from "react";
import { useLocation } from "react-router-dom";

import useProducts from "@/hooks/useProducts";
import useFilter from "@/hooks/useFilter";
import Container from "@/components/ui/Container";
import ProductListGrid from "@/components/product/ProductList";
import FilterPanel from "@/components/filter/FilterPanel";
import { navLinks } from "@/constants/navLinks";

export default function ProductList() {
  const location = useLocation();
  const { loading, products } = useProducts();
  const { initialize, filteredProducts } = useFilter();

  const categoryData = navLinks.find((item) => item.url === location.pathname);

  React.useEffect(() => {
    if (!loading) {
      initialize({
        products: products,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location, loading]);

  return (
    <>
      <div className="grid h-32 place-content-center border-b bg-black">
        <h1 className="text-center text-2xl font-medium uppercase text-white">
          {categoryData?.label}
        </h1>
      </div>
      <Container className="px-0 md:px-4">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-start md:pt-12">
          <FilterPanel loading={loading} />
          <ProductListGrid products={filteredProducts} loading={loading} />
        </div>
      </Container>
    </>
  );
}
