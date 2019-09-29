import { SORT_MAILS_BY_TYPE, CHANGE_SORTING_DIRECTION, RESET_SORTING_BAR } from "../actions/types";

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
    case RESET_SORTING_BAR: {
      return {
        ...state,
        sortedBy: "date",
        fromNewestToOldest: true
      }
    }
    default: {
      return { 
        ...state 
      }
    }
  }
}