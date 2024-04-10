import * as React from "react";

import { useParams } from "react-router-dom";

import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

import useProducts from "@/hooks/useProducts";
import useCart from "@/hooks/useCart";

export default function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const { product, loading } = useProducts(parseInt(id, 10));

  if (loading) return <ProductDetailsSkeleton />;

  if (!product) return <Container>no product found</Container>;

  return (
    <Container page className="flex flex-col md:flex-row">
      <div className="grid flex-1 place-content-center bg-gray-100">
        <img src={product.image} alt={product.name} />
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
        <div className="flex items-center gap-2">
          <Button onClick={() => addToCart(product)}>Add to basket</Button>
          <Button variant="secondary">Wishlist</Button>
        </div>
        <p>{product.description}</p>
      </div>
    </Container>
  );
}

function ProductDetailsSkeleton() {
  return (
    <Container page className="flex flex-col md:flex-row">
      <div className="grid h-96 flex-1 animate-pulse place-content-center bg-gray-300"></div>
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
