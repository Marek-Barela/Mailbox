import { UNSELECT_MAILS, RESET_SORTING_BAR } from "./types";

export const unselectMails = () => {
  return {
    type: UNSELECT_MAILS
  };
};

export const resetSortingBar = () => {
  return {
    type: RESET_SORTING_BAR
  }
}
