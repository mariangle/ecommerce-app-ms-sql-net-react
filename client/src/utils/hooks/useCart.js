import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart, updateQuantity, calculateSubtotal, getTotal, updateDelivery, applyDiscount, clearCart } from '../../store/reducers/cartSlice';

export const useCart = () => {
  const dispatch = useDispatch();
  const items = useSelector(state => state.cart.items);
  const subtotal = useSelector(state => state.cart.subtotal);
  const delivery = useSelector(state => state.cart.delivery);
  const discount = useSelector(state => state.cart.discount);
  const total = useSelector(state => state.cart.total);
  const quantity = items.reduce((acc, item) => acc + item.quantity, 0);

  useEffect(() => {
    dispatch(applyDiscount({ discount }));
    dispatch(calculateSubtotal());
  }, [items, dispatch, quantity]);

  useEffect(() => {
    dispatch(getTotal());
  }, [subtotal, delivery, dispatch]);

  const addToCartHandler = (item) => {
    console.log("addtocarthandler", item)
    dispatch(addToCart(item));
  };
  
  const removeFromCartHandler = (itemId, size) => {
    const item = items.find((item) => item.product.id === itemId && item.size === size); 
    dispatch(removeFromCart({ product: item.product, size }));
  };
  
  const updateQuantityHandler = (productId, size, newQuantity) => {
    if (newQuantity === 0) {
      const item = items.find((item) => item.product.id === productId && item.size === size);
      if (item) {
        dispatch(removeFromCart({ product: item.product, size }));
      }
    } else if (newQuantity <= 10) {
      dispatch(updateQuantity({ productId, size, quantity: newQuantity }));
    }
  };

  const clearCartHandler = () => {
    dispatch(clearCart());
  };

  return { 
    addToCart: addToCartHandler, 
    removeFromCart: removeFromCartHandler, 
    updateQuantity: updateQuantityHandler, 
    clearCart: clearCartHandler, 
    items, 
    subtotal, 
    delivery, total, 
    quantity 
  };
};



