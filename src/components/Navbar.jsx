import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Instagram,
  Facebook,
  Globe,
  BookOpen,
  Calendar,
} from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Industries We Serve", path: "/industries" },
    { name: "About Us", path: "/about" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Resources", path: "/resources" },
    { name: "Sustainable Packaging", path: "/sustainability" },
  ];

  const socialLinks = [
    {
      icon: Instagram,
      url: "https://www.instagram.com/janusprint?igsh=MTRidDJhNnQyYm45MQ%3D%3D",
    },
    {
      icon: Facebook,
      url: "https://www.facebook.com/people/Janus-Print/pfbid0M6ZD1kvSQ3SZ3q9cJ5AXJPMuraYv3T1KEzMTtQxeUG7snmrxW8eqMYXRhLoqXJKkl/?rdid=whYuJBVZ64Dqb9CX&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1A7AAXYpz4%2F",
    },
    {
      icon: Globe,
      url: "https://www.behance.net/JanusPrint",
    },
    {
      icon: BookOpen,
      url: "https://janusprint.medium.com/",
    },
  ];

  return (
    <>
      {/* ================= DESKTOP NAVBAR ================= */}
      <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl">
        <div
          className="
            flex items-center justify-between
            px-8 py-4
            rounded-full
            backdrop-blur-xl
            bg-white/5
            border border-white/10
            shadow-[0_8px_32px_rgba(0,0,0,0.37)]
          "
        >
          {/* Logo */}
          <Link to="/" className="text-white font-semibold text-lg tracking-wide">
            JANUS
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `transition ${
                    isActive
                      ? "text-white"
                      : "text-white/60 hover:text-white"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Right Section (Social + CTA) */}
          <div className="hidden md:flex items-center gap-6">

            {/* Social Icons */}
            <div className="flex gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/60 hover:text-white transition"
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>

            {/* Separate CTA */}
            <a
              href="https://aryangandhi-bearcatsolution.zohobookings.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="
                px-5 py-2
                rounded-full
                bg-white text-black
                font-medium
                hover:bg-neutral-200
                transition
              "
            >
              Get in Touch
            </a>
          </div>

          {/* Animated Hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden relative w-6 h-6 flex flex-col justify-between"
          >
            <motion.span
              animate={open ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              className="block h-[2px] w-full bg-white origin-center"
            />
            <motion.span
              animate={open ? { opacity: 0 } : { opacity: 1 }}
              className="block h-[2px] w-full bg-white"
            />
            <motion.span
              animate={open ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              className="block h-[2px] w-full bg-white origin-center"
            />
          </button>
        </div>
      </div>

      {/* ================= MOBILE MENU ================= */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black z-40 flex flex-col items-center justify-center gap-8 text-2xl"
          >
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setOpen(false)}
                className="text-white/70 hover:text-white transition"
              >
                {link.name}
              </NavLink>
            ))}

            {/* CTA in Mobile */}
            <a
              href="https://aryangandhi-bearcatsolution.zohobookings.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 px-6 py-3 rounded-full bg-white text-black text-lg"
            >
              Get in Touch
            </a>

            {/* Social Icons */}
            <div className="flex gap-6 mt-8">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/60 hover:text-white transition"
                  >
                    <Icon size={22} />
                  </a>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}