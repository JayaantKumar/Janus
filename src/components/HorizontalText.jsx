import { useEffect, useRef } from "react";
import { gsap } from "../lib/gsap";

export default function HorizontalText() {
  const sectionRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(textRef.current, {
        xPercent: -50,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="relative h-full flex items-center bg-black overflow-hidden"
    >
      <h1 className="absolute text-[20vw] font-bold text-white/5 whitespace-nowrap pointer-events-none">
        OUR CORE OUR CORE OUR CORE
      </h1>

      <div className="relative z-10 w-full overflow-hidden px-6">
        <h2
          ref={textRef}
          className="text-white text-5xl md:text-7xl font-bold whitespace-nowrap"
        >
          Precision. Innovation. Sustainability.
        </h2>
      </div>
    </div>
  );
}