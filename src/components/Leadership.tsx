import React from 'react';
import { motion } from 'framer-motion';

const leadershipRoles = [
  {
    title: "Senior Capstone Project Manager",
    organization: "Western-CU Boulder Engineering Partnership Program",
    location: "Gunnison, CO",
    period: "Sep. 2024 - May 2025",
    responsibilities: [
      "Assigned project tasks and maintained team's Gantt chart",
      "Facilitated team meetings and stakeholder communication",
      "Managed project timelines and deliverables"
    ]
  },
  {
    title: "High School Leader",
    organization: "YoungLife",
    location: "Crested Butte, CO",
    period: "Sep. 2022 - May 2025",
    responsibilities: [
      "Foster community and shared values among high school students",
      "Organize and lead weekly activities and meetings",
      "Mentor students and provide guidance"
    ]
  }
];

const affiliations = [
  {
    organization: "American Society of Mechanical Engineers",
    location: "Gunnison, CO",
    period: "Aug. 2023 - May 2025",
    description: "Active member participating in professional development and networking events"
  }
];

export default function Leadership() {
  return (
    <section id="leadership" className="bg-black py-24">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold tracking-[0.2em] text-white mb-4">
            LEADERSHIP & AFFILIATIONS
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg">
            Experience in leading teams and engaging with professional organizations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-8 text-white">Leadership Roles</h3>
            <div className="space-y-8">
              {leadershipRoles.map((role, index) => (
                <motion.div
                  key={role.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-white/10 hover:border-accent/20"
                >
                  <h4 className="text-xl font-bold text-white group-hover:text-accent transition-colors duration-300 mb-2">
                    {role.title}
                  </h4>
                  <p className="text-accent font-medium mb-2 opacity-90">{role.organization}</p>
                  <div className="flex justify-between text-sm text-gray-400 mb-6">
                    <span>{role.location}</span>
                    <span>{role.period}</span>
                  </div>
                  <ul className="space-y-3">
                    {role.responsibilities.map((resp, i) => (
                      <li key={i} className="flex items-start space-x-3 group/item">
                        <span className="h-2 w-2 bg-accent rounded-full mt-2 flex-shrink-0 group-hover/item:scale-110 transition-transform duration-300" />
                        <span className="text-gray-300 group-hover/item:text-accent transition-colors duration-300">{resp}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-8 text-white">Professional Affiliations</h3>
            <div className="space-y-8">
              {affiliations.map((affiliation, index) => (
                <motion.div
                  key={affiliation.organization}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-white/10 hover:border-accent/20"
                >
                  <h4 className="text-xl font-bold text-white group-hover:text-accent transition-colors duration-300 mb-2">
                    {affiliation.organization}
                  </h4>
                  <div className="flex justify-between text-sm text-gray-400 mb-4">
                    <span>{affiliation.location}</span>
                    <span>{affiliation.period}</span>
                  </div>
                  <p className="text-gray-300">{affiliation.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 