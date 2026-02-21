import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const DesignServices = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "+=300%",
        pin: true,
        scrub: 1,
      }
    });

    // Animate the image circle scaling and content switching
    tl.to(".service-circle", { scale: 1.2, duration: 1 })
      .to(".service-title", { opacity: 1, y: 0, stagger: 1 });

  }, []);

  return (
    <section ref={sectionRef} className="h-screen bg-black flex flex-col items-center justify-center relative overflow-hidden">
      <div className="service-circle w-[400px] h-[400px] rounded-full overflow-hidden border border-white/20">
        <img src="/service-1.jpg" className="w-full h-full object-cover" />
      </div>
      
      <div className="mt-12 text-center">
        <h2 className="text-sm font-mono text-gray-500">01 — 04</h2>
        <h3 className="text-5xl uppercase font-bold mt-4">Design Services</h3>
      </div>
      
      {/* Bottom ticker/numbers */}
      <div className="absolute bottom-10 w-full flex justify-around font-mono text-gray-700">
        <span>01</span><span>02</span><span>03</span><span>04</span>
      </div>
    </section>
  );
};

export default DesignServices;