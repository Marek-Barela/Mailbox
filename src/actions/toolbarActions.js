import {
  CHANGE_MAILS_DIRECTORY_TO_SPECIFIC_TYPE,
  SELECT_ALL_MAILS_IN_FOLDER,
  SELECT_UNREAD_MESSAGES_IN_FOLDER,
  SELECT_READED_MESSAGES_IN_FOLDER,
  UNSELECT_ALL_MAILS_IN_FOLDER
} from "./types";

export const changeMailsDirectoryToSpecificType = payload => {
  return {
    type: CHANGE_MAILS_DIRECTORY_TO_SPECIFIC_TYPE,
    payload
  };
};

export const selectAllMailsInFolder = payload => {
  return {
    type: SELECT_ALL_MAILS_IN_FOLDER,
    payload
  };
};

export const selectUnreadMessagesInFolder = payload => {
  return {
    type: SELECT_UNREAD_MESSAGES_IN_FOLDER,
    payload
  };
};

export const selectReadedMessagesInFolder = payload => {
  return {
    type: SELECT_READED_MESSAGES_IN_FOLDER,
    payload
  };
};

export const unselectAllMailsInFolder = payload => {
  return {
    type: UNSELECT_ALL_MAILS_IN_FOLDER,
    payload
  };
};
