import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Industries", path: "/industries" },
    { name: "About", path: "/about" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Resources", path: "/resources" },
    { name: "Sustainability", path: "/sustainability" },
  ];

  return (
    <>
      {/* NAVBAR */}
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
          <Link to="/" className="text-white font-semibold text-lg">
            JANUS
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex gap-8">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={clsx("transition", "text-white/70 hover:text-white")}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:block">
            <button className="bg-white/10 backdrop-blur-md px-6 py-2 rounded-full text-white hover:bg-white/20 transition">
              Get in Touch
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-white text-2xl"
          >
            ☰
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            className="
              fixed inset-0 bg-black z-40
              flex flex-col items-center justify-center gap-10
              text-3xl
            "
          >
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setOpen(false)}
                className="text-white/70 hover:text-white"
              >
                {link.name}
              </Link>
            ))}

            <button className="bg-white/10 px-6 py-3 rounded-full text-white">
              Get in Touch
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
