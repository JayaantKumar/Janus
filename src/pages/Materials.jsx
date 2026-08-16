import React, { useEffect, useRef } from "react";
import { gsap } from "../lib/gsap";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Materials() {
  const pageRef = useRef(null);

  // Data structure for the material categories and their respective images
  const materialCategories = [
    {
      title: "Paper",
      images: [
        "/images/img1.jpg", "/images/img2.jpg", "/images/img3.jpg",
        "/images/img4.jpg", "/images/img1.jpg", "/images/img2.jpg",
      ],
    },
    {
      title: "Hologram / Hot Foils",
      images: [
        "/images/img3.jpg", "/images/img4.jpg", "/images/img1.jpg",
        "/images/img2.jpg", "/images/img3.jpg", "/images/img4.jpg",
      ],
    },
    {
      title: "Pre-Press Work",
      images: [
        "/images/img1.jpg", "/images/img2.jpg", "/images/img3.jpg",
        "/images/img4.jpg", "/images/img1.jpg", "/images/img2.jpg",
      ],
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const targets = gsap.utils.toArray(".reveal-target");
      targets.forEach((target) => {
        gsap.fromTo(
          target,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: target,
              start: "top 85%",
            },
          }
        );
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={pageRef} className="min-h-screen bg-black text-white w-full overflow-hidden flex flex-col">
      <Navbar />

      <main className="flex-grow pb-32">
        
        {/* ================= HERO SECTION ================= */}
        {/* Update the background image URL to your actual dark 3D infinity loop image */}
        <header 
          className="relative w-full h-[60vh] md:h-[80vh] flex items-center justify-center reveal-target bg-cover bg-center"
          style={{ backgroundImage: "url('/images/infinity-bg.jpg')" }} 
        >
          {/* Subtle dark gradient overlay to ensure text pops */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black" />
          
          <h1 className="relative z-10 text-6xl md:text-8xl lg:text-[9vw] font-bold tracking-tighter uppercase text-white drop-shadow-2xl">
            Materials
          </h1>
        </header>

        {/* ================= MATERIALS GALLERIES ================= */}
        <section className="w-full flex flex-col gap-32 mt-12 md:mt-20">
          {materialCategories.map((category, index) => (
            <div key={index} className="w-full reveal-target">
              
              {/* Category Title */}
              <div className="px-6 md:px-12 max-w-[1600px] mx-auto mb-6 md:mb-10">
                <h2 className="text-2xl md:text-4xl text-neutral-300 font-light italic tracking-wide">
                  {category.title}
                </h2>
              </div>

              {/* Seamless Image Grid (No Gaps) */}
              <div className="w-full px-6 md:px-12 max-w-[1600px] mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-6 w-full h-auto shadow-2xl">
                  {category.images.map((src, imgIndex) => (
                    <div key={imgIndex} className="w-full aspect-square overflow-hidden group">
                      <img 
                        src={src} 
                        alt={`${category.title} sample ${imgIndex + 1}`} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </section>

      </main>

      <Footer />
    </div>
  );
}