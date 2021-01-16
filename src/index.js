import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";

import "./index.css";
import App from "./components/App";
import movies from "./reducers";

const store = createStore(movies);
console.log("store", store);
console.log("Before State", store.getState());

store.dispatch({
  type: "ADD_NAME",
  movies: [{ name: "Superman" }],
});

console.log("After State", store.getState());

ReactDOM.render(
  <React.StrictMode>
    <App store={store} />
  </React.StrictMode>,
  document.getElementById("root")
);
