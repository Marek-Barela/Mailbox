import { SWITCH_MENU_SIDEBAR_VISIBILITY } from "../actions/types";

export const switchSidebarVisibility = payload => {
  return {
    type: SWITCH_MENU_SIDEBAR_VISIBILITY,
    payload
  }
}