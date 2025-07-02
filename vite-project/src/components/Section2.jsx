import React, { useEffect, useRef } from 'react';
import './Section2.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Section2 = () => {
  const textRef = useRef(null);
  const finalText = "TRUTH IS BURIED IN THE PATTERN!";

  useEffect(() => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!?%$#@*&";
    let interval;

    const scrambleText = (element, final) => {
      let iterations = 0;
      clearInterval(interval);

      interval = setInterval(() => {
        let output = "";
        for (let i = 0; i < final.length; i++) {
          if (i < iterations) {
            output += final[i];
          } else {
            output += chars[Math.floor(Math.random() * chars.length)];
          }
        }

        element.textContent = output;

        if (iterations >= final.length) clearInterval(interval);
        iterations += 1;
      }, 50);
    };

    ScrollTrigger.create({
      trigger: ".section2",
      start: "top center",
      onEnter: () => {
        if (textRef.current) {
          scrambleText(textRef.current, finalText);
        }
      },
    });
  }, []);

  return (
   <div className="section2">
  <div className="overlay">
    <h1 className="decipher-text" ref={textRef}>
      🧩 %x&9k#M$8z...
    </h1>
  </div>
</div>

  );
};

export default Section2;
