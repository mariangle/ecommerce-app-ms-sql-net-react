import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "@/hooks/useCart";

function CartItem() {
  const { removeFromCart, updateQuantity, items } = useCart();

  return (
    <>
      {JSON.stringify(items[0].product)}
      {items.map((item) => (
        <div className="cart-item" key={`${item.id}-${item.size}`}>
          <Link to={`/${item.id}`}>
            <div className="cart-item-img">
              <img src={item.image} alt={item.brand} />
            </div>
          </Link>
          <div className="cart-item-about">
            <div className="cart-item-left">
              <Link to={`/${item.id}`}>
                <p>
                  {item.brand} {item.name}
                </p>
              </Link>
              <p>Brand: {item.brand}</p>
              <p>Size: {item.size}</p>
              <p>Quantity: {item.quantity}</p>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
            <div className="cart-item-right">
              <div className="cart-item-quantity">
                <button
                  onClick={() =>
                    updateQuantity(item.id, item.size, item.quantity - 1)
                  }
                >
                  -
                </button>
                <input
                  type="number"
                  value={item.quantity}
                  onChange={(e) => {
                    const newQuantity = parseInt(e.target.value);
                    if (!isNaN(newQuantity)) {
                      updateQuantity(item.id, item.size, newQuantity);
                    }
                  }}
                />
                <a
                  onClick={() =>
                    updateQuantity(item.id, item.size, item.quantity + 1)
                  }
                >
                  +
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default CartItem;
