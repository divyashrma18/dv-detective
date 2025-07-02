import React, { useState, useRef } from 'react';
import './Hero.css';
import Navbar from './Navbar';
import HeroContent from './HeroContent';

const Hero = () => {
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);

const handleMouseMove = (e) => {
    const rect = heroRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setCursor({ x, y });
  };
  return (
    <div className="hero" ref={heroRef} onMouseMove={handleMouseMove}
  >
      <Navbar />
      <HeroContent />

      <div
        className="magnifier"
        style={{
          left: `${cursor.x - 75}px`,
          top: `${cursor.y - 75}px`,
        }}
      >
        <div
          className="magnifier-inner"
          style={{
            transform: `scale(2) translate(-${cursor.x}px, -${cursor.y}px)`,
          }}
        >
          <div className="magnified-scene">
            <Navbar />
            <HeroContent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
