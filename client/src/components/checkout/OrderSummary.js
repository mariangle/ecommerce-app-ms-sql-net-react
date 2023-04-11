import React from 'react'
import { useCart } from "../../utils/hooks/useCart"
import CartItem from "../cart/CartItem";


function OrderSummary() {
    const { subtotal, delivery, total } = useCart();

  return (
    <div className='checkout-order-summary'>
        <div className="divider">
            <input placeholder="Discount Code" type="text" />
            <button className='second-button'>Apply</button>
        </div>
        <div className="space-between">
            <p>Subtotal</p>
            <p>{subtotal} kr</p>
        </div>
        <div className="space-between">
            <p>Delivery</p>
            <p>{delivery} kr</p>
        </div>
        <div className="line"></div>
        <div className="space-between">
            <p>Total</p>
            <p>{total} kr</p>
        </div>
    </div>
  )
}

export default OrderSummary