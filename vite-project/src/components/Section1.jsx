import React, { useEffect } from 'react';
import './Section1.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Section1 = () => {
  useEffect(() => {
    const torchPairs = [
      ['#torch-1', '#torch-2'],
      ['#torch-3', '#torch-4'],
    ];

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.section1',
        start: 'top center',
        toggleActions: 'play none none none',
      }
    });

    torchPairs.forEach((pair, index) => {
      tl.to(pair.map(id => id), {
        onStart: () => {
          pair.forEach(id => {
            document.querySelector(id)?.classList.add('lit');
          });
        },
        duration: 0.3,
        delay: index === 0 ? 0 : 0.5,
      });
    });

    tl.to('.clue-text', {
      opacity: 1,
      onStart: () => {
        document.querySelector('.light-beam1')?.classList.add('visible');
      },
    });
  }, []);

  return (
    <div className="section1">
      <div className="torch left" id="torch-1" />
      <div className="torch right" id="torch-2" />
      <div className="torch left" id="torch-3" />
      <div className="torch right" id="torch-4" />

      <div className="light-beam1">
        {Array.from({ length: 20 }).map((_, i) => (
          <span key={i} className="dust1" />
        ))}
      </div>

      <div className="clue-text">
        “The flame reveals the forgotten truth.”
      </div>
    </div>
  );
};

export default Section1;
