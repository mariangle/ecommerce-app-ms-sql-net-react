import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --color-text: #777777;
    --color-black: #141414;
  }
  input, textarea{
    font-family: 'Montserrat', sans-serif;
    width: 100%;
    padding: 0.5rem;
    font-size: 1rem;
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
      background: #e7e7e7;
    }
  }
  td{
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  @media only screen and (max-width: 600px) {
  table,
  thead,
  tbody,
  th,
  td,
  tr {
    display: block;
  }

  th {
    text-align: center;
  }

  td {
    border-bottom: none;
  }

  td:before {
    content: attr(data-label);
    float: left;
    font-weight: bold;
  }
}
`;

export default GlobalStyles;