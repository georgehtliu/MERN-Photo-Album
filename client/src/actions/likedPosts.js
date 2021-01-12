import * as api from "../api";
import { FETCH_LIKED } from "../constants/actionTypes";

export const getLikedPosts = () => async (dispatch) => {
  try {
    const { data } = await api.getLikedPosts();
    dispatch({ type: FETCH_LIKED, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
