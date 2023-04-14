import React from 'react'
import { Link } from 'react-router-dom';
import { useCart } from '../../utils/hooks/useCart';
import { formatPrice } from '../../utils/hooks/useUtil';


function CartItem() {
  const { removeFromCart, updateQuantity, items } = useCart();

  return (  
    <>
      {items.map((item) => (
         <div className="cart-item" key={`${item.product.id}-${item.size}`}>
          <Link to={`/${item.product.productID}`}>
            <div className='cart-item-img'>
              <img src={item.product.imageURL} alt={item.product.brand} />
            </div>
          </Link>
          <div className='cart-item-about'>
            <div className='cart-item-left'>
              <Link to={`/${item.product.id}`}><p>{item.product.brand} {item.product.name}</p></Link>
              <p>Brand: {item.product.brand}</p>
              <p>Size: {item.size}</p>
              <p>Quantity: {item.quantity}</p>
              <a onClick={() => removeFromCart(item.product.id, item.size)}>Remove</a>
              </div>
              <div className='cart-item-right'>
                <p>{formatPrice(item.price)}</p>
                <div className='cart-item-quantity'>
                  <a onClick={() => updateQuantity(item.product.id, item.size, item.quantity - 1)}>-</a>
                  <input type="number" value={item.quantity} onChange={(e) => {
                      const newQuantity = parseInt(e.target.value);
                      if (!isNaN(newQuantity)) {
                        updateQuantity(item.product.id, item.size, newQuantity);
                      }
                    }} />
                    <a onClick={() => updateQuantity(item.product.id, item.size, item.quantity + 1)}>+</a>
                </div>
              </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default CartItem;
