import { SWITCH_CREATE_FOLDER_INPUT_VIELD } from "../actions/types";

const initialState = {
  baseTypesOfMessages: ["Inbox", "Notifications", "Offers", "Social", "Drafts", "Spam", "Trash", "Sent"],
  userTypesOfMessages: ["Test user folder"],
  folderInputIsDisplayed: false
}

export default (state = initialState, action) => {
  const { type, payload } = action;
  //const newState = { ...state };
  
  switch (type) {
    case SWITCH_CREATE_FOLDER_INPUT_VIELD: {
      return {
        ...state,
        folderInputIsDisplayed: !payload
      }
    }
    default: {
      return { 
        ...state 
      }
    }
  }
}