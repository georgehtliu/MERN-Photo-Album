import * as api from "../api";
import {
  FETCH_BY_HASHTAG,
  CLEAR_HASHTAG_POSTS,
} from "../constants/actionTypes";

export const getPostsByHashtag = (hashtag) => async (dispatch) => {
  try {
    const { data } = await api.getPostsByHashtag(hashtag);
    console.log("received data");
    dispatch({ type: FETCH_BY_HASHTAG, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const clearHashtagPosts = () => async (dispatch) => {
  dispatch({ type: CLEAR_HASHTAG_POSTS, payload: [] });
};
