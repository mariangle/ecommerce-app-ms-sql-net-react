import React, { useState } from 'react'
import CartItems from "../components/cart/CartItem";
import { useCart } from '../utils/hooks/useCart';
import { Link } from 'react-router-dom';
import { formatPrice } from '../utils/hooks/useUtil';
import {DELIVERY_THRESHOLD} from '../store/reducers/cartSlice';

function CartPage() {
  const { discount, applyDiscount, clearCart, items, subtotal, defaultSubtotal, delivery, total, quantity } = useCart();
  const [discountCode, setDiscountCode] = useState('');

  return (
    <div className='cart flex container'>
      <div className='cart-container flex-2'>
        <h1>Shopping Bag {quantity > 0 ? "(" + quantity + " " + (quantity === 1 ? "product" : "products") + ")" : ""}</h1>
          {items.length === 0 ? (
            <p>There’s nothing in your bag yet.</p>
          ) : (
            <div className='cart-items'>
              <CartItems />
              <a onClick={clearCart}>Clear Cart</a>
            </div>
          )}
      </div>
      {quantity > 0 && (
        <div className='cart-summary'>
          <div className='summary-content'>
            <h2>Summary</h2>
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
            <div className='line'></div>
            <div className="space-between bold" >
              <p>Total</p>
              <p>{total ? total : 0}</p>
            </div>
            <Link to="/checkout"><button>CHECKOUT</button></Link>
              {defaultSubtotal < DELIVERY_THRESHOLD ? (
                <p>
                  Spend {formatPrice(DELIVERY_THRESHOLD - defaultSubtotal)} more and get free shipping!
                </p>
              ) : ( <p>Your order is eligible  for free shipping.</p> )
              }
          </div>
          { !discount > 0 && 
            <div className="discount-code">
              <input placeholder="Discount Code" type="text" onChange={(e) => setDiscountCode(e.target.value)} />
              <button  onClick={() => applyDiscount(discountCode)}>Apply</button>
            </div>
          }
        </div>
        )}
      </div>
  );
}

export default CartPage