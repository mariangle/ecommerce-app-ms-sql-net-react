// external libaries 
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
// local components and styles
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { Container } from '../styles/styles';
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';

function Header() {

  const cartItems = useSelector(state => state.cart.items);
  const cartItemCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  return (
    <StyledHeader>
      <StyledNav>
        <Link to="/"><h1>STORE</h1></Link>
        <NavLinks>
          <li>
            <Link to="/authentication">
              <FontAwesomeIcon className="icon" icon={faUser} style={{ color: "white" }} />
            </Link>
          </li>
          <li>
            <Link to="/cart">
              <Cart>
                <span>{cartItemCount > 9 ? "9+": cartItemCount } </span>
                <FontAwesomeIcon className="icon" icon={faBasketShopping} style={{ color: 'white'}} />
              </Cart>
            </Link>
          </li>
        </NavLinks>
      </StyledNav>
    </StyledHeader>
  );
}
const StyledHeader = styled.nav`  
background: var(--color-black);
border-bottom: 1px solid grey;
position: sticky;
@media (max-width: 850px) {
  display: flex;
}
h1{
  color: white;
  font-size: 1.2rem;
}
`
const StyledNav = styled(Container)`
min-height: 5vh;
padding: 1rem 1rem;
justify-content: space-between;
align-items: center;
`;

const NavLinks = styled.ul` 
display: flex;
justify-content: center;
align-items: center;
gap: 1rem;
li input{
  padding: 0.5rem;
}
`


const Cart = styled.div`
height: 35px;
width: 35px;
position: relative;
display: flex;
align-items: center;
justify-content: center;
span{
  z-index: 9999;
  top: 0;
  right: 0;
  height: 20px;
  width: 20px;
  text-align: center;
  border-radius: 50%;
  background: #b80000;
  color: white;
  font-size: 0.8rem;
  position: absolute;
}
`

export default Header