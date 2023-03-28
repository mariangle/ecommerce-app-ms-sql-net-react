const initialState = {
    items: [],
    total: 0,
  };
  
  export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TO_CART':
        return {
          ...state,
          items: [...state.items, action.payload],
          total: state.total + action.payload.price,
        };
      case 'REMOVE_FROM_CART':
        const updatedItems = state.items.filter((item) => item.id !== action.payload.id);
        return {
          ...state,
          items: updatedItems,
          total: state.total - action.payload.price,
        };
      case 'CLEAR_CART':
        return {
          ...state,
          items: [],
          total: 0,
        };
      default:
        return state;
    }
  };