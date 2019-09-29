import {
  SWITCH_ALL_MAILS_SELECTING,
  SORT_MAILS_BY_TYPE,
  CHANGE_SORTING_DIRECTION
} from "./types.js";

export const switchAllMailsSelecting = (isChecked, messages) => {
  const payload = {
    isChecked,
    messagesToSwitch: messages
  };
  return {
    type: SWITCH_ALL_MAILS_SELECTING,
    payload
  };
};

export const sortMailsByType = type => {
  return {
    type: SORT_MAILS_BY_TYPE,
    payload: type
  };
};

export const changeSortingDirection = payload => {
  return {
    type: CHANGE_SORTING_DIRECTION,
    payload
  };
};
