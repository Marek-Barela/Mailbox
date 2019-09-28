import { CHANGE_MAILS_DIRECTORY_TO_SPECIFIC_TYPE, SELECT_ALL_MAILS_IN_FOLDER } from "./types";

export const changeMailsDirectoryToSpecificType = payload => {
  return {
    type: CHANGE_MAILS_DIRECTORY_TO_SPECIFIC_TYPE,
    payload
  }
}

export const selectAllMailsInFolder = payload => {
  return {
    type: SELECT_ALL_MAILS_IN_FOLDER,
    payload
  }
}