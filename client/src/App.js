import React, { useState, useEffect } from "react";
import { AppBar, Typography, Grow, Grid, Container } from "@material-ui/core";
import { useDispatch } from "react-redux"; // get dispatch function

import { getPosts } from "./actions/posts";
import memories from "./images/memories.png";
import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";
import useStyles from "./styles"; // extra styling

const App = () => {
  const [currentId, setCurrentId] = useState(null); // initially a null id
  const classes = useStyles(); // applies js css styling
  const dispatch = useDispatch(); // dispatches a given action

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]); // dispatch the getPost action after the first rerender

  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">
          My Photos
        </Typography>
        <img className={classes.image} src={memories} alt="icon" height="60" />
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
              <Form currentId={currentId} setCurrentId={setCurrentId} />
              {/* form with current id and function to change id as props */}
            </Grid>
            <Grid item xs={12} sm={7}>
              <Posts setCurrentId={setCurrentId} />
              {/* Posts with setCurrentId as a prop */}
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;
