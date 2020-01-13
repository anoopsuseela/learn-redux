import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { createStore } from "redux";

function reducer(state, action) {
  if (action.type === "change") {
    return action.payload;
  } else {
    return { state: "ON" };
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
