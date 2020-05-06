import React from "react";

import MainNav from './components/MainNav.js';
import MainCarousel from './components/MainCarousel.js';
import Website from './components/Website.js';
import Work from './components/Work.js';

class Portal extends React.Component {
  render() {
    return (
      <>
        <MainNav />
        <MainCarousel />
        <Website />
        <Work />
      </>
    );
  }
}

export default Portal;
