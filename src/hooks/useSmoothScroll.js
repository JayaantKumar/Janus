import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import { ScrollTrigger } from "../lib/gsap";

export default function useSmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.01, // Slightly smoother glide
      smoothWheel: true,
      wheelMultiplier: 0.9,
    });

    function raf(time) {
      lenis.raf(time);
      ScrollTrigger.update();
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // --- Section Snapping Logic ---
    let isScrolling = false;

    const handleWheel = (e) => {
      // If already animating to a section, ignore extra wheel ticks
      if (isScrolling) return;

      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const currentSectionIndex = Math.round(scrollPosition / windowHeight);
      
      // Determine scroll direction (down vs up)
      const direction = e.deltaY > 0 ? 1 : -1;
      const targetIndex = currentSectionIndex + direction;

      // Ensure we don't scroll past the top or bottom of the page
      const maxIndex = document.querySelectorAll("section").length - 1;
      if (targetIndex < 0 || targetIndex > maxIndex) return;

      e.preventDefault(); // Stop default free scroll
      isScrolling = true;

      // Smoothly snap to the target section using Lenis
      lenis.scrollTo(targetIndex * windowHeight, {
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Luxurious exponential ease
        onComplete: () => {
          isScrolling = false;
        },
      });
    };

    // Attach wheel listener to the window
    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      lenis.destroy();
    };
  }, []);
}