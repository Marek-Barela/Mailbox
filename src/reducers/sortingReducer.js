import { SORT_MAILS_BY_TYPE, CHANGE_SORTING_DIRECTION } from "../actions/types";

const initialState = {
  sortedBy: "date",
  fromNewestToOldest: true
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
    case CHANGE_SORTING_DIRECTION: {
      return {
        ...state,
        fromNewestToOldest: payload
      }
    }
    default: {
      return { 
        ...state 
      }
    }
  }
}