import React from "react";
import { Link } from "react-router-dom";
import { icons } from "../../constants/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useWishlist } from "../../utils/hooks/useWishlist";

export default function ProductCard({ product }) {
  const { wishlistItems, toggleWishlistItem } = useWishlist();
  const itemExists = wishlistItems.find((item) => item.id === product.id);

  return (
    <div className="relative">
      <FontAwesomeIcon
        icon={itemExists ? icons.heartFull : icons.heart}
        onClick={() => toggleWishlistItem(product)}
        className="absolute top-2 right-2 h-4 w-4 bg-white rounded-full p-1 cursor-pointer hover:bg-gray-100 transition-all duration-300 ease-in-out"
      />
      <Link to={`/products/${product.id}`} className="aspect-square">
        <div to={`/products/${product.id}`} className="aspect-square">
          <img
            src={product.image}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      </Link>
      <div className="text-center mt-4">
        <Link to={`/products/${product.id}`}>
          <p>{product.brand}</p>
          <h3 className="font-bold">{product.name}</h3>
          <p>{product.price}</p>
        </Link>
      </div>
    </div>
  );
}

export function ProductCardSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="h-52 bg-gray-300 rounded"></div>
      <div className="h-4 mt-2 bg-gray-300 rounded w-1/4 mx-auto"></div>
      <div className="h-4 mt-2 bg-gray-300 rounded w-1/3 mx-auto"></div>
    </div>
  );
}
