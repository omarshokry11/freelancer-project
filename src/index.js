import React from 'react';
import ReactDOM from 'react-dom';

//global css
// global css
import "normalize.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "bootstrap-v4-rtl/dist/css/bootstrap-rtl.min.css";
import App from './App.js';

const Apps = () => {
    return (
        <div>
            <App />
        </div>
    );
};

ReactDOM.render(
  <Apps />,    
  document.querySelector('#root')
);
