import {FETCH_USER_DATA} from "../actions/types";

const initialState = {
  userMessages: []
}

export default (state = initialState, action) => {
  const { type, payload } = action;
  //const newState = { ...state };

  switch (type) {
    case FETCH_USER_DATA: {
      return {
        ...state,
        userMessages: payload
      }
    }
    default: {
      return { 
        ...state 
      }
    }
  }
}