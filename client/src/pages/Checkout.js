import React, {useState} from 'react'
import { Container, About, Divider } from '../styles/styles'
import styled from 'styled-components'
import { useForm } from 'react-hook-form';
import CartItem from "../components/CartItem";
import { Link } from 'react-router-dom';
import { useCartData } from '../utils/hooks/useCartData';


function CheckoutPage() {
  const { subtotal, delivery, total } = useCartData();
  const { register, handleSubmit } = useForm();

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
            <Cost>
              Subtotal
              <p>{subtotal} kr.</p>
            </Cost>
            <Cost>
              <p>Delivery</p>
              <p>{delivery} kr</p>
            </Cost>
            <Cost>
            <p>Total Price</p>
            <p>{total} kr.</p>
            </Cost>
            <button type="submit">Place Order</button>
          </CartSection>
          <CartSection>
            <h4>In Your Bag</h4>
            <CartItem/>
          </CartSection>
        </Cart>
    </StyledCheckout>
  )
}

const StyledCheckout = styled(Container)`
justify-content: center;
flex-wrap: wrap;

`

const Transaction = styled(About)`
margin-left: 0rem;
`
const Cart = styled(About)`
flex-basis: 4 0%;`

const TransactionSection = styled.div`
margin-bottom: 2rem;
width: 100%;

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

const Cost = styled.div`
display: flex;
justify-content: space-between;
`

export default CheckoutPage