import React from 'react';
import ReactDOM from 'react-dom';

import Portal from './Portal.js';

// global css
import "normalize.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "bootstrap-v4-rtl/dist/css/bootstrap-rtl.min.css";
import "./components/style/style.css";


ReactDOM.render(
  <Portal />,
  document.querySelector('#root')
);
