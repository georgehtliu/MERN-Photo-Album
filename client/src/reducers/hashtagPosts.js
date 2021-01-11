export default (hashtagPosts = [], action) => {
  switch (action.type) {
    case "FETCH_BY_HASHTAG":
      return action.payload;
    case "CLEAR_HASHTAG_POSTS":
      return action.payload;
    default:
      return hashtagPosts;
  }
};
