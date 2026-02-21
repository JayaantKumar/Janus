import { useEffect, useRef } from "react";
import { gsap } from "../lib/gsap";

export default function ScrollSphere() {
  const sphereRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(sphereRef.current, {
        rotateY: 360,
        ease: "none",
        scrollTrigger: {
          trigger: sphereRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  const images = [
    "/images/img1.jpg",
    "/images/img2.jpg",
    "/images/img3.jpg",
    "/images/img4.jpg",
  ];

  return (
    <div
      className="w-full h-full flex items-center justify-center bg-black"
      style={{ perspective: "1200px" }}
    >
      <div
        ref={sphereRef}
        className="relative w-[400px] h-[400px]"
        style={{ transformStyle: "preserve-3d" }}
      >
        {images.map((src, i) => {
          const angle = (360 / images.length) * i;

          return (
            <div
              key={i}
              className="absolute w-full h-full flex items-center justify-center"
              style={{
                transform: `rotateY(${angle}deg) translateZ(180px)`,
                backfaceVisibility: "hidden",
              }}
            >
              <div className="w-[320px] h-[320px] rounded-full overflow-hidden shadow-2xl">
                <img src={src} className="w-full h-full object-cover" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}