import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, ShieldCheck, CheckCircle2, X, ExternalLink, Download, ZoomIn, ZoomOut, Calendar, Building2 } from 'lucide-react';
import { CERTIFICATIONS, Certification } from '../data/portfolioData';
import { SpotlightCard } from './SpotlightCard';

export const Certifications: React.FC = () => {
  const [activeCert, setActiveCert] = useState<Certification | null>(null);
  const [isZoomed, setIsZoomed] = useState<boolean>(false);

  // Close modal on Escape key and prevent background scroll
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveCert(null);
        setIsZoomed(false);
      }
    };

    if (activeCert) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [activeCert]);

  const handleOpenCert = (cert: Certification) => {
    setIsZoomed(false);
    setActiveCert(cert);
  };

  const handleCloseCert = () => {
    setIsZoomed(false);
    setActiveCert(null);
  };

  return (
    <section id="certifications" className="py-24 relative z-10 bg-white dark:bg-[#080B12] border-t border-slate-200 dark:border-slate-900/80 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-50 dark:bg-violet-500/10 border border-violet-200 dark:border-violet-500/20 text-xs font-semibold text-violet-700 dark:text-violet-400 mb-3 shadow-sm">
            <Award className="w-3.5 h-3.5" />
            Verified Training & Credentials
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Professional <span className="gradient-text">Certifications</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mt-3 text-sm sm:text-base">
            Formal institution and online learning certifications demonstrating hands-on proficiency in cross-platform mobile architecture and modern web systems.
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {CERTIFICATIONS.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <SpotlightCard
                spotlightColor="rgba(139, 92, 246, 0.15)"
                className="p-6 sm:p-7 flex flex-col justify-between h-full group hover:border-violet-400 dark:hover:border-violet-500/40 hover:shadow-xl dark:hover:shadow-violet-500/10 transition-all duration-300"
              >
                <div>
                  {/* Header with icon & issuer */}
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-3 rounded-xl bg-violet-50 dark:bg-violet-500/15 border border-violet-200 dark:border-violet-500/30 text-violet-600 dark:text-violet-400 group-hover:scale-110 transition duration-300 shadow-sm">
                        <ShieldCheck className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white group-hover:text-violet-600 dark:group-hover:text-violet-300 transition duration-300">
                          {cert.title}
                        </h3>
                        <div className="flex flex-wrap items-center gap-2 mt-1">
                          <span className="text-xs text-violet-600 dark:text-violet-400 font-mono font-semibold">
                            {cert.issuer}
                          </span>
                          {cert.issueDate && (
                            <span className="text-[11px] text-slate-500 dark:text-slate-400 flex items-center gap-1 font-mono">
                              • <Calendar className="w-3 h-3 inline" /> {cert.issueDate}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Optional Certificate Thumbnail Card */}
                  {cert.certificateImage && (
                    <div
                      onClick={() => handleOpenCert(cert)}
                      className="mb-4 relative rounded-xl overflow-hidden border border-slate-200 dark:border-violet-500/30 group/thumb cursor-pointer shadow-sm hover:shadow-md transition duration-300"
                    >
                      <img
                        src={cert.certificateImage}
                        alt={`${cert.title} Certificate Preview`}
                        className="w-full h-40 object-cover object-top transition duration-500 group-hover/thumb:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/30 to-transparent flex items-end justify-between p-3">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-emerald-500/90 text-white text-[11px] font-semibold backdrop-blur-sm shadow-sm">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          Official University Certificate
                        </span>
                        <span className="inline-flex items-center gap-1 text-[11px] text-white font-medium bg-black/60 px-2 py-0.5 rounded backdrop-blur-sm">
                          <ZoomIn className="w-3 h-3" /> Click to Inspect
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                    {cert.description}
                  </p>

                  {/* Skills Covered */}
                  <div className="space-y-1.5 mb-5">
                    <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider block">
                      Core Competencies Covered:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {cert.skillsLearned.map((s, sIdx) => (
                        <span
                          key={sIdx}
                          className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/60"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* View Certificate Button */}
                <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between mt-auto">
                  <span className="text-[11px] text-emerald-600 dark:text-emerald-400 flex items-center gap-1 font-mono font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Course Completed
                  </span>

                  <button
                    onClick={() => handleOpenCert(cert)}
                    className="flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-xl bg-violet-50 dark:bg-violet-500/15 hover:bg-violet-100 dark:hover:bg-violet-500/25 border border-violet-200 dark:border-violet-500/30 text-violet-700 dark:text-violet-300 hover:text-violet-900 dark:hover:text-white transition-all duration-300 shadow-sm"
                  >
                    <Award className="w-3.5 h-3.5" />
                    <span>View Certificate</span>
                  </button>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Certificate Modal View via Portal */}
      {typeof document !== 'undefined' && createPortal(
        <AnimatePresence>
          {activeCert && (
            <div
              className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-md overflow-y-auto"
              onClick={handleCloseCert}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.94, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.94, y: 15 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-4xl max-h-[92vh] flex flex-col bg-white dark:bg-[#0c1322] border border-slate-200 dark:border-violet-500/40 rounded-2xl shadow-2xl overflow-hidden my-auto"
              >
              {/* Modal Top Bar */}
              <div className="flex items-center justify-between px-5 sm:px-6 py-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-900/60">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-violet-100 dark:bg-violet-500/20 text-violet-600 dark:text-violet-300 border border-violet-200 dark:border-violet-500/30">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white leading-tight">
                      {activeCert.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-2 mt-0.5">
                      <span className="text-xs text-violet-600 dark:text-violet-400 font-mono font-semibold flex items-center gap-1">
                        <Building2 className="w-3 h-3" />
                        {activeCert.issuer}
                      </span>
                      {activeCert.organization && (
                        <span className="text-[11px] text-slate-500 dark:text-slate-400">
                          • {activeCert.organization}
                        </span>
                      )}
                      {activeCert.issueDate && (
                        <span className="text-[11px] text-slate-500 dark:text-slate-400 font-mono">
                          • {activeCert.issueDate}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Close Button */}
                <button
                  onClick={handleCloseCert}
                  className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition shadow-sm"
                  aria-label="Close Certificate Modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Body: Scrollable content */}
              <div className="p-5 sm:p-6 overflow-y-auto space-y-5">
                
                {/* Certificate Visual Display */}
                {activeCert.certificateImage ? (
                  <div className="space-y-3">
                    <div className="relative group rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-900 shadow-md">
                      <img
                        src={activeCert.certificateImage}
                        alt={`${activeCert.title} Certificate`}
                        className={`w-full h-auto transition-transform duration-300 ease-in-out cursor-pointer ${
                          isZoomed ? 'scale-125 origin-center' : 'scale-100'
                        }`}
                        onClick={() => setIsZoomed(!isZoomed)}
                      />

                      {/* Floating Zoom & Action Pills */}
                      <div className="absolute top-3 right-3 flex items-center gap-2 opacity-90 group-hover:opacity-100 transition">
                        <button
                          onClick={() => setIsZoomed(!isZoomed)}
                          className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-black/75 hover:bg-black text-white text-xs font-medium backdrop-blur-md border border-white/20 transition shadow"
                          title={isZoomed ? "Reset View" : "Zoom In"}
                        >
                          {isZoomed ? (
                            <>
                              <ZoomOut className="w-3.5 h-3.5" />
                              <span>Reset</span>
                            </>
                          ) : (
                            <>
                              <ZoomIn className="w-3.5 h-3.5" />
                              <span>Zoom</span>
                            </>
                          )}
                        </button>
                        <a
                          href={activeCert.certificateImage}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-black/75 hover:bg-black text-white text-xs font-medium backdrop-blur-md border border-white/20 transition shadow"
                          title="Open original in new tab"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          <span>Original</span>
                        </a>
                      </div>
                    </div>

                    <p className="text-center text-[11px] text-slate-500 dark:text-slate-400 font-mono">
                      💡 Click on certificate or use the Zoom button to inspect signatures and university accreditation seals.
                    </p>
                  </div>
                ) : (
                  /* Verified Digital Placeholder for Course without image */
                  <div className="aspect-[16/9] rounded-xl bg-gradient-to-br from-slate-50 via-violet-50/30 to-slate-100 dark:from-slate-900 dark:to-[#121929] border border-slate-200 dark:border-slate-800 flex flex-col items-center justify-center p-6 text-center relative overflow-hidden shadow-inner">
                    <div className="w-16 h-16 rounded-full bg-violet-100 dark:bg-violet-500/10 border border-violet-200 dark:border-violet-500/20 flex items-center justify-center text-violet-600 dark:text-violet-400 mb-3 shadow-sm">
                      <ShieldCheck className="w-8 h-8" />
                    </div>
                    <h4 className="text-base font-bold text-slate-900 dark:text-white mb-1">{activeCert.title}</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mb-3">Issued by {activeCert.issuer}</p>
                    <span className="text-[11px] font-mono text-emerald-700 dark:text-emerald-400 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 shadow-sm flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      Verified Curriculum & Course Completion
                    </span>
                  </div>
                )}

                {/* Description & Competencies */}
                <div className="bg-slate-50 dark:bg-slate-900/40 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
                  <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider font-mono mb-2">
                    Course Summary & Scope:
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                    {activeCert.description}
                  </p>

                  <div className="space-y-1.5">
                    <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider block">
                      Core Competencies Mastered:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {activeCert.skillsLearned.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/60 shadow-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

              </div>

              {/* Modal Bottom Bar / Actions */}
              <div className="flex items-center justify-between px-5 sm:px-6 py-3.5 border-t border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-900/60">
                <span className="text-[11px] text-emerald-600 dark:text-emerald-400 font-mono font-medium flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Verified Credential
                </span>

                <div className="flex items-center gap-2">
                  {activeCert.certificateImage && (
                    <a
                      href={activeCert.certificateImage}
                      download="Prins_Patel_Flutter_Certificate.jpg"
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-violet-600 hover:bg-violet-700 text-white text-xs font-semibold transition shadow-sm"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Download</span>
                    </a>
                  )}
                  <button
                    onClick={handleCloseCert}
                    className="px-4 py-1.5 rounded-xl bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-semibold transition"
                  >
                    Close
                  </button>
                </div>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>,
      document.body
    )}
  </section>
);
};
