import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "../lib/gsap";

export default function useReveal(options = {}) {
  const elementRef = useRef(null);

  useEffect(() => {
    if (!elementRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        elementRef.current,
        {
          y: 60,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: elementRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
          ...options,
        }
      );
    });

    return () => ctx.revert(); // cleanup
  }, []);

  return elementRef;
}