import * as React from "react";

import { useSelector } from "react-redux";
import { useCurrency } from "@/hooks/useCurrency";
import { DELIVERY_THRESHOLD } from "@/store/reducers/cartSlice";
import { Link } from "react-router-dom";

import Button from "@/components/ui/Button";

export default function CartSummary() {
  const { formatPrice } = useCurrency();
  const cart = useSelector((state) => state.cart);
  const deliveryPrice = cart.delivery;

  return (
    <div className="w-full flex-1 md:max-w-xs">
      <div>
        <h2 className="mb-4 text-lg font-semibold">Summary</h2>
        <div className="space-between">
          <p>Subtotal</p>
          <p>{formatPrice(cart.subtotal)}</p>
        </div>
        {cart.discount > 0 && (
          <div className="space-between">
            <p>Discount</p>
            <p>-10%</p>
          </div>
        )}
        <div className="space-between">
          <p>Delivery</p>
          <p>{deliveryPrice ? formatPrice(cart.delivery) : "Free"}</p>
        </div>
        <div className="line"></div>
        <div className="space-between font-bold">
          <p>Total</p>
          <p>{formatPrice(cart.total)}</p>
        </div>
        <Link to="/checkout" className="mt-6 block">
          <Button className="w-full">CHECKOUT</Button>
        </Link>
        {!deliveryPrice ? (
          <div className="text-xs">
            Your order is eligible for free shipping.
          </div>
        ) : (
          <div className="text-xs">
            Add {formatPrice(DELIVERY_THRESHOLD - cart.subtotal)} more to your
            order for free shipping.{" "}
          </div>
        )}
      </div>
    </div>
  );
}
