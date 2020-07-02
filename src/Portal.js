import React from "react";

import MainNav from './components/MainNav.js';
import MainCarousel from './components/MainCarousel.js';
import AsUsedBy from './components/AsUsedBy.js';
import Work from './components/Work.js';
import Favorites from './components/Favorites.js';
import About from './components/About.js';
import Cover from './components/Cover.js';
import Skills from './components/Skills.js';
import Footer from './components/Footer.js';


class Portal extends React.Component {
  render() {
    return (
      <>
        <MainNav />
        <MainCarousel />
        <AsUsedBy />
        <Work />
        <Favorites />
        <About />
        <Cover />
        <Skills />
        <Footer />
      </>
    );
  }
}

export default Portal;
