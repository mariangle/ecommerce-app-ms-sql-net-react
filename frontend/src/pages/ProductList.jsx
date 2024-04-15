import * as React from "react";
import { useLocation } from "react-router-dom";

import useProducts from "@/hooks/useProducts";
import useFilter from "@/hooks/useFilter";
import Container from "@/components/ui/Container";
import ProductListGrid from "@/components/ProductList";
import ProductListHeader from "@/components/ProductListHeader";
import Breadcrumbs from "@/components/Breadcrumbs";
import FilterPanel from "@/components/FilterPanel";
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
      <div className="grid h-32 place-content-center border-b bg-gradient-to-br from-black to-neutral-900">
        <h1 className="text-center text-2xl font-medium uppercase text-white">
          {categoryData?.label}
        </h1>
      </div>
      <Container className="px-0 lg:px-4">
        <Breadcrumbs className="mt-4 hidden lg:flex" />
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-start lg:pt-12">
          <FilterPanel loading={loading} />
          <div className="w-full">
            <ProductListHeader products={products} loading={loading} />
            <ProductListGrid
              products={filteredProducts}
              loading={loading}
              className="px-4 lg:px-0"
            />
          </div>
        </div>
      </Container>
    </>
  );
}
