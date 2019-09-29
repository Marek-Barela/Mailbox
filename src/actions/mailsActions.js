import { SWITCH_SINGLE_MAIL_CHECKBOX, SWITCH_FAVORITE_MESSAGE, SELECT_MESSAGE_AS_READED } from "./types";

export const switchMailCheckbox = (isChecked, id) => {
  const payload = {
    id,
    isChecked
  }
  return {
    type: SWITCH_SINGLE_MAIL_CHECKBOX,
    payload
  }
}

export const switchFavoriteMessage = (isFavorite, id) => {
  const payload = {
    id,
    isFavorite
  }
  return {
    type: SWITCH_FAVORITE_MESSAGE,
    payload
  }
}

export const selectMessageAsReaded = payload => {
  return {
    type: SELECT_MESSAGE_AS_READED,
    payload
  }
}