import React from 'react';
import { GraduationCap, Calendar, CheckCircle2, MapPin, Sparkles } from 'lucide-react';
import { EDUCATION } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 relative z-10 bg-[#080B12] border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-semibold text-blue-400 mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            Formal Background
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education <span className="gradient-text">Timeline</span>
          </h2>
          <p className="text-slate-400 mt-3 text-sm sm:text-base">
            Academic qualifications providing foundations in computer engineering, data architectures, and algorithms.
          </p>
        </div>

        {/* Education Timeline Card */}
        <div className="max-w-3xl mx-auto">
          {EDUCATION.map((edu, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-2xl bg-[#0c1322] border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 relative group shadow-xl"
            >
              {/* Top Meta Bar */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <span className="text-xs font-mono font-semibold px-3 py-1 rounded-full bg-cyan-500/15 text-cyan-300 border border-cyan-500/30 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  {edu.duration}
                </span>

                <span className="text-xs text-slate-400 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                  Ahmedabad, Gujarat, India
                </span>
              </div>

              {/* Degree Title & Institution */}
              <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition mb-1">
                Bachelor of Technology (B.Tech) – {edu.degree}
              </h3>
              <p className="text-sm font-semibold text-cyan-400 mb-5">
                {edu.institution}
              </p>

              {/* Highlights */}
              <div className="space-y-2 pt-4 border-t border-slate-800/80">
                {edu.highlights.map((h, hIdx) => (
                  <div key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
