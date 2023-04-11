import React from 'react';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';

function Payment() {

    const buttonStyles = {

        layout: 'vertical',
        color: 'blue',
    };

    const onApprove = async (data, actions) => {
        const order = await actions.order.capture();
        console.log('Order details:', order);
        const name = order.payer.name.given_name;
        const email = order.payer.email_address;
        const transactionId = order.purchase_units[0].payments.captures[0].id;

        // create order in db

        // create order items in db with orderid

        alert(`Transaction completed by ${name}. Email: ${email}. Transaction ID: ${transactionId}.`);
      };

  return (
    <div className='checkout-payment'>
      <h1>Payment</h1>
      <p>Select payment option.</p>
      <PayPalScriptProvider options={{ "client-id": "sb" }}>
      <PayPalButtons
        style={buttonStyles}
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: "13.99",
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

export default Payment;
