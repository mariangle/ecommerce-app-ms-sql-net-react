import * as React from "react";

import Button from "@/components/ui/Button";
import ProductCard from "@/components/ProductCard";
import Container from "@/components/ui/Container";
import { useWishlist } from "@/hooks/useWishlist";
import { Link } from "react-router-dom";

export default function Wishlist() {
  const { wishlistItems, clearWishlist } = useWishlist();

  return (
    <Container page>
      <button
        onClick={clearWishlist}
        className="text-xs text-neutral-500 underline"
      >
        Clear Wishlist
      </button>
      {wishlistItems.length === 0 ? (
        <div className="grid place-content-center space-y-4 py-12">
          <div>Your wishlist is empty</div>
          <Link to="/">
            <Button>Explore products</Button>
          </Link>
        </div>
      ) : (
        <div className="my-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {wishlistItems.map((product, index) => (
            <ProductCard product={product} key={index} />
          ))}
        </div>
      )}
    </Container>
  );
}
