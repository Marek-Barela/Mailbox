import { combineReducers } from "redux";
import userMessagesReducer from "./userMessagesReducer";
import typesOfMessagesReducer from "./typesOfMessagesReducer";

export default combineReducers({
  userMessages: userMessagesReducer,
  typesOfMessages: typesOfMessagesReducer
});
