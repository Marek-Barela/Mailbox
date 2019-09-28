import { CHANGE_MAILS_DIRECTORY_TO_SPECIFIC_TYPE } from "./types";

export const changeMailsDirectoryToSpecificType = payload => {
  return {
    type: CHANGE_MAILS_DIRECTORY_TO_SPECIFIC_TYPE,
    payload
  }
}