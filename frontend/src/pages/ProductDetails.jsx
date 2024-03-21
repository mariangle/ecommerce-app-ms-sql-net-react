import * as React from "react";

import { useParams } from "react-router-dom";

import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

import useProducts from "@/hooks/useProducts";
import useCart from "@/hooks/useCart";

export default function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const { product, loading, error } = useProducts(parseInt(id, 10));

  if (loading) return <Container>loading product</Container>;

  if (error) return <Container>error loading product</Container>;

  if (!product) return <Container>no product found</Container>;

  return (
    <Container page className="flex flex-col md:flex-row">
      <div className="flex-1 bg-gray-100">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="flex-1">
        <div>
          <div className="font-bold">{product.brand}</div>
          <h1 className="text-2xl md:text-3xl font-semibold mt-4">
            {product.name}
          </h1>
          <div className="text-xl md:text-2xl my-8">
            {new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "DKK",
            }).format(product.sizes[0].price)}
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
