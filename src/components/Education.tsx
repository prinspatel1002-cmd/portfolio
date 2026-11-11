import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, CheckCircle2, MapPin, Sparkles } from 'lucide-react';
import { EDUCATION } from '../data/portfolioData';
import { SpotlightCard } from './SpotlightCard';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 relative z-10 bg-white dark:bg-[#080B12] border-t border-slate-200 dark:border-slate-900/80 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 text-xs font-semibold text-blue-600 dark:text-blue-400 mb-3 shadow-sm">
            <GraduationCap className="w-3.5 h-3.5" />
            Formal Background
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Education <span className="gradient-text">Timeline</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mt-3 text-sm sm:text-base">
            Academic qualifications providing foundations in computer engineering, data architectures, and algorithms.
          </p>
        </motion.div>

        {/* Education Timeline Card with Spotlight */}
        <div className="max-w-3xl mx-auto">
          {EDUCATION.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 35, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, type: 'spring', damping: 20 }}
              whileHover={{ y: -6 }}
            >
              <SpotlightCard className="p-6 sm:p-8 relative group shadow-xl hover:shadow-2xl hover:border-blue-400 dark:hover:border-cyan-500/40 transition-all duration-300">
                {/* Top Meta Bar */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <span className="text-xs font-mono font-semibold px-3 py-1 rounded-full bg-blue-50 dark:bg-cyan-500/15 text-blue-700 dark:text-cyan-300 border border-blue-200 dark:border-cyan-500/30 flex items-center gap-1.5 shadow-sm">
                    <Calendar className="w-3.5 h-3.5" />
                    {edu.duration}
                  </span>

                  <span className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1 font-medium">
                    <MapPin className="w-3.5 h-3.5 text-blue-600 dark:text-cyan-400" />
                    Ahmedabad, Gujarat, India
                  </span>
                </div>

                {/* Degree Title & Institution */}
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-cyan-300 transition duration-300 mb-1 flex items-center gap-2">
                  <span>Bachelor of Technology (B.Tech) – {edu.degree}</span>
                  <Sparkles className="w-4 h-4 text-cyan-400 opacity-0 group-hover:opacity-100 transition duration-300" />
                </h3>
                <p className="text-sm font-semibold text-blue-600 dark:text-cyan-400 mb-5">
                  {edu.institution}
                </p>

                {/* Highlights */}
                <div className="space-y-2 pt-4 border-t border-slate-100 dark:border-slate-800/80">
                  {edu.highlights.map((h, hIdx) => (
                    <motion.div
                      key={hIdx}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + hIdx * 0.08 }}
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300"
                    >
                      <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-cyan-400 shrink-0 mt-0.5 group-hover:scale-110 transition" />
                      <span>{h}</span>
                    </motion.div>
                  ))}
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
