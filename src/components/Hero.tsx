import React from 'react';
import { ArrowRight, Download, Mail, MapPin, Sparkles, MessageSquare } from 'lucide-react';
import { PERSONAL_INFO, HIGHLIGHT_STATS } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';

export const Hero: React.FC = () => {
  return (
    <section id="about" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background Glow Orbs */}
      <div className="glow-ambient w-96 h-96 bg-cyan-500 top-10 left-1/4 -translate-x-1/2" />
      <div className="glow-ambient w-96 h-96 bg-purple-600 top-32 right-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Text & CTAs (7 Cols) */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/30 text-xs font-medium text-cyan-300 shadow-inner">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>Available for Software Engineering & AI Opportunities</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Hi, I'm <span className="gradient-text">{PERSONAL_INFO.name}</span>
              <br />
              <span className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-slate-300">
                Engineering <span className="text-white underline decoration-cyan-400 decoration-wavy decoration-2">Intelligent Systems</span> & Scalable Web
              </span>
            </h1>

            {/* Subheading / Bio */}
            <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Computer Engineering student at <strong>Indus University</strong> with hands-on expertise in 
              <strong> Machine Learning, Full-Stack Development (React/Node.js), and Flutter</strong>. 
              Passionate about turning complex algorithms and large datasets into high-performance, real-world digital solutions.
            </p>

            {/* Location & Quick Meta */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs text-slate-400 pt-1">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-cyan-400" />
                {PERSONAL_INFO.location}
              </span>
              <span className="hidden sm:inline text-slate-700">•</span>
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-cyan-400" />
                Indus University (CGPA 8.89/10)
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-3">
              <a
                href="#projects"
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-semibold text-sm shadow-xl shadow-cyan-500/25 transition-all hover:scale-105 active:scale-95"
              >
                Explore Projects
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={PERSONAL_INFO.resumePdf}
                download="Prins_Patel_Resume.pdf"
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-700 hover:border-cyan-400 text-slate-200 hover:text-white font-semibold text-sm transition-all hover:scale-105 active:scale-95"
              >
                <Download className="w-4 h-4 text-cyan-400" />
                Download CV
              </a>

              <a
                href={PERSONAL_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-3.5 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 font-medium text-sm transition"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                WhatsApp
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center lg:justify-start gap-3 pt-2">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900/80 border border-slate-800 text-xs text-slate-300 hover:text-white hover:border-slate-700 transition"
              >
                <GithubIcon className="w-4 h-4 text-slate-400" />
                github/{PERSONAL_INFO.githubUser}
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900/80 border border-slate-800 text-xs text-slate-300 hover:text-cyan-400 hover:border-cyan-500/30 transition"
              >
                <Mail className="w-4 h-4 text-cyan-400" />
                {PERSONAL_INFO.email}
              </a>
            </div>
          </div>

          {/* Right Column: Profile Showcase Card (5 Cols) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm sm:max-w-md">
              {/* Outer decorative gradient glow */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-600 rounded-3xl blur-xl opacity-40 group-hover:opacity-100 transition duration-1000 animate-pulse-slow" />
              
              <div className="relative bg-[#0c1220] border border-white/10 rounded-2xl p-6 shadow-2xl backdrop-blur-xl">
                {/* Photo & Badge */}
                <div className="relative mx-auto w-56 h-56 sm:w-64 sm:h-64 rounded-2xl overflow-hidden border-2 border-cyan-400/40 shadow-xl group">
                  <img
                    src={PERSONAL_INFO.profileImage}
                    alt={PERSONAL_INFO.name}
                    className="w-full h-full object-cover object-top transition duration-500 group-hover:scale-105"
                    onError={(e) => {
                      (e.target as HTMLElement).style.display = 'none';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c1220] via-transparent to-transparent opacity-40" />
                </div>

                {/* Profile Floating Card info */}
                <div className="text-center mt-5">
                  <div className="flex items-center justify-center gap-2">
                    <h3 className="text-xl font-bold text-white">{PERSONAL_INFO.name}</h3>
                    <Sparkles className="w-4 h-4 text-cyan-400" />
                  </div>
                  <p className="text-xs text-cyan-400 font-mono mt-0.5">Computer Engineering @ Indus Uni</p>
                  
                  {/* Quick skill pills */}
                  <div className="flex flex-wrap justify-center gap-1.5 mt-3 pt-3 border-t border-slate-800">
                    <span className="px-2.5 py-1 text-[11px] rounded-md bg-slate-800 text-slate-300">Python</span>
                    <span className="px-2.5 py-1 text-[11px] rounded-md bg-slate-800 text-slate-300">React.js</span>
                    <span className="px-2.5 py-1 text-[11px] rounded-md bg-slate-800 text-slate-300">Machine Learning</span>
                    <span className="px-2.5 py-1 text-[11px] rounded-md bg-slate-800 text-slate-300">Flutter</span>
                    <span className="px-2.5 py-1 text-[11px] rounded-md bg-slate-800 text-slate-300">SQL & Power BI</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 pt-8 border-t border-slate-800/80">
          {HIGHLIGHT_STATS.map((stat, idx) => (
            <div
              key={idx}
              className="p-4 sm:p-5 rounded-2xl bg-slate-900/50 border border-slate-800/80 hover:border-cyan-500/30 transition text-center sm:text-left"
            >
              <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tracking-tight gradient-text">
                {stat.value}
              </div>
              <div className="text-xs font-semibold text-slate-200 mt-1">{stat.label}</div>
              <div className="text-[11px] text-slate-500 mt-0.5">{stat.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
