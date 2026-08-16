import React, { useEffect, useRef } from "react";
import { gsap } from "../lib/gsap";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Lightbulb, Trash2, HandHeart, Leaf } from "lucide-react"; // Make sure to install lucide-react if you haven't!

// Reusable component for the Info Sections (Image Left, Cards Right)
const InfoSection = ({ image, title, cards }) => (
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 max-w-[1400px] mx-auto px-6 mb-32 reveal-target">
    {/* Left: Image */}
    <div className="w-full h-[400px] lg:h-[700px] rounded-[2rem] overflow-hidden">
      <img src={image} alt={title} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
    </div>

    {/* Right: Content */}
    <div className="flex flex-col justify-center">
      <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-12">
        {title}
      </h2>
      <div className="flex flex-col gap-6">
        {cards.map((card, index) => (
          <div key={index} className="border border-white/10 bg-[#0a0a0a] rounded-2xl p-6 md:p-8 hover:border-white/30 transition-colors duration-300">
            <h3 className="text-white text-lg font-medium mb-3">{card.title}</h3>
            <p className="text-neutral-500 text-sm md:text-sm leading-relaxed">
              {card.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default function Sustainability() {
  const pageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
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
      <Navbar />

      <main className="flex-grow pt-32 md:pt-48 pb-0">
        
        {/* ================= HERO SECTION ================= */}
        <header className="px-6 max-w-[1600px] mx-auto mb-20 reveal-target">
          <h1 className="text-5xl md:text-7xl lg:text-[7vw] font-bold tracking-tighter uppercase leading-[0.9] text-center md:text-right mb-12">
            Environmentally Conscious<br /> Packaging Solutions
          </h1>
          <p className="text-neutral-400 text-sm md:text-base leading-relaxed max-w-5xl mx-auto text-center md:text-center mb-16">
            At JanusPrint, we are committed to providing eco-friendly and sustainable packaging solutions tailored for businesses that value the planet as much as their products. With our expertise in offset printing and corrugated packaging, we ensure that your packaging not only looks great but also minimizes environmental impact. Here's how we are contributing to a greener future:
          </p>
          
          {/* 4 Image Seamless Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 w-full h-[200px] md:h-[400px] gap-1 md:gap-2">
            <img src="/images/img1.jpg" alt="Sustainability 1" className="w-full h-full object-cover rounded-xl" />
            <img src="/images/img2.jpg" alt="Sustainability 2" className="w-full h-full object-cover rounded-xl" />
            <img src="/images/img3.jpg" alt="Sustainability 3" className="w-full h-full object-cover rounded-xl" />
            <img src="/images/img4.jpg" alt="Sustainability 4" className="w-full h-full object-cover rounded-xl" />
          </div>
        </header>

        {/* ================= INFO SECTIONS ================= */}
        <section className="mt-32">
          
          <InfoSection 
            image="/images/img1.jpg"
            title="Eco-Friendly Packaging Options"
            cards={[
              { title: "Biodegradable Packaging:", desc: "We use biodegradable paper-based materials such as kraft paper for packaging. These materials decompose naturally, leaving no harmful residue." },
              { title: "Recycled Packaging:", desc: "Our packaging solutions can also offer on demand 100% recycled paperboard and corrugated cardboard, reducing the need for virgin materials and conserving natural resources." },
              { title: "Compostable Packaging:", desc: "We offer paper-based packaging that is fully compostable, breaking down into natural elements in composting conditions." }
            ]}
          />

          <InfoSection 
            image="/images/img2.jpg"
            title="Features of Eco-Friendly Packaging"
            cards={[
              { title: "Offset Printing on Sustainable Materials:", desc: "Our advanced offset printing machines utilize soy-based or vegetable-based inks, which are less harmful to the environment than traditional petroleum-based inks. We also ensure precise, high-quality printing on biodegradable and recycled materials, further reducing waste." },
              { title: "Corrugated Packaging with Recycled Content:", desc: "Our corrugated machines are capable of producing sturdy packaging using recycled fibers, perfect for shipping, storage, and retail displays." },
              { title: "Water-Based Coatings:", desc: "For environmentally conscious businesses, we offer also water-based coatings that are eco-friendly and recyclable, ensuring your packaging remains functional without compromising sustainability." }
            ]}
          />

          <InfoSection 
            image="/images/img3.jpg"
            title="Why Choose Our Sustainable Packaging?"
            cards={[
              { title: "Minimized Environmental Impact:", desc: "Our focus on biodegradable, recyclable, and compostable materials ensures your packaging leaves a smaller carbon footprint, while also meeting the growing demand for environmentally conscious products and aligning with international environmental regulations." },
              { title: "Customizable and Versatile:", desc: "From corrugated boxes for shipping to luxury printed paperboard for retail, our packaging solutions are tailored to suit your specific needs." },
              { title: "Durability Meets Sustainability:", desc: "With high-quality materials and innovative designs, our packaging solutions ensure strength and sustainability go hand in hand." }
            ]}
          />

        </section>

        {/* ================= COMMITMENT GRID ================= */}
        <section className="px-6 max-w-[1400px] mx-auto mb-40 reveal-target">
          <h2 className="text-3xl md:text-5xl font-light uppercase tracking-wide mb-12 max-w-md">
            Our Commitment<br />To Environment
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="bg-[#0a0a0a] border border-white/10 rounded-3xl p-8 flex flex-col justify-between min-h-[280px] hover:bg-[#111] transition">
              <div>
                <h3 className="text-white text-lg font-medium mb-3">Green Energy Integration</h3>
                <p className="text-neutral-500 text-sm">We harness renewable energy sources to power part of our operations.</p>
              </div>
              <Lightbulb size={32} className="text-white/40 mt-8" strokeWidth={1.5} />
            </div>

            <div className="bg-[#0a0a0a] border border-white/10 rounded-3xl p-8 flex flex-col justify-between min-h-[280px] hover:bg-[#111] transition">
              <div>
                <h3 className="text-white text-lg font-medium mb-3">Waste Management</h3>
                <p className="text-neutral-500 text-sm">We rigorously recycle and repurpose production byproducts to reduce landfill impact.</p>
              </div>
              <Trash2 size={32} className="text-white/40 mt-8" strokeWidth={1.5} />
            </div>

            <div className="bg-[#0a0a0a] border border-white/10 rounded-3xl p-8 flex flex-col justify-between min-h-[280px] hover:bg-[#111] transition">
              <div>
                <h3 className="text-white text-lg font-medium mb-3">Responsible Supply Chain</h3>
                <p className="text-neutral-500 text-sm">We collaborate with partners who share our commitment to sustainability.</p>
              </div>
              <HandHeart size={32} className="text-white/40 mt-8" strokeWidth={1.5} />
            </div>

            <div className="bg-[#0a0a0a] border border-white/10 rounded-3xl p-8 flex flex-col justify-between min-h-[280px] hover:bg-[#111] transition">
              <div>
                <h3 className="text-white text-lg font-medium mb-3">Eco-conscious Design</h3>
                <p className="text-neutral-500 text-sm">We engineer packaging structures that minimize material waste from the start.</p>
              </div>
              <Leaf size={32} className="text-white/40 mt-8" strokeWidth={1.5} />
            </div>

          </div>
        </section>

        {/* ================= MATERIALS GALLERY ================= */}
        <section className="w-full mb-32 reveal-target">
          <div className="px-6 max-w-5xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-light uppercase tracking-wide mb-8">
              Types of Sustainable Materials We Use
            </h2>
            <p className="text-neutral-400 text-sm md:text-base leading-relaxed">
              At JanusPrint, we specialize in eco-friendly materials that deliver exceptional quality for your packaging needs while supporting a greener planet. These materials are carefully chosen to ensure they align with our commitment to sustainability while offering the strength, durability, and print quality your products deserve. By incorporating these materials, we enable you to reduce your environmental impact without compromising on packaging performance. Here's a brief overview of the materials we use:
            </p>
          </div>
          
          {/* 6 Panel Seamless Gallery */}
          <div className="w-full grid grid-cols-3 md:grid-cols-6 h-[200px] md:h-[400px]">
            <img src="/images/img1.jpg" alt="Material 1" className="w-full h-full object-cover" />
            <img src="/images/img2.jpg" alt="Material 2" className="w-full h-full object-cover" />
            <img src="/images/img3.jpg" alt="Material 3" className="w-full h-full object-cover" />
            <img src="/images/img4.jpg" alt="Material 4" className="w-full h-full object-cover" />
            <img src="/images/img1.jpg" alt="Material 5" className="w-full h-full object-cover" />
            <img src="/images/img2.jpg" alt="Material 6" className="w-full h-full object-cover" />
          </div>
        </section>

        {/* ================= FINAL CTA ================= */}
        <section className="px-6 max-w-4xl mx-auto text-center mb-40 reveal-target">
          <p className="text-xl md:text-3xl font-light text-neutral-400 leading-relaxed mb-10">
            By choosing <strong className="text-white font-medium">Janus Print</strong>, you are partnering with a team that prioritizes <strong className="text-white font-medium">sustainability</strong> without compromising quality or aesthetics. Let us help you make a <strong className="text-white font-medium">positive impact</strong> with packaging that reflects your brand's values and commitment to a <strong className="text-white font-medium">greener planet.</strong>
          </p>
          <p className="text-lg md:text-xl font-light text-neutral-400 mb-10">
            Would you like to explore our <strong className="text-white font-medium">eco-friendly packaging</strong> catalog or request a quote? Contact us today to get started!
          </p>
          <button className="px-8 py-3 rounded-full border border-white/20 text-white text-sm font-medium bg-[#0a0a0a] hover:bg-white hover:text-black transition-colors duration-300">
            Get started
          </button>
        </section>

      </main>

      <Footer />
    </div>
  );
}