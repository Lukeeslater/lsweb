import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function ProjectLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <Link
      to={`/projects#${to}`}
      className="text-accent hover:text-accent/80 cursor-pointer transition-colors duration-300"
    >
      {children}
    </Link>
  );
}

const currentFocus = [
  "Mechanical Engineer at Leitner-Poma of America",
  "Chairlift commissioning, terminal alignment, and component testing",
  "AI-assisted development with Cursor and a growing focus on computer systems",
  "Stepping into management and more responsible roles",
];

export default function About() {
  return (
    <section id="about" className="relative w-full bg-black overflow-hidden">
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
            <p className="text-xl text-gray-300 leading-relaxed tracking-wide">
              I am a Mechanical Engineer at{' '}
              <a
                href="https://leitner-poma.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-accent/80 transition-colors duration-300"
              >
                Leitner-Poma of America
              </a>
              , working in the field on chairlift commissioning and reliability. Recent work includes aligning the{' '}
              <ProjectLink to="angel-express">Angel Express six-pack</ProjectLink> at Angel Fire, commissioning the{' '}
              <ProjectLink to="sunlight-primo">Sunlight Primo</ProjectLink> fixed-grip chair near Glenwood Springs, and{' '}
              <ProjectLink to="ndt-chairlift">non-destructive testing</ProjectLink> of essential lift components.
            </p>
            <p className="text-xl text-gray-300 leading-relaxed tracking-wide">
              My passions now sit at the intersection of mechanical systems and software: using optimization tools like Cursor
              to power AI-assisted development, and going deeper into computer systems. I am also seeking out the management
              side of the work so I can step into more responsible roles.
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
              WHAT I'M UP TO
            </h3>
            <div className="space-y-6">
              {currentFocus.map((item) => (
                <div key={item} className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-lg text-gray-300 tracking-wide">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mt-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >
          <div>
            <img
              src="/images/graduationpic.JPEG"
              alt="Graduation from Western-CU Boulder Engineering Partnership Program"
              className="w-full rounded-lg shadow-xl"
            />
          </div>
          <div className="space-y-6">
            <h3 className="text-2xl font-bold tracking-[0.15em] text-white">
              EDUCATION
            </h3>
            <p className="text-xl text-gray-300 leading-relaxed tracking-wide">
              I graduated Magna Cum Laude with a 3.86 GPA from the Western-CU Boulder Engineering Partnership Program,
              receiving a Certificate of Excellence for Outstanding Leadership. That academic work built the mechanical
              design, testing, and project-management foundation I use in the field today.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
