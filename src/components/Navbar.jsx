import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0f0f0f]/80 backdrop-blur-md border-b border-[#1f1f1f] py-4'
          : 'bg-transparent border-b border-transparent py-6'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 flex justify-between items-center">
        <div className="text-xl font-medium tracking-tight text-white">
          System<span className="text-gray-500">.</span>
        </div>
        <div className="hidden md:flex items-center space-x-8 text-sm text-gray-400">
          {['Features', 'About', 'Services'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative hover:text-white transition-colors duration-300 after:absolute after:-bottom-1 after:left-0 after:h-[1px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
            >
              {item}
            </a>
          ))}
        </div>
        <button className="bg-white text-black px-5 py-2 rounded-full text-sm font-medium hover:scale-105 transition-transform duration-300">
          Get Started
        </button>
      </div>
    </nav>
  );
};

export default Navbar;