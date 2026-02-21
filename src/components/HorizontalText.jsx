import { useEffect, useRef } from "react";
import { gsap } from "../lib/gsap";

export default function HorizontalText() {
  const sectionRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const text = textRef.current;
      const wrapper = text.parentElement;

      const textWidth = text.scrollWidth;
      const wrapperWidth = wrapper.offsetWidth;

      const overflow = textWidth - wrapperWidth;

      gsap.fromTo(
        text,
        { x: 0 },
        {
          x: -overflow,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="relative h-full flex items-center bg-black overflow-hidden"
    >
      {/* Background Text */}
      <h1 className="absolute left-0 text-[18vw] font-bold text-white/5 whitespace-nowrap pointer-events-none">
        OUR CORE OUR CORE OUR CORE
      </h1>

      {/* Foreground Wrapper */}
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