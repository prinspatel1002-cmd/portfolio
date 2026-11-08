import React from 'react';
import { GraduationCap, Award, Calendar, CheckCircle2, ShieldCheck, ExternalLink } from 'lucide-react';
import { EDUCATION_LIST, CERTIFICATIONS } from '../data/portfolioData';

export const EducationCertifications: React.FC = () => {
  return (
    <section id="education" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-xs font-semibold text-purple-400 mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            Academic & Credentials
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education & <span className="gradient-text">Verified Certifications</span>
          </h2>
          <p className="text-slate-400 mt-3 text-sm sm:text-base">
            Rigorous engineering training combined with verified industry credentials in Cloud Machine Learning and Full-Stack development.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Education Timeline (6 Cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2 text-lg font-bold text-white mb-2">
              <GraduationCap className="w-5 h-5 text-cyan-400" />
              <span>Academic Education</span>
            </div>

            <div className="space-y-6 relative border-l-2 border-slate-800 ml-3 pl-6">
              {EDUCATION_LIST.map((edu, idx) => (
                <div key={idx} className="relative group">
                  {/* Glowing Node */}
                  <div className="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-cyan-400 border-4 border-[#080c14] group-hover:scale-125 transition" />

                  <div className="p-5 rounded-2xl bg-[#0c1322] border border-slate-800 hover:border-cyan-500/40 transition-all">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                      <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-cyan-500/15 text-cyan-300 font-semibold border border-cyan-500/30">
                        {edu.period}
                      </span>
                      <span className="text-xs font-bold text-emerald-400 font-mono">
                        {edu.score}
                      </span>
                    </div>

                    <h4 className="text-base font-bold text-white mt-2">
                      {edu.degree}
                    </h4>
                    <p className="text-xs text-slate-400 font-medium mb-3">
                      {edu.institution}
                    </p>

                    <div className="space-y-1.5 pt-2 border-t border-slate-800/80">
                      {edu.highlights.map((item, hIdx) => (
                        <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Certifications (6 Cols) */}
          <div id="certifications" className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2 text-lg font-bold text-white mb-2">
              <Award className="w-5 h-5 text-purple-400" />
              <span>Verified Industry Certifications</span>
            </div>

            <div className="space-y-4">
              {CERTIFICATIONS.map((cert, cIdx) => (
                <div
                  key={cIdx}
                  className="p-5 rounded-2xl bg-[#0c1322] border border-slate-800 hover:border-purple-500/40 transition-all flex flex-col justify-between group"
                >
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-xl bg-purple-500/10 border border-purple-500/30 text-purple-400 shrink-0 mt-0.5">
                        <ShieldCheck className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-white group-hover:text-purple-300 transition">
                          {cert.title}
                        </h4>
                        <p className="text-xs text-purple-400 font-medium mt-0.5">
                          {cert.issuer} • Issued {cert.date}
                        </p>
                      </div>
                    </div>
                  </div>

                  <p className="text-xs text-slate-400 leading-relaxed mt-2 mb-3">
                    {cert.description}
                  </p>

                  <div className="flex items-center justify-between text-[11px] pt-3 border-t border-slate-800/80 text-slate-500">
                    <span className="font-mono">ID: {cert.badgeCode}</span>
                    <span className="text-emerald-400 flex items-center gap-1 font-semibold">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> Verified Credential
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick highlight box */}
            <div className="p-4 rounded-xl bg-gradient-to-r from-purple-950/30 to-blue-950/30 border border-purple-500/20 text-xs text-slate-300 flex items-center gap-3">
              <Award className="w-5 h-5 text-purple-400 shrink-0" />
              <span>
                Continuously upgrading skills in modern transformer models, distributed systems, and cloud-native scalable microservices.
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
