import React from "react";
import { AppBar, Typography, Grow, Grid, Container } from "@material-ui/core";
import { useDispatch } from "react-redux"; // get dispatch function

import { useState, useEffect } from "react";
import { getPosts } from "../actions/posts";
import useStyles from "../styles";

import Menu from "./MyMenu";
import HashtagForm from "./Form/HashtagForm";
import HashtagPosts from "./Posts/HashtagPosts";

const Home = () => {
  const classes = useStyles(); // applies js css styling
  const dispatch = useDispatch(); // dispatches a given action

  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">
          My Gallery
          <Menu />
        </Typography>
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            container
            justify="space-between"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12} sm={4}>
              <HashtagForm />
              {/* form with current id and function to change id as props */}
            </Grid>
            <Grid item xs={12} sm={7}>
              <HashtagPosts />
              {/* Posts with setCurrentId as a prop */}
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default Home;
