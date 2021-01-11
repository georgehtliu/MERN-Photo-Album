import React from "react";
import ReactDom from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk"; // allows for async requests with redux
import "./index.css";

import reducers from "./reducers";

import App from "./App";

const store = createStore(
  reducers,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
); // create a store with reducers

ReactDom.render(
  <Provider store={store}>
    {/* change tag to Provider to accept store */}
    <App />
  </Provider>,
  document.getElementById("root")
);
