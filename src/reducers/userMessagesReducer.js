import { FETCH_USER_DATA, SWITCH_SINGLE_MAIL_CHECKBOX } from "../actions/types";

const initialState = {
  userMessages: []
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  const newState = { ...state };

  switch (type) {
    case FETCH_USER_DATA: {
      return {
        ...state,
        userMessages: payload
      };
    }
    case SWITCH_SINGLE_MAIL_CHECKBOX: {
      const { id, isChecked } = payload;
      const findMessage = newState.userMessages.find(
        message => message.id === id
      );
      findMessage.isChecked = isChecked;
      return {
        ...state,
        userMessages: newState.userMessages
      };
    }
    default: {
      return {
        ...state
      };
    }
  }
};
