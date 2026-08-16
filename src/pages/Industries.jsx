import React, { useEffect, useRef } from "react";
import { gsap } from "../lib/gsap";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Industries() {
  const pageRef = useRef(null);

  // Array of scattered bubble images with custom sizing and positioning classes to recreate the organic layout
  const bubbleGallery = [
    { img: "/images/img1.jpg", size: "w-32 h-32 md:w-44 md:h-44", align: "self-start" },
    { img: "/images/img2.jpg", size: "w-44 h-44 md:w-64 md:h-64", align: "self-center" },
    { img: "/images/img3.jpg", size: "w-36 h-36 md:w-52 md:h-52", align: "self-start" },
    { img: "/images/img4.jpg", size: "w-40 h-40 md:w-56 md:h-56", align: "self-end" },
    { img: "/images/img1.jpg", size: "w-28 h-28 md:w-36 md:h-36", align: "self-center" },
    { img: "/images/img2.jpg", size: "w-36 h-36 md:w-48 md:h-48", align: "self-start" },
    { img: "/images/img3.jpg", size: "w-48 h-48 md:w-72 md:h-72", align: "self-end" },
    { img: "/images/img4.jpg", size: "w-32 h-32 md:w-44 md:h-44", align: "self-center" },
    { img: "/images/img1.jpg", size: "w-36 h-36 md:w-52 md:h-52", align: "self-start" },
    { img: "/images/img2.jpg", size: "w-44 h-44 md:w-60 md:h-60", align: "self-center" },
    { img: "/images/img3.jpg", size: "w-32 h-32 md:w-40 md:h-40", align: "self-end" },
    { img: "/images/img4.jpg", size: "w-48 h-48 md:w-72 md:h-72", align: "self-center" },
    { img: "/images/img1.jpg", size: "w-28 h-28 md:w-36 md:h-36", align: "self-start" },
    { img: "/images/img2.jpg", size: "w-40 h-40 md:w-56 md:h-56", align: "self-end" },
    { img: "/images/img3.jpg", size: "w-32 h-32 md:w-44 md:h-44", align: "self-center" },
    { img: "/images/img4.jpg", size: "w-44 h-44 md:w-64 md:h-64", align: "self-start" },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Stagger reveal animation for the floating bubbles on scroll
      const bubbles = gsap.utils.toArray(".bubble-item");
      
      bubbles.forEach((bubble) => {
        gsap.fromTo(
          bubble,
          { opacity: 0, scale: 0.7, y: 40 },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.8,
            ease: "back.out(1.4)",
            scrollTrigger: {
              trigger: bubble,
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

      <main className="flex-grow pt-24 md:pt-32">
        
        {/* ================= LIME GREEN HEADER SECTION ================= */}
        <section className="bg-[#D1EB42] text-black pt-20 pb-20 md:py-28 px-6 md:px-16 w-full relative overflow-hidden">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Side: Overlapping Circular Previews */}
            <div className="lg:col-span-5 relative h-64 md:h-80 w-full flex items-center justify-center">
              <div className="absolute left-0 top-0 w-32 h-32 md:w-44 md:h-44 rounded-full overflow-hidden border-4 border-[#D1EB42] shadow-xl transform -rotate-6 z-10">
                <img src="/images/img1.jpg" alt="Packaging sample" className="w-full h-full object-cover" />
              </div>
              <div className="absolute left-20 md:left-28 top-4 w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden border-4 border-[#D1EB42] shadow-xl z-20">
                <img src="/images/img2.jpg" alt="Packaging sample" className="w-full h-full object-cover" />
              </div>
              <div className="absolute left-40 md:left-56 top-10 w-36 h-36 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-[#D1EB42] shadow-xl transform rotate-12 z-30">
                <img src="/images/img3.jpg" alt="Packaging sample" className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Right Side: Title & Transcribed Copy */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight uppercase leading-none mb-6">
                INDUSTRIES WE SERVE
              </h1>
              <p className="text-black/80 text-sm md:text-base leading-relaxed max-w-2xl font-medium">
                At Janus Print, we specialize in custom packaging solutions for industries including food & beverage packaging, automotive packaging, cosmetic packaging, and health & wellness packaging. With over 40 years of experience in eco-friendly printing, sustainable corrugated box design, and innovative packaging, our market-specific strategies enhance product appeal, functionality, and brand visibility. Discover our tailored, high-quality packaging services that drive organic traffic and elevate your business to new heights.
              </p>
            </div>

          </div>
        </section>

        {/* ================= DARK SCATTERED BUBBLE GALLERY ================= */}
        <section className="bg-black py-24 md:py-36 px-6 md:px-16 max-w-[1500px] mx-auto">
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
            {bubbleGallery.map((bubble, index) => (
              <div
                key={index}
                className={`bubble-item ${bubble.size} ${bubble.align} rounded-full overflow-hidden border border-white/10 group cursor-pointer transition-transform duration-500 hover:scale-110 hover:border-white/30 hover:z-30 relative shadow-2xl`}
              >
                <img
                  src={bubble.img}
                  alt={`Industry Example ${index + 1}`}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>
            ))}
          </div>
        </section>

      </main>

      {/* Footer component */}
      <Footer />
    </div>
  );
}