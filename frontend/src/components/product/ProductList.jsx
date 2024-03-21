import Products from "@/content/Products.json";

import useProducts from "@/hooks/useProducts";
import useFilter from "@/hooks/useFilter";
import ProductCard, {
  ProductCardSkeleton,
} from "@/components/product/ProductCard";
import React from "react";

export default function ProductList() {
  const { loading } = useProducts();
  const { initialize, filter, filteredProducts } = useFilter();

  React.useEffect(() => {
    initialize({ products: Products });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="grid sm:grid-cols-4 grid-cols-2 my-12 gap-4">
      {JSON.stringify(filter)}
      {loading ? (
        [...Array(7)].map((_, index) => <ProductCardSkeleton key={index} />)
      ) : (
        <>
          {filteredProducts.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </>
      )}
    </div>
  );
}
