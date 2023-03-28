export const addToCart = (itemId) => ({
  type: 'ADD_TO_CART',
  payload: itemId,
});
  
  export const removeFromCart = (item) => ({
    type: 'REMOVE_FROM_CART',
    payload: item,
  });
  
  export const clearCart = () => ({
    type: 'CLEAR_CART',
  });