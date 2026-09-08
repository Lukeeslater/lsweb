import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface Project {
  id: string;
  title: string;
  context: string;
  problem: string;
  approach: string;
  tools: string;
  result: string;
  resultHtml?: string;
  skills: string[];
  duration: string;
  image: string;
}

const projects: Project[] = [
  {
    id: "angel-express",
    title: "Angel Express 6P Chair",
    context: "Field work",
    problem: "A new six-pack chairlift needed return-terminal alignment, hydraulic tensioning support, and on-site troubleshooting during commissioning.",
    approach: "Aligned the return terminal for safety and ride quality, worked with the hydraulic tensioning unit, and helped diagnose issues as they came up — including independent terminal alignment.",
    tools: "Field commissioning, terminal alignment, hydraulic systems, troubleshooting.",
    result: "Supported commissioning of Angel Express at Angel Fire Resort.",
    resultHtml: "Supported commissioning of Angel Express at Angel Fire Resort. More: <a href='https://www.angelfireresort.com/new-mexico-first-six-pack-chairlift-angel-express/' target='_blank' rel='noopener noreferrer' class='text-accent hover:text-accent/80 transition-colors duration-300'>Angel Fire Resort</a>.",
    skills: ["Field Commissioning", "Terminal Alignment", "Hydraulic Systems", "Troubleshooting"],
    duration: "July 2026",
    image: "/images/projects/angelexpress.jpg"
  },
  {
    id: "sunlight-primo",
    title: "Sunlight Primo 4P Fixed Grip Chair",
    context: "Field work",
    problem: "A new fixed-grip chair needed commissioning help across hydraulics, the terminal diesel engine, and brake setup.",
    approach: "Troubleshot hydraulic systems, operated the terminal diesel engine, and set the terminal brakes during commissioning.",
    tools: "Field commissioning, hydraulic systems, diesel systems, brake setup.",
    result: "Helped bring the Sunlight Primo chair online near Glenwood Springs.",
    resultHtml: "Helped bring the Sunlight Primo chair online near Glenwood Springs. More: <a href='https://soprissun.com/sunlight-gets-a-face-lifts/' target='_blank' rel='noopener noreferrer' class='text-accent hover:text-accent/80 transition-colors duration-300'>The Sopris Sun</a>.",
    skills: ["Field Commissioning", "Hydraulic Systems", "Diesel Systems", "Brake Setup"],
    duration: "November 2025",
    image: "/images/projects/sunlight_chair.jpg"
  },
  {
    id: "ndt-chairlift",
    title: "Non-Destructive Testing of Chairlift Components",
    context: "Field work",
    problem: "Essential chairlift components needed code-compliant testing for reliability as they approach infinite life, plus yield and elastic behavior.",
    approach: "Oversaw in-house NDT operations, held test conditions, and ran a dynamic test followed by a static test.",
    tools: "Non-destructive testing, dynamic testing, static testing, code compliance.",
    result: "Completed the test sequence against the required code checks for reliability and material response.",
    skills: ["Non-Destructive Testing", "Dynamic Testing", "Static Testing", "Code Compliance"],
    duration: "June 2025",
    image: "/images/projects/nondestruct_test.jpg"
  },
  {
    id: "optiplex-home-lab",
    title: "OptiPlex Home Server & Lab",
    context: "Personal project",
    problem: "Needed a low-cost lab to learn Linux, server hosting, and network security without cloud lock-in.",
    approach: "Converted a retired Dell OptiPlex into a home server, added Tailscale for phone access, AdGuard for filtering, and a Minecraft server on the same box.",
    tools: "Linux, Tailscale, AdGuard, self-hosted services.",
    result: "A working home lab with remote access and network-wide filtering. Next: workflow tools for groceries and personal finance.",
    skills: ["Linux", "Server Hosting", "Tailscale", "AdGuard"],
    duration: "2026",
    image: "/images/projects/homelab.svg"
  },
  {
    id: "portfolio-website",
    title: "Portfolio Website Development",
    context: "Personal project",
    problem: "Needed a public site that could show engineering work and make it easy for people to get in touch.",
    approach: "Designed and built a React / TypeScript site with Tailwind and Framer Motion, using Cursor to move faster on layout and code quality.",
    tools: "React, TypeScript, Tailwind CSS, Framer Motion, Cursor.",
    result: "This site — a live personal engineering portfolio at lukeslater.org.",
    skills: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Cursor AI"],
    duration: "2024",
    image: "/images/projects/cursorproj.png"
  },
  {
    id: "provuu-goggles",
    title: "Augmented Reality Ski Goggles",
    context: "Startup collaboration",
    problem: "Whiteout conditions make it hard to ski safely; the team needed AR goggle concepts that still felt like real ski gear.",
    approach: "Collaborated with Provuu on product design, prototyping, and user-testing direction for AR ski goggles.",
    tools: "Product design, prototyping, user testing, AR concept development.",
    result: "Prototype-focused development toward goggles that improve visibility in poor snow.",
    resultHtml: "Prototype-focused development with <a href='https://provuu.com' target='_blank' rel='noopener noreferrer' class='text-accent hover:text-accent/80 transition-colors duration-300'>Provuu</a> toward goggles that improve visibility in poor snow.",
    skills: ["AR Development", "Product Design", "Prototyping", "User Testing"],
    duration: "2024-2025",
    image: "/images/projects/provuuAG.JPG"
  },
  {
    id: "mtb-dynamics",
    title: "Mountain Bike Wheel Dynamics Analysis",
    context: "Academic project",
    problem: "Wheel behavior needed to be described as a second-order dynamic system, not just a static stiffness number.",
    approach: "Built a dynamic load-testing apparatus, collected normalized response data, and extracted natural frequency (ωn) and damping ratio (ζ).",
    tools: "MATLAB, experimental testing, system dynamics, data analysis.",
    result: "Consistent system behavior across test conditions, supporting the second-order model.",
    skills: ["System Dynamics", "Data Analysis", "MATLAB", "Research Methods"],
    duration: "Fall 2024",
    image: "/images/projects/mtbdynamicsanalysis.png"
  },
  {
    id: "custom-ski-design",
    title: "Custom Ski Design",
    context: "Academic project",
    problem: "Custom skis required precise core, base, and sidewall geometry that is hard to hold by hand.",
    approach: "Engineered the ski construction in CAD/CAM and programmed CNC toolpaths for core, base, and sidewall cutting.",
    tools: "CNC programming, CAD/CAM, manufacturing, design.",
    result: "Manufactured custom skis with controlled geometry and material layup.",
    skills: ["CNC Programming", "CAD/CAM", "Manufacturing", "Design"],
    duration: "2024-2025",
    image: "/images/projects/customskis.jpg"
  },
  {
    id: "mtb-wheel-testing",
    title: "Mountain Bike Wheel Testing",
    context: "Research collaboration",
    problem: "Motion-capture wheel-deformation data needed a repeatable analysis path, including orientation math.",
    approach: "Wrote Python tools using quaternion transformations and worked with Blister Review toward publication.",
    tools: "Python, motion capture, data analysis, technical writing.",
    result: "An analysis workflow suitable for technical review of wheel deformation.",
    skills: ["Python", "Data Analysis", "Motion Capture", "Technical Writing"],
    duration: "Summer 2024",
    image: "/images/projects/mtbwheeltest.jpg"
  },
  {
    id: "emg-study",
    title: "Human Movement EMG Study",
    context: "Academic project",
    problem: "Balance-disruption trials produced EMG data that needed processing before muscle coordination could be studied.",
    approach: "Developed MATLAB code to process EMG and inspect muscle activation during dynamic movement.",
    tools: "MATLAB, signal processing, data analysis.",
    result: "Activation patterns the study could use to discuss coordination under disruption.",
    skills: ["Signal Processing", "MATLAB", "Data Analysis", "Research Methods"],
    duration: "2024",
    image: "/images/projects/EMG.jpeg"
  },
  {
    id: "adaptive-gravel-bike",
    title: "Ultralight Adaptive Gravel Bike",
    context: "Academic project",
    problem: "An adaptive gravel bike needed a lightweight titanium/carbon steering assembly and rear-wheel drive capability.",
    approach: "Designed the steering assembly in CAD, kept files organized, and led team communication through the build.",
    tools: "CAD, material selection, project management.",
    result: "A steering assembly designed for lightweight construction on the adaptive bike.",
    skills: ["Design", "Project Management", "CAD", "Material Science"],
    duration: "2023-2024",
    image: "/images/projects/adaptivebike.jpg"
  },
  {
    id: "ski-flex-tester",
    title: "Ski Flex Tester",
    context: "Academic project",
    problem: "A ski flex machine produced noisy data and needed both better analysis tools and improved hardware.",
    approach: "Wrote MATLAB analysis tools, precision-machined critical components, and iterated the prototype until anomalies dropped out.",
    tools: "MATLAB, machining, data analysis, prototyping.",
    result: "Cleaner flex data and a more reliable test machine.",
    skills: ["MATLAB", "Machining", "Data Analysis", "Prototyping"],
    duration: "Summer 2023",
    image: "/images/projects/skitester.jpg"
  }
];

