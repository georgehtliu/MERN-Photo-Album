import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./components/Home";
import SignIn from "./components/Account/SignIn";
import SignUp from "./components/Account/SignUp";
import Searchbar from "./components/Hashtags/SearchBar";

const App = () => {
  return (
    <Router>
      <Route path="/signin" component={SignIn} />
      <Route path="/signUp" component={SignUp} />
      <Route path="/" exact component={Home} />
      <Route path="/searchbar" exact component={Searchbar} />
    </Router>
  );
};

export default App;
