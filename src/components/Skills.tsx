import React from 'react';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: "Engineering Software",
    skills: [
      "SolidWorks",
      "MATLAB",
      "Python",
      "C++",
      "GitHub",
      "Microsoft Project"
    ]
  },
  {
    title: "Fabrication",
    skills: [
      "CNC Programming",
      "Laser Cutting",
      "MIG Welding",
      "Manual Milling",
      "Precision Lathe",
      "Digital Milling"
    ]
  },
  {
    title: "Specialized Skills",
    skills: [
      "EMG Analysis",
      "Ski Construction",
      "Bike Frame Design",
      "Motion Capture",
      "Data Analysis",
      "Technical Writing"
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="bg-black py-24">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold tracking-[0.2em] text-white mb-4">
            SKILLS
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto px-4 text-lg">
            A comprehensive set of technical and practical skills developed through academic studies,
            project work, and hands-on experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-4 sm:px-0">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="group bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-white/10 hover:border-accent/20"
            >
              <h3 className="text-2xl font-bold mb-6 text-white group-hover:text-accent transition-colors duration-300 border-b border-white/10 pb-4">
                {category.title}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: skillIndex * 0.05 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3 group/skill"
                  >
                    <div className="h-2 w-2 bg-accent rounded-full group-hover/skill:scale-110 transition-transform duration-300" />
                    <span className="text-gray-300 font-medium group-hover/skill:text-accent transition-colors duration-300">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 