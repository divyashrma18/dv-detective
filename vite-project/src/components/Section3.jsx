import React, { useEffect } from 'react';
import './Section3.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Section3 = () => {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.section3',
        start: 'top 80%',
        toggleActions: 'play none none none',
      }
    });

    tl.to('.door-overlay.left', {
      x: '-90%',
      duration: 1,
      ease: 'power2.out'
    }, 0)
    .to('.door-overlay.right', {
      x: '90%',
      duration: 1,
      ease: 'power2.out'
    }, 0)
    .to('.hidden-door-bg', {
      opacity: 1,
      duration: 1
    }, 0.5)
    .to('.final-clue', {
      opacity: 1,
      duration: 1,
      onStart: () => {
        const clue = document.querySelector('.final-clue');
        const baseText = 'CASE...';
        const ending = 'CLOSED!';
        const reveal = 'REOPENS SOON!';

        let i = 0;

        // Type "CASE..."
        clue.textContent = '';
        const typeBase = setInterval(() => {
          clue.textContent = baseText.slice(0, i);
          i++;
          if (i > baseText.length) {
            clearInterval(typeBase);

            let j = 0;
            const typeClosed = setInterval(() => {
              clue.textContent = baseText + ending.slice(0, j);
              j++;
              if (j > ending.length) {
                clearInterval(typeClosed);

                setTimeout(() => {
                  let k = ending.length;
                  const eraseClosed = setInterval(() => {
                    k--;
                    clue.textContent = baseText + ending.slice(0, k);
                    if (k === 0) {
                      clearInterval(eraseClosed);

                      setTimeout(() => {
                        let m = 0;
                        const typeReopen = setInterval(() => {
                          clue.textContent = baseText + reveal.slice(0, m);
                          m++;
                          if (m > reveal.length) {
                            clearInterval(typeReopen);
                          }
                        }, 90);
                      }, 400);
                    }
                  }, 80);
                }, 600);
              }
            }, 100);
          }
        }, 90);
      }
    }, 0.8);
  }, []);

  return (
    <div className="section3">
      <div className="door-overlay left" />
      <div className="door-overlay right" />

      <div className="hidden-door-bg">
        <div className="light-beam">
          {Array.from({ length: 20 }).map((_, i) => (
            <span key={i} className="dust" />
          ))}
        </div>
      </div>

      <h1 className="final-clue"></h1>
    </div>
  );
};

export default Section3;
