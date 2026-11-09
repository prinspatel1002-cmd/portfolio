import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BarChart3, Code2, Layout, Smartphone, Wrench, CheckCircle2, Sparkles } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { SpotlightCard } from './SpotlightCard';

export const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'BarChart3':
        return <BarChart3 className="w-5 h-5" />;
      case 'Code2':
        return <Code2 className="w-5 h-5" />;
      case 'Layout':
        return <Layout className="w-5 h-5" />;
      case 'Smartphone':
        return <Smartphone className="w-5 h-5" />;
      case 'Wrench':
        return <Wrench className="w-5 h-5" />;
      default:
        return <Sparkles className="w-5 h-5" />;
    }
  };

  return (
    <section id="skills" className="py-24 relative z-10 bg-slate-50/70 dark:bg-[#080B12] border-t border-slate-200 dark:border-slate-900/80 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Scroll Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-cyan-500/10 border border-blue-200 dark:border-cyan-500/20 text-xs font-semibold text-blue-600 dark:text-cyan-400 mb-3 shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            Technical Capabilities
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mt-3 text-sm sm:text-base">
            Categorized toolkit developed through Computer Engineering coursework, applied projects, and hands-on software development.
          </p>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {SKILL_CATEGORIES.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 ${
                  activeTab === idx
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-md shadow-blue-500/25 border border-cyan-400/30 scale-105'
                    : 'bg-white dark:bg-slate-900/80 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 shadow-sm'
                }`}
              >
                {getCategoryIcon(cat.iconName)}
                <span>{cat.title}</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Selected Category Showcase */}
        <div className="max-w-4xl mx-auto">
          {/* Category Descriptor */}
          <div className="p-4 rounded-xl bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800/80 mb-6 flex items-center justify-between text-xs text-slate-600 dark:text-slate-400 shadow-sm">
            <span>{SKILL_CATEGORIES[activeTab].description}</span>
            <span className="font-mono text-blue-600 dark:text-cyan-400 font-semibold uppercase tracking-wider ml-4 shrink-0">
              {SKILL_CATEGORIES[activeTab].skills.length} Technologies
            </span>
          </div>

          {/* Technology Cards Grid with Animation */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3.5"
            >
              {SKILL_CATEGORIES[activeTab].skills.map((skill, sIdx) => (
                <SpotlightCard
                  key={sIdx}
                  className="p-4 hover:border-blue-400 dark:hover:border-cyan-500/40 transition-all duration-300 group flex flex-col justify-between shadow-sm"
                >
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <span className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-cyan-300 transition">
                      {skill.name}
                    </span>
                    <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-cyan-400 shrink-0 mt-0.5 group-hover:scale-110 transition" />
                  </div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400 font-mono mt-1 pt-2 border-t border-slate-100 dark:border-slate-800/60">
                    {skill.tag}
                  </div>
                </SpotlightCard>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Overview of all 5 categories at a glance */}
        <div className="mt-16 pt-12 border-t border-slate-200 dark:border-slate-900/80 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 text-center">
          {SKILL_CATEGORIES.map((cat, idx) => (
            <div
              key={idx}
              onClick={() => setActiveTab(idx)}
              className={`p-3 rounded-xl border cursor-pointer transition duration-200 text-xs ${
                activeTab === idx
                  ? 'bg-blue-50 dark:bg-blue-500/10 border-blue-300 dark:border-cyan-500/40 text-blue-700 dark:text-cyan-300 font-bold'
                  : 'bg-white dark:bg-slate-900/40 border-slate-200 dark:border-slate-800/60 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800/40'
              }`}
            >
              <div className="truncate font-semibold">{cat.title}</div>
              <div className="text-[10px] text-slate-500 font-mono mt-0.5">
                {cat.skills.length} tools
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
