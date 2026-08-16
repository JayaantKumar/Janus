import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Always register the plugin before using it!
gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const containerRef = useRef(null);
  const videoRef = useRef(null); // 1. Create a reference for the video

  useEffect(() => {
    // 2. Force the video to play using Javascript to bypass React's autoPlay bug
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.warn("Autoplay was prevented by the browser:", error);
      });
    }

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

      // Fades the video out slightly as you scroll down
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
        <video 
          ref={videoRef} // 3. Attach the ref to the video element
          autoPlay 
          loop 
          muted 
          playsInline 
          className="w-full h-full object-cover"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay to make the white text pop */}
        <div className="absolute inset-0 bg-black/40" />
      </div>
      
      <div className="relative z-10 text-center">
         <h1 className="text-6xl md:text-8xl font-bold uppercase tracking-tighter text-white">
           Elevate Your Packaging
         </h1>
      </div>
    </div>
  );
};

export default Hero;