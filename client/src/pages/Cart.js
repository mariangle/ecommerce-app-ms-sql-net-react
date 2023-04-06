import React from 'react'
import CartItems from "../components/cart/CartItem";
import { Link } from 'react-router-dom';
import { useCartData } from '../utils/hooks/useCartData';

function CartPage() {
  const { cartItems, subtotal, delivery, total } = useCartData();

  return (
    <div className='flex container'>
      <div className='cart-container flex-2'>
        <h1>Shopping Bag</h1>
        {cartItems.length === 0 ? (
          <p>There’s nothing in your bag yet.</p>
        ) : (
          <CartItems />
        )}
      </div>
      {cartItems.length > 0 && (
        <div className='cart-container flex-1'>
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
            <p>Total Price</p>
            <p>{total ? total : 0} kr.</p>
          </div>
          <Link to="/checkout"><button>Checkout</button></Link>
        </div>
      )}
    </div>
  );
}

export default CartPage