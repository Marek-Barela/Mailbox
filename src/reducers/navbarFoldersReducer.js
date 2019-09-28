import { CREATE_NEW_USER_FOLDER } from "../actions/types";

const initialState = {
  baseTypesOfMessages: ["Inbox", "Notifications", "Offers", "Social", "Drafts", "Spam", "Trash", "Sent"],
  userTypesOfMessages: ["Sample user folder"],
  folderInputIsDisplayed: true
}

export default (state = initialState, action) => {
  const { type, payload } = action;
  const newState = { ...state };
  
  switch (type) {
    case CREATE_NEW_USER_FOLDER: {
      newState.userTypesOfMessages.push(payload)
      return {
        ...state,
        userTypesOfMessages: newState.userTypesOfMessages
      }
    }
    default: {
      return { 
        ...state 
      }
    }
  }
}