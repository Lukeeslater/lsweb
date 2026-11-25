import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { name: 'HOME', path: '/' },
  { name: 'ABOUT', path: '/about' },
  { name: 'PROJECTS', path: '/projects' },
  { name: 'LEADERSHIP', path: '/leadership' },
  { name: 'CONTACT', path: '/contact' },
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

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `text-sm tracking-[0.2em] cursor-pointer transition-colors duration-300 ${
      isActive ? 'text-accent' : 'text-white hover:text-gray-300'
    }`;

  const mobileLinkClass = ({ isActive }: { isActive: boolean }) =>
    `block text-base tracking-[0.2em] cursor-pointer transition-colors duration-300 ${
      isActive ? 'text-accent' : 'text-white hover:text-gray-300'
    }`;

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled ? 'bg-black/80 backdrop-blur-sm' : 'bg-black/40 backdrop-blur-sm'
      }`}
    >
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-24">
          <div className="flex items-center">
            <Link to="/" className="cursor-pointer">
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

          <div className="hidden sm:flex sm:items-center sm:space-x-10">
            {navItems.map((item) => (
              <NavLink key={item.path} to={item.path} end={item.path === '/'} className={linkClass}>
                {item.name}
              </NavLink>
            ))}
          </div>

          <div className="flex items-center sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-gray-300 transition-colors"
            >
              {isOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
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
            transition={{ duration: 0.2 }}
            className="sm:hidden bg-black/95 backdrop-blur-sm"
          >
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  end={item.path === '/'}
                  className={mobileLinkClass}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
