import { SWITCH_MENU_SIDEBAR_VISIBILITY } from "../actions/types";

const initialState = {
  menuSidebarIsVisible: true
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
