import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export default function PageWrapper({ children, className = "" }) {
  const wrapperRef = useRef(null);

  useEffect(() => {
    // gsap.context handles cleanup for React 18 Strict Mode
    const ctx = gsap.context(() => {
      // Targets all direct DOM children inside this wrapper
      if (wrapperRef.current && wrapperRef.current.children.length > 0) {
        gsap.fromTo(
          wrapperRef.current.children,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.15, // Exact same stagger timing you had before
            ease: "power3.out",
          }
        );
      }
    }, wrapperRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={wrapperRef} className={`w-full ${className}`}>
      {children}
    </div>
  );
}