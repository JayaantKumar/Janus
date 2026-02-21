export default function Footer() {
  return (
    <div className="w-full h-full bg-[#f3f3f3] text-black flex flex-col justify-between px-10 md:px-20 py-16">

      {/* TOP SECTION */}
      <div>
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-10">

          {/* LEFT SIDE */}
          <div>
            <h1 className="text-6xl md:text-8xl font-extrabold leading-none">
              LET'S <br /> TALK
            </h1>

            <button className="mt-10 px-8 py-3 border border-black rounded-full hover:bg-black hover:text-white transition duration-300">
              Get in Touch
            </button>
          </div>

          {/* RIGHT SIDE */}
          <div className="max-w-md text-right md:text-left md:mt-8">
            <p className="text-lg leading-relaxed">
              Elevate your packaging game with our sustainable, high-quality printing solutions.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-black/20 my-16" />

        {/* LINKS SECTION */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-sm">

          {/* Explore */}
          <div>
            <h4 className="text-black/50 mb-4 font-semibold uppercase tracking-wider">
              Explore
            </h4>
            <ul className="space-y-3">
              <li>Portfolio</li>
              <li>Our Services</li>
              <li>Info</li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-black/50 mb-4 font-semibold uppercase tracking-wider">
              Resources
            </h4>
            <ul className="space-y-3">
              <li>FAQ's</li>
              <li>Blogs</li>
              <li>Glossary</li>
              <li>Material</li>
            </ul>
          </div>

          {/* Visit */}
          <div>
            <h4 className="text-black/50 mb-4 font-semibold uppercase tracking-wider">
              Visit
            </h4>
            <p>
              123 Creative Estate,<br />
              Industrial Area Phase 1,<br />
              New Delhi, India
            </p>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-black/50 mb-4 font-semibold uppercase tracking-wider">
              Social
            </h4>
            <div className="flex gap-4 text-lg">
              <span>Instagram</span>
              <span>Facebook</span>
              <span>Behance</span>
              <span>Twitter</span>
              <span>Medium</span>
            </div>
          </div>

        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="flex flex-col md:flex-row justify-between items-center text-sm text-black/50 mt-10 gap-4">
        <p>© {new Date().getFullYear()} Janus Print Clone. All rights reserved.</p>
        <div className="flex gap-6">
          <span>Privacy Policy</span>
          <span>Terms & Conditions</span>
        </div>
      </div>

    </div>
  );
}