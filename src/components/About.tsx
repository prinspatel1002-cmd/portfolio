import React from 'react';
import { motion } from 'framer-motion';
import { BarChart3, Cpu, Layers, BookOpen, GraduationCap, Compass, Sparkles } from 'lucide-react';
import { PERSONAL_INFO, ABOUT_PILLARS } from '../data/portfolioData';
import { SpotlightCard } from './SpotlightCard';

export const About: React.FC = () => {
  const getPillarIcon = (index: number) => {
    switch (index) {
      case 0:
        return <BarChart3 className="w-5 h-5 text-blue-600 dark:text-cyan-400" />;
      case 1:
        return <Cpu className="w-5 h-5 text-indigo-600 dark:text-blue-400" />;
      case 2:
        return <Layers className="w-5 h-5 text-violet-600 dark:text-indigo-400" />;
      case 3:
        return <BookOpen className="w-5 h-5 text-purple-600 dark:text-purple-400" />;
      default:
        return <Sparkles className="w-5 h-5 text-blue-600 dark:text-cyan-400" />;
    }
  };

  return (
    <section id="about" className="py-24 relative z-10 bg-white dark:bg-[#080B12] border-t border-slate-200 dark:border-slate-900/80 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Scroll Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 text-xs font-semibold text-blue-600 dark:text-blue-400 mb-3 shadow-sm">
            <Compass className="w-3.5 h-3.5" />
            Background & Purpose
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mt-3 text-sm sm:text-base">
            Bridging analytical data exploration with reliable software development to build solutions that matter.
          </p>
        </motion.div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visual Highlight Card with Spotlight & 3D tilt */}
          <motion.div
            initial={{ opacity: 0, x: -40, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 space-y-4"
          >
            <SpotlightCard className="p-6 sm:p-7 shadow-xl hover:shadow-2xl">
              <div className="flex items-center gap-3 pb-4 border-b border-slate-100 dark:border-slate-800/80 mb-4">
                <div className="p-2.5 rounded-xl bg-blue-50 dark:bg-blue-500/15 border border-blue-200 dark:border-blue-500/30 text-blue-600 dark:text-cyan-400">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-slate-900 dark:text-white">Academic Journey</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Computer Engineering Student</p>
                </div>
              </div>

              <div className="space-y-3 text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                <p>
                  Currently pursuing a <strong>Bachelor of Technology (B.Tech) in Computer Engineering</strong> at <strong>Indus University, Ahmedabad</strong>.
                </p>
                <p>
                  My coursework provides a solid algorithmic and mathematical foundation in <strong>Data Mining, Database Management Systems (DBMS), Machine Learning, Probability & Statistics,</strong> and <strong>Data Structures</strong>.
                </p>
                <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 mt-2">
                  <span className="text-[11px] font-mono text-blue-600 dark:text-cyan-400 block font-semibold mb-1">Career Objective:</span>
                  <span className="text-xs text-slate-700 dark:text-slate-300 italic">
                    "{PERSONAL_INFO.careerObjective}"
                  </span>
                </div>
              </div>
            </SpotlightCard>

            {/* Quick Location & Identity Badge */}
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-400 flex items-center justify-between shadow-sm hover:scale-[1.02] transition">
              <span>Primary Focus: <strong>Data Analytics & Software</strong></span>
              <span className="text-blue-600 dark:text-cyan-400 font-mono font-semibold">Gujarat, India</span>
            </div>
          </motion.div>

          {/* Right Column: Narrative & 4 Highlight Cards */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="space-y-4 text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              <p>
                {PERSONAL_INFO.summary}
              </p>
              <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm">
                Whether inspecting complex multi-variable datasets in Python, designing clean SQL queries, or engineering intuitive cross-platform Flutter and full-stack web applications, my approach centers on accuracy, structured architecture, and user value.
              </p>
            </div>

            {/* 4 Highlight Cards with Staggered Spring Reveal */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {ABOUT_PILLARS.map((pillar, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1, type: 'spring', damping: 20 }}
                  whileHover={{ scale: 1.03 }}
                >
                  <SpotlightCard className="p-4 hover:border-blue-400 dark:hover:border-cyan-500/40 transition-all duration-300 group shadow-sm h-full">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700/80 group-hover:scale-110 group-hover:rotate-6 transition duration-300">
                        {getPillarIcon(idx)}
                      </div>
                      <h3 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-cyan-300 transition">
                        {pillar.title}
                      </h3>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                      {pillar.description}
                    </p>
                  </SpotlightCard>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
