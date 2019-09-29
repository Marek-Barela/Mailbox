import {
  FETCH_USER_DATA,
  SWITCH_SINGLE_MAIL_CHECKBOX,
  SWITCH_FAVORITE_MESSAGE,
  SWITCH_ALL_MAILS_SELECTING,
  CHANGE_MAILS_DIRECTORY_TO_SPECIFIC_TYPE,
  SELECT_ALL_MAILS_IN_FOLDER,
  SELECT_UNREAD_MESSAGES_IN_FOLDER,
  SELECT_READED_MESSAGES_IN_FOLDER,
  UNSELECT_ALL_MAILS_IN_FOLDER,
  UNSELECT_MAILS,
  SELECT_MESSAGE_AS_READED
} from "../actions/types";

const initialState = {
  userMessages: [],
  isLoading: true
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  const newState = { ...state };

  switch (type) {
    case FETCH_USER_DATA: {
      return {
        ...state,
        userMessages: payload,
        isLoading: false
      };
    }
    case SWITCH_SINGLE_MAIL_CHECKBOX: {
      const { id, isChecked } = payload;
      const findMessage = findMailById(newState.userMessages, id);
      findMessage.isChecked = !isChecked;
      return {
        ...state,
        userMessages: newState.userMessages
      };
    }
    case SWITCH_FAVORITE_MESSAGE: {
      const { id, isFavorite } = payload;
      const findMessage = findMailById(newState.userMessages, id);
      findMessage.isFavorite = !isFavorite;
      return {
        ...state,
        userMessages: newState.userMessages
      };
    }
    case SELECT_MESSAGE_AS_READED: {
      const findMessage = findMailById(newState.userMessages, payload);
      if(findMessage !== undefined) {
        findMessage.readed = true;
      }
      return {
        ...state,
        userMessages: newState.userMessages
      }
    }
    case SWITCH_ALL_MAILS_SELECTING: {
      const { isChecked, messagesToSwitch } = payload;
      const prevState = newState.userMessages;
      switchAllMailsSelecting(messagesToSwitch, isChecked);
      const getConvertedArray = convertObjectsToArray(messagesToSwitch, prevState);
      return {
        ...state,
        userMessages: getConvertedArray
      }
    }
    case CHANGE_MAILS_DIRECTORY_TO_SPECIFIC_TYPE: {
      const selectedMails = getSelectedMails(newState.userMessages);
      asignNewTypeOfMail(selectedMails, payload);
      unselectMails(selectedMails);
      return {
        ...state,
        userMessages: newState.userMessages
      }
    }
    case SELECT_ALL_MAILS_IN_FOLDER: {
      const messagesToSwitch = [...payload];
      const prevState = newState.userMessages;
      selectMails(messagesToSwitch)
      const getConvertedArray = convertObjectsToArray(messagesToSwitch, prevState);
      return {
        ...state,
        userMessages: getConvertedArray
      }
    }
    case SELECT_UNREAD_MESSAGES_IN_FOLDER: {
      const messagesToSwitch = [...payload];
      const prevState = newState.userMessages;
      const getMails = selectUnreadMails(messagesToSwitch);
      unselectMails(messagesToSwitch);
      selectMails(getMails);
      const getConvertedArray = convertObjectsToArray(messagesToSwitch, prevState);
      return {
        ...state,
        userMessages: getConvertedArray
      }
    }
    case SELECT_READED_MESSAGES_IN_FOLDER: {
      const messagesToSwitch = [...payload];
      const prevState = newState.userMessages;
      const getMails =  selectReadedMails(messagesToSwitch);
      unselectMails(messagesToSwitch);
      selectMails(getMails);
      const getConvertedArray = convertObjectsToArray(messagesToSwitch, prevState);
      return {
        ...state,
        userMessages: getConvertedArray
      }
    }
    case UNSELECT_ALL_MAILS_IN_FOLDER: {
      const messagesToSwitch = [...payload];
      const prevState = newState.userMessages;
      unselectMails(messagesToSwitch);
      const getConvertedArray = convertObjectsToArray(messagesToSwitch, prevState);
      return {
        ...state,
        userMessages: getConvertedArray
      }
    }
    case UNSELECT_MAILS: {
      unselectMails(newState.userMessages)
      return {
        ...state,
        userMessages: newState.userMessages
      }
    }
    default: {
      return {
        ...state
      };
    }
  }
};

const convertObjectsToArray = (object1, object2) => {
  const connectedObject = connectAndOverrideObjects(object1, object2)
  return Object.values(connectedObject);
}

const connectAndOverrideObjects = (object1, object2) => {
  return {...object1, ...object2}
}

const unselectMails = mails => mails.forEach(mail => mail.isChecked = false);
const selectMails = mails => mails.forEach(mail => mail.isChecked = true);
const selectReadedMails = mails => mails.filter(mail => mail.readed === true);
const selectUnreadMails = mails => mails.filter(mail => mail.readed === false);
const getSelectedMails = mails => mails.filter(mail => mail.isChecked === true);
const asignNewTypeOfMail = (mails, type) => mails.forEach(mail => mail.typeOfMessage = type);
const switchAllMailsSelecting = (mails, isChecked) => mails.forEach(mails => mails.isChecked = isChecked);
const findMailById = (mails, id) => mails.find(message => message.id === id);