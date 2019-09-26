import { SWITCH_ALL_MAILS_SELECTING } from "./types.js"

export const switchAllMailsSelecting = (isChecked, messages) => {
  const payload = {
    isChecked,
    messagesToSwitch: messages
  }
  return {
    type: SWITCH_ALL_MAILS_SELECTING,
    payload
  }
}