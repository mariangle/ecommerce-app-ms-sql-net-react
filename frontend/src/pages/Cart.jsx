import * as React from "react";

import CartItem from "@/components/CartItem";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { useCart } from "@/hooks/useCart";
import { Link } from "react-router-dom";
import { formatPrice } from "@/utils/hooks/useUtil";
import { DELIVERY_THRESHOLD } from "@/store/reducers/cartSlice";

export default function Cart() {
  const {
    discount,
    applyDiscount,
    clearCart,
    items,
    subtotal,
    defaultSubtotal,
    delivery,
    total,
    quantity,
  } = useCart();
  const [discountCode, setDiscountCode] = React.useState("");

  return (
    <Container className="flex flex-col py-24 md:flex-row md:justify-between">
      <div className="flex-2">
        <h1 className="mb-4 font-bold">
          Shopping Bag{" "}
          {quantity > 0 &&
            `(${quantity} ${quantity === 1 ? "product" : "products"})`}
        </h1>
        {items.length === 0 ? (
          <p>There’s nothing in your bag yet.</p>
        ) : (
          <div className="space-y-4">
            {items.map((item, index) => (
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
      {quantity > 0 && (
        <div>
          <div>
            <h2 className="mb-4 text-lg font-semibold">Summary</h2>
            <div className="space-between">
              <p>Subtotal</p>
              <p>{subtotal ? subtotal : 0}</p>
            </div>
            {discount > 0 && (
              <div className="space-between">
                <p>Discount</p>
                <p>-10%</p>
              </div>
            )}
            <div className="space-between">
              <p>Delivery</p>
              <p>{delivery ? delivery : "Free"}</p>
            </div>
            <div className="line"></div>
            <div className="space-between bold">
              <p>Total</p>
              <p>{total ? total : 0}</p>
            </div>
            <Link to="/checkout">
              <Button className="w-full">CHECKOUT</Button>
            </Link>
            {defaultSubtotal < DELIVERY_THRESHOLD ? (
              <p>
                Spend {formatPrice(DELIVERY_THRESHOLD - defaultSubtotal)} more
                and get free shipping!
              </p>
            ) : (
              <p>Your order is eligible for free shipping.</p>
            )}
          </div>
          {!discount > 0 && (
            <div>
              <input
                placeholder="Discount Code"
                type="text"
                onChange={(e) => setDiscountCode(e.target.value)}
              />
              <Button onClick={() => applyDiscount(discountCode)}>Apply</Button>
            </div>
          )}
        </div>
      )}
    </Container>
  );
}
