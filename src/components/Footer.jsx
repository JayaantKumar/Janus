import React from "react";

export default function Footer() {
  const socialLinks = [
    { name: "Instagram", url: "https://www.instagram.com/janusprint?igsh=MTRidDJhNnQyYm45MQ%3D%3D" },
    { name: "Facebook", url: "https://www.facebook.com/people/Janus-Print/pfbid0M6ZD1kvSQ3SZ3q9cJ5AXJPMuraYv3T1KEzMTtQxeUG7snmrxW8eqMYXRhLoqXJKkl/?rdid=whYuJBVZ64Dqb9CX&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1A7AAXYpz4%2F" },
    { name: "Behance", url: "https://www.behance.net/JanusPrint" },
    { name: "Twitter", url: "#" },
    { name: "Medium", url: "https://janusprint.medium.com/" },
  ];

  return (
    <footer className="w-full min-h-screen flex flex-col justify-between bg-[#D1EB42] text-black overflow-hidden pt-16 md:pt-24 px-8 md:px-16 relative">
      
      {/* ================= TOP SECTION ================= */}
      <div className="flex flex-col md:flex-row justify-between w-full gap-16 md:gap-8">
        
        {/* Left Side: Call to Action */}
        <div className="md:w-1/3 flex flex-col">
          <p className="text-sm md:text-base font-semibold mb-4">
            What are you waiting for?
          </p>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight tracking-tight">
            Get stunning packaging designed within the next 2 weeks*
          </h2>
          
          <a
            href="https://aryangandhi-bearcatsolution.zohobookings.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 px-6 py-3 w-max border-2 border-black rounded-full font-bold hover:bg-black hover:text-[#D1EB42] transition-colors duration-300"
          >
            Get in Touch
          </a>
        </div>

        {/* Right Side: Links Grid */}
        <div className="md:w-1/2 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 text-sm font-medium">
          
          {/* Column 1: Pages */}
          <div className="flex flex-col gap-3">
            <h4 className="font-bold mb-1">Pages</h4>
            <a href="/" className="hover:opacity-60 transition-opacity">Home</a>
            <a href="/industries" className="hover:opacity-60 transition-opacity">Industries We Serve</a>
            <a href="/our-services" className="hover:opacity-60 transition-opacity">Our Services</a>
          </div>

          {/* Column 2: Company */}
          <div className="flex flex-col gap-3">
            <h4 className="font-bold mb-1">Company</h4>
            <a href="/about" className="hover:opacity-60 transition-opacity">About Us</a>
            <a href="/sustainability" className="hover:opacity-60 transition-opacity">Sustainable Packaging</a>
            <a href="/portfolio" className="hover:opacity-60 transition-opacity">Portfolio</a>
            <a href="/privacy-policy" className="hover:opacity-60 transition-opacity">Privacy Policy</a>
          </div>

          {/* Column 3: Info */}
          <div className="flex flex-col gap-3">
            <h4 className="font-bold mb-1">Info</h4>
            <a href="/faq" className="hover:opacity-60 transition-opacity">FAQ's</a>
            <a href="/blogs" className="hover:opacity-60 transition-opacity">Blogs</a>
            <a href="#" className="hover:opacity-60 transition-opacity">Glossary</a>
            <a href="/materials" className="hover:opacity-60 transition-opacity">Material</a>
          </div>

          {/* Column 4: Social Links */}
          <div className="flex flex-col gap-3">
            <h4 className="font-bold mb-1">Social Links</h4>
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-60 transition-opacity"
              >
                {social.name}
              </a>
            ))}
          </div>

        </div>
      </div>

      {/* ================= BOTTOM SECTION (GIANT TEXT) ================= */}
      <div className="w-full mt-24 mb-[-2vw]">
        <h1 className="text-[16vw] font-bold tracking-tighter leading-[0.75] text-center whitespace-nowrap text-black">
          JANUS PRINT
        </h1>
      </div>

    </footer>
  );
}