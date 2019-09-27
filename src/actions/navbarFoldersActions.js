import { SWITCH_CREATE_FOLDER_INPUT_VIELD } from "./types.js"

export const switchCreateFolderInputVield = payload => {
  return {
    type: SWITCH_CREATE_FOLDER_INPUT_VIELD,
    payload
  }
}