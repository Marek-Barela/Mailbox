import {
  FETCH_USER_DATA,
  SWITCH_SINGLE_MAIL_CHECKBOX,
  SWITCH_FAVORITE_MESSAGE,
  SWITCH_ALL_MAILS_SELECTING
} from "../actions/types";

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
      findMessage.isChecked = !isChecked;
      return {
        ...state,
        userMessages: newState.userMessages
      };
    }
    case SWITCH_FAVORITE_MESSAGE: {
      const { id, isFavorite } = payload;
      const findMessage = newState.userMessages.find(
        message => message.id === id
      );

      findMessage.isFavorite = !isFavorite;
      return {
        ...state,
        userMessages: newState.userMessages
      };
    }
    case SWITCH_ALL_MAILS_SELECTING: {
      const { isChecked, messagesToSwitch } = payload;
      const prevState = newState.userMessages;

      messagesToSwitch.map(
        message => message.isChecked = isChecked 
      );

      const arraysToObject = {...messagesToSwitch, ...prevState}
      const objectToArray = Object.values(arraysToObject);
      return {
        ...state,
        userMessages: objectToArray
      }
    }
    default: {
      return {
        ...state
      };
    }
  }
};
