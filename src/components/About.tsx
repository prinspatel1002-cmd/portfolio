import React from 'react';
import { motion } from 'framer-motion';
import { BarChart3, Cpu, Layers, BookOpen, GraduationCap, Compass, Sparkles } from 'lucide-react';
import { PERSONAL_INFO, ABOUT_PILLARS } from '../data/portfolioData';
import { SpotlightCard } from './SpotlightCard';

export const About: React.FC = () => {
  const getPillarIcon = (index: number) => {
    switch (index) {
      case 0:
        return <BarChart3 className="w-5 h-5 text-cyan-400" />;
      case 1:
        return <Cpu className="w-5 h-5 text-blue-400" />;
      case 2:
        return <Layers className="w-5 h-5 text-indigo-400" />;
      case 3:
        return <BookOpen className="w-5 h-5 text-purple-400" />;
      default:
        return <Sparkles className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section id="about" className="py-24 relative z-10 bg-[#080B12] border-t border-slate-900/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Scroll Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-semibold text-blue-400 mb-3">
            <Compass className="w-3.5 h-3.5" />
            Background & Purpose
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-slate-400 mt-3 text-sm sm:text-base">
            Bridging analytical data exploration with reliable software development to build solutions that matter.
          </p>
        </motion.div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visual Highlight Card with Spotlight */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 space-y-4"
          >
            <SpotlightCard className="p-6 sm:p-7 shadow-2xl">
              <div className="flex items-center gap-3 pb-4 border-b border-slate-800/80 mb-4">
                <div className="p-2.5 rounded-xl bg-blue-500/15 border border-blue-500/30 text-cyan-400">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white">Academic Journey</h4>
                  <p className="text-xs text-slate-400">Computer Engineering Student</p>
                </div>
              </div>

              <div className="space-y-3 text-xs text-slate-300 leading-relaxed">
                <p>
                  Currently pursuing a <strong>Bachelor of Technology (B.Tech) in Computer Engineering</strong> at <strong>Indus University, Ahmedabad</strong>.
                </p>
                <p>
                  My coursework provides a solid algorithmic and mathematical foundation in <strong>Data Mining, Database Management Systems (DBMS), Machine Learning, Probability & Statistics,</strong> and <strong>Data Structures</strong>.
                </p>
                <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 mt-2">
                  <span className="text-[11px] font-mono text-cyan-400 block font-semibold mb-1">Career Objective:</span>
                  <span className="text-xs text-slate-300 italic">
                    "{PERSONAL_INFO.careerObjective}"
                  </span>
                </div>
              </div>
            </SpotlightCard>

            {/* Quick Location & Identity Badge */}
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-400 flex items-center justify-between">
              <span>Primary Focus: <strong>Data Analytics & Software</strong></span>
              <span className="text-cyan-400 font-mono">Gujarat, India</span>
            </div>
          </motion.div>

          {/* Right Column: Narrative & 4 Highlight Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="space-y-4 text-sm text-slate-300 leading-relaxed">
              <p>
                {PERSONAL_INFO.summary}
              </p>
              <p className="text-slate-400 text-xs sm:text-sm">
                Whether inspecting complex multi-variable datasets in Python, designing clean SQL queries, or engineering intuitive cross-platform Flutter and full-stack web applications, my approach centers on accuracy, structured architecture, and user value.
              </p>
            </div>

            {/* 4 Highlight Cards with Spotlight effect */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {ABOUT_PILLARS.map((pillar, idx) => (
                <SpotlightCard
                  key={idx}
                  className="p-4 hover:border-cyan-500/40 transition-all duration-300 group"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-slate-900 border border-slate-700/80 group-hover:scale-110 transition duration-300">
                      {getPillarIcon(idx)}
                    </div>
                    <h3 className="text-sm font-bold text-white group-hover:text-cyan-300 transition">
                      {pillar.title}
                    </h3>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {pillar.description}
                  </p>
                </SpotlightCard>
              ))}
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
