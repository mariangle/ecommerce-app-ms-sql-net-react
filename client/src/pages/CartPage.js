import React from 'react'
import { Container } from '../styles/styles.js';
import styled from 'styled-components';
import CartItem from "../components/CartItem";

function Cart() {
  return (
    <StyledCart>
      <Basket>
        <h4>Basket</h4>
        <CartItem></CartItem>
      </Basket>
      <Overview>
        <h4>Overview</h4>
        <Subtotal>
          <p>Subtotal</p>
        </Subtotal>
        <Delivery>
          <p>Delivery</p>
        </Delivery>
        <TotalPrice>
        <p>Total Price</p>
        </TotalPrice>
        <CheckoutButton>Checkout</CheckoutButton>
      </Overview>
    </StyledCart>
  )
}

const StyledCart = styled(Container)`
align-items: flex-start;
width: 50%;
`
const Basket = styled.div`
flex: 2;
`
const Overview = styled.div`
flex: 1;
`
const Subtotal = styled.div`
flex: 1;
`
const Delivery = styled.div`
flex: 1;
`
const TotalPrice = styled.div`
flex: 1;
`

const CheckoutButton = styled.button`
width: 100%;
`

export default Cart