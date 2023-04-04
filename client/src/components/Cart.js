import React from 'react'
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons';

function Cart() {
  const cartItems = useSelector(state => state.cart.items);
  const cartItemCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <StyledCart>
      <span>{cartItemCount > 9 ? "9+": cartItemCount } </span>
      <FontAwesomeIcon className="icon" icon={faBasketShopping} style={{ color: 'white'}} />
    </StyledCart>
  );
}

const StyledCart = styled.div`
height: 35px;
width: 35px;
position: relative;
display: flex;
align-items: center;
justify-content: center;
.icon{
  height: 100%;
  width: 100%;
  position: absolute;
}
span{
  z-index: 9999;
  top: 0;
  right: 0;
  height: 20px;
  width: 20px;
  text-align: center;
  border-radius: 50%;
  background: #d30000;
  color: white;
  font-size: 0.8rem;
  position: absolute;
}
`

export default Cart;