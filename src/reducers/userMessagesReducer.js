const initialState = {
  userMessages: []
}

export default (state = initialState, action) => {
  const { type, payload } = action;
  const newState = { ...state };
  
  switch (type) {
    default: {
      return { 
        ...state 
      }
    }
  }
}