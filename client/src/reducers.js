const initialState = {
    // Define your initial state here
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      // Define your actions and how they change the state here
      default:
        return state;
    }
  };
  
  export default rootReducer;