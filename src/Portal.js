import React from "react";

import MainNav from './components/MainNav.js';
import MainCarousel from './components/MainCarousel.js';

class Portal extends React.Component {
  render() {
    return (
      <>
        <MainNav />
        <MainCarousel />
      </>
    );
  }
}

export default Portal;
