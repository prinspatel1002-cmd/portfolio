import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Download, Mail, MapPin, Sparkles, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';

export const Hero: React.FC = () => {
  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % PERSONAL_INFO.titles.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-[#080B12]">
      {/* Subtle Background Cyber Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f29370a_1px,transparent_1px),linear-gradient(to_bottom,#1f29370a_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Subtle Accent Glows */}
      <div className="glow-ambient w-96 h-96 bg-blue-600/20 top-12 left-1/4 -translate-x-1/2 blur-3xl" />
      <div className="glow-ambient w-96 h-96 bg-violet-600/15 top-36 right-12 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Heading, Animated Titles, Description, CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
          >
            {/* Small Greeting & Editable Availability Indicator */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3">
              <span className="text-xs uppercase tracking-widest font-mono font-bold text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 px-3 py-1 rounded-full">
                HELLO, I'M
              </span>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/90 border border-slate-800 text-xs text-slate-300">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span className="font-medium">{PERSONAL_INFO.availabilityStatus}</span>
              </div>
            </div>

            {/* Large Name Heading */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight">
              {PERSONAL_INFO.name}
            </h1>

            {/* Animated Professional Title */}
            <div className="h-10 sm:h-12 flex items-center justify-center lg:justify-start overflow-hidden">
              <span className="text-xl sm:text-2xl lg:text-3xl font-semibold text-slate-400 mr-2">
                A Creative
              </span>
              <AnimatePresence mode="wait">
                <motion.span
                  key={PERSONAL_INFO.titles[titleIndex]}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4 }}
                  className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-blue-400 via-indigo-400 to-cyan-300 bg-clip-text text-transparent font-mono"
                >
                  {PERSONAL_INFO.titles[titleIndex]}
                </motion.span>
              </AnimatePresence>
            </div>

            {/* Summary Introduction */}
            <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              {PERSONAL_INFO.summary}
            </p>

            {/* Location & Quick Meta */}
            <div className="flex items-center justify-center lg:justify-start gap-3 text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                {PERSONAL_INFO.location}
              </span>
              <span className="text-slate-600">•</span>
              <span className="text-slate-300">
                Indus University, Ahmedabad
              </span>
            </div>

            {/* Prominent CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#projects"
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 hover:brightness-110 text-white font-semibold text-sm shadow-xl shadow-blue-500/25 transition-all hover:scale-105 active:scale-95"
              >
                Explore My Work
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={PERSONAL_INFO.resumePdf}
                download="Prins_Patel_Resume.pdf"
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-700 hover:border-cyan-400 text-slate-200 hover:text-white font-semibold text-sm transition-all hover:scale-105 active:scale-95"
              >
                <Download className="w-4 h-4 text-cyan-400" />
                Download Resume
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex items-center justify-center lg:justify-start gap-3 pt-4">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900/80 border border-slate-800 text-xs text-slate-300 hover:text-white hover:border-slate-700 transition"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub</span>
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900/80 border border-slate-800 text-xs text-slate-300 hover:text-cyan-400 hover:border-cyan-500/30 transition"
              >
                <LinkedinIcon className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900/80 border border-slate-800 text-xs text-slate-300 hover:text-cyan-400 hover:border-cyan-500/30 transition"
              >
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>{PERSONAL_INFO.email}</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Profile Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-sm">
              {/* Outer Glow */}
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 rounded-3xl blur-xl opacity-30 animate-pulse" />

              <div className="relative bg-[#0c1322] border border-white/10 rounded-2xl p-6 shadow-2xl backdrop-blur-xl">
                {/* Profile Photo Display */}
                <div className="relative mx-auto w-60 h-60 sm:w-68 sm:h-68 rounded-2xl overflow-hidden border border-cyan-400/30 shadow-xl group">
                  <img
                    src={PERSONAL_INFO.profileImage}
                    alt={PERSONAL_INFO.name}
                    className="w-full h-full object-cover object-top transition duration-500 group-hover:scale-105"
                    onError={(e) => {
                      (e.target as HTMLElement).style.display = 'none';
                    }}
                  />
                  {/* Subtle gradient vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c1322] via-transparent to-transparent opacity-30" />
                </div>

                {/* Profile Meta Card */}
                <div className="text-center mt-5">
                  <h3 className="text-lg font-bold text-white flex items-center justify-center gap-1.5">
                    {PERSONAL_INFO.name}
                    <Sparkles className="w-4 h-4 text-cyan-400" />
                  </h3>
                  <p className="text-xs text-cyan-400 font-mono mt-0.5">
                    Data Analyst | Computer Engineer
                  </p>

                  <div className="mt-4 pt-4 border-t border-slate-800/80 grid grid-cols-2 gap-2 text-left text-xs">
                    <div className="p-2 rounded-lg bg-slate-900/60 border border-slate-800">
                      <span className="text-[10px] text-slate-500 block uppercase font-mono">Discipline</span>
                      <span className="text-slate-200 font-semibold">Computer Engg.</span>
                    </div>
                    <div className="p-2 rounded-lg bg-slate-900/60 border border-slate-800">
                      <span className="text-[10px] text-slate-500 block uppercase font-mono">Location</span>
                      <span className="text-slate-200 font-semibold">{PERSONAL_INFO.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
