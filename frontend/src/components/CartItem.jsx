import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "@/hooks/useCart";

export default function CartItem({ item }) {
  const { removeFromCart } = useCart();

  return (
    <div className="flex max-w-lg justify-start gap-4">
      <Link to={`/${item.id}`}>
        <div className="size-24">
          <img
            src={item.image}
            alt={item.brand}
            className="aspect-square h-full w-full object-cover "
          />
        </div>
      </Link>
      <div className="flex w-full items-start justify-between">
        <div className="cart-item-left">
          <Link to={`/${item.id}`}>
            <p>
              {item.brand} {item.name}
            </p>
          </Link>
          <p>Brand: {item.brand}</p>
          <p>Size: {item.size}</p>
          <p>Quantity: {item.quantity}</p>
        </div>
        <div>
          <button
            onClick={() => removeFromCart(item.id)}
            className="text-xs underline underline-offset-4"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}
