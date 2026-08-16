import React, { useEffect, useRef } from "react";
import { gsap } from "../lib/gsap";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// Reusable component for the Service Blocks
const ServiceBlock = ({ title, description, points, img1, img2, dotColorClass }) => (
  <div className="w-full flex flex-col mb-16 md:mb-24 reveal-target">
    
    {/* Top Images (if provided) */}
    {(img1 || img2) && (
      <div className="flex flex-col md:flex-row gap-1 w-full h-[150px] md:h-[200px] mb-8 md:mb-16">
        {img1 && <img src={img1} alt="Service preview" className="w-full md:w-1/2 h-full object-cover" />}
        {img2 && <img src={img2} alt="Service preview" className="w-full md:w-1/2 h-full object-cover" />}
      </div>
    )}

    {/* Content Grid */}
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16 px-6 max-w-[1400px] mx-auto w-full">
      {/* Title */}
      <div className="lg:col-span-4">
        <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight leading-tight">
          {title}
        </h2>
      </div>

      {/* Description & Points */}
      <div className="lg:col-span-8 flex flex-col">
        <p className="text-neutral-300 text-sm md:text-base leading-relaxed mb-8 md:mb-12">
          {description}
        </p>

        <div className="flex flex-col gap-6">
          {points.map((point, index) => (
            <div key={index} className="flex flex-col border-b border-white/20 pb-6">
              <p className="text-sm md:text-base text-neutral-400 font-light">
                <span className="text-white font-medium mr-1">{point.split("–")[0]} –</span>
                {point.split("–")[1]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* Dot Matrix Divider */}
    <div className={`w-full h-8 mt-16 md:mt-24 opacity-80 ${dotColorClass}`} 
         style={{
           backgroundImage: "radial-gradient(circle, currentColor 1px, transparent 1px)",
           backgroundSize: "8px 8px"
         }}
    />
  </div>
);

export default function OurServices() {
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

      <main className="flex-grow pt-32 pb-0">
        
        {/* ================= HEADER SECTION ================= */}
        <header className="px-6 max-w-[1400px] mx-auto w-full mb-12 reveal-target">
          <h1 className="text-5xl md:text-[8vw] font-bold tracking-tighter uppercase leading-none border-b border-white/20 pb-8 mb-6">
            Services We Offer
          </h1>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center text-xs md:text-sm text-neutral-400 font-medium">
            <span>Working Worldwide</span>
            <span className="text-left md:text-right max-w-sm mt-2 md:mt-0">
              Tailored packaging that meets your product's unique needs for perfect fit and protection.
            </span>
          </div>
        </header>

        {/* ================= 3x3 IMAGE GRID ================= */}
        {/* We use a tiny gap (gap-1) to create those thin black grid lines between the images */}
        <section className="w-full flex flex-col gap-1 mb-24 md:mb-40 reveal-target bg-black">
          <div className="grid grid-cols-3 w-full h-[150px] md:h-[350px] gap-1">
            <img src="/images/img1.jpg" alt="Packaging" className="w-full h-full object-cover" />
            <img src="/images/img2.jpg" alt="Packaging" className="w-full h-full object-cover" />
            <img src="/images/img3.jpg" alt="Packaging" className="w-full h-full object-cover" />
          </div>
          <div className="grid grid-cols-3 w-full h-[150px] md:h-[350px] gap-1">
            <img src="/images/img4.jpg" alt="Packaging" className="w-full h-full object-cover" />
            <img src="/images/img1.jpg" alt="Packaging" className="w-full h-full object-cover" />
            <img src="/images/img2.jpg" alt="Packaging" className="w-full h-full object-cover" />
          </div>
          <div className="grid grid-cols-3 w-full h-[150px] md:h-[350px] gap-1">
            <img src="/images/img3.jpg" alt="Packaging" className="w-full h-full object-cover" />
            <img src="/images/img4.jpg" alt="Packaging" className="w-full h-full object-cover" />
            <img src="/images/img1.jpg" alt="Packaging" className="w-full h-full object-cover" />
          </div>
        </section>

        {/* ================= SERVICE BLOCKS ================= */}
        
        <ServiceBlock 
          title="Environmentally Conscious Packaging Solutions"
          description="Eco-friendly packaging minimizes environmental impact by utilizing biodegradable, recyclable, and compostable materials. Our sustainable solutions help businesses align with waste reduction goals while maintaining premium quality and durability."
          points={[
            "Eco-Friendly Materials – Use biodegradable, recyclable, and compostable options that reduce environmental impact.",
            "Reusable & Recycled Packaging – Provide packaging solutions made from reusable materials and recycled sources.",
            "Carbon Footprint Reduction – Implement eco-conscious packaging practices that enhance sustainability."
          ]}
          dotColorClass="text-orange-500"
        />

        <ServiceBlock 
          title="Branding & Packaging Design Services"
          description="Our design services focus on creating strong brand identities and impactful product packaging that leave a lasting impression. We combine creativity and strategy to deliver versatile designs for both print and digital platforms."
          points={[
            "Comprehensive Branding Solutions – Build a cohesive brand identity with custom logos, packaging, and marketing materials.",
            "Product Packaging & Label Design – Design visually appealing packaging and labels to increase product visibility and market impact.",
            "Print & Digital Versatility – Develop designs optimized for brochures, catalogs, websites, and other platforms to enhance reach."
          ]}
          img1="/images/img2.jpg"
          img2="/images/img3.jpg"
          dotColorClass="text-pink-400"
        />

        <ServiceBlock 
          title="High Quality Printing Solutions"
          description="We deliver premium printing services that elevate your brand presentation with precision, vibrant finishes, and attention to detail. From promotional materials to functional prints, we ensure professional quality every time."
          points={[
            "Catalog & Brochure Printing – Professionally printed catalogs and brochures for clear communication and enhanced engagement.",
            "Custom Stickers & Hang Tags – Create versatile stickers and premium hang tags that support branding and promotional activities.",
            "Envelopes & Marketing Materials – Produce high-quality envelopes and print essentials tailored for branding and correspondence needs."
          ]}
          img1="/images/img4.jpg"
          img2="/images/img1.jpg"
          dotColorClass="text-yellow-200"
        />

        <ServiceBlock 
          title="Custom Packaging Solutions"
          description="We specialize in creating custom packaging designs that enhance product appeal, meet unique specifications, and align seamlessly with your brand identity. Our solutions combine innovation, functionality, and style."
          points={[
            "Tailored Packaging Designs – Innovative, tailor-made boxes for products of all shapes and sizes.",
            "Premium Box Solutions – From rigid boxes and magnetic closure boxes to collapsible and luxury boxes.",
            "Modern & Sustainable Packaging – Offer new-age designs, including eco-friendly solutions, to meet the growing demands of modern businesses."
          ]}
          img1="/images/img2.jpg"
          img2="/images/img3.jpg"
          dotColorClass="text-orange-600"
        />

        <ServiceBlock 
          title="Post-Press Finishing Services"
          description="Post-press work ensures that your printed materials achieve a polished, professional finish that enhances their visual appeal and durability. We offer a range of finishing techniques to elevate your print products, making them stand out and meet industry standards for quality and functionality."
          points={[
            "Lamination & Coating – Enhance durability and appearance with gloss, matte, or UV coatings for a premium finish.",
            "Die-Cutting & Embossing – Add custom shapes, intricate cuts, or embossed textures for standout designs and tactile appeal.",
            "Binding & Folding – Provide professional binding (spiral, perfect, or saddle-stitch) and precision folding for catalogs, brochures, and booklets."
          ]}
          img1="/images/img4.jpg"
          img2="/images/img1.jpg"
          dotColorClass="text-transparent" // Last block doesn't need a visible dotted divider in the screenshot
        />

      </main>

      <Footer />
    </div>
  );
}