import React, { useState } from 'react';
import { Code2, BrainCircuit, Layout, Server, Cpu, CheckCircle } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2':
        return <Code2 className="w-5 h-5" />;
      case 'BrainCircuit':
        return <BrainCircuit className="w-5 h-5" />;
      case 'Layout':
        return <Layout className="w-5 h-5" />;
      case 'Server':
        return <Server className="w-5 h-5" />;
      default:
        return <Cpu className="w-5 h-5" />;
    }
  };

  return (
    <section id="skills" className="py-20 relative z-10 bg-[#070b14]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-xs font-semibold text-blue-400 mb-3">
            <Cpu className="w-3.5 h-3.5" />
            Technical Arsenal
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Skills, Tools & <span className="gradient-text">Proficiencies</span>
          </h2>
          <p className="text-slate-400 mt-3 text-sm sm:text-base">
            Engineered through coursework at Indus University, enterprise projects, and real-world deployments.
          </p>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {SKILL_CATEGORIES.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  activeTab === idx
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/25 border border-blue-400/30'
                    : 'bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
                }`}
              >
                {getIcon(cat.iconName)}
                <span>{cat.title}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Active Category Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {SKILL_CATEGORIES[activeTab].skills.map((skill, sIdx) => (
            <div
              key={sIdx}
              className="p-4 rounded-xl bg-slate-900/70 border border-slate-800/80 hover:border-cyan-500/30 transition-all group"
            >
              <div className="flex justify-between items-center mb-1.5">
                <span className="text-sm font-bold text-white group-hover:text-cyan-300 transition">
                  {skill.name}
                </span>
                <span className="text-xs font-mono font-semibold text-cyan-400">
                  {skill.level}%
                </span>
              </div>

              {skill.note && (
                <div className="text-[11px] text-slate-400 mb-2.5 flex items-center gap-1.5">
                  <CheckCircle className="w-3 h-3 text-cyan-400 shrink-0" />
                  <span>{skill.note}</span>
                </div>
              )}

              {/* Progress Bar */}
              <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full transition-all duration-700 ease-out"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Soft Skills & Core Strengths Bar */}
        <div className="mt-12 p-6 rounded-2xl bg-[#0b1120] border border-slate-800 max-w-4xl mx-auto">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 text-center sm:text-left">
            Core Engineering Strengths & Mindset
          </h4>
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2.5">
            {[
              'Object-Oriented Programming (OOP)',
              'Data Structures & Algorithms',
              'End-to-End ML Pipeline Architecture',
              'Cross-Platform UI/UX',
              'Analytical Problem Solving',
              'Team Leadership & Communication',
              'Agile Collaboration'
            ].map((strength, sId) => (
              <span
                key={sId}
                className="text-xs px-3 py-1.5 rounded-lg bg-slate-800/80 border border-slate-700 text-slate-300 font-medium hover:border-cyan-500/40 hover:text-white transition"
              >
                ✓ {strength}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
