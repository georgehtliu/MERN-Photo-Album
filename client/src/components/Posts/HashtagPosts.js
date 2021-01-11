import React from "react";
import { Grid, CircularProgress } from "@material-ui/core";
import { useSelector } from "react-redux";

import HashtagPost from "./Post/HashtagPost";
import useStyles from "./styles";

const HashtagPosts = () => {
  const posts = useSelector((state) => state.hashtagPosts); // go into the store and look for posts
  console.log(posts);
  const classes = useStyles();

  return (
    <Grid
      className={classes.container}
      container
      alignItems="stretch"
      spacing={5}
    >
      {posts.map((post) => (
        <Grid key={post._id} item xs={12} sm={6}>
          <HashtagPost post={post} />
        </Grid>
      ))}
    </Grid>
  );
};

export default HashtagPosts;
