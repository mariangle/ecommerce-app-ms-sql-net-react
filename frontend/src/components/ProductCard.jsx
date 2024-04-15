import React from "react";

import { Link } from "react-router-dom";

import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";
import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useWishlist } from "@/hooks/useWishlist";
import { useCurrency } from "@/hooks/useCurrency";
import { getProductUrl } from "@/utils/product";
import { getProductPrice } from "@/utils/product";

export default function ProductCard({ product }) {
  const { formatPrice } = useCurrency();
  const { wishlistItems, addToWishlist, removeFromWishlist } = useWishlist();
  const inWishlist = wishlistItems.find((item) => item.id === product.id);

  return (
    <div className="relative z-0">
      <FontAwesomeIcon
        icon={inWishlist ? faHeartSolid : faHeartRegular}
        onClick={() =>
          inWishlist ? removeFromWishlist(product) : addToWishlist(product)
        }
        className="absolute right-2 top-2 h-4 w-4 cursor-pointer rounded-full bg-white p-1 transition-all duration-300 ease-in-out hover:bg-gray-100"
      />
      <Link to={getProductUrl(product)}>
        <div className="aspect-square">
          <img
            src={product.image}
            alt={product.name}
            width={1000}
            height={1000}
            className="h-full w-full object-cover"
          />
        </div>
      </Link>
      <div className="mt-4 text-center">
        <Link to={getProductUrl(product)}>
          <p>{product.brand}</p>
          <h3 className="font-bold">{product.name}</h3>
          {product.price.discount ? (
            <div>
              <p className="line-through">
                {formatPrice(product.price.default)}
              </p>
              <p className="text-red-700">
                {formatPrice(getProductPrice(product))}
              </p>
            </div>
          ) : (
            <p>{formatPrice(product.price.default)}</p>
          )}
        </Link>
      </div>
    </div>
  );
}

export function ProductCardSearch({ product, close }) {
  return (
    <Link to={getProductUrl(product)} className="relative z-0" onClick={close}>
      <div className="aspect-square">
        <img
          src={product.image}
          alt={product.name}
          width={1000}
          height={1000}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="mt-4 text-center">
        <p>{product.brand}</p>
        <h3 className="font-bold">{product.name}</h3>
      </div>
    </Link>
  );
}

export function ProductCardSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="h-52 rounded bg-gray-300"></div>
      <div className="mx-auto mt-2 h-2 w-1/4 rounded bg-gray-300"></div>
      <div className="mx-auto mt-2 h-3 w-1/3 rounded bg-gray-300"></div>
      <div className="mx-auto mt-2 h-2 w-1/5 rounded bg-gray-300"></div>
    </div>
  );
}
