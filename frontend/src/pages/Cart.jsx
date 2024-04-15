import * as React from "react";

import { useSelector } from "react-redux";
import { useCart } from "@/hooks/useCart";

import CartItem from "@/components/CartItem";
import Container from "@/components/ui/Container";
import CartSummary from "@/components/CartSummary";

export default function Cart() {
  const cartCount = useSelector((state) => state.cart.items).length;
  const cartItems = useSelector((state) => state.cart.items);

  const { clearCart } = useCart();
  return (
    <Container className="flex flex-col py-24 md:flex-row md:justify-between">
      <div className="flex-2">
        <h1 className="mb-4 font-bold">
          Shopping Bag{" "}
          {cartCount > 0 &&
            `(${cartCount} ${cartCount === 1 ? "product" : "products"})`}
        </h1>
        {cartItems.length === 0 ? (
          <p>There’s nothing in your bag yet.</p>
        ) : (
          <div className="space-y-4">
            {cartItems.map((item, index) => (
              <CartItem item={item} key={index} />
            ))}
            <button
              className="mt-6 text-xs text-gray-500 underline underline-offset-4"
              onClick={clearCart}
            >
              Clear Cart
            </button>
          </div>
        )}
      </div>
      {cartCount > 0 && <CartSummary />}
    </Container>
  );
}
