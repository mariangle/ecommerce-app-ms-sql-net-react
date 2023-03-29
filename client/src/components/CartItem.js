import React from 'react'
import styled from 'styled-components';
import { removeFromCart } from '../reducers/cartReducer';
import { useDispatch, useSelector } from 'react-redux';

function CartItem() {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);

  const handleRemoveFromCart = (item) => {
    dispatch(removeFromCart(item.id));
  };

  return (
    <>
      {cartItems.map((item, index) => (
        <StyledCartItem key={`${item.product.id}-${index}`}>
          <ItemImage>
            <img src={item.product.images[0]} alt={item.product.model} />
          </ItemImage>
          <ItemInfo>
            <ItemDetails>
              <h3>{item.product.brand} {item.product.model}</h3>
              <p>Size: {item.size}</p>
              <p>Quantity: {item.quantity}</p>
              <button onClick={() => handleRemoveFromCart(item)}>Remove</button>
            </ItemDetails>
            <ItemPrice>
              <p>{item.product.price} kr.</p>
            </ItemPrice>
          </ItemInfo>
        </StyledCartItem>
      ))}
    </>
  );
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


export default CartItem;
