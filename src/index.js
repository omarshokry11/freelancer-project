import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";

//global css
// global css
import "normalize.css";
import "bootstrap-v4-rtl/dist/css/bootstrap-rtl.min.css";
import "@fortawesome/fontawesome-free/css/all.css";

import Portal from "./Portal.js";

ReactDOM.render(
  <React.StrictMode>
    <Portal />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
