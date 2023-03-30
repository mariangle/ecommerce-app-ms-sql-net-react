import React from 'react'
import styled from 'styled-components';
import { removeFromCart, updateQuantity } from '../store/reducers/cartReducer';
import { useDispatch, useSelector } from 'react-redux';

function CartItem() {
  const dispatch = useDispatch();
  const { items: cartItems } = useSelector(state => state.cart);

  const handleRemoveFromCart = (itemId, size) => {
    const item = cartItems.find((item) => item.product.id === itemId && item.size === size);
    dispatch(removeFromCart({ product: item.product, size }));
  };
  
  const handleUpdateQuantity = (productId, size, newQuantity) => {
    console.log('handleUpdateQuantity called with', productId, size, newQuantity);

    dispatch(updateQuantity({ productId, size, quantity: newQuantity }));
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
              <button onClick={() => handleRemoveFromCart(item.product.id, item.size)}>Remove</button>
              <Quantity>
                <button onClick={() => handleUpdateQuantity(item.product.id, item.size, item.quantity - 1)}>-</button>
                <button>{item.quantity}</button>
                <button onClick={() => handleUpdateQuantity(item.product.id, item.size, item.quantity + 1)}>+</button>
              </Quantity>
            </ItemDetails>
            <ItemPrice>
              <p>{item.product.price * item.quantity} kr.</p>
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
const Quantity = styled.div`
display: flex;
`

const ItemPrice = styled.div`
p{
  color: black;
}
`


export default CartItem;
