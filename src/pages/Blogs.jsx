import React, { useEffect, useRef } from "react";
import { gsap } from "../lib/gsap"; 
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Blogs() {
  const pageRef = useRef(null);

  // Array of blog data matching your screenshot
  const blogs = [
    {
      title: "How Offset Printing & Post-Press Enhance Custom Box Packaging | Janus Print",
      date: "12-03-2025",
      img: "/images/img1.jpg" // Replace with actual cardboard boxes image
    },
    {
      title: "What If Your Next Shipment Did More Than Just Deliver a Product?",
      date: "19-04-2025",
      img: "/images/img2.jpg" // Replace with actual shipment package image
    },
    {
      title: "Exploring Different Types of Paper for Packaging: GSM, Textures, Sustainability",
      date: "26-02-25",
      img: "/images/img3.jpg" // Replace with actual yellow label image
    },
    {
      title: "How to Choose the Best Packaging Material for Your Products",
      date: "7-03-2025",
      img: "/images/img4.jpg" // Replace with actual candle jars image
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate all elements with the 'reveal-target' class
      const targets = gsap.utils.toArray(".reveal-target");
      
      targets.forEach((target) => {
        gsap.fromTo(
          target,
          { opacity: 0, y: 50 },
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
      {/* Navbar included at the top */}
      <Navbar />

      <main className="flex-grow pt-32 md:pt-48 pb-0">
        
        {/* ================= HEADER SECTION ================= */}
        <header className="px-6 max-w-5xl mx-auto text-center mb-20 reveal-target">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
            News & Ideas From Janus Print
          </h1>
          <p className="text-neutral-400 text-sm md:text-base leading-relaxed max-w-4xl mx-auto">
            Welcome to Our Blog! At Janus Print we're dedicated to creating innovative packaging solutions that prioritize sustainability. Here, you'll find quick insights into eco-friendly practices, design trends, and success stories from our clients. Join us on this journey to make packaging smarter and more sustainable. Stay tuned for updates!
          </p>
        </header>

        {/* ================= BLOG CARDS FEED ================= */}
        <section className="px-6 max-w-[1200px] mx-auto flex flex-col gap-8 md:gap-12 mb-32">
          {blogs.map((blog, index) => (
            <div 
              key={index} 
              className="relative w-full h-[300px] md:h-[500px] rounded-[2rem] overflow-hidden group cursor-pointer reveal-target"
            >
              {/* Background Image with Hover Zoom */}
              <img 
                src={blog.img} 
                alt={blog.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* White Text Box Overlay */}
              <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6 bg-white text-black rounded-xl p-5 md:p-6 transition-transform duration-500 group-hover:-translate-y-2">
                <h2 className="text-lg md:text-xl font-medium mb-1 line-clamp-1">
                  {blog.title}
                </h2>
                <p className="text-xs md:text-sm text-neutral-500 font-mono">
                  {blog.date}
                </p>
              </div>
            </div>
          ))}
        </section>

        {/* ================= CALL TO ACTION SECTION ================= */}
        {/* Note: Update the background image path to match your dark liquid/glass texture */}
        <section 
          className="relative w-full py-40 flex flex-col items-center justify-center text-center px-6 reveal-target bg-cover bg-center"
          style={{ backgroundImage: "url('/images/dark-liquid-bg.jpg')" }} 
        >
          {/* Dark overlay to ensure text readability against the background image */}
          <div className="absolute inset-0 bg-black/60" />
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-6">
              Read Our Packaging Insights? Now, Let's Create Yours!
            </h2>
            <p className="text-neutral-400 text-sm md:text-base leading-relaxed mb-10">
              You've explored the latest custom packaging trends, sustainable solutions, and design innovations in our blogs—now it's time to bring your custom-printed, eco-friendly, and premium packaging to life! Boost your brand with standout packaging.
            </p>
            <button className="px-8 py-3 rounded-full border border-white/30 text-white text-sm font-medium hover:bg-white hover:text-black transition-colors duration-300 backdrop-blur-sm">
              Get a free quote today
            </button>
          </div>
        </section>

      </main>

      {/* Footer included at the very bottom */}
      <Footer />
    </div>
  );
}