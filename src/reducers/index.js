import { combineReducers } from "redux";
import userMessagesReducer from "./userMessagesReducer";
import sortingReducer from "./sortingReducer";
import navbarFoldersReducer from "./navbarFoldersReducer";

export default combineReducers({
  userMessages: userMessagesReducer,
  sorting: sortingReducer,
  navbarFolders: navbarFoldersReducer
});
