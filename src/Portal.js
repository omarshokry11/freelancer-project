import React from "react";

import Navbars from './components/Navbar';
import Header from './components/Header';

class Portal extends React.Component {
  render() {
    return (
      <div>
        <Navbars />
        <Header />
      </div>
    );
  }
}

export default Portal;
