import { cn } from "@/utils/cn";
import ProductCard, {
  ProductCardSkeleton,
} from "@/components/product/ProductCard";
import ProductListHeader from "@/components/product/ProductListHeader";

import React from "react";

export default function ProductList({
  loading,
  products,
  noFilter = false,
  noHeader = false,
}) {
  return (
    <>
      <div className="w-full">
        {!noHeader && (
          <ProductListHeader products={products} loading={loading} />
        )}
        <div
          className={cn(
            "grid w-full grid-cols-2 gap-4 px-4 py-12 sm:grid-cols-3 md:px-0 lg:grid-cols-4",
            noFilter && "sm:grid-cols-4 lg:grid-cols-5",
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
      </div>
    </>
  );
}
