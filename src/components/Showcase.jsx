import { useEffect, useRef } from "react";
import { gsap } from "../lib/gsap";

export default function Showcase() {
  const container = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        container.current,
        { xPercent: -50 }, // start shifted left
        {
          xPercent: 0,     // move right
          duration: 15,
          ease: "linear",
          repeat: -1,
        }
      );
    });

    return () => ctx.revert();
  }, []);

  const images = [
    "/images/img1.jpg",
    "/images/img2.jpg",
    "/images/img3.jpg",
    "/images/img4.jpg",
  ];

  // 🔥 triple duplication for seamless infinite illusion
  const duplicated = [...images, ...images, ...images];

  return (
    <div className="w-full h-full bg-black relative overflow-hidden">

      {/* Heading */}
      <div className="absolute top-16 right-20 z-20">
        <h2 className="text-white text-6xl font-bold tracking-tight">
          CREATIVE <span className="italic font-light">SHOWCASE</span>
        </h2>
      </div>

      {/* Diagonal Container */}
      <div className="absolute inset-0 overflow-hidden">

        <div
          className="absolute bottom-[-120px] left-[-200px] w-[200%]"
          style={{
            transform: "rotate(8deg)",
          }}
        >
          <div
            ref={container}
            className="flex gap-4 w-max"
          >
            {duplicated.map((src, i) => (
              <div key={i} className="flex-shrink-0">
                <img
                  src={src}
                  alt=""
                  className="w-[700px] h-[480px] object-cover rounded-xl"
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}