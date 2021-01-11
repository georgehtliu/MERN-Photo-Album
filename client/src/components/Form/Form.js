import React, { useState, useEffect } from "react";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import FileBase from "react-file-base64"; // for photos form input

import useStyles from "./styles";
import { createPost, updatePost } from "../../actions/posts";

const Form = ({ currentId, setCurrentId }) => {
  // destructure currentId and setCurrentID (setter function)

  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  }); // create a new state as an object with the above keys and "" as values

  const post = useSelector((state) =>
    currentId ? state.posts.find((message) => message._id === currentId) : null
  ); // for editing functionality

  // if the current id exists, get the message from the redux store with matching id,
  // otherwise return null

  const dispatch = useDispatch(); // dispatch function
  const classes = useStyles(); // js css styling

  useEffect(() => {
    // after rerender
    if (post) setPostData(post); // if post exists, set postData to the post object
  }, [post]);

  const clear = () => {
    // handles clearing the inputs
    setCurrentId(null); // set id to 0
    setPostData({
      creator: "",
      title: "",
      message: "",
      tags: "",
      selectedFile: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // prevent refresh when submitting

    // sees if there's an existing id
    if (currentId) {
      dispatch(updatePost(currentId, postData)); // update the post, passing in an id and the existing data
      clear();
    } else {
      // no existing id so you create a new post
      dispatch(createPost(postData));
      clear();
    }
  };

  return (
    <Paper className={classes.paper}>
      <form
        autoComplete="off"
        noValidate
        className={`${classes.root} ${classes.form}`}
        onSubmit={handleSubmit} // what happens when form is submitted
      >
        <Typography variant="h6">
          {currentId ? `Editing "${post.title}"` : "Add a Photo to Collection"}
        </Typography>
        <TextField
          name="creator"
          variant="standard"
          label="Author"
          fullWidth
          value={postData.creator} // creator is what's shown
          onChange={
            (e) => setPostData({ ...postData, creator: e.target.value }) // keep other properties but change creator
          }
        />
        <TextField
          name="title"
          variant="standard"
          label="Title"
          fullWidth
          value={postData.title}
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
        />
        <TextField
          name="message"
          variant="standard"
          label="Caption"
          fullWidth
          multiline
          rows={4}
          value={postData.message}
          onChange={(e) =>
            setPostData({ ...postData, message: e.target.value })
          }
        />
        <TextField
          name="tags"
          variant="standard"
          label="Hashtags"
          fullWidth
          value={postData.tags}
          onChange={
            (e) => setPostData({ ...postData, tags: e.target.value.split(",") }) // separated by commas
          }
        />
        <div className={classes.fileInput}>
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setPostData({ ...postData, selectedFile: base64 })
            }
          />
        </div>
        <Button
          className={classes.buttonSubmit}
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          fullWidth
        >
          Add to Gallery
        </Button>
        <Button
          variant="contained"
          color="secondary"
          size="small"
          onClick={clear} // clear the inputs
          fullWidth
        >
          Clear Form
        </Button>
      </form>
    </Paper>
  );
};

export default Form;
