import React, {useState} from 'react'
import { Container, About, Image } from '../styles/styles'
import styled from 'styled-components'
import { useForm } from 'react-hook-form';
import CartItem from "../components/CartItem";
import { Link } from 'react-router-dom';


function CheckoutPage({cart}) {
  const subtotal = localStorage.getItem('subtotal');
const deliveryPrice = localStorage.getItem('deliveryPrice');
const totalPrice = localStorage.getItem('totalPrice');

  const { register, handleSubmit } = useForm();
  const cartObject = Object.values(cart).reduce((acc, product) => {
    const key = `${product.id}-${product.selectedSize}`;
    if (!acc[key]) {
      acc[key] = {...product, quantity: 0};
    }
    acc[key].quantity += 1;
    return acc;
  }, {}); 
  const cartArray = Object.values(cartObject);


  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <StyledCheckout>
        <Transaction>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <TransactionSection>
              <h2>Contact information</h2>
              <label>
                Email
                <input {...register('email', { required: true })} />
              </label>
            </TransactionSection>
            <TransactionSection>
              <h2>Shipping address</h2>
              <Divider>
                <label>
                  First Name
                  <input {...register('firstName', { required: true })} />
                </label>
                <label>
                  Last Name
                  <input {...register('lastName', { required: true })} />
                </label>
              </Divider>
              <label>
                Phone Number
                <input {...register('phone', { required: true })} />
              </label>
              <label>
                Address
                <input {...register('address', { required: true })} />
              </label>
              <Divider>
                <label>
                  City
                  <input {...register('city', { required: true })} />
                </label>
                <label>
                  Postal Code
                  <input {...register('zipCode', { required: true })} />
                </label>
              </Divider>
            </TransactionSection>
            <TransactionSection>
              <h2>Payment</h2>
              <label>
                Cardholder Name
                <input {...register('cardholderName', { required: true })} />
              </label>
              <label>
                Card Number
                <input {...register('cardNumber', { required: true })} />
              </label>
              <Divider>
              <Label>
                Expiry Date
                <select {...register('expiryMonth', { required: true })}>
                  <option value="">Month</option>
                  <option value="01">01</option>
                  <option value="02">02</option>
                  <option value="03">03</option>
                  <option value="04">04</option>
                  <option value="05">05</option>
                  <option value="06">06</option>
                  <option value="07">07</option>
                  <option value="08">08</option>
                  <option value="09">09</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                </select>
                <select {...register('expiryYear', { required: true })}>
                  <option value="">Year</option>
                  <option value="2022">2022</option>
                  <option value="2023">2023</option>
                  <option value="2024">2024</option>
                  <option value="2025">2025</option>
                  <option value="2026">2026</option>
                  <option value="2027">2027</option>
                  <option value="2028">2028</option>
                  <option value="2029">2029</option>
                  <option value="2030">2030</option>
                </select>
              </Label>
              <label>
                CVV:
                <input {...register('cvv', { required: true })} />
              </label>
              </Divider>
            </TransactionSection>
        <Divider>
          <Link to="/cart"><button>Back</button></Link>
        </Divider>
      </Form>
        </Transaction>
        <Cart>
          <CartSection>
            <h4>Order Summary</h4>
            <h4>Overview</h4>
            <Cost>
              Subtotal
              <p>{subtotal} kr.</p>
            </Cost>
            <Cost>
              <p>Delivery</p>
              <p>{deliveryPrice ? deliveryPrice + " kr." : "Free"}</p>
            </Cost>
            <Cost>
            <p>Total Price</p>
            <p>{totalPrice} kr.</p>
            </Cost>
            <button type="submit">Place Order</button>
          </CartSection>
          <CartSection>
            <h4>Your Order</h4>
              {cartArray.map((product, index) => (
              <li key={index}>
                  <CartItem product={product} />
                </li>
              ))}
          </CartSection>
        </Cart>
    </StyledCheckout>
  )
}

const StyledCheckout = styled(Container)`
justify-content: center;
flex-wrap: wrap;
@media (max-width: 768px) {
    flex-direction: column;
  }
`

const Transaction = styled(About)`
margin-left: 0rem;
flex-basis: 50%;
`
const Cart = styled(About)`
flex-basis: 4 0%;`

const TransactionSection = styled.div`
margin-bottom: 2rem;
`

const Form = styled.form`
`

const Label = styled.label`
display: block;
margin: 1rem 0rem;
`
const CartSection = styled.div`
width: 100%;
`

const Divider = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
gap: 1rem;
label{
  width: 100%;
}
`

const Cost = styled.div`
`

export default CheckoutPage