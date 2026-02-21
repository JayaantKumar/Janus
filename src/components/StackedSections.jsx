import { useEffect, useRef } from "react";
import { gsap } from "../lib/gsap";
import { ScrollTrigger } from "../lib/gsap";

export default function StackedSections() {
  const containerRef = useRef(null);

  useEffect(() => {
    const sections = gsap.utils.toArray(".panel");

    sections.forEach((section, i) => {
      if (i !== 0) {
        gsap.set(section, { yPercent: 100 });
      }
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: `+=${sections.length * 100}%`,
        scrub: true,
        pin: true,
      },
    });

    sections.forEach((section, i) => {
      if (i !== 0) {
        tl.to(section, { yPercent: 0, duration: 1 }, i);
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className="relative h-screen overflow-hidden">
      <section className="panel absolute inset-0 bg-black flex items-center justify-center text-white text-5xl">
        Section 1
      </section>

      <section className="panel absolute inset-0 bg-gray-900 flex items-center justify-center text-white text-5xl">
        Section 2
      </section>

      <section className="panel absolute inset-0 bg-gray-800 flex items-center justify-center text-white text-5xl">
        Section 3
      </section>

      <section className="panel absolute inset-0 bg-gray-700 flex items-center justify-center text-white text-5xl">
        Section 4
      </section>
    </div>
  );
}