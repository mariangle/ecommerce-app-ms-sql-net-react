import * as React from "react";

import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import Button from "@/components/ui/Button";

export default function CartSummary() {
  const cart = useSelector((state) => state.cart);

  return (
    <div className="w-full max-w-xs">
      <div>
        <h2 className="mb-4 text-lg font-semibold">Summary</h2>
        <div className="space-between">
          <p>Subtotal</p>
          <p>{cart.subtotal ? cart.subtotal : 0}</p>
        </div>
        {cart.discount > 0 && (
          <div className="space-between">
            <p>Discount</p>
            <p>-10%</p>
          </div>
        )}
        <div className="space-between">
          <p>Delivery</p>
          <p>{cart.delivery ? cart.delivery : "Free"}</p>
        </div>
        <div className="line"></div>
        <div className="space-between bold">
          <p>Total</p>
          <p>{cart.total ? cart.total : 0}</p>
        </div>
        <Link to="/checkout">
          <Button className="w-full">CHECKOUT</Button>
        </Link>
      </div>
    </div>
  );
}
