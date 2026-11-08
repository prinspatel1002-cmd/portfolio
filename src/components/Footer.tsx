import React from 'react';
import { ArrowUp, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-slate-800/80 bg-[#060911] text-slate-400 text-xs py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand info */}
          <div className="flex flex-col items-center md:items-start gap-1">
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-base tracking-tight text-white">
                PRINS<span className="text-cyan-400">.DEV</span>
              </span>
              <span className="text-slate-600">|</span>
              <span className="text-xs text-slate-400">{PERSONAL_INFO.name}</span>
            </div>
            <p className="text-[11px] text-slate-500">
              Computer Engineering @ Indus University • Full-Stack Developer & AI Engineer
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-900 hover:text-white hover:bg-slate-800 transition"
              aria-label="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-900 hover:text-cyan-400 hover:bg-slate-800 transition"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="p-2 rounded-lg bg-slate-900 hover:text-cyan-400 hover:bg-slate-800 transition"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          {/* Back to top */}
          <div className="flex items-center gap-4">
            <div className="text-[11px] text-slate-500 text-center md:text-right">
              Deploy-ready for Vercel, Netlify & GitHub Pages
            </div>
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-cyan-400 border border-slate-800 transition flex items-center justify-center"
              aria-label="Scroll to top"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        <div className="mt-8 pt-6 border-t border-slate-900 text-center text-[11px] text-slate-600 flex flex-wrap items-center justify-center gap-1">
          <span>© {new Date().getFullYear()} Prins Patel. All rights reserved.</span>
          <span>• Designed with precision using React, TypeScript & Tailwind CSS.</span>
        </div>
      </div>
    </footer>
  );
};
