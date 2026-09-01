import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { EnvelopeIcon, PhoneIcon, LinkIcon } from '@heroicons/react/24/outline';

export default function Contact() {
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
            I'm always open to discussing new projects, opportunities, or just having a conversation.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/10"
        >
          <h3 className="text-2xl font-bold mb-4 text-white">Contact Information</h3>
          {!showEmail && !showPhone && (
            <div className="mb-8 p-6 bg-gray-800/30 rounded-xl border border-white/5">
              <p className="text-gray-400 mb-4">Please verify you're human to see contact information:</p>
              <form onSubmit={handleVerification} className="flex flex-col space-y-2">
                <p className="text-gray-300">Which mountain do I ski at? (Hint: Check the About section)</p>
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
    </section>
  );
} 