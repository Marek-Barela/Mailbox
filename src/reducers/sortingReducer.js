import { SORT_MAILS_BY_TYPE } from "../actions/types";

const initialState = {
  sortedBy: "date"
}

export default (state = initialState, action) => {
  const { type, payload } = action;
  
  switch (type) {
    case SORT_MAILS_BY_TYPE: {
      return {
        ...state,
        sortedBy: payload
      }
    }
    default: {
      return { 
        ...state 
      }
    }
  }
}