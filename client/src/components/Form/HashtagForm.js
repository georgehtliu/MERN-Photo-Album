import React, { useState } from "react";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import { useDispatch } from "react-redux";
import {
  getPostsByHashtag,
  clearHashtagPosts,
} from "../../actions/hashtagPosts";

import useStyles from "./styles";

const HashtagForm = () => {
  // destructure currentId and setCurrentID (setter function)

  const dispatch = useDispatch(); // dispatch function
  const classes = useStyles(); // js css styling

  const [hashtag, setHashtag] = useState("");

  //   useEffect(() => {
  //     // after rerender
  //     if (post) setPostData(post); // if post exists, set postData to the post object
  //   }, [post]);

  const clear = () => {
    // handles clearing the inputs
    setHashtag("");
    dispatch(clearHashtagPosts(hashtag));
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // prevent refresh when submitting
    dispatch(getPostsByHashtag(hashtag));
    // sees if there's an existing id
  };

  return (
    <Paper className={classes.paper}>
      <form
        autoComplete="off"
        noValidate
        className={`${classes.root} ${classes.form}`}
        onSubmit={handleSubmit} // what happens when form is submitted
      >
        <Typography variant="h6">Search Photos by Hashtag</Typography>
        <TextField
          name="creator"
          variant="standard"
          label="hashtag"
          fullWidth
          value={hashtag} // creator is what's shown
          onChange={
            (e) => setHashtag(e.target.value) // keep other properties but change creator
          }
        />
        <Button
          className={classes.buttonSubmit}
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          fullWidth
        >
          Search
        </Button>
        <Button
          variant="contained"
          color="secondary"
          size="small"
          onClick={clear} // clear the inputs
          fullWidth
        >
          Clear hashtag
        </Button>
      </form>
    </Paper>
  );
};

export default HashtagForm;
