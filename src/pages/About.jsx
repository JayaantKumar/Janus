import React, { useEffect, useRef } from "react";
import { gsap } from "../lib/gsap"; 
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function About() {
  const pageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Grab all elements with the 'reveal-target' class
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
              start: "top 85%", // Triggers when element is 85% down the viewport
            },
          }
        );
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <Navbar />

      <main ref={pageRef} className="min-h-screen bg-black text-white w-full overflow-hidden pb-0 flex flex-col">
        
        {/* ================= HERO SECTION ================= */}
        <section className="pt-32 md:pt-48 px-6 md:px-12 max-w-[1400px] mx-auto reveal-target">
          <h1 className="text-5xl md:text-8xl font-bold tracking-tighter mb-12 uppercase text-center md:text-left">
            About Our Company
          </h1>
          <div className="w-full aspect-video md:aspect-[21/9] bg-[#111] rounded-xl overflow-hidden relative">
            {/* Replace with your client's actual video/image */}
            <img 
              src="/images/about-video-placeholder.jpg" 
              alt="About Company" 
              className="w-full h-full object-cover opacity-80"
            />
          </div>
        </section>

        {/* ================= STAGGERED TEXT SECTIONS ================= */}
        <section className="px-6 md:px-20 max-w-[1400px] mx-auto mt-32 flex flex-col gap-32">
          
          {/* Block 1: Right Aligned */}
          <div className="w-full flex justify-end reveal-target">
            <div className="md:w-1/2 flex items-start gap-6 border-l border-white/20 pl-6 md:pl-10">
              <p className="text-lg md:text-xl text-neutral-400 font-light leading-relaxed max-w-md">
                <strong className="text-white font-medium">JanusPrint transforms</strong> ideas into reality with precision and creativity, redefining what's possible in the world of custom printing and packaging solutions.
              </p>
            </div>
          </div>

          {/* Block 2: Left Aligned */}
          <div className="w-full flex justify-start reveal-target">
            <div className="md:w-1/2 flex items-start gap-6 border-l border-white/20 pl-6 md:pl-10">
              <p className="text-lg md:text-xl text-neutral-400 font-light leading-relaxed max-w-md">
                <strong className="text-white font-medium">We specialize in bespo</strong>ke printing and premium packaging that elevate brands, delivering timeless solutions built to captivate today and endure tomorrow.
              </p>
            </div>
          </div>

          {/* Block 3: Right Aligned */}
          <div className="w-full flex justify-end reveal-target">
            <div className="md:w-1/2 flex items-start gap-6 border-l border-white/20 pl-6 md:pl-10">
              <p className="text-lg md:text-xl text-neutral-400 font-light leading-relaxed max-w-md">
                Our unwavering commitment to innovation, <strong className="text-white font-medium">quality</strong>, and sustainability ensures every project stands out, paving the way for groundbreaking success in a competitive industry.
              </p>
            </div>
          </div>

          {/* Block 4: Left Aligned */}
          <div className="w-full flex justify-start reveal-target">
            <div className="md:w-1/2 flex items-start gap-6 border-l border-white/20 pl-6 md:pl-10">
              <p className="text-lg md:text-xl text-neutral-400 font-light leading-relaxed max-w-md">
                <strong className="text-white font-medium">Together, let's crea</strong>te custom packaging solutions that inspire and lead the way forward, shaping a future where excellence knows no bounds.
              </p>
            </div>
          </div>

        </section>

        {/* ================= LEGACY PARAGRAPH ================= */}
        <section className="px-6 max-w-5xl mx-auto mt-40 text-center md:text-left reveal-target">
          <p className="text-xl md:text-3xl text-neutral-400 font-light leading-relaxed">
            <strong className="text-white font-medium">JanusPrint, A legacy of</strong> innovation, creativity, and precision. With over four decades of expertise, we don't just deliver packaging—we craft luxurious experiences that amplify your brand's identity. Our vision is to empower businesses with sustainable packaging solutions that inspire trust and admiration.
          </p>
        </section>

        {/* ================= CORE PILLARS LIST ================= */}
        <section className="px-6 md:px-20 max-w-[1400px] mx-auto mt-40 flex justify-end">
          <div className="w-full md:w-1/2 flex flex-col gap-12">
            
            {[
              { bold: "Custom packaging", text: " solutions designed to fit your brand's unique needs." },
              { bold: "Luxury printing servic", text: "es with a focus on precision and creativity." },
              { bold: "State-of-the-art technology that ensures unm", text: "atched quality and consistency." },
              { bold: "Eco-friendly materials", text: " that align with modern values." }
            ].map((item, index) => (
              <div key={index} className="border-l border-white/20 pl-6 reveal-target">
                <p className="text-neutral-400 text-lg md:text-xl font-light">
                  <strong className="text-white font-medium">{item.bold}</strong>{item.text}
                </p>
              </div>
            ))}

          </div>
        </section>

        {/* ================= GROUP COMPANIES ZIG-ZAG ================= */}
        <section className="px-6 md:px-0 max-w-[1400px] mx-auto mt-48 flex flex-col">
          
          {/* Row 1: Text Left, Image Right */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-0 h-auto md:h-[600px] reveal-target mb-12 md:mb-0">
            <div className="flex flex-col justify-center items-end text-right md:pr-24 order-2 md:order-1">
              <h3 className="text-2xl text-white font-medium mb-2">Janus Print</h3>
              <p className="text-neutral-500 font-light">Where creativity and luxury meet.</p>
            </div>
            <div className="order-1 md:order-2 h-[400px] md:h-full">
              <img src="/images/img1.jpg" alt="Janus Print" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
            </div>
          </div>

          {/* Row 2: Empty Left, Text Right (Swaran Packers) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-0 h-auto md:h-[400px] reveal-target mb-12 md:mb-0">
            <div className="hidden md:block"></div>
            <div className="flex flex-col justify-center items-start md:pl-24">
              <h3 className="text-2xl text-white font-medium mb-2">Swaran Packers</h3>
              <p className="text-neutral-500 font-light">Experts in printing and packaging for all industries.</p>
            </div>
          </div>

          {/* Row 3: Text Left, Image Right */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-0 h-auto md:h-[600px] reveal-target mb-12 md:mb-0">
            <div className="flex flex-col justify-center items-end text-right md:pr-24 order-2 md:order-1">
              <h3 className="text-2xl text-white font-medium mb-2">Swaran Print n Pack</h3>
              <p className="text-neutral-500 font-light">Crafting premium cardboard and magnetic boxes.</p>
            </div>
            <div className="order-1 md:order-2 h-[400px] md:h-full">
              <img src="/images/img2.jpg" alt="Swaran Print n Pack" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
            </div>
          </div>

          {/* Row 4: Image Left, Text Right */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-0 h-auto md:h-[600px] reveal-target">
            <div className="h-[400px] md:h-full">
              <img src="/images/img3.jpg" alt="Swaran Industries" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
            </div>
            <div className="flex flex-col justify-center items-start md:pl-24">
              <h3 className="text-2xl text-white font-medium mb-2">Swaran Industries</h3>
              <p className="text-neutral-500 font-light">Specialists in corrugated rolls and industrial packaging.</p>
            </div>
          </div>

        </section>

        {/* ================= CTA & TESTIMONIALS ================= */}
        <section className="mt-48 text-center px-6 reveal-target mb-32">
          <h2 className="text-4xl md:text-6xl font-light tracking-tight text-neutral-400 mb-8">
            Where passion meets <strong className="text-white font-bold">brilliance.</strong>
          </h2>
          <p className="max-w-4xl mx-auto text-neutral-500 text-sm md:text-base leading-relaxed mb-12">
            You've explored the latest custom packaging trends, sustainable solutions, and design innovations in our <strong className="text-white italic">blogs</strong>—now it's time to bring your custom-printed, eco-friendly, and premium packaging to life! Boost your brand with standout packaging.
          </p>
          <button className="px-8 py-3 rounded-full border border-white/20 text-white text-sm font-medium hover:bg-white hover:text-black transition-colors duration-300">
            Get a free quote today
          </button>
        </section>

        {/* ================= CLIENT LOGOS MARQUEE ================= */}
        <section className="mt-8 mb-32 reveal-target overflow-hidden">
          <h3 className="text-center text-3xl md:text-5xl font-bold tracking-tight mb-4">Client Testimonials</h3>
          <p className="text-center text-neutral-400 text-sm md:text-base max-w-2xl mx-auto mb-20 px-6">
            Trusted by 500+ brands, our clients share how Janus Print delivers quality packaging, fast service, and reliable support that helps them grow and stand out.
          </p>

          {/* CSS Infinite Marquee */}
          <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
            <ul className="flex items-center justify-center md:justify-start [&_li]:mx-12 [&_img]:max-w-none animate-infinite-scroll">
              {/* Replace these spans with actual <img> tags of client logos */}
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <li key={i}>
                  <span className="text-white/40 text-2xl font-bold tracking-widest uppercase">BrandLogo{i}</span>
                </li>
              ))}
            </ul>
            {/* Duplicate list for seamless loop */}
            <ul className="flex items-center justify-center md:justify-start [&_li]:mx-12 [&_img]:max-w-none animate-infinite-scroll" aria-hidden="true">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <li key={`dup-${i}`}>
                  <span className="text-white/40 text-2xl font-bold tracking-widest uppercase">BrandLogo{i}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
        
      </main>

      <Footer />
    </>
  );
}