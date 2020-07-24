import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';
import reducer from './Redux/reducers';
import Portal from './Portal.js';

// global css
import "normalize.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "bootstrap-v4-rtl/dist/css/bootstrap-rtl.min.css";
import "./components/style/style.scss";

const composeEnhancers=window.__REDUX_DEVTOOLS_EXTENTION_COMPOSE__ ||compose;
const store=createStore(reducer, composeEnhancers(applyMiddleware(reduxThunk))
);


ReactDOM.render(
  <Provider store={store}>
    <Portal />
  </Provider>,
  document.querySelector('#root')
);
