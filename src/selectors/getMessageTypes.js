export const getMessageTypes = state => {
  return state.navbarFolders;
};

export const getFolderInputBoolean = state => {
  return state.navbarFolders.folderInputIsDisplayed
}

export const getBaseMessageTypes = state => {
  return state.navbarFolders.baseTypesOfMessages
}

export const getUserMessageTypes = state => {
  return state.navbarFolders.userTypesOfMessages
}