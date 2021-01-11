import React from "react";
import { Grid, CircularProgress } from "@material-ui/core";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import Post from "./Post/Post";
import useStyles from "./styles";
import { getPosts } from "../../actions/posts";

const Posts = ({ setCurrentId }) => {
  const posts = useSelector((state) => state.posts); // go into the store and look for posts
  const classes = useStyles();
  const dispatch = useDispatch();

  console.log(posts);

  return !posts.length ? (
    <CircularProgress />
  ) : (
    <Grid
      className={classes.container}
      container
      alignItems="stretch"
      spacing={5}
    >
      {posts.map((post) => (
        <Grid key={post._id} item xs={12} sm={6}>
          <Post post={post} setCurrentId={setCurrentId} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Posts;
