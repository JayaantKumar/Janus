import React, { useEffect, useRef } from "react";
import { gsap } from "../lib/gsap"; 
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Faq() {
  const pageRef = useRef(null);

  // Exact FAQ data transcribed from your screenshot
  const faqs = [
    {
      question: "How can packaging materials impact the environment, and what strategies can businesses use to reduce their environmental footprint?",
      answer: "Packaging can lead to waste and emissions. Companies can choose eco-friendly options, recycle, and make their packaging more efficient."
    },
    {
      question: "What are the advantages and disadvantages of traditional packaging materials like plastic, paper, and cardboard?",
      answer: "Traditional materials are cheap and easy to find, but they can harm the environment and are hard to dispose of."
    },
    {
      question: "What are some examples of sustainable and eco-friendly packaging options?",
      answer: "Eco-friendly choices include biodegradable and recycled materials. Think of paper, cardboard, and plant-based plastics."
    },
    {
      question: "What are the key factors to consider when selecting packaging materials?",
      answer: "When picking packaging, think about durability, cost, and how it affects the environment. Also, consider branding and if it meets legal standards."
    },
    {
      question: "What are some cost-effective solutions for packaging materials?",
      answer: "To save money, buy in bulk, use recycled stuff, and find new ways to make packaging cheaper."
    },
    {
      question: "How can businesses customize and brand their packaging materials to enhance their brand identity?",
      answer: "Companies can use specific designs and materials to make packaging match their brand, creating a unique experience for customers."
    },
    {
      question: "What are the key regulatory compliance and safety standards that businesses must consider when using packaging materials?",
      answer: "Companies must follow safety rules and legal requirements. This includes product safety, environmental impact, and tracking the supply chain."
    },
    {
      question: "How can businesses effectively source and procure reliable packaging materials and suppliers?",
      answer: "Find and check out good suppliers. Make sure they offer quality materials consistently to meet your needs and customer expectations."
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate all elements with the 'reveal-target' class, just like the other pages
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

      <main className="flex-grow pt-32 md:pt-48 pb-0">
        
        {/* ================= HEADER SECTION ================= */}
        <header className="px-6 max-w-4xl mx-auto text-center mb-16 reveal-target">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-neutral-400 text-sm md:text-base leading-relaxed">
            If you have any other questions, please get in touch! We're here to help.
          </p>
        </header>

        {/* ================= FAQ LIST SECTION ================= */}
        <section className="px-6 max-w-[1000px] mx-auto flex flex-col gap-4 mb-32">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="w-full bg-[#0d0d0d] border border-white/5 rounded-2xl p-6 md:p-8 reveal-target hover:border-white/20 transition-colors duration-300"
            >
              <h3 className="text-white text-base md:text-lg font-medium mb-3 leading-snug">
                {faq.question}
              </h3>
              <p className="text-neutral-500 text-sm md:text-sm leading-relaxed">
                {faq.answer}
              </p>
            </div>
          ))}
        </section>

        {/* ================= CALL TO ACTION SECTION ================= */}
        <section 
          className="relative w-full py-40 flex flex-col items-center justify-center text-center px-6 reveal-target bg-cover bg-center"
          style={{ backgroundImage: "url('/images/dark-liquid-bg.jpg')" }} // Re-using the same liquid background from the blog
        >
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-black/70" />
          
          <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
            <h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-6">
              Got Your Answers? <span className="text-neutral-400 font-light">Now, Let's</span><br/>
              <span className="text-neutral-400 font-light">Create Your Custom Packaging!</span>
            </h2>
            
            <p className="text-neutral-400 text-sm leading-relaxed mb-10 max-w-2xl">
              You've got the facts—now take the next step! Explore our expert blogs on custom packaging, sustainable solutions, and premium design trends, or connect with us to get a free quote on high-quality, custom-printed packaging tailored to your brand.
            </p>
            
            <button className="px-8 py-3 rounded-full border border-white/20 text-white text-sm font-medium hover:bg-white hover:text-black transition-colors duration-300 backdrop-blur-sm mb-6">
              Connect with us
            </button>
            
            <p className="text-neutral-500 text-xs">
              Or contact us directly at <a href="mailto:connect@janusprint.com" className="text-white hover:underline">connect@janusprint.com</a>
            </p>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}