const initialState = {
  baseTypesOfMessages: ["Inbox", "Notifications", "Offers", "Social", "Drafts", "Spam", "Trash", "Sent"],
  userTypesOfMessages: ["   Test user folder    "]
}

export default (state = initialState, action) => {
  const { type, payload } = action;
  const newState = { ...state };
  
  switch (type) {
    default: {
      return { 
        ...state 
      }
    }
  }
}