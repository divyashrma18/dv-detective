import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Section4.css';

gsap.registerPlugin(ScrollTrigger);

const Section4Content = () => {
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // TEXT: slide from left with fade
      gsap.from(textRef.current, {
        x: -100,
        autoAlpha: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: textRef.current,
          start: 'top 90%',
          toggleActions: 'play none none reverse',
        },
      });

      // IMAGE: slide from right with fade
      gsap.from(imageRef.current, {
        x: 100,
        autoAlpha: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: imageRef.current,
          start: 'top 90%',
          toggleActions: 'play none none reverse',
        },
      });
    });

    return () => ctx.revert(); // cleanup on unmount
  }, []);

  return (
    <div className="section4-content">
      <div className="text" ref={textRef}>
        <h2>Study your surroundings</h2>
        <p>
          Every detail matters. A fallen paperclip, a shifted chair, a smudge on the window — they all tell a story.
          In the world of mystery, awareness is your greatest weapon.
          <br /><br />
          The truth often hides in plain sight, buried beneath routine and silence. Patterns emerge where chaos once lived.
          A creaking floorboard, an untouched cup of coffee, the flicker of a light — nothing is ever truly random.
          <br /><br />
          A good detective sees more than what’s shown — they <i>sense</i> what’s missing. Slow down, observe, question.
          The scene always speaks… if you know how to listen.
        </p>
      </div>
      <div className="image" ref={imageRef}>
        <img src="/images/section4.png" alt="Study your surroundings" />
      </div>
    </div>
  );
};

export default Section4Content;
