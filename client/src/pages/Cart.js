import React from 'react'
import CartItems from "../components/cart/CartItem";
import { useCart } from '../utils/hooks/useCart';
import { Link } from 'react-router-dom';
import { clear } from '@testing-library/user-event/dist/clear';

function CartPage() {
  const { clearCart, items, subtotal, delivery, total, quantity } = useCart();

  return (
    <div className='cart flex container'>
      <div className='cart-container flex-2'>
        <h1>Shopping Bag {quantity > 0 ? "(" + quantity + " " + (quantity === 1 ? "product" : "products") + ")" : ""}</h1>
          {items.length === 0 ? (
            <p>There’s nothing in your bag yet.</p>
          ) : (
            <div>
              <CartItems />
              <a onClick={clearCart}>Clear Cart</a>
            </div>
          )}
      </div>
      {quantity > 0 && (
        <div className='summary-container'>
          <h2>Summary</h2>
          <div className="space-between">
            <p>Subtotal</p>
            <p>{subtotal ? subtotal :0} kr.</p>
          </div>
          <div className="space-between">
            <p>Delivery</p>
            <p>{delivery ? delivery + " kr" : "Free"}</p>
          </div>
          <div className='line'></div>
          <div className="space-between">
            <p>Total</p>
            <p>{total ? total : 0} kr.</p>
          </div>
          <Link to="/checkout"><button>CHECKOUT</button></Link>
          {subtotal < 2000 && <p>You are {2000 - subtotal} kr away for free shipping!</p> }
        </div>
      )}
    </div>
  );
}

export default CartPage