export const getMessageTypes = state => {
  return state.navbarFolders;
};

export const getFolderInputBoolean = state => {
  return state.navbarFolders.folderInputIsDisplayed
}
