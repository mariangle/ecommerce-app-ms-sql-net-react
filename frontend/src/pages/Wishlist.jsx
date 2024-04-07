import React from "react";

import Button from "@/components/ui/Button";
import ProductCard from "@/components/product/ProductCard";
import Container from "@/components/ui/Container";
import { useWishlist } from "../utils/hooks/useWishlist";
import { Link } from "react-router-dom";

export default function Wishlist() {
  const { wishlistItems, clearWishlist } = useWishlist();

  return (
    <Container page>
      <button
        onClick={clearWishlist}
        className="underline text-xs text-neutral-500"
      >
        Clear Wishlist
      </button>
      {wishlistItems.length === 0 ? (
        <div className="py-12 grid place-content-center space-y-4">
          <div>Your wishlist is empty</div>
          <Link to="/">
            <Button>Explore products</Button>
          </Link>
        </div>
      ) : (
        <div className="grid sm:grid-cols-4 grid-cols-2 my-12 gap-4">
          {wishlistItems.map((product, index) => (
            <ProductCard product={product} key={index} />
          ))}
        </div>
      )}
    </Container>
  );
}
