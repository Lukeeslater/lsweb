import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDownIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen w-full flex items-center justify-center bg-black overflow-hidden py-28">
      {/* Background image and gradient overlay */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-bg.jpg"
          alt="Engineering Background"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-900 via-black to-black opacity-90"></div>
      </div>
      
      <div className="relative z-20 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center px-4 sm:px-6 lg:px-8"
        >
          <div className="mb-8 flex justify-center mt-16">
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-2 border-white/20"
            >
              <img
                src="/images/profile.jpg"
                alt="Luke Slater"
                className="w-full h-full object-cover object-[center_20%]"
              />
            </motion.div>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 tracking-wider text-white">
            LUKE SLATER
          </h1>
          <p className="text-lg sm:text-xl text-gray-400 mb-6 max-w-3xl mx-auto leading-relaxed">
            Mechanical Engineer at Leitner-Poma.
          </p>
          <p className="text-lg sm:text-xl text-gray-400 mb-16 max-w-3xl mx-auto leading-relaxed">
            Mechanical design, data, and automation for teams that need engineering help without another full-time hire.
          </p>
          
          <div className="flex flex-col sm:flex-row flex-wrap gap-6 justify-center items-center max-w-4xl mx-auto px-4 mb-10">
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full sm:w-72">
              <Link
                to="/services"
                className="block w-full text-center bg-white/10 backdrop-blur-sm text-white border border-white/20 px-8 py-4 text-lg uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300"
              >
                Engineering Services
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full sm:w-72">
              <Link
                to="/projects"
                className="block w-full text-center border border-white/20 text-white px-8 py-4 text-lg uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300"
              >
                View Projects
              </Link>
            </motion.div>
            <motion.a
              href="/Luke Slater's Resume.pdf"
              download="Luke Slater Resume.pdf"
              className="w-full sm:w-72 text-center border border-white/20 text-white px-8 py-4 text-lg uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Download Resume
            </motion.a>
          </div>
          <a
            href="https://linkedin.com/in/lukeslater0120"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-gray-400 hover:text-accent uppercase tracking-widest text-sm mb-16"
          >
            Connect on LinkedIn
          </a>

          {/* Arrow with gradient background */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="flex justify-center items-center"
          >
            <Link
              to="/services"
              className="cursor-pointer bg-transparent p-2 rounded-full hover:bg-white/10 transition-all duration-300"
            >
              <ArrowDownIcon className="h-8 w-8 text-white animate-bounce" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 