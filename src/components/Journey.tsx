import React from 'react';
import { Route, CheckCircle2, Sparkles, Compass } from 'lucide-react';
import { CAREER_JOURNEY } from '../data/portfolioData';

export const Journey: React.FC = () => {
  return (
    <section id="journey" className="py-24 relative z-10 bg-[#080B12] border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-semibold text-cyan-400 mb-3">
            <Route className="w-3.5 h-3.5" />
            Milestones & Progression
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Building My <span className="gradient-text">Professional Journey</span>
          </h2>
          <p className="text-slate-400 mt-3 text-sm sm:text-base">
            Key academic milestones, technical development phases, and self-directed engineering initiatives.
          </p>
        </div>

        {/* Timeline Path */}
        <div className="max-w-3xl mx-auto relative border-l-2 border-slate-800 ml-4 sm:ml-auto pl-6 sm:pl-8 space-y-8">
          {CAREER_JOURNEY.map((item, idx) => (
            <div key={idx} className="relative group">
              {/* Glowing Timeline Marker */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-gradient-to-tr from-blue-500 to-cyan-400 border-4 border-[#080B12] group-hover:scale-125 transition duration-200" />

              <div className="p-6 rounded-2xl bg-[#0c1322] border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 shadow-xl">
                {/* Period & Subtitle */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-mono font-semibold px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                    {item.period}
                  </span>
                  <span className="text-xs text-slate-400 font-medium">
                    {item.subtitle}
                  </span>
                </div>

                {/* Milestone Title */}
                <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-cyan-300 transition mb-2">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* Technologies / Focus Badges */}
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-800/80">
                  {item.technologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800/80 text-slate-300 border border-slate-700/60"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
