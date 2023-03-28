import React,{ useEffect} from 'react'
import { Container, About } from '../styles/styles.js';
import styled from 'styled-components';
import CartItem from "../components/CartItem";
import { Link } from 'react-router-dom';

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

  const subtotal = cartArray.reduce((acc, product) => {
    return acc + (product.price * product.quantity);
  }, 0);
  const deliveryPrice = 0 ;
  const totalPrice = subtotal + deliveryPrice;

  function saveItems() {
    localStorage.setItem('subtotal', subtotal);
    localStorage.setItem('deliveryPrice', deliveryPrice);
    localStorage.setItem('totalPrice', totalPrice);
  }


  return (
    <StyledCart>
      <Basket>
        <h4>Basket</h4>
        {cartArray.length === 0 ? (
          <p>You have no items in your basket.</p>
          ) : (
          <ul>
              {cartArray.map((product, index) => (
            <li key={index}>
                <CartItem product={product} />
              </li>
            ))}
          </ul>
        )}
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
        <Link to="/checkout"><CheckoutButton onClick={() => saveItems()}>Checkout</CheckoutButton></Link>
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