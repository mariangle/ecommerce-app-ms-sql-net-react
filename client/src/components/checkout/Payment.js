import React, { useState } from 'react';

function Payment() {

  return (
    <div className='checkout-payment'>
      <h1>PAYMENT OPTIONS</h1>
      <div className="line-divider"></div>
      <div className="payment-option">
        <label>
          <input type="radio" value="creditCard" checked readOnly />
          Credit Card &#40;Free&#41;
        </label>  
      </div>
      <p>You will be redirected to PayPal to complete your payment.</p>
    </div>
  )
}

export default Payment;
