import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Cart from './Cart';

function Header(props) {
  const { cart, setCart } = props;

  return (
    <StyledHeader>
      <StyledNav>
        <h1>
          <Link to="/">Store</Link>
        </h1>
        <NavLinks>
          <li>
            <input type="search" placeholder="Search" />
          </li>
          <Link to="/cart">
            <Cart cart={cart} setCart={setCart} key={cart.length} />
          </Link>
        </NavLinks>
      </StyledNav>
    </StyledHeader>
  );
}
const StyledHeader = styled.nav`  
border-bottom: 1px solid grey;
position: sticky;
width: 100%;
`
const StyledNav = styled.nav`
display: flex;
align-items: center;
justify-content: space-between;
flex-direction: row;
padding: 1rem 0rem;
margin: 0rem 15rem;  
width: 80%;
margin: auto;
`

const NavLinks = styled.ul` 
display: flex;
justify-content: center;
align-items: center;
gap: 1rem;
li input{
  padding: 0.5rem;
}
`


export default Header