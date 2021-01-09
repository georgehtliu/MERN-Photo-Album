import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./components/Home";
import SignIn from "./components/Account/SignIn";
import SignUp from "./components/Account/SignUp";

const App = () => {
  return (
    <Router>
      <Route path="/signin" component={SignIn} />
      <Route path="/signUp" component={SignUp} />
      <Route path="/" exact component={Home} />
    </Router>
  );
};

export default App;
