import axios from "axios";
import { FETCH_USER_DATA } from "./types";

export const fetchUserData = () => async (dispatch) => {
  try {
    const data = await axios(
      "https://mailbox-database.herokuapp.com/api/messages"
    ).then((res) => res.data);
    dispatch({
      type: FETCH_USER_DATA,
      payload: data,
    });
  } catch (err) {
    console.log(err);
  }
};
