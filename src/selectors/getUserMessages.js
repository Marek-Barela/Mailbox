const getUserMessages = state => {
  return state.userMessages.userMessages;
}

export const getUserMessagesLoadingState = state => {
  return state.userMessages.isLoading;
}

export default getUserMessages;