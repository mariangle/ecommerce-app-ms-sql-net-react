import ProductCard, {
  ProductCardSkeleton,
} from "@/components/product/ProductCard";
import ProductListHeader from "@/components/product/ProductListHeader";

import React from "react";

export default function ProductList({ loading, products }) {
  return (
    <>
      <div className="w-full">
        <ProductListHeader products={products} loading={loading} />
        <div className="grid sm:grid-cols-3 lg:grid-cols-4 grid-cols-2 py-12 gap-4 w-full">
          {loading ? (
            [...Array(7)].map((_, index) => <ProductCardSkeleton key={index} />)
          ) : (
            <>
              {products.map((product, index) => (
                <ProductCard key={index} product={product} />
              ))}
            </>
          )}
        </div>
      </div>
    </>
  );
}
