import React from 'react'
import styled from 'styled-components';

function CartItem({product}) {
  const mainImg = Array.isArray(product.images) && product.images.length > 0 ? product.images[0] : '';
  return (
    <StyledCartItem>
      <ItemImage>
        <img src={mainImg} alt={product.model} />
      </ItemImage>
      <ItemInfo>
        <h3>{product.brand} {product.model}</h3>
        <p>Color: {product.color}</p>
        <p>Size: {product.selectedSize}</p>
        <p>Quantity: {product.quantity}</p>
        <p>{product.price} kr</p>
      </ItemInfo>
    </StyledCartItem>
  )
}

const StyledCartItem = styled.div`
display: flex;
width: 100%;
`
const ItemImage = styled.div`
width: 30%;
img{
  width: 100%;
  height: 100%;
  object-fit: cover;
  background: #f0f0f0;
}
`
const ItemInfo = styled.div`
width: 70%;
`


export default CartItem