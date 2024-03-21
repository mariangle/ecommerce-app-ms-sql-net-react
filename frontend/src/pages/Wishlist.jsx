import React from "react";
import ProductCard from "../components/product/ProductCard";
import { useWishlist } from "../utils/hooks/useWishlist";

export default function Wishlist() {
  const { wishlistItems, clearWishlist } = useWishlist();

  return (
    <div className="wishlist width-container">
      <div className="wishlist-control">
        <button onClick={clearWishlist}>Clear Wishlist</button>
      </div>
      <div className="grid sm:grid-cols-4 grid-cols-2 my-12 gap-4">
        {wishlistItems.map((product, index) => (
          <ProductCard product={product} key={index} />
        ))}
      </div>
    </div>
  );
}
