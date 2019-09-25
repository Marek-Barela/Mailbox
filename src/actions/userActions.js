import axios from "axios";
import { FETCH_USER_DATA } from "./types";

export const fetchUserData = () => async dispatch => {
  try {
    const data = await axios("https://api.myjson.com/bins/okt4u").then(res => res.data.messages);
    dispatch({
      type: FETCH_USER_DATA,
      payload: data
    });
  } catch (err) {
    console.log(err)
  }
}