// external libaries 
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
// local components and styles
import Cart from './Cart';
import { Container } from '../styles/styles';

function Header() {
  return (
    <StyledHeader>
      <StyledNav>
        <h1>
          <Link to="/">STORE</Link>
        </h1>
        <NavLinks>
          <li>
            <input type="search" placeholder="Search" />
          </li>
          <Link to="/cart">
            <Cart/>
          </Link>
        </NavLinks>
      </StyledNav>
    </StyledHeader>
  );
}
const StyledHeader = styled.nav`  
border-bottom: 1px solid grey;
position: sticky;
@media (max-width: 850px) {
  display: flex;
}
`
const StyledNav = styled(Container)`
min-height: 5vh;
padding: 1.5rem 1rem;
justify-content: space-between;
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

export default Header