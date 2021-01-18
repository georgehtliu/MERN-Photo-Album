import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./components/Home";
import HashtagHome from "./components/HashtagHome";
import SignIn from "./components/Account/SignIn";
import SignUp from "./components/Account/SignUp";
import LikedPosts from "./components/LikedPosts";
import Auth from "./components/Auth/Auth";

const App = () => {
  return (
    <Router>
      <Route path="/signin" component={SignIn} />
      <Route path="/signUp" component={SignUp} />
      <Route path="/gallery" exact component={Home} />
      <Route path="/" exact component={Home} />
      <Route path="/hashtags" exact component={HashtagHome} />
      <Route path="/likedPosts" exact component={LikedPosts} />
      <Route path="/auth" exact component={Auth} />
    </Router>
  );
};

export default App;
