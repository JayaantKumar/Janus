import {
  Instagram,
  Facebook,
  Globe,
  BookOpen,
  Calendar,
} from "lucide-react";

export default function Footer() {
  const socialLinks = [
    {
      icon: Calendar,
      url: "https://aryangandhi-bearcatsolution.zohobookings.in/",
    },
    {
      icon: Instagram,
      url: "https://www.instagram.com/janusprint?igsh=MTRidDJhNnQyYm45MQ%3D%3D",
    },
    {
      icon: Facebook,
      url: "https://www.facebook.com/people/Janus-Print/pfbid0M6ZD1kvSQ3SZ3q9cJ5AXJPMuraYv3T1KEzMTtQxeUG7snmrxW8eqMYXRhLoqXJKkl/?rdid=whYuJBVZ64Dqb9CX&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1A7AAXYpz4%2F",
    },
    {
      icon: Globe, // Behance
      url: "https://www.behance.net/JanusPrint",
    },
    {
      icon: BookOpen, // Medium
      url: "https://janusprint.medium.com/",
    },
  ];

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

            <a
              href="https://aryangandhi-bearcatsolution.zohobookings.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-10 px-8 py-3 border border-black rounded-full hover:bg-black hover:text-white transition duration-300"
            >
              Get in Touch
            </a>
          </div>

          {/* RIGHT SIDE */}
          <div className="max-w-md text-right md:text-left md:mt-8">
            <p className="text-lg leading-relaxed">
              Elevate your packaging game with our sustainable,
              high-quality printing solutions.
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

            <div className="flex gap-5 mt-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black/60 hover:text-black transition transform hover:scale-110"
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>

        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="flex flex-col md:flex-row justify-between items-center text-sm text-black/50 mt-10 gap-4">
        <p>
          © {new Date().getFullYear()} Janus Print. All rights reserved.
        </p>

        <div className="flex gap-6">
          <span className="hover:text-black transition cursor-pointer">
            Privacy Policy
          </span>
          <span className="hover:text-black transition cursor-pointer">
            Terms & Conditions
          </span>
        </div>
      </div>

    </div>
  );
}