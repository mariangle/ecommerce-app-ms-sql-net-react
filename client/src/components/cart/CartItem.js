import React from 'react'
import { removeFromCart, updateQuantity } from '../../store/reducers/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';

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
    const item = cartItems.find((item) => item.product.id === itemId && item.size === size); 
    
    if (item) { // safeguard against undefined items
      dispatch(removeFromCart({ product: item.product, size })); 
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
         <div className="cart-item" key={`${item.product.id}-${item.size}`}>
          <Link to={`/${item.product.productID}`}>
            <div className='cart-item-img'>
              <img src={item.product.imageURL} alt={item.product.brand} />
            </div>
          </Link>
          <div className='cart-item-about'>
            <div className='cart-item-details'>
              <Link to={`/${item.product.id}`}><h3>{item.product.brand} {item.product.model}</h3></Link>
              <p>Size: {item.size}</p>
              { modify && <p>Quantity: {item.quantity}</p>}
              { modify && 
              <div className='cart-item-quantity'>
              <a onClick={() => handleUpdateQuantity(item.product.id, item.size, item.quantity - 1)}>-</a>
              <input type="number" value={item.quantity} onChange={(e) => handleUpdateQuantity(item.product.id, item.size, parseInt(e.target.value))} />
              <a onClick={() => handleUpdateQuantity(item.product.id, item.size, item.quantity + 1)}>+</a>  
              </div>
              }
              </div>
              <div className='cart-item-price'>
                <p>{item.price} kr.</p>
                { modify && 
                <a onClick={() => handleRemoveFromCart(item.product.id, item.size)}>x</a>
                }
              </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default CartItem;
