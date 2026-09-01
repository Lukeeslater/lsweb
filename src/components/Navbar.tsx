import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { name: 'HOME', href: 'home' },
  { name: 'ABOUT', href: 'about' },
  { name: 'PROJECTS', href: 'projects' },
  { name: 'SKILLS', href: 'skills' },
  { name: 'LEADERSHIP', href: 'leadership' },
  { name: 'CONTACT', href: 'contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled ? 'bg-black/80 backdrop-blur-sm' : 'bg-transparent'
      }`}
    >
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-24">
          <div className="flex items-center">
            <Link
              to="home"
              spy={true}
              smooth={true}
              offset={-64}
              duration={500}
              className="cursor-pointer"
            >
              <motion.div 
                className="relative flex items-center justify-center w-12 h-12 bg-accent/90 rounded-lg overflow-hidden group hover:bg-accent transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent to-accent/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative text-2xl font-bold text-white tracking-tighter">LS</span>
              </motion.div>
            </Link>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden sm:flex sm:items-center sm:space-x-10">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                spy={true}
                smooth={true}
                offset={-64}
                duration={500}
                className="text-sm text-white hover:text-gray-300 tracking-[0.2em] cursor-pointer transition-colors duration-300"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-gray-300 transition-colors"
            >
              {isOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="sm:hidden bg-black/95 backdrop-blur-sm"
          >
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  spy={true}
                  smooth={true}
                  offset={-64}
                  duration={500}
                  className="block text-base text-white hover:text-gray-300 tracking-[0.2em] cursor-pointer transition-colors duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
} 