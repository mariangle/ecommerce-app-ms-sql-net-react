import React from 'react'
import styled from 'styled-components';
import { removeFromCart, updateQuantity } from '../store/reducers/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { setPrice } from '../store/reducers/productSlice';

function CartItem() {
  const location = useLocation();
  const dispatch = useDispatch();
  const { items: cartItems } = useSelector(state => state.cart);

  

  let modify = false;

  if (location.pathname === '/cart') {
    modify = true 
  } else {
    modify = false
  }

  const handleRemoveFromCart = (itemId, size) => {
    const item = cartItems.find((item) => item.product.id === itemId && item.size === size); // find item in the cart that matches the given item ID and size
    
    if (item) { // safeguard against undefined items
      dispatch(removeFromCart({ product: item.product, size })); // if item exists, remove from cart
    }
  };
  
  const handleUpdateQuantity = (productId, size, newQuantity) => {
    const item = cartItems.find((item) => item.product.id === productId && item.size === size);

    if (newQuantity > 0 && item) { 
      dispatch(updateQuantity({ productId, size, quantity: newQuantity }));
    } 
    if (newQuantity === 0 && item) { 
      dispatch(removeFromCart({ product: item.product, size }));
    } 
  };

  return (
    <>
      {cartItems.map((item) => (
         <StyledCartItem key={`${item.product.id}-${item.size}`}>
          <Link to={`/${item.product.id}`}>
            <ItemImage>
              <img src={item.product.imageURL} alt={item.product.brand} />
            </ItemImage>
          </Link>
          <ItemInfo>
            <ItemDetails>
              <Link to={`/${item.product.id}`}><h3>{item.product.brand} {item.product.model}</h3></Link>
              <p>Size: {item.size}</p>
              { modify && <p>Quantity: {item.quantity}</p>}
              { modify && 
              <Quantity>
              <a onClick={() => handleUpdateQuantity(item.product.id, item.size, item.quantity - 1)}>-</a>
              <input type="number" value={item.quantity} onChange={(e) => handleUpdateQuantity(item.product.id, item.size, parseInt(e.target.value))} />
              <a onClick={() => handleUpdateQuantity(item.product.id, item.size, item.quantity + 1)}>+</a>
              </Quantity>
              }
            </ItemDetails>
              <ItemPrice>
                <p>{item.price} kr.</p>
                { modify && 
                <a onClick={() => handleRemoveFromCart(item.product.id, item.size)}>x</a>
                }
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
    color: var(--color-text);
  }
`

const ItemDetails = styled.div`
display: flex;
flex-direction: column;
a:nth-child(4){
  text-decoration: underline;
}
`
const Quantity = styled.div`
margin-top: 1.5rem;
display: flex;
justify-content: flex-start;
margin-right: 2rem;
input{
  text-align: center;
  height: 25px;
  width: 40px;
  border: 1px solid black;
  font-size: 1rem;
}
a{
  width: 20px;
  height: 25px;
  text-align: center;
  color: white;
  background: black;
}
`

const ItemPrice = styled.div`
display: flex;
flex-direction: row;  
p{
  color: black;
}
a{
  color: var(--color-text);
  margin-left: 1rem;
}
`


export default CartItem;
