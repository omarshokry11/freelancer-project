import React from "react";

import MainNav from './components/MainNav.js';
import MainCarousel from './components/MainCarousel.js';
import Website from './components/Website.js';
import Work from './components/Work.js';
import About from './components/About.js';
import Favorites from './components/Favorites.js';
import Categories from './components/Categories.js';
import Footer from './components/Footer.js';

class Portal extends React.Component {
  render() {
    return (
      <>
        <MainNav />
        <MainCarousel />
        <Website />
        <Work />
        <About />
        <Favorites />
        <Categories />
        <Footer />
      </>
    );
  }
}

export default Portal;
