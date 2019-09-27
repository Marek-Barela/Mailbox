import { combineReducers } from "redux";
import userMessagesReducer from "./userMessagesReducer";
import sortingReducer from "./sortingReducer";
import navbarFoldersReducer from "./navbarFoldersReducer";
import menuReducer from "./menuReducer"

export default combineReducers({
  userMessages: userMessagesReducer,
  sorting: sortingReducer,
  navbarFolders: navbarFoldersReducer,
  menu: menuReducer
});
