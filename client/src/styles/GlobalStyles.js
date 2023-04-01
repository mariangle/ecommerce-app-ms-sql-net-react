import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --color-text: #777777;
    --color-black: #141414;
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
    background: var(--color-black);
    font-weight: bold;
    color: white;
    width: 100%;
    &:hover{
      background: #252525;
    }
  }
  input{
    width: 100%;
    padding: 0.5rem;
    font-size: 1.2rem;
  }
  h3{
    font-size: 1.6rem;
  }
  h4{
    font-size: 1.6rem;
    font-weight: lighter;
    margin-bottom: 2rem;
  }
  p{
    font-size: 1rem; 
  }
  a{
    text-decoration: none;
    color: black;
    cursor: pointer;
  }
  ul{
    list-style: none;
  }
  li{
    list-style: none;
  }
  input[type=number] {
  -moz-appearance: textfield;
  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export default GlobalStyles;