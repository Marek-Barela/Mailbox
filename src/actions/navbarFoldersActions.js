import { CREATE_NEW_USER_FOLDER } from "./types.js"

export const createNewUserFolder = payload => {
  return {
    type: CREATE_NEW_USER_FOLDER,
    payload
  }
}