import { SWITCH_CREATE_FOLDER_INPUT_VIELD, CREATE_NEW_USER_FOLDER } from "./types.js"

export const switchCreateFolderInputVield = payload => {
  return {
    type: SWITCH_CREATE_FOLDER_INPUT_VIELD,
    payload
  }
}

export const createNewUserFolder = payload => {
  return {
    type: CREATE_NEW_USER_FOLDER,
    payload
  }
}