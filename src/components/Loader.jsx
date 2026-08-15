import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Loader() {
  const loaderRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Text animate in smoothly
      gsap.fromTo(
        textRef.current,
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
      );

      // 2. Entire loader background fades out
      // We set the delay to 1.6s so it finishes fading right as 
      // your App.jsx timer (2 seconds) unmounts this component.
      gsap.to(loaderRef.current, {
        opacity: 0,
        duration: 0.4,
        delay: 1.6,
        ease: "power2.inOut",
      });
    }, loaderRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 bg-black flex items-center justify-center z-[9999] pointer-events-none"
    >
      <h1 ref={textRef} className="text-white text-3xl tracking-wide font-semibold">
        JANUS
      </h1>
    </div>
  );
}