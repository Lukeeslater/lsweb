import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const services = [
  {
    title: "CAD & Mechanical Design",
    summary: "Turn a concept, a worn-out part, or a messy CAD file into something a shop can actually make.",
    problems: [
      "Parts and assemblies modeled from sketches, scans, or existing hardware",
      "Design changes, drawing packages, and CAD cleanup",
      "Design for manufacturing so parts are easier to machine, weld, or assemble",
    ],
  },
  {
    title: "Engineering Automation",
    summary: "Cut the repetitive work out of engineering workflows so you spend time on the problem, not the busywork.",
    problems: [
      "Python tools for calculations, file handling, and repeatable processes",
      "Excel automation and engineering productivity scripts",
      "Small custom tools that sit between CAD, test data, and reports",
    ],
  },
  {
    title: "Data Analysis",
    summary: "Take raw test or production data and turn it into plots, numbers, and a clear conclusion.",
    problems: [
      "Python and MATLAB processing of experimental or field data",
      "Visualization and Excel / Power Query workflows",
      "Help making sense of noisy engineering datasets",
    ],
  },
  {
    title: "Prototyping & Technical Support",
    summary: "Early-stage help when the idea is still moving — concepts, iteration, and practical manufacturing input.",
    problems: [
      "Mechanical concepts and design iteration for physical products",
      "Manufacturing-oriented support for shops and inventors",
      "Technical research to narrow options before you spend on hardware",
    ],
  },
];

export default function Services({ preview = false }: { preview?: boolean }) {
  const items = preview ? services : services;

  return (
    <section id="services" className="bg-black py-24">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[0.12em] sm:tracking-[0.2em] text-white mb-4">
            {preview ? 'SERVICES' : (
              <>
                ENGINEERING DESIGN,
                <br />
                AUTOMATION &amp; TECHNICAL SERVICES
              </>
            )}
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto px-4 text-lg">
            Helping small teams turn engineering problems into practical solutions through mechanical design,
            CAD, automation, and data analysis.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 sm:px-0">
          {items.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-white/10 hover:border-accent/20"
            >
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-accent transition-colors duration-300 border-b border-white/10 pb-4">
                {service.title}
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">{service.summary}</p>
              {!preview && (
                <ul className="space-y-3">
                  {service.problems.map((item) => (
                    <li key={item} className="flex items-start space-x-3">
                      <span className="h-2 w-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                      <span className="text-gray-400">{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center px-4">
          {preview ? (
            <Link
              to="/services"
              className="inline-block border border-white/20 text-white px-8 py-4 text-lg uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300"
            >
              See services
            </Link>
          ) : (
            <>
              <h3 className="text-2xl font-bold tracking-[0.15em] text-white mb-4">
                Have a project in mind?
              </h3>
              <p className="text-gray-400 max-w-2xl mx-auto mb-8">
                Mechanical design, data, and automation for teams that need engineering help without another full-time hire.
              </p>
              <Link
                to="/contact"
                className="inline-block bg-white/10 backdrop-blur-sm text-white border border-white/20 px-8 py-4 text-lg uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300"
              >
                Tell Me About Your Project
              </Link>
              <p className="text-gray-500 text-sm mt-10 max-w-2xl mx-auto">
                Freelance technical, design, and automation support — not licensed professional engineering or PE consulting.
              </p>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
