import React,{ useEffect} from 'react'
import { Container } from '../styles/styles.js';
import styled from 'styled-components';
import CartItem from "../components/CartItem";

function CartPage({cart}) {
  const cartObject = Object.values(cart).reduce((acc, product) => {
    const key = `${product.id}-${product.selectedSize}`;
    if (!acc[key]) {
      acc[key] = {...product, quantity: 0};
    }
    acc[key].quantity += 1;
    return acc;
  }, {});

  const cartArray = Object.values(cartObject);

  return (
    <StyledCart>
      <Basket>
        <h4>Basket</h4>
        <ul>
          {cartArray.map((product, index) => (
            <li key={index}>
              <CartItem product={product} />
            </li>
          ))}
        </ul>
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
  @media (max-width: 850px) {
  display: block;
}
`
const Basket = styled.div`
flex: 2 1 40rem;
`
const Overview = styled.div`
flex: 1 2 30rem;
`
const Subtotal = styled.div`
`
const Delivery = styled.div`
flex: 1;
`
const TotalPrice = styled.div`
`

const CheckoutButton = styled.button`
`

export default CartPage