import React from 'react';
import { motion } from 'framer-motion';
import { renderToString } from 'react-dom/server';
import { Link } from 'react-router-dom';

interface Project {
  id: string;
  title: string;
  description: string | (string | JSX.Element)[];
  skills: string[];
  duration: string;
  image: string;
}

const projects: Project[] = [
  {
    id: "angel-express",
    title: "Angel Express 6P Chair",
    description: "Assisted with commissioning of the Angel Express six-pack chairlift at Angel Fire Resort in New Mexico. Aligned the return terminal to support safety and ride quality, worked with the return's hydraulic tensioning unit, and helped troubleshoot issues as they arose. This project provided hands-on experience independently aligning a terminal. More info at <a href='https://www.angelfireresort.com/new-mexico-first-six-pack-chairlift-angel-express/' target='_blank' rel='noopener noreferrer' className='text-accent hover:text-accent/80 transition-colors duration-300'>Angel Fire Resort</a>.",
    skills: ["Field Commissioning", "Terminal Alignment", "Hydraulic Systems", "Troubleshooting"],
    duration: "July 2026",
    image: "/images/projects/angelexpress.jpg"
  },
  {
    id: "sunlight-primo",
    title: "Sunlight Primo 4P Fixed Grip Chair",
    description: "Aided in commissioning the Sunlight Primo 4-passenger fixed-grip chairlift near Glenwood Springs, Colorado. Troubleshot hydraulic systems, operated the terminal's diesel engine, and set the terminal brakes. More info at <a href='https://soprissun.com/sunlight-gets-a-face-lifts/' target='_blank' rel='noopener noreferrer' className='text-accent hover:text-accent/80 transition-colors duration-300'>The Sopris Sun</a>.",
    skills: ["Field Commissioning", "Hydraulic Systems", "Diesel Systems", "Brake Setup"],
    duration: "November 2025",
    image: "/images/projects/sunlight_chair.jpg"
  },
  {
    id: "ndt-chairlift",
    title: "Non-Destructive Testing of Chairlift Components",
    description: "Aided in testing essential chairlift components using in-house non-destructive testing equipment. Oversaw testing operations, maintained required test conditions, and verified code compliance. Work included a dynamic test of component reliability approaching the infinite-life region, followed by a static test of yield and elastic behavior.",
    skills: ["Non-Destructive Testing", "Dynamic Testing", "Static Testing", "Code Compliance"],
    duration: "June 2025",
    image: "/images/projects/nondestruct_test.jpg"
  },
  {
    id: "optiplex-home-lab",
    title: "OptiPlex Home Server & Lab",
    description: "Converted a retired Dell OptiPlex into a personal home server and lab to learn Linux, server hosting, and cybersecurity. Stood up a Minecraft server on the same machine, connected remotely from a phone with Tailscale, and ran AdGuard for filtering on the server and any Tailscale-connected device. Next steps include workflow tools for grocery shopping and personal finance.",
    skills: ["Linux", "Server Hosting", "Tailscale", "AdGuard"],
    duration: "2026",
    image: "/images/projects/homelab.svg"
  },
  {
    id: "portfolio-website",
    title: "Portfolio Website Development",
    description: "Designed and developed a modern, responsive portfolio website using React, TypeScript, and Tailwind CSS. Leveraged Cursor's AI-powered development environment for enhanced productivity and code quality. Implemented smooth animations and a clean, professional design.",
    skills: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Cursor AI"],
    duration: "2024",
    image: "/images/projects/cursorproj.png"
  },
  {
    id: "provuu-goggles",
    title: "Augmented Reality Ski Goggles",
    description: "Collaborated with <a href='https://provuu.com' target='_blank' rel='noopener noreferrer' className='text-accent hover:text-accent/80 transition-colors duration-300'>Provuu</a> startup to develop AR ski goggles aimed at improving visibility during white out conditions. Focused on integrating AR technology with traditional ski gear for enhanced safety.",
    skills: ["AR Development", "Product Design", "Prototyping", "User Testing"],
    duration: "2024-2025",
    image: "/images/projects/provuuAG.JPG"
  },
  {
    id: "mtb-dynamics",
    title: "Mountain Bike Wheel Dynamics Analysis",
    description: "Characterized mountain bike wheels as a second-order dynamic system through experimental testing and mathematical modeling. Developed a dynamic load testing apparatus and analyzed wheel response using normalized data, extracting natural frequency (ωn) and damping ratio (ζ) parameters. Results demonstrated consistent system behavior across multiple test conditions, validating the second-order system model.",
    skills: ["System Dynamics", "Data Analysis", "MATLAB", "Research Methods"],
    duration: "Fall 2024",
    image: "/images/projects/mtbdynamicsanalysis.png"
  },
  {
    id: "custom-ski-design",
    title: "Custom Ski Design",
    description: "Engineered and manufactured custom skis using CNC operations, focusing on performance customization and material optimization. Programmed G-code for precise core, base, and sidewall cutting.",
    skills: ["CNC Programming", "CAD/CAM", "Manufacturing", "Design"],
    duration: "2024-2025",
    image: "/images/projects/customskis.jpg"
  },
  {
    id: "mtb-wheel-testing",
    title: "Mountain Bike Wheel Testing",
    description: "Developed Python-based analysis tools for mountain bike wheel deformation using motion capture data. Implemented quaternion transformations and collaborated with Blister Review for publication.",
    skills: ["Python", "Data Analysis", "Motion Capture", "Technical Writing"],
    duration: "Summer 2024",
    image: "/images/projects/mtbwheeltest.jpg"
  },
  {
    id: "emg-study",
    title: "Human Movement EMG Study",
    description: "Conducted research on balance disruption using EMG data, developing MATLAB code for processing and analyzing muscle activation patterns. Study focused on understanding muscle coordination during dynamic movements.",
    skills: ["Signal Processing", "MATLAB", "Data Analysis", "Research Methods"],
    duration: "2024",
    image: "/images/projects/EMG.jpeg"
  },
  {
    id: "adaptive-gravel-bike",
    title: "Ultralight Adaptive Gravel Bike",
    description: "Designed and implemented a titanium/carbon steering assembly for an adaptive gravel bike, focusing on lightweight construction and rear-wheel drive capabilities. Led team communication and file management.",
    skills: ["Design", "Project Management", "CAD", "Material Science"],
    duration: "2023-2024",
    image: "/images/projects/adaptivebike.jpg"
  },
  {
    id: "ski-flex-tester",
    title: "Ski Flex Tester",
    description: "Created MATLAB tools for ski flex analysis and precision-machined critical components. Improved machine functionality through iterative prototyping and eliminated data anomalies.",
    skills: ["MATLAB", "Machining", "Data Analysis", "Prototyping"],
    duration: "Summer 2023",
    image: "/images/projects/skitester.jpg"
  }
];

export default function Projects({ featured = false }: { featured?: boolean }) {
  const items = featured ? projects.slice(0, 3) : projects;

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
            {featured ? 'RECENT WORK' : 'PROJECTS'}
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto px-4 text-lg">
            {featured
              ? 'Chairlift commissioning and field engineering at Leitner-Poma.'
              : 'A showcase of field commissioning, mechanical design, software, and hands-on problem-solving.'}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-0">
          {items.map((project, index) => (
            <motion.div
              id={project.id}
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-gray-900/50 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-white/10 hover:border-accent/20 scroll-mt-28"
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

        {featured && (
          <div className="mt-14 text-center">
            <Link
              to="/projects"
              className="inline-block border border-white/20 text-white px-8 py-4 text-lg uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300"
            >
              See all projects
            </Link>
          </div>
        )}
      </div>
    </section>
  );
} 