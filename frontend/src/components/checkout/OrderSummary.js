import React, { useEffect } from 'react'
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
import { useCart } from "../../utils/hooks/useCart"


function OrderSummary({onPaymentComplete}) {
    const { discount } = useCart();
    const buttonStyles = {
        layout: 'vertical',
        color: 'blue',
        label: 'checkout',
    };
    const { subtotal, delivery, total, defaultTotal, clearCart } = useCart();
  
    const onApprove = async (data, actions) => {
        const order = await actions.order.capture();
        console.log('Order details:', order);
        const email = order.payer.email_address;
        const transactionId = order.purchase_units[0].payments.captures[0].id;
        clearCart();
        alert(`An order confirmation will be sent to email: ${email}. Transaction ID: ${transactionId}.`);
        onPaymentComplete();
      };

  return (
    <div className='order-summary'>
        <div className="space-between">
            <p>Subtotal</p>
            <p>{subtotal}</p>
        </div>
        {discount > 0 && (
              <div className="space-between">
                <p>Discount</p>
                <p>-10%</p>
              </div>
        )}
        <div className="space-between">
            <p>Delivery</p>
            <p>{delivery}</p>
        </div>
        <div className="line"></div>
        <div className="space-between bold">
            <p>Total</p>
            <p>{total}</p>
        </div>
        <PayPalScriptProvider options={{ "client-id": "sb", currency: "DKK" }}>
      <PayPalButtons
        style={buttonStyles}
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  currency_code: "DKK",
                  value: 2025                
                },
              },
            ],
          });
        }}
        onApprove={onApprove}
      />
    </PayPalScriptProvider>
    </div>
  )
}

export default OrderSummary