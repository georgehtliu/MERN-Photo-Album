import React from "react";
import { AppBar, Typography, Grow, Grid, Container } from "@material-ui/core";
import useStyles from "../styles";

import Menu from "./MyMenu";
import AllLikedPosts from "./Posts/AllLikedPosts";

const LikedPosts = () => {
  const classes = useStyles(); // applies js css styling

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
            <AllLikedPosts />
            {/* Posts with setCurrentId as a prop */}
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default LikedPosts;
