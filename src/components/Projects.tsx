import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Layers, ArrowUpRight, Check, Eye, Sparkles } from 'lucide-react';
import { PROJECTS, Project } from '../data/portfolioData';
import { ProjectDetailModal } from './ProjectDetailModal';
import { SpotlightCard } from './SpotlightCard';
import { GithubIcon } from './Icons';

export const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'data-science', label: 'Data Science / ML' },
    { id: 'flutter', label: 'Flutter / Mobile' },
    { id: 'ai', label: 'AI / Smart City' },
    { id: 'full-stack', label: 'Full-Stack' },
  ];

  const filteredProjects = activeFilter === 'all'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="py-24 relative z-10 bg-[#080B12] border-t border-slate-900/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-semibold text-cyan-400 mb-3 shadow-[0_0_15px_rgba(56,189,248,0.1)]">
            <Layers className="w-3.5 h-3.5" />
            Portfolio Showcase
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-slate-400 mt-3 text-sm sm:text-base">
            Carefully engineered projects spanning machine learning prediction, cross-platform mobile apps, smart mobility systems, and full-stack web applications.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-300 ${
                  activeFilter === cat.id
                    ? 'bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 text-white shadow-lg shadow-blue-500/25 scale-105'
                    : 'bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid with AnimatePresence */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
        >
          <AnimatePresence>
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
              >
                <SpotlightCard className="p-6 sm:p-7 flex flex-col justify-between h-full group hover:shadow-2xl hover:shadow-cyan-500/10">
                  <div>
                    {/* Category & Status Bar */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[11px] font-mono font-semibold uppercase tracking-wider px-2.5 py-1 rounded-md bg-slate-800/80 text-cyan-300 border border-slate-700/80">
                        {project.categoryLabel}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition duration-300 mb-2">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                      {project.description}
                    </p>

                    {/* Key Features (if available) */}
                    {project.keyFeatures && (
                      <div className="space-y-1.5 mb-5 p-3 rounded-xl bg-slate-900/60 border border-slate-800/80">
                        {project.keyFeatures.map((kf, kfIdx) => (
                          <div key={kfIdx} className="flex items-center gap-2 text-xs text-slate-300">
                            <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                            <span>{kf}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Bottom Card Area */}
                  <div className="pt-4 border-t border-slate-800/80 mt-auto">
                    {/* Technology Badges */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {project.technologies.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-slate-800/60 text-slate-300 border border-slate-700/60 group-hover:border-slate-600 transition"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="flex-1 flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-gradient-to-r from-blue-600/20 to-cyan-600/20 hover:from-blue-600/35 hover:to-cyan-600/35 border border-cyan-500/30 text-cyan-300 hover:text-white text-xs font-semibold transition-all duration-300"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>View Project</span>
                      </button>

                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-semibold transition duration-300"
                        title="View GitHub Repository"
                      >
                        <GithubIcon className="w-4 h-4" />
                        <span className="hidden sm:inline">GitHub</span>
                      </a>
                    </div>
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>

      {/* Detailed Modal */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
