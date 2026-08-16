import React, { useEffect, useRef } from "react";
import { gsap } from "../lib/gsap";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// Reusable component for the Bento Box images with text overlays
const BentoCard = ({ src, title, className, topText }) => (
  <div className={`relative rounded-2xl overflow-hidden group cursor-pointer reveal-target ${className}`}>
    <img 
      src={src} 
      alt={title} 
      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
    
    {topText && (
      <span className="absolute top-4 left-4 text-xs font-mono text-white/60 tracking-wider uppercase">
        {topText}
      </span>
    )}
    
    <h3 className="absolute bottom-6 left-6 text-white text-xl md:text-2xl font-medium tracking-wide">
      {title}
    </h3>
  </div>
);

export default function Portfolio() {
  const pageRef = useRef(null);

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

      <main className="flex-grow pt-32 md:pt-48 pb-32">
        
        {/* ================= HEADER ================= */}
        <header className="px-6 md:px-12 max-w-[1500px] mx-auto mb-16 reveal-target">
          <h1 className="text-5xl md:text-[7vw] font-bold tracking-tighter uppercase leading-none">
            Our Work Portfolio
          </h1>
        </header>

        {/* ================= BENTO GRID 1 ================= */}
        <section className="px-6 md:px-12 max-w-[1500px] mx-auto mb-32">
          {/* Using a 12-column grid for precise width control on desktop */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 auto-rows-[250px] md:auto-rows-[300px]">
            
            {/* Left Tall Card - Spans 5 columns and 2 rows */}
            <BentoCard 
              src="/images/img1.jpg" 
              title="Santosa Perfume" 
              topText="Perfume Packaging"
              className="md:col-span-5 md:row-span-2 h-[500px] md:h-full"
            />
            
            {/* Top Middle */}
            <BentoCard 
              src="/images/img2.jpg" 
              title="Attar Perfume" 
              topText="Work"
              className="md:col-span-3"
            />
            
            {/* Top Right */}
            <BentoCard 
              src="/images/img3.jpg" 
              title="Gulati Sweets" 
              topText="Branding"
              className="md:col-span-4"
            />
            
            {/* Bottom Middle (Wider) */}
            <BentoCard 
              src="/images/img4.jpg" 
              title="Duskin Dawn Packaging" 
              topText="Work"
              className="md:col-span-4"
            />
            
            {/* Bottom Right (Narrower) */}
            <BentoCard 
              src="/images/img1.jpg" 
              title="Santosa Rose" 
              topText="Work"
              className="md:col-span-3"
            />
          </div>
        </section>

        {/* ================= FEATURED PROJECT SECTION ================= */}
        <section className="px-6 md:px-12 max-w-[1500px] mx-auto mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12">
            
            {/* Left Info Column */}
            <div className="lg:col-span-4 flex flex-col items-start reveal-target">
              <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-6">
                Santosa Packaging
              </h2>
              <p className="text-neutral-400 text-sm md:text-base leading-relaxed mb-10">
                Santosa is a premium fragrance brand offering an exquisite range of alcohol-free attars, inspired by traditional Indian aromas. From pure sandalwood and rich oud to floral and musk scents, Santosa captures the essence of luxury in compact, travel-friendly roll-ons. Perfect for everyday wear and special occasions, Santosa's fragrances provide a long-lasting, authentic experience for fragrance enthusiasts.
              </p>
              <button className="px-8 py-3 rounded-full border border-white/20 text-white text-sm hover:bg-white hover:text-black transition-colors duration-300">
                View Full Project
              </button>
            </div>

            {/* Right Images 2x2 Grid */}
            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {[
                { title: "Santosa 1", src: "/images/img1.jpg" },
                { title: "Santosa 2", src: "/images/img2.jpg" },
                { title: "Santosa 3", src: "/images/img3.jpg" },
                { title: "Santosa 4", src: "/images/img4.jpg" },
              ].map((item, index) => (
                <div key={index} className="flex flex-col reveal-target group cursor-pointer">
                  <div className="w-full aspect-square rounded-2xl overflow-hidden mb-4">
                    <img 
                      src={item.src} 
                      alt={item.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <h4 className="text-white text-sm font-medium">{item.title}</h4>
                  <p className="text-neutral-500 text-xs mt-1">Oct 22, 2024</p>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ================= BENTO GRID 2 ================= */}
        <section className="px-6 md:px-12 max-w-[1500px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 auto-rows-[250px] md:auto-rows-[300px]">
            
            {/* Left Tall Card */}
            <BentoCard 
              src="/images/img4.jpg" 
              title="Santosa Perfume" 
              topText="Packaging"
              className="md:col-span-5 md:row-span-2 h-[500px] md:h-full"
            />
            
            {/* Top Middle */}
            <BentoCard 
              src="/images/img3.jpg" 
              title="Solara Foods" 
              topText="Work"
              className="md:col-span-3"
            />
            
            {/* Top Right */}
            <BentoCard 
              src="/images/img2.jpg" 
              title="B and G Perfume" 
              topText="Branding"
              className="md:col-span-4"
            />
            
            {/* Bottom Middle */}
            <BentoCard 
              src="/images/img1.jpg" 
              title="Premium Boxes" 
              topText="Work"
              className="md:col-span-4"
            />
            
            {/* Bottom Right */}
            <BentoCard 
              src="/images/img4.jpg" 
              title="Fresca Juice" 
              topText="Work"
              className="md:col-span-3"
            />
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}