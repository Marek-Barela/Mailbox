import { SWITCH_SINGLE_MAIL_CHECKBOX } from "./types";

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