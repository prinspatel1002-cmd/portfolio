import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BarChart3, TrendingUp, Activity, PieChart, Sparkles, Filter } from 'lucide-react';

export const InteractiveChartPlayground: React.FC = () => {
  const [activeScenario, setActiveScenario] = useState<'retention' | 'revenue' | 'convergence'>('revenue');
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  const scenarios = {
    revenue: {
      title: "Quarterly Revenue & Predictive Forecast",
      tag: "Time-Series Regression",
      data: [
        { label: "Q1", value: 42, sub: "Actual ₹42 L" },
        { label: "Q2", value: 56, sub: "Actual ₹56 L" },
        { label: "Q3", value: 68, sub: "Actual ₹68 L" },
        { label: "Q4", value: 84, sub: "Actual ₹84 L" },
        { label: "Q1*", value: 98, sub: "Forecast ₹98 L" },
        { label: "Q2*", value: 114, sub: "Forecast ₹114 L" },
      ],
      metric: "CAGR: +26.8%",
      highlight: "Model forecast matches seasonality with 94.2% test confidence interval.",
      color: "from-cyan-500 to-blue-500"
    },
    retention: {
      title: "Subscriber Cohort Retention Curve",
      tag: "Cohort Analysis",
      data: [
        { label: "M0", value: 100, sub: "100% Acquired" },
        { label: "M2", value: 88, sub: "88% Active" },
        { label: "M4", value: 79, sub: "79% Active" },
        { label: "M6", value: 73, sub: "73% Stable" },
        { label: "M8", value: 71, sub: "71% Loyal" },
        { label: "M12", value: 69, sub: "69% Retained" },
      ],
      metric: "Retention Floor: 69%",
      highlight: "Stabilization occurs post-Month 4; proactive onboarding prevents early dropoff.",
      color: "from-blue-500 to-indigo-500"
    },
    convergence: {
      title: "XGBoost Hyperparameter Loss Curve",
      tag: "Model Diagnostics",
      data: [
        { label: "E10", value: 92, sub: "Loss 0.92" },
        { label: "E50", value: 58, sub: "Loss 0.58" },
        { label: "E100", value: 34, sub: "Loss 0.34" },
        { label: "E150", value: 21, sub: "Loss 0.21" },
        { label: "E200", value: 16, sub: "Loss 0.16" },
        { label: "E300", value: 14, sub: "Optimum 0.14" },
      ],
      metric: "Min RMSE: 0.14",
      highlight: "Early stopping prevents overfitting while maximizing generalized R² score.",
      color: "from-emerald-500 to-cyan-500"
    }
  };

  const current = scenarios[activeScenario];

  return (
    <div className="py-20 relative z-10 bg-[#070b14]/90 border-t border-slate-900/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-xs font-semibold text-cyan-400 mb-3 shadow-[0_0_15px_rgba(56,189,248,0.15)]">
            <Activity className="w-3.5 h-3.5" />
            Live Analytical Sandbox
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Interactive <span className="gradient-text">Data Visualizer</span>
          </h2>
          <p className="text-slate-400 mt-3 text-xs sm:text-sm">
            Toggle scenarios below to watch real-time metric curves render and compute statistical KPIs.
          </p>

          {/* Scenario Selector Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
            {(['revenue', 'retention', 'convergence'] as const).map((sc) => (
              <button
                key={sc}
                onClick={() => {
                  setActiveScenario(sc);
                  setHoverIndex(null);
                }}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-300 ${
                  activeScenario === sc
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg shadow-cyan-500/20 scale-105 border border-cyan-400/40'
                    : 'bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
                }`}
              >
                {sc === 'revenue'
                  ? 'Revenue & Forecasting'
                  : sc === 'retention'
                  ? 'Cohort Retention'
                  : 'Model Loss Curve'}
              </button>
            ))}
          </div>
        </div>

        {/* Visualizer Canvas Box */}
        <div className="max-w-4xl mx-auto p-6 sm:p-8 rounded-2xl bg-[#0c1322] border border-slate-800 shadow-2xl relative overflow-hidden">
          {/* Top metadata */}
          <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-slate-800">
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base sm:text-lg font-bold text-white">{current.title}</h3>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
                  {current.tag}
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-1">{current.highlight}</p>
            </div>
            <div className="text-right">
              <span className="text-xs text-slate-500 uppercase font-mono block">Target Metric</span>
              <span className="text-base font-mono font-bold text-cyan-400">{current.metric}</span>
            </div>
          </div>

          {/* Bar / Curve Visualizer */}
          <div className="h-60 sm:h-72 flex items-end justify-between gap-3 sm:gap-6 pt-8 pb-4 px-2 sm:px-6 relative">
            {/* Horizontal Grid lines */}
            <div className="absolute inset-x-0 top-1/4 border-b border-slate-800/60 pointer-events-none" />
            <div className="absolute inset-x-0 top-2/4 border-b border-slate-800/60 pointer-events-none" />
            <div className="absolute inset-x-0 top-3/4 border-b border-slate-800/60 pointer-events-none" />

            {current.data.map((item, idx) => {
              const heightPct = item.value;
              const isHovered = hoverIndex === idx;

              return (
                <div
                  key={idx}
                  onMouseEnter={() => setHoverIndex(idx)}
                  onMouseLeave={() => setHoverIndex(null)}
                  className="flex-1 flex flex-col items-center h-full justify-end relative group cursor-pointer"
                >
                  {/* Floating tooltip */}
                  <AnimatePresence>
                    {isHovered && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 5 }}
                        className="absolute -top-12 z-20 px-2.5 py-1.5 rounded-lg bg-slate-900 text-white text-[11px] font-mono border border-cyan-500/40 shadow-xl whitespace-nowrap"
                      >
                        {item.sub}
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Animated Column Bar */}
                  <motion.div
                    key={`${activeScenario}-${idx}`}
                    initial={{ height: 0 }}
                    animate={{ height: `${heightPct}%` }}
                    transition={{ duration: 0.6, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                    className={`w-full max-w-[48px] rounded-t-xl bg-gradient-to-t ${current.color} shadow-lg transition-all duration-300 relative ${
                      isHovered ? 'brightness-125 scale-x-105' : 'opacity-85'
                    }`}
                  >
                    {/* Top glow dot */}
                    <div className="absolute top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-white/80 shadow-md" />
                  </motion.div>

                  {/* X-axis label */}
                  <span className="text-xs font-mono text-slate-400 mt-3 font-semibold">
                    {item.label}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Footer Insight */}
          <div className="mt-4 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              Hover columns for exact statistical values
            </span>
            <span className="font-mono text-slate-500 text-[11px]">Dynamic Scaled Vectors</span>
          </div>
        </div>

      </div>
    </div>
  );
};
