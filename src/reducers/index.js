import { combineReducers } from "redux";
import userMessagesReducer from "./userMessagesReducer";
import typesOfMessagesReducer from "./typesOfMessagesReducer";
import sortingReducer from "./sortingReducer";

export default combineReducers({
  userMessages: userMessagesReducer,
  typesOfMessages: typesOfMessagesReducer,
  sorting: sortingReducer
});
