import { useEffect, useRef } from 'react';
import { gsap } from '../lib/gsap';

export default function Stats() {
  const containerRef = useRef(null);
  const figure8Ref = useRef(null); // <-- Added reference for the whole shape
  const topCircleRef = useRef(null);
  const bottomCircleRef = useRef(null);
  const leftTextRef = useRef(null);
  const rightTextRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // The entry animations when scrolling down the page
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 60%",
        }
      });

      tl.fromTo(topCircleRef.current, 
        { y: -100, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 1.2, ease: "power3.out" }, 
        0
      )
      .fromTo(bottomCircleRef.current, 
        { y: 100, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 1.2, ease: "power3.out" }, 
        0
      )
      .fromTo(leftTextRef.current, 
        { x: -50, opacity: 0 }, 
        { x: 0, opacity: 1, duration: 1, ease: "power3.out" }, 
        0.3
      )
      .fromTo(rightTextRef.current, 
        { x: 50, opacity: 0 }, 
        { x: 0, opacity: 1, duration: 1, ease: "power3.out" }, 
        0.3
      );

    }, containerRef);

    return () => ctx.revert();
  }, []);

  // --- GSAP Hover Animations ---
  const handleMouseEnter = () => {
    gsap.to(figure8Ref.current, {
      rotate: 15,       // Tilts the whole shape 15 degrees
      scale: 1.05,      // Slightly zooms it in
      duration: 0.8,
      ease: "power3.out",
    });
  };

  const handleMouseLeave = () => {
    gsap.to(figure8Ref.current, {
      rotate: 0,        // Returns to perfectly straight
      scale: 1,         // Returns to normal size
      duration: 0.8,
      ease: "power3.out",
    });
  };

  return (
    <div 
      ref={containerRef} 
      className="h-full w-full bg-black flex items-center justify-center px-6 relative overflow-hidden"
    >
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-between gap-12 md:gap-8">
        
        {/* Left Side: 40+ Years */}
        <div ref={leftTextRef} className="flex flex-col items-center md:items-start order-2 md:order-1">
          <p className="text-gray-400 text-xl font-medium tracking-wide mb-1">Years</p>
          <h2 className="text-white text-6xl md:text-8xl font-bold tracking-tighter leading-none">40+</h2>
        </div>

        {/* Center: The Figure-8 Image Mask */}
        <div 
          ref={figure8Ref} 
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="relative w-[280px] h-[560px] md:w-[320px] md:h-[640px] flex flex-col order-1 md:order-2 cursor-pointer"
        >
          {/* Top Circle */}
          <div ref={topCircleRef} className="relative w-full h-1/2 rounded-full overflow-hidden bg-[#111] pointer-events-none">
            <img 
              src="/images/hand.jpeg" 
              alt="Top Mask"
              className="absolute top-0 left-0 w-full h-[200%] object-cover object-top"
            />
          </div>

          {/* Bottom Circle */}
          <div ref={bottomCircleRef} className="relative w-full h-1/2 rounded-full overflow-hidden bg-[#111] pointer-events-none">
            <img 
              src="/images/hand.jpeg" 
              alt="Bottom Mask"
              className="absolute bottom-0 left-0 w-full h-[200%] object-cover object-bottom"
            />
          </div>
        </div>

        {/* Right Side: 7+ Services */}
        <div ref={rightTextRef} className="flex flex-col items-center md:items-end order-3 md:order-3">
          <h2 className="text-white text-6xl md:text-8xl font-bold tracking-tighter leading-none">7+</h2>
          <p className="text-gray-400 text-xl font-medium tracking-wide mt-1">Services</p>
        </div>

      </div>
    </div>
  );
}