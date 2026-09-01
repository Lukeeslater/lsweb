import React from 'react';
import { motion } from 'framer-motion';
import { renderToString } from 'react-dom/server';

interface Project {
  title: string;
  description: string | (string | JSX.Element)[];
  skills: string[];
  duration: string;
  image: string;
}

const projects: Project[] = [
  {
    title: "Portfolio Website Development",
    description: "Designed and developed a modern, responsive portfolio website using React, TypeScript, and Tailwind CSS. Leveraged Cursor's AI-powered development environment for enhanced productivity and code quality. Implemented smooth animations and a clean, professional design.",
    skills: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Cursor AI"],
    duration: "2024",
    image: "/images/projects/cursorproj.png"
  },
  {
    title: "Augmented Reality Ski Goggles",
    description: "Collaborated with <a href='https://provuu.com' target='_blank' rel='noopener noreferrer' className='text-accent hover:text-accent/80 transition-colors duration-300'>Provuu</a> startup to develop AR ski goggles aimed at improving visibility during white out conditions. Focused on integrating AR technology with traditional ski gear for enhanced safety.",
    skills: ["AR Development", "Product Design", "Prototyping", "User Testing"],
    duration: "2024-2025",
    image: "/images/projects/provuuAG.JPG"
  },
  {
    title: "Mountain Bike Wheel Dynamics Analysis",
    description: "Characterized mountain bike wheels as a second-order dynamic system through experimental testing and mathematical modeling. Developed a dynamic load testing apparatus and analyzed wheel response using normalized data, extracting natural frequency (ωn) and damping ratio (ζ) parameters. Results demonstrated consistent system behavior across multiple test conditions, validating the second-order system model.",
    skills: ["System Dynamics", "Data Analysis", "MATLAB", "Research Methods"],
    duration: "Fall 2024",
    image: "/images/projects/mtbdynamicsanalysis.png"
  },
  {
    title: "Custom Ski Design",
    description: "Engineered and manufactured custom skis using CNC operations, focusing on performance customization and material optimization. Programmed G-code for precise core, base, and sidewall cutting.",
    skills: ["CNC Programming", "CAD/CAM", "Manufacturing", "Design"],
    duration: "2024-2025",
    image: "/images/projects/customskis.jpg"
  },
  {
    title: "Mountain Bike Wheel Testing",
    description: "Developed Python-based analysis tools for mountain bike wheel deformation using motion capture data. Implemented quaternion transformations and collaborated with Blister Review for publication.",
    skills: ["Python", "Data Analysis", "Motion Capture", "Technical Writing"],
    duration: "Summer 2024",
    image: "/images/projects/mtbwheeltest.jpg"
  },
  {
    title: "Human Movement EMG Study",
    description: "Conducted research on balance disruption using EMG data, developing MATLAB code for processing and analyzing muscle activation patterns. Study focused on understanding muscle coordination during dynamic movements.",
    skills: ["Signal Processing", "MATLAB", "Data Analysis", "Research Methods"],
    duration: "2024",
    image: "/images/projects/EMG.jpeg"
  },
  {
    title: "Ultralight Adaptive Gravel Bike",
    description: "Designed and implemented a titanium/carbon steering assembly for an adaptive gravel bike, focusing on lightweight construction and rear-wheel drive capabilities. Led team communication and file management.",
    skills: ["Design", "Project Management", "CAD", "Material Science"],
    duration: "2023-2024",
    image: "/images/projects/adaptivebike.jpg"
  },
  {
    title: "Ski Flex Tester",
    description: "Created MATLAB tools for ski flex analysis and precision-machined critical components. Improved machine functionality through iterative prototyping and eliminated data anomalies.",
    skills: ["MATLAB", "Machining", "Data Analysis", "Prototyping"],
    duration: "Summer 2023",
    image: "/images/projects/skitester.jpg"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="bg-black py-24">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold tracking-[0.2em] text-white mb-4">
            PROJECTS
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto px-4 text-lg">
            A showcase of my engineering projects, combining mechanical design, software development, and practical problem-solving.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-0">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-gray-900/50 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-white/10 hover:border-accent/20"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors duration-300"></div>
                <h3 className="absolute bottom-0 left-0 right-0 text-2xl font-bold p-4 text-white group-hover:text-accent transition-colors duration-300 bg-gradient-to-t from-black/80 to-transparent">
                  {project.title}
                </h3>
              </div>
              <div className="p-6">
                <p className="text-sm text-accent font-medium mb-4 opacity-90">{project.duration}</p>
                <div className="text-gray-400 mb-6 text-base leading-relaxed" dangerouslySetInnerHTML={{ __html: typeof project.description === 'string' ? project.description : project.description.map(part => typeof part === 'string' ? part : renderToString(part)).join('') }} />
                <div className="flex flex-wrap gap-2">
                  {project.skills.map((skill) => (
                    <span
                      key={skill}
                      className="bg-white/5 text-gray-300 px-4 py-1.5 rounded-full text-sm font-medium group-hover:bg-accent/10 group-hover:text-accent transition-colors duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 