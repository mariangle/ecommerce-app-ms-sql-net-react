import React, {useState} from 'react'
import { Container, About, Image } from '../styles/styles'
import styled from 'styled-components'
import { useForm } from 'react-hook-form';


function CheckoutPage() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <StyledCheckout>
        <Transaction>
        <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <h2>Contact information</h2>
          <label>
            Email
            <input {...register('email', { required: true })} />
          </label>
        </div>
        <div>
          <h2>Shipping address</h2>
          <Divider>
            <label>
              First Name
              <input placeholder='hej' {...register('firstName', { required: true })} />
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
        </div>
        <div>
          <h2>Payment</h2>
          <label>
            Cardholder Name
            <input {...register('cardholderName', { required: true })} />
          </label>
          <label>
            Card Number
            <input {...register('cardNumber', { required: true })} />
          </label>
          <label>
            Expiry Date
            <input {...register('expiryDate', { required: true })} />
          </label>
          <label>
            CVV:
            <input {...register('cvv', { required: true })} />
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
        </Transaction>
        <Cart>
            <h4>In your bag</h4>
        </Cart>
    </StyledCheckout>
  )
}

const StyledCheckout = styled(Container)`
justify-content: space-between;
@media (max-width: 1000px) {
    display: block;
  }
`

const Transaction = styled(About)`
margin-left: 0rem;

`
const Cart = styled.div`
flex: 1;
`

const Form = styled.form`
width: 100%;

`

const Label = styled.label`
margin-bottom: 1rem;

`
const Input = styled.input`

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

export default CheckoutPage