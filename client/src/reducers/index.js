import { combineReducers } from "redux";

import posts from "./posts";
import hashtagPosts from "./hashtagPosts";

export default combineReducers({
  posts,
  hashtagPosts,
});
