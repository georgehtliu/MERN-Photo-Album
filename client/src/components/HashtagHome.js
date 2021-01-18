import React from "react";
import { AppBar, Typography, Grow, Grid, Container } from "@material-ui/core";
import useStyles from "../styles";

import Menu from "./MyMenu";
import HashtagForm from "./Form/HashtagForm";
import HashtagPosts from "./Posts/HashtagPosts";
import Navbar from "./navbar/Navbar";

const HashtagHome = () => {
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

export default HashtagHome;
