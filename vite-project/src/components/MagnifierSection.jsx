import React, { useRef, useState } from 'react';
import './MagnifierSection.css';

const MagnifierSection = ({ children }) => {
  const containerRef = useRef(null);
  const [style, setStyle] = useState({});

  const handleMouseMove = (e) => {
    const container = containerRef.current;
    const { left, top, width, height } = container.getBoundingClientRect();

    const x = e.clientX - left;
    const y = e.clientY - top;

    const bgPosX = (x / width) * 100;
    const bgPosY = (y / height) * 100;

    setStyle({
      backgroundImage: `url(${getSnapshot(container)})`,
      backgroundPosition: `${bgPosX}% ${bgPosY}%`,
      display: 'block',
      left: `${x - 75}px`,
      top: `${y - 75}px`,
    });
  };

  const hideMagnifier = () => setStyle({ display: 'none' });

  const getSnapshot = (el) => {
    // Takes a snapshot using HTML2Canvas or a static background. Simplified:
    return ''; // or fallback image of the section
  };

  return (
    <div
      className="magnifier-wrapper"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={hideMagnifier}
    >
      {children}
      <div className="magnifier" style={style}></div>
    </div>
  );
};

export default MagnifierSection;
