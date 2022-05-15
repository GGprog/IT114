import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import Arts from '../Arts';
import About from '../About';
import Contact from '../Contact';

function Home() {
  return (
    <>
      <HeroSection />
      <Arts/>
      <About/>
      <Contact/>
    </>
  );
}

export default Home;
