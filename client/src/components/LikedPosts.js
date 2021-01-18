import React from "react";
import { AppBar, Typography, Grow, Grid, Container } from "@material-ui/core";
import useStyles from "../styles";
import Navbar from "./navbar/Navbar";

import Menu from "./MyMenu";
import AllLikedPosts from "./Posts/AllLikedPosts";

const LikedPosts = () => {
  const classes = useStyles(); // applies js css styling

  return (
    <Container maxWidth="lg">
      <Navbar />
      <Grow in>
        <Container>
          <Grid
            container
            justify="space-between"
            alignItems="stretch"
            spacing={3}
          >
            <AllLikedPosts />
            {/* Posts with setCurrentId as a prop */}
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default LikedPosts;
