import React from 'react';
import { X, Check, Sparkles } from 'lucide-react';
import { Project } from '../data/portfolioData';
import { GithubIcon } from './Icons';

interface Props {
  project: Project | null;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<Props> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-[#0c1322] border border-cyan-500/30 rounded-2xl shadow-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-white transition"
          aria-label="Close Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Category Badge & Title */}
        <div className="flex items-center gap-2 mb-2">
          <span className="text-[11px] font-mono font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
            {project.categoryLabel}
          </span>
        </div>

        <h3 className="text-2xl font-bold text-white mb-3">
          {project.title}
        </h3>

        {/* Detailed Overview */}
        <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 mb-6 text-xs sm:text-sm text-slate-300 leading-relaxed">
          {project.detailedOverview}
        </div>

        {/* Key Features / Highlights */}
        <div className="mb-6">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            Key Highlights & Implementation
          </h4>
          <div className="space-y-2">
            {project.highlights.map((item, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Smart City Specific Features (if present) */}
        {project.keyFeatures && (
          <div className="mb-6 p-4 rounded-xl bg-blue-950/20 border border-blue-500/20">
            <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-300 mb-2">
              System Capabilities:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
              {project.keyFeatures.map((kf, kfIdx) => (
                <div key={kfIdx} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  <span>{kf}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Technologies Badge List */}
        <div className="mb-6">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
            Technologies Used:
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, tIdx) => (
              <span
                key={tIdx}
                className="text-xs font-mono px-3 py-1 rounded-lg bg-slate-800/80 border border-slate-700 text-slate-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Actions Bar */}
        <div className="pt-4 border-t border-slate-800 flex items-center justify-end gap-3">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold transition"
          >
            <GithubIcon className="w-4 h-4" />
            <span>GitHub Repository</span>
          </a>

          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 border border-cyan-500/30 text-xs font-semibold transition"
          >
            Close Overview
          </button>
        </div>
      </div>
    </div>
  );
};
