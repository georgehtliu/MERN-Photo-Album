export default (likedPosts = [], action) => {
  switch (action.type) {
    case "FETCH_LIKED":
      return action.payload;
    default:
      return likedPosts;
  }
};
