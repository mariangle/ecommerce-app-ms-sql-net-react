import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --color-text: #777777;
  }
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {

  }
  body {
    line-height: 150%;
    font-family: 'Montserrat', sans-serif;
    overflow-x: hidden;
  }
  button{
    padding: 1rem 2rem;
    cursor: pointer;
    margin: 2rem 0rem;
    background: black;
    font-weight: bold;
    color: white;
  }
  h3{
    font-size: 1.6rem;
  }
  p{
    font-size: 1rem; // clamp(1rem, 1vw + 1rem, 3rem)
  }
  a{
    text-decoration: none;
    color: black;
  }
  ul{
    list-style: none;
  }
`;

export default GlobalStyles;