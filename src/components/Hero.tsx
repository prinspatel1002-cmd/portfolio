import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Download, Mail, MapPin, Sparkles, Database, Terminal, Code2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';
import { ParticleCanvas } from './ParticleCanvas';
import { TiltCard } from './TiltCard';
import { MagneticButton } from './MagneticButton';
import { TerminalWidget } from './TerminalWidget';

export const Hero: React.FC = () => {
  const [titleIndex, setTitleIndex] = useState(0);
  const [showTerminal, setShowTerminal] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % PERSONAL_INFO.titles.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-[#080B12]">
      {/* Interactive Constellation Particle Canvas */}
      <ParticleCanvas />

      {/* Cyber Grid Texture */}
      <div className="absolute inset-0 cyber-grid [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Fluid Drifting Aurora Waves */}
      <div className="absolute top-10 left-1/4 -translate-x-1/2 w-[440px] h-[440px] bg-gradient-to-tr from-cyan-600/15 to-blue-600/15 rounded-full blur-[130px] pointer-events-none animate-aurora-1" />
      <div className="absolute top-36 right-10 w-[400px] h-[400px] bg-gradient-to-br from-violet-600/15 to-indigo-600/15 rounded-full blur-[130px] pointer-events-none animate-aurora-2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Heading, Animated Titles, Description, CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
          >
            {/* Small Greeting & Editable Availability Indicator */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-3"
            >
              <span className="text-xs uppercase tracking-widest font-mono font-bold text-cyan-400 bg-cyan-500/10 border border-cyan-500/25 px-3 py-1 rounded-full shadow-[0_0_15px_rgba(56,189,248,0.15)]">
                HELLO, I'M
              </span>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/90 border border-slate-800 text-xs text-slate-300">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span className="font-medium text-slate-300">{PERSONAL_INFO.availabilityStatus}</span>
              </div>
            </motion.div>

            {/* Large Name Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight"
            >
              {PERSONAL_INFO.name}
            </motion.h1>

            {/* Animated Professional Title */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="h-10 sm:h-12 flex items-center justify-center lg:justify-start overflow-hidden"
            >
              <span className="text-xl sm:text-2xl lg:text-3xl font-semibold text-slate-400 mr-2">
                A Creative
              </span>
              <AnimatePresence mode="wait">
                <motion.span
                  key={PERSONAL_INFO.titles[titleIndex]}
                  initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, y: -20, filter: 'blur(4px)' }}
                  transition={{ duration: 0.45, ease: 'easeInOut' }}
                  className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-300 bg-clip-text text-transparent font-mono"
                >
                  {PERSONAL_INFO.titles[titleIndex]}
                </motion.span>
              </AnimatePresence>
            </motion.div>

            {/* Summary Introduction */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.6 }}
              className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              {PERSONAL_INFO.summary}
            </motion.p>

            {/* Location & Quick Meta */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex items-center justify-center lg:justify-start gap-3 text-xs text-slate-400"
            >
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                {PERSONAL_INFO.location}
              </span>
              <span className="text-slate-600">•</span>
              <span className="flex items-center gap-1 text-slate-300">
                <Database className="w-3.5 h-3.5 text-blue-400" />
                Indus University, Ahmedabad
              </span>
            </motion.div>

            {/* Prominent CTA Buttons with Magnetic Spring Effect */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.6 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2"
            >
              <MagneticButton>
                <a
                  href="#projects"
                  className="group relative flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 text-white font-semibold text-sm shadow-xl shadow-blue-500/25 transition-all duration-300 hover:scale-105 active:scale-95 overflow-hidden"
                >
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                  <span className="relative z-10">Explore My Work</span>
                  <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
                </a>
              </MagneticButton>

              <MagneticButton>
                <a
                  href={PERSONAL_INFO.resumePdf}
                  download="Prins_Patel_Resume.pdf"
                  className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 hover:border-cyan-400 text-slate-200 hover:text-white font-semibold text-sm transition-all duration-300 hover:scale-105 active:scale-95 shadow-md"
                >
                  <Download className="w-4 h-4 text-cyan-400" />
                  <span>Download Resume</span>
                </a>
              </MagneticButton>

              {/* Terminal Toggle Button */}
              <button
                onClick={() => setShowTerminal(!showTerminal)}
                className="flex items-center gap-1.5 px-3.5 py-3.5 rounded-xl bg-slate-900/60 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-cyan-400 text-xs font-semibold transition"
                title="Toggle Code & Pipeline Console"
              >
                <Code2 className="w-4 h-4 text-cyan-400" />
                <span>{showTerminal ? 'Hide Console' : 'Live Console'}</span>
              </button>
            </motion.div>

            {/* Social Icons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex items-center justify-center lg:justify-start gap-3 pt-3"
            >
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900/80 border border-slate-800 text-xs text-slate-300 hover:text-white hover:border-slate-700 transition hover:-translate-y-0.5"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub</span>
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900/80 border border-slate-800 text-xs text-slate-300 hover:text-cyan-400 hover:border-cyan-500/30 transition hover:-translate-y-0.5"
              >
                <LinkedinIcon className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900/80 border border-slate-800 text-xs text-slate-300 hover:text-cyan-400 hover:border-cyan-500/30 transition hover:-translate-y-0.5"
              >
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>Email</span>
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column: 3D Perspective Tilt Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-sm">
              {/* Outer Glow Halo */}
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 rounded-3xl blur-2xl opacity-30 animate-pulse" />

              <TiltCard className="p-6 bg-[#0c1322] border border-white/10 shadow-2xl backdrop-blur-xl">
                {/* Profile Photo Display */}
                <div className="relative mx-auto w-60 h-60 sm:w-68 sm:h-68 rounded-2xl overflow-hidden border border-cyan-400/30 shadow-2xl group">
                  <img
                    src={PERSONAL_INFO.profileImage}
                    alt={PERSONAL_INFO.name}
                    className="w-full h-full object-cover object-top transition duration-700 group-hover:scale-105"
                    onError={(e) => {
                      (e.target as HTMLElement).style.display = 'none';
                    }}
                  />
                  {/* Subtle bottom vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c1322] via-transparent to-transparent opacity-40" />
                  
                  {/* Floating active badge */}
                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-slate-900/90 border border-white/10 text-[10px] font-mono text-cyan-300 flex items-center gap-1.5 shadow-lg backdrop-blur-md">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
                    Verified
                  </div>
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
                    <div className="p-2.5 rounded-xl bg-slate-900/70 border border-slate-800">
                      <span className="text-[10px] text-slate-500 block uppercase font-mono">Discipline</span>
                      <span className="text-slate-200 font-semibold truncate block">Computer Engg.</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-slate-900/70 border border-slate-800">
                      <span className="text-[10px] text-slate-500 block uppercase font-mono">Location</span>
                      <span className="text-slate-200 font-semibold truncate block">{PERSONAL_INFO.location}</span>
                    </div>
                  </div>
                </div>
              </TiltCard>
            </div>
          </motion.div>

        </div>

        {/* Live Interactive Terminal Modal / Accordion */}
        <AnimatePresence>
          {showTerminal && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -20 }}
              animate={{ opacity: 1, height: 'auto', y: 0 }}
              exit={{ opacity: 0, height: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="mt-12 overflow-hidden"
            >
              <TerminalWidget />
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};
