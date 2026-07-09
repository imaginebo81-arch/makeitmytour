import React, { useState, useEffect } from 'react';
import { Menu, X, Plane } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Upcoming Trips', href: '#trips' },
    { name: 'Destinations', href: '#destinations' },
    { name: 'About Us', href: '#' },
    { name: 'Contact', href: '#' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <div className={`w-full transition-all duration-300 overflow-hidden ${
        isScrolled 
          ? 'bg-gradient-to-b from-white/90 to-gray-100/90 backdrop-blur-xl shadow-md border-b border-gray-200/50' 
          : 'bg-transparent'
      }`}>
        <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="flex justify-between h-16 md:h-20 items-center">
          <div className="flex items-center gap-2">
            <div className="bg-black p-2 rounded-lg">
              <Plane className="w-6 h-6 text-white" />
            </div>
            <span className={`font-serif italic font-medium text-xl sm:text-2xl tracking-tight transition-colors ${isScrolled ? 'text-gray-900' : 'text-white'}`}>MAKEITMYTOUR</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`font-medium transition-all ${
                  isScrolled 
                    ? 'text-gray-700 hover:text-black' 
                    : 'text-white/90 hover:text-white'
                }`}
              >
                {link.name}
              </a>
            ))}
            <button className="bg-black text-white px-6 py-2.5 rounded-full font-medium shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all">
              Enquire Now
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`focus:outline-none transition-colors ${isScrolled ? 'text-gray-800 hover:text-black' : 'text-white/90 hover:text-white'}`}
            >
              {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className={`md:hidden overflow-hidden ${isScrolled ? 'border-t border-gray-200' : 'border-t border-white/20'}`}
          >
            <div className={`px-4 pt-2 pb-6 space-y-2 ${isScrolled ? 'bg-white' : 'bg-black/40 backdrop-blur-md'}`}>
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`block px-3 py-3 rounded-md text-base font-medium transition-colors ${
                    isScrolled 
                      ? 'text-gray-700 hover:text-black hover:bg-gray-50' 
                      : 'text-white hover:bg-white/20'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4">
                <button className="w-full bg-black text-white px-6 py-3 rounded-xl font-medium shadow-md hover:shadow-lg transition-all">
                  Enquire Now
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      </div>
    </nav>
  );
}
