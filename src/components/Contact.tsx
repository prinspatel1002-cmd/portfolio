import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, MapPin, Send, Copy, Check, MessageSquare, Loader2, CheckCircle2, AlertCircle, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { SpotlightCard } from './SpotlightCard';
import { GithubIcon, LinkedinIcon } from './Icons';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState<'idle' | 'success' | 'activation' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMessage('Please fill in your Name, Email, and Message.');
      return;
    }

    if (!formData.email.includes('@') || !formData.email.includes('.')) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    setErrorMessage('');
    setIsSubmitting(true);
    setSubmissionStatus('idle');

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${PERSONAL_INFO.email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          subject: formData.subject.trim() || `Portfolio Contact from ${formData.name.trim()}`,
          _subject: `Portfolio Message from ${formData.name.trim()} (${formData.subject.trim() || 'General Inquiry'})`,
          message: formData.message.trim(),
          _template: 'table',
          _captcha: 'false'
        })
      });

      const data = await response.json();

      if (response.ok && (data.success === 'true' || data.success === true)) {
        setSubmissionStatus('success');
        setStatusMessage('Your message was sent successfully and delivered directly to Prins Patel\'s email inbox!');
        // Reset form fields
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else if (data.message && data.message.toLowerCase().includes('activation')) {
        // FormSubmit first-time activation message
        setSubmissionStatus('activation');
        setStatusMessage('Form Submitted! A one-time activation email was sent to prinspatel1002@gmail.com. Once confirmed, all future messages route straight to your inbox.');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmissionStatus('error');
        setStatusMessage(data.message || 'Unable to deliver message right now. Please use the direct email or Gmail link below.');
      }
    } catch (err) {
      console.error('Contact Form Submission Error:', err);
      setSubmissionStatus('error');
      setStatusMessage('Network connection failed or form service unreachable. You can send your message directly via Gmail or your mail app below.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Fallback direct Gmail compose URL
  const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
    PERSONAL_INFO.email
  )}&su=${encodeURIComponent(formData.subject.trim() || `Portfolio Inquiry from ${formData.name.trim()}`)}&body=${encodeURIComponent(
    `Name: ${formData.name.trim()}\nEmail: ${formData.email.trim()}\n\n${formData.message.trim()}`
  )}`;

  // Fallback default mailto URL
  const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
    formData.subject.trim() || `Portfolio Inquiry from ${formData.name.trim()}`
  )}&body=${encodeURIComponent(
    `Name: ${formData.name.trim()}\nEmail: ${formData.email.trim()}\n\nMessage:\n${formData.message.trim()}`
  )}`;

  return (
    <section id="contact" className="py-24 relative z-10 bg-slate-50 dark:bg-[#080B12] border-t border-slate-200 dark:border-slate-900/80 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 text-xs font-semibold text-blue-600 dark:text-blue-400 mb-3 shadow-sm">
            <MessageSquare className="w-3.5 h-3.5" />
            Direct Communication
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Let's <span className="gradient-text">Work Together</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mt-3 text-sm sm:text-base">
            Seeking opportunities in Data Analytics, Data Science, and technology-driven software development. Fill out the form to deliver a message straight to my inbox, or reach out via LinkedIn.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-5xl mx-auto">
          
          {/* Left Column: Contact Channels (5 Cols) */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 space-y-4"
          >
            {/* Direct Email Card with 1-click Copy */}
            <SpotlightCard className="p-5 hover:border-blue-400 dark:hover:border-cyan-500/40 transition">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 font-semibold flex items-center gap-2">
                  <Mail className="w-4 h-4 text-blue-600 dark:text-cyan-400" /> Email Address
                </span>
                <button
                  onClick={handleCopyEmail}
                  className="flex items-center gap-1.5 text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition hover:scale-105 active:scale-95"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-500" />
                      <span className="text-emerald-600 dark:text-emerald-400 font-medium">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3 text-slate-400" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="text-sm font-bold text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-cyan-400 transition break-all"
              >
                {PERSONAL_INFO.email}
              </a>
            </SpotlightCard>

            {/* Location Card */}
            <SpotlightCard className="p-5">
              <span className="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 font-semibold flex items-center gap-2 mb-2">
                <MapPin className="w-4 h-4 text-indigo-600 dark:text-indigo-400" /> Location
              </span>
              <p className="text-sm font-bold text-slate-900 dark:text-white">
                {PERSONAL_INFO.location}
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Open to remote opportunities and local roles.
              </p>
            </SpotlightCard>

            {/* Social Network Links */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white dark:bg-[#0c1322] border border-slate-200 dark:border-slate-800 hover:border-blue-400 dark:hover:border-cyan-500/40 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-cyan-400 transition shadow-sm hover:-translate-y-1 hover:scale-105"
              >
                <LinkedinIcon className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>

              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white dark:bg-[#0c1322] border border-slate-200 dark:border-slate-800 hover:border-slate-400 dark:hover:border-slate-700 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition shadow-sm hover:-translate-y-1 hover:scale-105"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub</span>
              </a>
            </div>

            {/* Direct Gmail One-Click Compose */}
            <div className="pt-2">
              <a
                href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(PERSONAL_INFO.email)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 rounded-xl bg-gradient-to-r from-red-50 to-rose-50 dark:from-red-950/20 dark:to-rose-950/20 border border-red-200 dark:border-red-900/40 text-xs text-red-700 dark:text-red-300 font-semibold hover:scale-[1.02] transition shadow-sm"
              >
                <span className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-red-500" />
                  <span>Open in Gmail Directly</span>
                </span>
                <ExternalLink className="w-3.5 h-3.5 text-red-400" />
              </a>
            </div>

            {/* Career Objective Summary */}
            <div className="p-4 rounded-xl bg-slate-100/80 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-400">
              <span className="font-semibold text-slate-800 dark:text-slate-300 block mb-1">Career Goal:</span>
              "{PERSONAL_INFO.careerObjective}"
            </div>
          </motion.div>

          {/* Right Column: Functional Contact Form (7 Cols) */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <form
              onSubmit={handleSubmit}
              className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#0c1322] border border-slate-200 dark:border-slate-800 relative shadow-xl hover:shadow-2xl transition"
            >
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Send a Message</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-6">
                Sends an email directly to <strong className="text-blue-600 dark:text-cyan-400">{PERSONAL_INFO.email}</strong>.
              </p>

              {errorMessage && (
                <div className="mb-4 p-3 rounded-xl bg-rose-50 dark:bg-rose-500/10 border border-rose-200 dark:border-rose-500/30 text-rose-600 dark:text-rose-300 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              <div className="space-y-4">
                <div>
                  <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Jordan Lee"
                    className="w-full bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-2.5 text-sm text-slate-900 dark:text-slate-200 outline-none focus:border-blue-500 dark:focus:border-cyan-400 transition"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-1">
                    Your Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. jordan@example.com"
                    className="w-full bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-2.5 text-sm text-slate-900 dark:text-slate-200 outline-none focus:border-blue-500 dark:focus:border-cyan-400 transition"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. Opportunity Discussion / Project Inquiry"
                    className="w-full bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-2.5 text-sm text-slate-900 dark:text-slate-200 outline-none focus:border-blue-500 dark:focus:border-cyan-400 transition"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-1">
                    Message *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Hi Prins, I came across your portfolio and would like to connect regarding..."
                    className="w-full bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-2.5 text-sm text-slate-900 dark:text-slate-200 outline-none focus:border-blue-500 dark:focus:border-cyan-400 transition resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full group relative flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 text-white font-semibold text-sm shadow-xl shadow-blue-500/20 transition-all duration-300 hover:scale-[1.01] active:scale-95 disabled:opacity-60 overflow-hidden"
                >
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin relative z-10" />
                      <span className="relative z-10">Transmitting to Mail Server...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
                      <span className="relative z-10">Send Message Directly</span>
                    </>
                  )}
                </button>

                {/* Real-time Status Card */}
                <AnimatePresence>
                  {submissionStatus === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-500/15 border border-emerald-200 dark:border-emerald-500/30 text-emerald-800 dark:text-emerald-200 text-xs space-y-1 shadow-sm"
                    >
                      <div className="flex items-center gap-2 font-bold text-sm text-emerald-700 dark:text-emerald-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                        <span>Message Sent Successfully!</span>
                      </div>
                      <p className="leading-relaxed">
                        {statusMessage}
                      </p>
                    </motion.div>
                  )}

                  {submissionStatus === 'activation' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="p-4 rounded-xl bg-amber-50 dark:bg-amber-500/15 border border-amber-200 dark:border-amber-500/30 text-amber-800 dark:text-amber-200 text-xs space-y-2 shadow-sm"
                    >
                      <div className="flex items-center gap-2 font-bold text-sm text-amber-700 dark:text-amber-300">
                        <CheckCircle2 className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0" />
                        <span>One-Time Form Activation Required</span>
                      </div>
                      <p className="leading-relaxed">
                        FormSubmit has sent a 1-click confirmation email to <strong>{PERSONAL_INFO.email}</strong>. Once you click "Activate Form" in your email, all submissions will automatically arrive in your inbox!
                      </p>
                    </motion.div>
                  )}

                  {submissionStatus === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="p-4 rounded-xl bg-rose-50 dark:bg-rose-500/15 border border-rose-200 dark:border-rose-500/30 text-rose-800 dark:text-rose-200 text-xs space-y-3 shadow-sm"
                    >
                      <div className="flex items-center gap-2 font-bold text-sm text-rose-700 dark:text-rose-300">
                        <AlertCircle className="w-4 h-4 text-rose-600 dark:text-rose-400 shrink-0" />
                        <span>Delivery Issue</span>
                      </div>
                      <p className="leading-relaxed">
                        {statusMessage}
                      </p>
                      <div className="flex flex-wrap gap-2 pt-1">
                        <a
                          href={gmailComposeUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-red-600 text-white font-semibold text-[11px] shadow-sm hover:brightness-110"
                        >
                          <Mail className="w-3.5 h-3.5" />
                          <span>Open in Gmail</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                        <a
                          href={mailtoUrl}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-semibold text-[11px] hover:bg-slate-300 dark:hover:bg-slate-700"
                        >
                          <span>Open Default Email Client</span>
                        </a>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </form>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
