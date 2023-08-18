// src/pages/Home.js
import React from 'react';
import Home from '../components/sections/Home';
import BannerSG from "../components/sections/BannerSG";
import Team from "../components/sections/Team";
import Footer from "../components/Footer";
import Agenda from "../components/sections/Agenda";
import Track from "../components/sections/Track";
import ScrollToTop from "../components/ScrollToTop";
function Homenew() {
  return (
    <div>
      {/* <h1>Welcome to the Home Page</h1> */}
      <Home />
        <BannerSG />
        <Agenda />
        <Track />
        <Team />
        <Footer />
    
        <ScrollToTop />
    </div>
  );
}

export default Homenew;
