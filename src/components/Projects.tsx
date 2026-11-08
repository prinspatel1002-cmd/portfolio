import React, { useState } from 'react';
import { Sparkles, ExternalLink, Play, Layers, ArrowUpRight, Check } from 'lucide-react';
import { PROJECTS, Project } from '../data/portfolioData';
import { HousingPredictorModal } from './Simulators/HousingPredictorModal';
import { SmartMobilityModal } from './Simulators/SmartMobilityModal';
import { SeatPickerModal } from './Simulators/SeatPickerModal';
import { SalesAnalyticsModal } from './Simulators/SalesAnalyticsModal';
import { GithubIcon } from './Icons';

export const Projects: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'ai' | 'fullstack' | 'mobile' | 'data'>('all');
  
  // Modal states
  const [activeModal, setActiveModal] = useState<'housing' | 'mobility' | 'seatpicker' | 'sales' | null>(null);

  const filteredProjects = filter === 'all'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === filter);

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'ai', label: 'AI & Machine Learning' },
    { id: 'fullstack', label: 'Full-Stack Web' },
    { id: 'mobile', label: 'Mobile (Flutter)' },
    { id: 'data', label: 'Data Analytics & BI' },
  ];

  const handleOpenDemo = (type?: 'housing' | 'mobility' | 'seatpicker' | 'sales') => {
    if (type) setActiveModal(type);
  };

  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-semibold text-cyan-400 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Engineering Portfolio
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Featured Projects & <span className="gradient-text">Interactive Systems</span>
          </h2>
          <p className="text-slate-400 mt-3 text-sm sm:text-base">
            From smart city multimodal AI algorithms to machine learning pipelines and cross-platform mobile apps. Click on any interactive simulator to test them directly!
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id as any)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                  filter === cat.id
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25 scale-105'
                    : 'bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group rounded-2xl bg-[#0d1424] border border-slate-800 hover:border-cyan-500/40 p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-cyan-500/10"
            >
              <div>
                {/* Top bar with category & featured badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-md bg-slate-800 text-cyan-300 border border-slate-700">
                    {project.categoryLabel}
                  </span>
                  {project.featured && (
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                      ★ Featured
                    </span>
                  )}
                </div>

                {/* Title & Tagline */}
                <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition mb-1">
                  {project.title}
                </h3>
                <p className="text-xs text-slate-400 font-medium mb-3">
                  {project.tagline}
                </p>

                {/* Summary */}
                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  {project.summary}
                </p>

                {/* Metrics Pill Grid */}
                {project.metrics && project.metrics.length > 0 && (
                  <div className="grid grid-cols-3 gap-2 py-3 px-3 rounded-xl bg-slate-900/90 border border-slate-800/80 mb-4 text-center">
                    {project.metrics.map((m, idx) => (
                      <div key={idx}>
                        <div className="text-[10px] text-slate-400 truncate">{m.label}</div>
                        <div className="text-xs font-bold text-cyan-400 font-mono mt-0.5 truncate">{m.value}</div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Key Features List */}
                <div className="space-y-1.5 mb-5">
                  {project.keyFeatures.slice(0, 2).map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-[11px] text-slate-400">
                      <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Card Footer: Tags & Buttons */}
              <div className="pt-4 border-t border-slate-800/80">
                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.slice(0, 4).map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] px-2 py-0.5 rounded bg-slate-800/60 text-slate-300 font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-2">
                  {project.hasInteractiveDemo && (
                    <button
                      onClick={() => handleOpenDemo(project.interactiveType)}
                      className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-cyan-500/15 hover:bg-cyan-500/25 border border-cyan-500/30 text-cyan-300 hover:text-white text-xs font-semibold transition"
                    >
                      <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                      Live Simulator
                    </button>
                  )}

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition"
                      aria-label="View on GitHub"
                      title="View GitHub Repository"
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Simulator Modals */}
      <HousingPredictorModal
        isOpen={activeModal === 'housing'}
        onClose={() => setActiveModal(null)}
      />
      <SmartMobilityModal
        isOpen={activeModal === 'mobility'}
        onClose={() => setActiveModal(null)}
      />
      <SeatPickerModal
        isOpen={activeModal === 'seatpicker'}
        onClose={() => setActiveModal(null)}
      />
      <SalesAnalyticsModal
        isOpen={activeModal === 'sales'}
        onClose={() => setActiveModal(null)}
      />
    </section>
  );
};
