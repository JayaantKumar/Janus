import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Always register the plugin before using it!
gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=100%",
          scrub: true,
          pin: true,
        }
      });

      // Let's remove the 0% circle mask so the video is visible immediately!
      // Instead, let's just make it fade out slightly as you scroll down.
      tl.to(".hero-video", { 
        opacity: 0, 
        ease: "none" 
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="h-screen w-full relative bg-black flex items-center justify-center">
      <div className="hero-video absolute inset-0 w-full h-full overflow-hidden">
        <video autoPlay loop muted playsInline className="w-full h-full object-cover">
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay to make the white text pop */}
        <div className="absolute inset-0 bg-black/40" />
      </div>
      
      <div className="relative z-10 text-center">
         <h1 className="text-6xl font-bold uppercase tracking-tighter text-white">
           Elevate Your Packaging
         </h1>
      </div>
    </div>
  );
};

export default Hero;