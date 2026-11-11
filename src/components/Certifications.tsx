import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, ShieldCheck, CheckCircle2, X } from 'lucide-react';
import { CERTIFICATIONS, Certification } from '../data/portfolioData';
import { SpotlightCard } from './SpotlightCard';

export const Certifications: React.FC = () => {
  const [activeCert, setActiveCert] = useState<Certification | null>(null);

  return (
    <section id="certifications" className="py-24 relative z-10 bg-white dark:bg-[#080B12] border-t border-slate-200 dark:border-slate-900/80 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-50 dark:bg-violet-500/10 border border-violet-200 dark:border-violet-500/20 text-xs font-semibold text-violet-700 dark:text-violet-400 mb-3 shadow-sm">
            <Award className="w-3.5 h-3.5" />
            Verified Training
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Professional <span className="gradient-text">Certifications</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mt-3 text-sm sm:text-base">
            Verified online learning certifications demonstrating dedicated study in modern full-stack web and cross-platform mobile engineering.
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {CERTIFICATIONS.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <SpotlightCard
                spotlightColor="rgba(139, 92, 246, 0.15)"
                className="p-6 sm:p-7 flex flex-col justify-between h-full group hover:border-violet-400 dark:hover:border-violet-500/40 hover:shadow-xl dark:hover:shadow-violet-500/10 transition-all duration-300"
              >
                <div>
                  {/* Header with icon & issuer */}
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-3 rounded-xl bg-violet-50 dark:bg-violet-500/15 border border-violet-200 dark:border-violet-500/30 text-violet-600 dark:text-violet-400 group-hover:scale-110 transition duration-300">
                        <ShieldCheck className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white group-hover:text-violet-600 dark:group-hover:text-violet-300 transition duration-300">
                          {cert.title}
                        </h3>
                        <p className="text-xs text-violet-600 dark:text-violet-400 font-mono mt-0.5 font-semibold">
                          {cert.issuer}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                    {cert.description}
                  </p>

                  {/* Skills Covered */}
                  <div className="space-y-1.5 mb-5">
                    <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider block">
                      Core Competencies Covered:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {cert.skillsLearned.map((s, sIdx) => (
                        <span
                          key={sIdx}
                          className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/60"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* View Certificate Button */}
                <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between mt-auto">
                  <span className="text-[11px] text-emerald-600 dark:text-emerald-400 flex items-center gap-1 font-mono font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Course Completed
                  </span>

                  <button
                    onClick={() => setActiveCert(cert)}
                    className="flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-xl bg-violet-50 dark:bg-violet-500/15 hover:bg-violet-100 dark:hover:bg-violet-500/25 border border-violet-200 dark:border-violet-500/30 text-violet-700 dark:text-violet-300 hover:text-violet-900 dark:hover:text-white transition-all duration-300 shadow-sm"
                  >
                    <Award className="w-3.5 h-3.5" />
                    <span>View Certificate</span>
                  </button>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Certificate Modal View */}
      {activeCert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 dark:bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-lg bg-white dark:bg-[#0c1322] border border-slate-200 dark:border-violet-500/40 rounded-2xl shadow-2xl p-6 sm:p-8 text-slate-800 dark:text-slate-200">
            <button
              onClick={() => setActiveCert(null)}
              className="absolute top-4 right-4 p-2 rounded-xl bg-slate-100 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition"
              aria-label="Close Certificate Modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-xl bg-violet-50 dark:bg-violet-500/20 text-violet-600 dark:text-violet-300 border border-violet-200 dark:border-violet-500/30">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">{activeCert.title}</h3>
                <p className="text-xs text-violet-600 dark:text-violet-400 font-mono font-semibold">{activeCert.issuer}</p>
              </div>
            </div>

            {/* Certificate Preview Placeholder */}
            <div className="aspect-[4/3] rounded-xl bg-gradient-to-br from-slate-50 via-violet-50/30 to-slate-100 dark:from-slate-900 dark:to-[#121929] border border-slate-200 dark:border-slate-800 flex flex-col items-center justify-center p-6 text-center mb-5 relative overflow-hidden shadow-inner">
              <div className="w-16 h-16 rounded-full bg-violet-100 dark:bg-violet-500/10 border border-violet-200 dark:border-violet-500/20 flex items-center justify-center text-violet-600 dark:text-violet-400 mb-3 shadow-sm">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1">{activeCert.title}</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-2">Issued by {activeCert.issuer}</p>
              <span className="text-[10px] font-mono text-violet-700 dark:text-cyan-400 px-3 py-1 rounded-full bg-white dark:bg-slate-800 border border-violet-200 dark:border-slate-700 shadow-sm">
                Verified Credential Record
              </span>
            </div>

            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
              {activeCert.description}
            </p>

            <div className="flex justify-end gap-3 pt-4 border-t border-slate-100 dark:border-slate-800">
              <button
                onClick={() => setActiveCert(null)}
                className="px-5 py-2 rounded-xl bg-slate-900 dark:bg-slate-800 hover:bg-slate-800 dark:hover:bg-slate-700 text-white text-xs font-semibold transition shadow-sm"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
