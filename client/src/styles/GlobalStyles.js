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
    margin-top: 2rem;
    background: var(--color-black);
    font-weight: bold;
    color: white;
    width: 100%;
    &:hover{
      background: #252525;
    }
  }
  input, textarea{
    font-family: 'Montserrat', sans-serif;
    width: 100%;
    padding: 0.5rem;
    font-size: 1rem;
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
  table{
    width: 100%;
    box-sizing: border-box;
  }
  th, td {
    padding:8px;
  }
  tr{
    th{
      font-weight: lighter;
      background: var(--color-black);
      text-align: left;
      color: white;
    }
    :nth-child(2n){
      background: #a2d2f0;
    }
  }
  td{
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export default GlobalStyles;