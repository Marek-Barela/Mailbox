import { combineReducers } from "redux";
import userMessagesReducer from "./userMessagesReducer";

export default combineReducers({
  userMessages: userMessagesReducer
});
