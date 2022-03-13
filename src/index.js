import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  // make sure store value is correct
  // <Provider store={react_redux_store}>
  // <Provider store={redux_toolkit_store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  // </Provider>
  document.getElementById("root"),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
