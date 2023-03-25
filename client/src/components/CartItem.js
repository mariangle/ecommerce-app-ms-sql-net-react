import React from 'react'
import styled from 'styled-components';
import { Container } from '../styles/styles';

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

const StyledCartItem = styled(Container)`
display: flex;
flex: 1;
width: 100%;
`
const ItemImage = styled.div`
width: 30%;
background: #f0f0f0;
padding: 1rem;
img{
  width: 100%;
  height: 100%;
  object-fit: cover;
}
`
const ItemInfo = styled.div`
width: 70%;
h3{
  font-size: 1rem;
}
`


export default CartItem