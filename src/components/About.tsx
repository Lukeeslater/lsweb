import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="relative w-full bg-black overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-900 via-black to-black opacity-50"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl font-bold tracking-[0.2em] text-white mb-4">
            ABOUT
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="mb-8">
              <img
                src="/images/graduationpic.JPEG"
                alt="Graduation from Western-CU Boulder Engineering Partnership Program"
                className="w-full rounded-lg shadow-xl"
              />
            </div>
            <p className="text-xl text-gray-300 leading-relaxed tracking-wide">
              I recently graduated Magna Cum Laude with a 3.86 GPA from the Western-CU Boulder Engineering Partnership Program, 
              receiving a Certificate of Excellence for Outstanding Leadership. My passion lies at the intersection of mechanical design, 
              outdoor technology, and hands-on problem-solving.
            </p>
            <p className="text-xl text-gray-300 leading-relaxed tracking-wide">
              Through my academic journey and various projects, I've developed a unique blend of skills in both traditional engineering 
              and modern computational methods. I'm particularly interested in how technology can enhance outdoor sports and activities.
            </p>
            <p className="text-xl text-gray-300 leading-relaxed tracking-wide">
              Beyond engineering, I'm an avid mountain biker who represented my college at the 2024 Downhill Nationals, and a passionate skier 
              who loves tackling the extreme terrain at Mt. Crested Butte. When I'm not on the trails or slopes, I spend time mentoring 
              with YoungLife, connecting with and supporting local high school students.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-lg sticky top-24"
          >
            <h3 className="text-2xl font-bold tracking-[0.15em] text-white mb-8">
              ACHIEVEMENTS & FOCUS
            </h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-lg text-gray-300 tracking-wide">
                  Graduated Magna Cum Laude with a 3.86 GPA
                </p>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-lg text-gray-300 tracking-wide">
                  Received Certificate of Excellence for Outstanding Leadership
                </p>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-lg text-gray-300 tracking-wide">
                  Advanced ski engineering projects exploring new materials and design methodologies
                </p>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-lg text-gray-300 tracking-wide">
                  Integrating computational analysis with physical testing for outdoor sports equipment
                </p>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-lg text-gray-300 tracking-wide">
                  Developing innovative solutions for adaptive sports equipment
                </p>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-lg text-gray-300 tracking-wide">
                  Exploring the intersection of mechanical design and software integration
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 