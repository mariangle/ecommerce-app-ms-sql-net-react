export const addToCart = (item) => ({
    type: 'ADD_TO_CART',
    payload: item,
  });
  
  export const removeFromCart = (item) => ({
    type: 'REMOVE_FROM_CART',
    payload: item,
  });
  
  export const clearCart = () => ({
    type: 'CLEAR_CART',
  });