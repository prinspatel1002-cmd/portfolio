import React from 'react';
import { Database, Filter, Search, BarChart3, Presentation, ArrowRight, Sparkles } from 'lucide-react';

export const DataWorkflow: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Business Problem & KPI Framing',
      icon: <Presentation className="w-5 h-5 text-cyan-400" />,
      desc: 'Translating executive business questions into measurable analytical KPIs (CLV, Churn Rate, Gross Margins, and Customer Acquisition Efficiency).'
    },
    {
      num: '02',
      title: 'SQL Extraction & Data Wrangling',
      icon: <Database className="w-5 h-5 text-blue-400" />,
      desc: 'Engineering complex SQL queries with CTEs, window functions, and multi-table joins to extract, clean, and structure raw transaction data.'
    },
    {
      num: '03',
      title: 'Exploratory Data Analysis (EDA)',
      icon: <Search className="w-5 h-5 text-purple-400" />,
      desc: 'Using Python (Pandas/NumPy) to isolate anomalies via IQR filtering, evaluate distributions with log1p transforms, and uncover correlation clusters.'
    },
    {
      num: '04',
      title: 'Predictive & Statistical Modeling',
      icon: <Filter className="w-5 h-5 text-emerald-400" />,
      desc: 'Deploying machine learning models (XGBoost, Random Forest) to forecast trends, score customer risks, and validate statistical significance.'
    },
    {
      num: '05',
      title: 'Interactive BI Dashboards',
      icon: <BarChart3 className="w-5 h-5 text-rose-400" />,
      desc: 'Designing executive-ready Power BI and Tableau dashboards with dynamic DAX calculations, drilldowns, and automated refresh schedules.'
    }
  ];

  return (
    <section className="py-20 relative z-10 bg-[#080d1a]/70 border-y border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-semibold text-cyan-400 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            End-to-End Analytics Lifecycle
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            How I Turn Raw Data Into <span className="gradient-text">Actionable Insights</span>
          </h2>
          <p className="text-slate-400 mt-3 text-sm sm:text-base">
            A structured, repeatable analytical framework ensuring data integrity, statistical rigor, and clear executive storytelling.
          </p>
        </div>

        {/* 5-Step Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-[#0c1426] border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-500/10"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-700/80 group-hover:scale-110 transition">
                    {step.icon}
                  </div>
                  <span className="font-mono text-xs font-bold text-slate-500 group-hover:text-cyan-400 transition">
                    {step.num}
                  </span>
                </div>

                <h3 className="text-sm font-bold text-white group-hover:text-cyan-300 transition mb-2">
                  {step.title}
                </h3>

                <p className="text-xs text-slate-400 leading-relaxed">
                  {step.desc}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-800/80 flex items-center text-[11px] text-slate-500 group-hover:text-cyan-400 transition">
                <span>Phase {idx + 1}</span>
                <ArrowRight className="w-3.5 h-3.5 ml-auto group-hover:translate-x-1 transition" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
