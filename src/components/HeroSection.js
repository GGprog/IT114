import React from 'react';
import '../App.css';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      {/*<video src='/videos/video-2.mp4' autoPlay loop muted />*/}
      <img src='/images/1234-removebg-preview.png' alt='my name' />

      <p>
      Thus, life is not just about having the best things and people in the world:<br/>
      it's about being able to express yourself in anyway as long as it gives you comfort.<br/>
      For me, my imaginations and my thoughts is who I am and what I am and for me art is freedom.<br/></p>
    </div>
  );
}

export default HeroSection;