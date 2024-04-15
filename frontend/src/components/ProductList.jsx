import { cn } from "@/utils/cn";
import ProductCard, { ProductCardSkeleton } from "@/components/ProductCard";

import React from "react";

export default function ProductList({ loading, products, big = false }) {
  return (
    <div
      className={cn(
        "grid w-full grid-cols-2 gap-4 py-12 sm:grid-cols-3 lg:grid-cols-4",
        big && "sm:grid-cols-4 lg:grid-cols-5",
      )}
    >
      {loading ? (
        [...Array(4)].map((_, index) => <ProductCardSkeleton key={index} />)
      ) : (
        <>
          {products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </>
      )}
    </div>
  );
}
