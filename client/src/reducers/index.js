import { combineReducers } from "redux";

import posts from "./posts";
import hashtagPosts from "./hashtagPosts";
import likedPosts from "./likedPosts";

export default combineReducers({
  posts,
  hashtagPosts,
  likedPosts,
});
