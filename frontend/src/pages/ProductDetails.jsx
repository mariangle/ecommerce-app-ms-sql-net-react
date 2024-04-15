import * as React from "react";

import { cn } from "@/utils/cn";

import { useParams } from "react-router-dom";

import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Breadcrumbs from "@/components/Breadcrumbs";

import useProducts from "@/hooks/useProducts";
import useCart from "@/hooks/useCart";

export default function ProductDetails() {
  const { slug } = useParams();
  const { addToCart } = useCart();
  const { product, loading } = useProducts(slug);
  const [selectedSize, setSelectedSize] = React.useState(null);

  React.useEffect(() => {
    setSelectedSize(product?.sizes[0]);
  }, [product]);

  // do smth better here when no size

  if (loading || !selectedSize) return <ProductDetailsSkeleton />;

  if (!product) return <Container>no product found</Container>;

  const soldout = selectedSize.stock === 0;
  const isLowStock = selectedSize.stock > 0 && selectedSize.stock <= 3;

  return (
    <Container>
      <Breadcrumbs product={product} className="my-2" />
      <div className="flex flex-col md:flex-row">
        <div className="grid w-full place-content-center bg-gray-100 md:flex-[2]">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="flex-1 md:sticky md:top-24">
          <div>
            <div className="font-bold">{product.brand}</div>
            <h1 className="mt-4 text-2xl font-semibold md:text-3xl">
              {product.name}
            </h1>
            <div className="my-8 text-xl md:text-2xl">
              {new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "DKK",
              }).format(product.price.default)}
            </div>
          </div>
          <div className="mb-2 text-sm">Size: {selectedSize.size}</div>
          <div className="mb-4 grid grid-cols-3 gap-2 sm:grid-cols-4 md:grid-cols-5">
            {product.sizes.map((item, index) => (
              <button
                key={index}
                onClick={() => setSelectedSize(item)}
                className={cn(
                  "border py-2 text-sm",
                  selectedSize.size === item.size && "border-black",
                  item.stock === 0 && "line-through opacity-50",
                )}
              >
                {item.size}
              </button>
            ))}
          </div>
          {isLowStock && <LowStockWarning />}
          <div className="flex items-center gap-2">
            {soldout ? (
              <Button disabled>Sold out</Button>
            ) : (
              <Button
                onClick={() =>
                  addToCart({
                    productId: product.id,
                    size: selectedSize.size,
                    quantity: 1,
                  })
                }
              >
                Add to basket
              </Button>
            )}
            <Button variant="secondary">Wishlist</Button>
          </div>
          <p>{product.description}</p>
        </div>
      </div>
    </Container>
  );
}

function ProductDetailsSkeleton() {
  return (
    <Container page className="flex flex-col md:flex-row">
      <div className="grid h-96 w-full flex-1 animate-pulse place-content-center bg-gray-300"></div>
      <div className="flex-1">
        <div>
          <div className="h-10 w-8 animate-pulse bg-gray-300 font-bold"></div>
          <div className="mt-4 h-10 w-3/5 bg-gray-300"></div>
          <div className="mt-4 h-10 w-[25%] animate-pulse bg-gray-300 font-bold"></div>
        </div>
        <div className="mt-12 flex items-center gap-2">
          <div className="h-12 w-full animate-pulse bg-gray-300 font-bold"></div>
          <div className="h-12 w-20 animate-pulse bg-gray-300 font-bold"></div>
        </div>
      </div>
    </Container>
  );
}

const LowStockWarning = () => (
  <div className="mb-4 flex items-center justify-start gap-2 text-sm">
    <span className="relative flex h-2 w-2">
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-400 opacity-75"></span>
      <span className="relative inline-flex h-2 w-2 rounded-full bg-orange-500"></span>
    </span>
    Low in Stock
  </div>
);
