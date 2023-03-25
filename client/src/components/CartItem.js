import React from 'react'
import styled from 'styled-components';

function CartItem({product}) {
  const mainImg = Array.isArray(product.images) && product.images.length > 0 ? product.images[0] : '';
  return (
    <StyledCartItem>
      <img src={product.images} alt={product.model} />
      <h3>{product.brand} {product.model}</h3>
      <p>{product.color}</p>
      <p>{product.selectedSize}</p>
      <p>{product.price} kr</p>
    </StyledCartItem>
  )
}

const StyledCartItem = styled.div``

export default CartItem