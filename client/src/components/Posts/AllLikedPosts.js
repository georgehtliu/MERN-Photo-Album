import React from "react";
import { Grid } from "@material-ui/core";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import LikedPost from "./Post/HashtagPost";
import useStyles from "./styles";
import { useDispatch } from "react-redux";
import { getLikedPosts } from "../../actions/likedPosts";

const AllLikedPosts = () => {
  const posts = useSelector((state) => state.likedPosts); // go into the store and look for posts
  console.log(posts);
  const classes = useStyles();

  const dispatch = useDispatch(); // dispatches a given action

  return (
    <Grid
      className={classes.container}
      container
      alignItems="stretch"
      spacing={5}
    >
      {posts.map((post) => (
        <Grid key={post._id} item xs={12} sm={6}>
          <LikedPost post={post} />
        </Grid>
      ))}
    </Grid>
  );
};

export default AllLikedPosts;
