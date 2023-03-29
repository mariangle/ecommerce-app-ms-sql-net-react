import React,{ useEffect} from 'react'
import { Container, About } from '../styles/styles.js';
import styled from 'styled-components';
import CartItems from "../components/CartItem";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function CartPage() {
  const cartItems = useSelector(state => state.cart.items);
  const subtotal = cartItems.reduce((acc, product) => {
    return acc + (product.price * product.quantity);
  }, 0);
  const deliveryPrice = 0 ;
  const totalPrice = subtotal + deliveryPrice;

  return (
    <StyledCart>
      <Basket>
        <h4>Basket</h4>
        {cartItems.length === 0 ? (
        <p>You have no items in your cart.</p>
         ) : 
         ( <CartItems />)}
      </Basket>
      <Overview>
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
        <Link to="/checkout"><CheckoutButton>Checkout</CheckoutButton></Link>
      </Overview>
    </StyledCart>
  )
}


const StyledCart = styled(Container)`
max-width: 1200px;
  @media (max-width: 850px) {
  display: block;
}
`
const Basket = styled.div`
flex: 2;
`
const Overview = styled(About)`
  flex: 1;
  a{
    width: 100%;
  }
`

const Cost = styled.div`
  margin-bottom: 0.5rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const CheckoutButton = styled.button`
`

export default CartPage