function CaseField({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <p className="text-gray-400 text-base leading-relaxed mb-3">
      <span className="text-accent font-medium tracking-wide">{label}: </span>
      {children}
    </p>
  );
}

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
              ? 'Field engineering from chairlift commissioning — a look at how I break down technical problems.'
              : 'Selected field, academic, and personal work. Written as engineering case studies so you can see the problem, the approach, and the result. Client work will be added here as those projects are completed.'}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-0">
          {items.map((project, index) => (
            <motion.div
              id={project.id}
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
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
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <p className="text-sm text-accent font-medium opacity-90">{project.duration}</p>
                  <span className="text-xs uppercase tracking-widest text-gray-500 border border-white/10 px-2 py-1 rounded-full">
                    {project.context}
                  </span>
                </div>
                {featured ? (
                  <>
                    <CaseField label="Problem">{project.problem}</CaseField>
                    <CaseField label="Result">{project.result}</CaseField>
                  </>
                ) : (
                  <>
                    <CaseField label="Problem">{project.problem}</CaseField>
                    <CaseField label="Approach">{project.approach}</CaseField>
                    <CaseField label="Tools">{project.tools}</CaseField>
                    <div className="text-gray-400 text-base leading-relaxed mb-3">
                      <span className="text-accent font-medium tracking-wide">Result: </span>
                      {project.resultHtml ? (
                        <span dangerouslySetInnerHTML={{ __html: project.resultHtml }} />
                      ) : (
                        project.result
                      )}
                    </div>
                  </>
                )}
                <div className="flex flex-wrap gap-2 mt-4">
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
