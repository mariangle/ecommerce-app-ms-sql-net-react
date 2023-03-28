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
        <ItemDetails>
          <h3>{product.brand} {product.model}</h3>
          <p>Color: {product.color}</p>
          <p>Size: {product.selectedSize}</p>
          <p>Quantity: {product.quantity}</p>
        </ItemDetails>
        <ItemPrice>
          <p>{product.price} kr.</p>
        </ItemPrice>
      </ItemInfo>
    </StyledCartItem>
  )
}

const StyledCartItem = styled.div`
display: flex;
flex: 1;
width: 100%;
margin-bottom: 1rem;
`
const ItemImage = styled.div`
width: 150px;
height: 150px;
display: flex;
align-items: center;
background: #f0f0f0;
margin-right: 1rem;
img{
  width: 100%;
  object-fit: cover;
}
`
const ItemInfo = styled.div`
display: flex;
justify-content: space-between;
width: 70%;
h3{
  font-size: 1rem;
  font-weight: 500;
}
p{
    color: var(--color-text)
  }
`

const ItemDetails = styled.div`
`
const ItemPrice = styled.div`
p{
  color: black;
}
`


export default CartItem