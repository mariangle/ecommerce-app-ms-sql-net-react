import React from 'react'
import Basket from "../assets/images/basket.png"

function Cart({ cart, setCart }) {
    return (
      <div>
        <span>cart: {cart.length}</span>
      </div>
    );
  }
  
  export default Cart;