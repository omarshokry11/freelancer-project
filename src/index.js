import React from 'react';
import ReactDOM from 'react-dom';

//global css
// global css
import "normalize.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "bootstrap-v4-rtl/dist/css/bootstrap-rtl.min.css";
import Portal from './Portal.js';

const App = () => {
    return (
        <div>
            <Portal />
        </div>
    );
};

ReactDOM.render(
  <App />,    
  document.querySelector('#root')
);
