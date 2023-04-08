import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --color-text: #777777;
    --color-black: #141414;
  }
  p{
    font-size: 1rem; 
  }
  a{
    text-decoration: none;
    color: black;
    cursor: pointer;
  }
  input[type=number] {
  -moz-appearance: textfield;
  appearance: text;
  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export default GlobalStyles;

