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
    @media (max-width: 1600px) {
      font-size: 80%;
    }
  }
  body {
    font-family: 'Montserrat', sans-serif;
    overflow-x: hidden;
  }
  h3{
    font-size: 1rem;
  }
  p{
    font-size: 1rem; // clamp(1rem, 1vw + 1rem, 3rem)
  }
  a{
    text-decoration: none;
    color: black;

  }
`;

export default GlobalStyles;