import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { EnvelopeIcon, PhoneIcon, LinkIcon } from '@heroicons/react/24/outline';

const inputClass =
  'w-full bg-gray-800/50 border border-white/10 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-accent';

export default function Contact() {
  const [searchParams] = useSearchParams();
  const sent = searchParams.get('sent') === '1';
  const [showPhone, setShowPhone] = useState(false);
  const [showEmail, setShowEmail] = useState(false);
  const [verificationAnswer, setVerificationAnswer] = useState('');
  const [verificationAttempted, setVerificationAttempted] = useState(false);
  const [canAttemptVerification, setCanAttemptVerification] = useState(true);

  useEffect(() => {
    if (!canAttemptVerification) {
      const timer = setTimeout(() => setCanAttemptVerification(true), 3000);
      return () => clearTimeout(timer);
    }
  }, [canAttemptVerification]);

  const handleVerification = (e: React.FormEvent) => {
    e.preventDefault();
    if (!canAttemptVerification) return;

    const answer = verificationAnswer.trim().toLowerCase();
    if (answer === 'crested butte' || answer === 'crestedbutte' || answer === 'mt. crested butte' || answer === 'mt crested butte') {
      setShowPhone(true);
      setShowEmail(true);
    } else {
      setVerificationAttempted(true);
      setCanAttemptVerification(false);
    }
  };

  return (
    <section id="contact" className="bg-black py-24">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold tracking-[0.2em] text-white mb-4">
            GET IN TOUCH
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg">
            Not sure exactly what you need? That's okay. Send a description of the problem and we can figure out
            whether I'm a good fit.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/10"
          >
            <h3 className="text-2xl font-bold mb-2 text-white">Project inquiry</h3>
            <p className="text-gray-400 mb-8">
              Tell me about the work. I'll follow up with whether I can help and a quote if it's a fit.
            </p>

            {sent ? (
              <p className="text-accent text-lg">
                Thanks — your inquiry is in. I'll get back to you by email.
              </p>
            ) : (
              <form
                action="https://formsubmit.co/Lukeeslater@gmail.com"
                method="POST"
                className="space-y-5"
              >
                <input type="hidden" name="_subject" value="Project inquiry from lukeslater.org" />
                <input type="hidden" name="_next" value={`${typeof window !== 'undefined' ? window.location.origin : 'https://www.lukeslater.org'}/contact?sent=1`} />
                <input type="hidden" name="_captcha" value="false" />
                <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" />

                <div>
                  <label htmlFor="name" className="block text-white mb-2">Name</label>
                  <input id="name" name="name" type="text" required className={inputClass} />
                </div>
                <div>
                  <label htmlFor="email" className="block text-white mb-2">Email</label>
                  <input id="email" name="email" type="email" required className={inputClass} />
                </div>
                <div>
                  <label htmlFor="company" className="block text-white mb-2">Company <span className="text-gray-500">(optional)</span></label>
                  <input id="company" name="company" type="text" className={inputClass} />
                </div>
                <div>
                  <label htmlFor="need" className="block text-white mb-2">What do you need help with?</label>
                  <select id="need" name="need" required className={inputClass}>
                    <option value="">Select one</option>
                    <option value="CAD & Mechanical Design">CAD & Mechanical Design</option>
                    <option value="Engineering Automation">Engineering Automation</option>
                    <option value="Data Analysis">Data Analysis</option>
                    <option value="Prototyping & Technical Support">Prototyping & Technical Support</option>
                    <option value="Not sure yet">Not sure yet</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="description" className="block text-white mb-2">Project description</label>
                  <textarea id="description" name="description" required rows={5} className={inputClass} />
                </div>
                <div>
                  <label htmlFor="timeline" className="block text-white mb-2">Desired timeline <span className="text-gray-500">(optional)</span></label>
                  <input id="timeline" name="timeline" type="text" className={inputClass} placeholder="e.g. this month, flexible" />
                </div>
                <div>
                  <label htmlFor="budget" className="block text-white mb-2">Budget range <span className="text-gray-500">(optional)</span></label>
                  <select id="budget" name="budget" className={inputClass}>
                    <option value="">Prefer not to say</option>
                    <option value="Under $500">Under $500</option>
                    <option value="$500–$1,500">$500–$1,500</option>
                    <option value="$1,500–$5,000">$1,500–$5,000</option>
                    <option value="$5,000+">$5,000+</option>
                    <option value="Not sure">Not sure</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="w-full bg-white/10 backdrop-blur-sm text-white border border-white/20 px-8 py-4 text-lg uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300"
                >
                  Send inquiry
                </button>
              </form>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/10"
          >
            <h3 className="text-2xl font-bold mb-4 text-white">Contact information</h3>
            {!showEmail && !showPhone && (
              <div className="mb-8 p-6 bg-gray-800/30 rounded-xl border border-white/5">
                <p className="text-gray-400 mb-4">Please verify you're human to see phone and email:</p>
                <form onSubmit={handleVerification} className="flex flex-col space-y-2">
                  <p className="text-gray-300">Which mountain do I ski at? (Hint: Check the About page)</p>
                  <div className="flex space-x-2">
                    <input
                      type="text"
                      value={verificationAnswer}
                      onChange={(e) => setVerificationAnswer(e.target.value)}
                      className="bg-gray-800/50 border border-white/10 rounded-lg px-3 py-1 text-white focus:outline-none focus:border-accent flex-grow"
                      placeholder="Your answer"
                    />
                    <button
                      type="submit"
                      disabled={!canAttemptVerification}
                      className={`${
                        canAttemptVerification
                          ? 'bg-accent/90 hover:bg-accent'
                          : 'bg-gray-700 cursor-not-allowed'
                      } text-white px-4 py-1 rounded-lg transition-all duration-300`}
                    >
                      Verify
                    </button>
                  </div>
                  {verificationAttempted && !showEmail && (
                    <p className="text-red-400 text-sm">
                      Incorrect answer, please try again {!canAttemptVerification && '(wait 3 seconds)'}
                    </p>
                  )}
                </form>
              </div>
            )}
            <div className="space-y-8">
              <div className="flex items-center space-x-6 group">
                <div className="bg-gray-800/50 p-4 rounded-xl shadow-md group-hover:shadow-lg transition-all duration-300 border border-white/5">
                  <EnvelopeIcon className="h-6 w-6 text-accent group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div className="flex-grow">
                  <p className="font-bold text-white mb-1">Email</p>
                  {showEmail ? (
                    <a
                      href="mailto:Lukeeslater@gmail.com"
                      className="text-gray-400 hover:text-accent transition-colors duration-300"
                    >
                      Lukeeslater@gmail.com
                    </a>
                  ) : (
                    <p className="text-gray-500 italic">Complete verification to view email</p>
                  )}
                </div>
              </div>

              <div className="flex items-center space-x-6 group">
                <div className="bg-gray-800/50 p-4 rounded-xl shadow-md group-hover:shadow-lg transition-all duration-300 border border-white/5">
                  <PhoneIcon className="h-6 w-6 text-accent group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div className="flex-grow">
                  <p className="font-bold text-white mb-1">Phone</p>
                  {showPhone ? (
                    <a
                      href="tel:+17193317070"
                      className="text-gray-400 hover:text-accent transition-colors duration-300"
                    >
                      (719) 331-7070
                    </a>
                  ) : (
                    <p className="text-gray-500 italic">Complete verification to view phone number</p>
                  )}
                </div>
              </div>

              <div className="flex items-center space-x-6 group">
                <div className="bg-gray-800/50 p-4 rounded-xl shadow-md group-hover:shadow-lg transition-all duration-300 border border-white/5">
                  <LinkIcon className="h-6 w-6 text-accent group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div>
                  <p className="font-bold text-white mb-1">LinkedIn</p>
                  <a
                    href="https://linkedin.com/in/lukeslater0120"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-accent transition-colors duration-300"
                  >
                    linkedin.com/in/lukeslater0120
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
