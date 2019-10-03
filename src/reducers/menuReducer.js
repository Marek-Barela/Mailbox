import { SWITCH_MENU_SIDEBAR_VISIBILITY } from "../actions/types";

const MINIMAL_RESOLUTION = 800;
const isMobileResolution = window.innerWidth > MINIMAL_RESOLUTION ? true : false;

const initialState = {
  menuSidebarIsVisible: isMobileResolution
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SWITCH_MENU_SIDEBAR_VISIBILITY: {
      return {
        ...state,
        menuSidebarIsVisible: !payload
      };
    }
    default: {
      return {
        ...state
      };
    }
  }
};
