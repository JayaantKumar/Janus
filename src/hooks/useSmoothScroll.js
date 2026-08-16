import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import { ScrollTrigger } from "../lib/gsap";

export default function useSmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,
      smoothWheel: true,
    });

    function raf(time) {
      lenis.raf(time);
      ScrollTrigger.update();
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // --- Advanced Section Snapping ---
    let isAnimating = false;
    let touchStartY = 0;

    const handleWheel = (e) => {
      // Lower threshold = triggers on a lighter scroll (adjust between 10 to 30)
      const threshold = 12; 

      if (Math.abs(e.deltaY) < threshold) return; // Ignore accidental micro-movements
      
      if (isAnimating) {
        e.preventDefault();
        return;
      }

      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const currentSectionIndex = Math.round(scrollPosition / windowHeight);
      
      // Determine direction (down vs up)
      const direction = e.deltaY > 0 ? 1 : -1;
      const targetIndex = currentSectionIndex + direction;

      const sections = document.querySelectorAll("section");
      const maxIndex = sections.length - 1;

      if (targetIndex < 0 || targetIndex > maxIndex) return;

      e.preventDefault();
      isAnimating = true;

      // Smooth programmatic snap to the exact next section height
      lenis.scrollTo(targetIndex * windowHeight, {
        duration: 0.1, // Adjust speed here: lower is faster, higher is slower
        easing: (t) => 1 - Math.pow(2, -10 * t), // Exponential smooth snap easing
        onComplete: () => {
          // Cooldown period to let trackpad momentum die down before next snap
          setTimeout(() => {
            isAnimating = false;
          }, 300);
        },
      });
    };

    // Mobile/Tablet Touch Swipe Support
    const handleTouchStart = (e) => {
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchEnd = (e) => {
      if (isAnimating) return;
      const touchEndY = e.changedTouches[0].clientY;
      const diff = touchStartY - touchEndY;

      // Minimum swipe distance required to trigger a snap on mobile
      if (Math.abs(diff) < 40) return; 

      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const currentSectionIndex = Math.round(scrollPosition / windowHeight);

      const direction = diff > 0 ? 1 : -1;
      const targetIndex = currentSectionIndex + direction;

      const sections = document.querySelectorAll("section");
      const maxIndex = sections.length - 1;

      if (targetIndex < 0 || targetIndex > maxIndex) return;

      isAnimating = true;
      lenis.scrollTo(targetIndex * windowHeight, {
        duration: 0.9,
        easing: (t) => 1 - Math.pow(2, -10 * t),
        onComplete: () => {
          setTimeout(() => {
            isAnimating = false;
          }, 300);
        },
      });
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
      lenis.destroy();
    };
  }, []);
}