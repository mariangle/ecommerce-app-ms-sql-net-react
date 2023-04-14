import React, { useState } from 'react'
import OrderSummary from './OrderSummary'
import CartItem from "../cart/CartItem";
import { useUser} from "../../utils/hooks/useUser"
import { useCart } from "../../utils/hooks/useCart"


function Confirmation({onPaymentComplete}) {
  const { currentUser } = useUser();
  const { discount, applyDiscount } = useCart();
  const [discountCode, setDiscountCode] = useState('');

  return (
    <div className='checkout-contentbox flex'>
      <div className='checkout-left'>
        <h1>REVIEW YOUR ORDER</h1>  
        <div className="line-divider"></div>
        <CartItem></CartItem>
      </div>
      <div className='checkout-right'>
      <h2>SHIPPING ADDRESS</h2>
        <div className="line-divider"></div>
          <p>{currentUser?.firstName} {currentUser?.lastName}</p>
          <p>{currentUser?.address}</p>
          <p>{currentUser?.postalCode} {currentUser?.city}</p>
          <p>Denmark</p>
          { !discount > 0 && 
            <div className="discount-code">
              <input placeholder="Discount Code" type="text" onChange={(e) => setDiscountCode(e.target.value)} />
              <button onClick={() => applyDiscount(discountCode)}>Apply</button>
            </div>
          }
        <OrderSummary onPaymentComplete={onPaymentComplete}/>
      </div>
    </div>
  )
}

export default Confirmation