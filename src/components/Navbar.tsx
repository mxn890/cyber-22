import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'glassmorphism' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="text-2xl font-bold cyber-gradient">
              CyberShield
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#home" className="hover:text-[#00FF94] transition-colors duration-300 relative group">
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00FF94] transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#tools" className="hover:text-[#00FF94] transition-colors duration-300 relative group">
                Tools
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00FF94] transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#about" className="hover:text-[#00FF94] transition-colors duration-300 relative group">
                About
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00FF94] transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="/blog" className="hover:text-[#00FF94] transition-colors duration-300 relative group">
  Blog
  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00FF94] transition-all duration-300 group-hover:w-full"></span>
</a>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-[#00FF94] focus:outline-none"
            >
              <div className="space-y-1">
                <span className={`block w-6 h-0.5 bg-current transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                <span className={`block w-6 h-0.5 bg-current transition-opacity duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
                <span className={`block w-6 h-0.5 bg-current transition-transform duration-300 ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden glassmorphism">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#home" className="block px-3 py-2 text-white hover:text-[#00FF94] transition-colors duration-300">Home</a>
            <a href="#tools" className="block px-3 py-2 text-white hover:text-[#00FF94] transition-colors duration-300">Tools</a>
            <a href="#about" className="block px-3 py-2 text-white hover:text-[#00FF94] transition-colors duration-300">About</a>
            <a href="#about" className="block px-3 py-2 text-white hover:text-[#00FF94] transition-colors duration-300">About</a>
            <a href="/blog" className="block px-3 py-2 text-white hover:text-[#00FF94] transition-colors duration-300">Blog</a>

          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;