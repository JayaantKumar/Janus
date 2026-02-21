import { useEffect, useRef } from "react";
import { gsap } from "../lib/gsap";

export default function Showcase() {
  const container = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(container.current, {
        xPercent: -50,
        duration: 25,
        repeat: -1,
        ease: "linear",
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="h-full bg-black flex items-center overflow-hidden">
      <div
        ref={container}
        className="flex gap-8 w-max px-6"
      >
        {[...Array(8)].map((_, i) => (
          <img
            key={i}
            src="/images/sample.jpg"
            className="w-80 rotate-2 rounded-xl"
          />
        ))}
      </div>
    </div>
  );
}