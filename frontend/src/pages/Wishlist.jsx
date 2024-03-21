import React from "react";
import ProductCard from "../components/product/ProductItem";
import { useWishlist } from "../utils/hooks/useWishlist";

export default function Wishlist() {
  const { wishlistItems, clearWishlist } = useWishlist();

  return (
    <div className="wishlist container">
      <div className="wishlist-control">
        <a onClick={clearWishlist}>Clear Wishlist</a>
      </div>
      <div className="product-grid">
        {wishlistItems.map((product, index) => (
          <ProductCard product={product} key={index} />
        ))}
      </div>
    </div>
  );
}
