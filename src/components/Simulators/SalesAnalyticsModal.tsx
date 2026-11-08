import React, { useState } from 'react';
import { X, BarChart3, TrendingUp, DollarSign, Users, PieChart, ShoppingBag } from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const SalesAnalyticsModal: React.FC<Props> = ({ isOpen, onClose }) => {
  const [selectedQuarter, setSelectedQuarter] = useState<'Q1' | 'Q2' | 'Q3' | 'Q4'>('Q3');

  if (!isOpen) return null;

  const dataByQuarter = {
    Q1: { revenue: '₹42.8 Lakhs', growth: '+14.2%', orders: '1,840', avgOrder: '₹2,326', topCategory: 'Electronics' },
    Q2: { revenue: '₹56.4 Lakhs', growth: '+31.7%', orders: '2,420', avgOrder: '₹2,330', topCategory: 'Smart Devices' },
    Q3: { revenue: '₹68.9 Lakhs', growth: '+22.1%', orders: '2,980', avgOrder: '₹2,312', topCategory: 'Audio & Wearables' },
    Q4: { revenue: '₹84.1 Lakhs', growth: '+22.0%', orders: '3,610', avgOrder: '₹2,329', topCategory: 'Enterprise Bundles' },
  };

  const current = dataByQuarter[selectedQuarter];

  const categoryShare = [
    { name: 'Smart Electronics', pct: 44, color: 'bg-cyan-500' },
    { name: 'Audio & Gear', pct: 28, color: 'bg-blue-500' },
    { name: 'Accessories', pct: 18, color: 'bg-purple-500' },
    { name: 'Services & Care', pct: 10, color: 'bg-emerald-500' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-[#090f1e] border border-blue-500/30 rounded-2xl shadow-2xl p-6 md:p-8 max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-white transition"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2.5 rounded-xl bg-blue-500/10 border border-blue-500/30 text-blue-400">
            <BarChart3 className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              Sales Data Analysis Dashboard
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30">
                Power BI & Python ETL
              </span>
            </h3>
            <p className="text-xs text-slate-400">
              Interactive executive dashboard evaluating revenue patterns, retention, and margins
            </p>
          </div>
        </div>

        {/* Quarter Filter Pills */}
        <div className="flex items-center gap-2 mb-6">
          <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider mr-2">Quarter:</span>
          {(['Q1', 'Q2', 'Q3', 'Q4'] as const).map((q) => (
            <button
              key={q}
              onClick={() => setSelectedQuarter(q)}
              className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition ${
                selectedQuarter === q
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                  : 'bg-slate-800/80 text-slate-400 hover:bg-slate-700'
              }`}
            >
              {q} Performance
            </button>
          ))}
        </div>

        {/* 4 KPI Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
            <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-1">
              <DollarSign className="w-3.5 h-3.5 text-cyan-400" /> Revenue
            </div>
            <div className="text-lg font-bold text-white font-mono">{current.revenue}</div>
            <div className="text-[11px] text-emerald-400 font-semibold mt-0.5">{current.growth} YoY</div>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
            <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-1">
              <ShoppingBag className="w-3.5 h-3.5 text-blue-400" /> Completed Orders
            </div>
            <div className="text-lg font-bold text-white font-mono">{current.orders}</div>
            <div className="text-[11px] text-slate-400 mt-0.5">Fulfilled & Verified</div>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
            <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-1">
              <TrendingUp className="w-3.5 h-3.5 text-purple-400" /> Avg Basket
            </div>
            <div className="text-lg font-bold text-white font-mono">{current.avgOrder}</div>
            <div className="text-[11px] text-purple-300 mt-0.5">Stable Cart Size</div>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
            <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-1">
              <Users className="w-3.5 h-3.5 text-emerald-400" /> Top Segment
            </div>
            <div className="text-xs font-bold text-emerald-300 truncate mt-1">{current.topCategory}</div>
            <div className="text-[11px] text-slate-400 mt-0.5">Highest Profit Margin</div>
          </div>
        </div>

        {/* Visual Category Breakdown */}
        <div className="p-5 rounded-xl bg-slate-900/70 border border-slate-800 mb-6">
          <div className="flex items-center justify-between text-xs font-semibold text-slate-300 mb-3">
            <span className="flex items-center gap-2">
              <PieChart className="w-4 h-4 text-blue-400" /> Product Category Revenue Contribution
            </span>
            <span className="text-slate-500">Total 100% Distribution</span>
          </div>

          <div className="w-full flex h-3.5 rounded-full overflow-hidden gap-1 mb-4">
            {categoryShare.map((cat) => (
              <div
                key={cat.name}
                className={`${cat.color} transition-all duration-500`}
                style={{ width: `${cat.pct}%` }}
                title={`${cat.name}: ${cat.pct}%`}
              />
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs">
            {categoryShare.map((cat) => (
              <div key={cat.name} className="flex items-center gap-2">
                <div className={`w-2.5 h-2.5 rounded-full ${cat.color}`} />
                <span className="text-slate-400 truncate">{cat.name}</span>
                <span className="font-bold text-white ml-auto">{cat.pct}%</span>
              </div>
            ))}
          </div>
        </div>

        {/* SQL & Python Pipeline Insight */}
        <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800 text-xs text-slate-400">
          <span className="text-slate-200 font-semibold block mb-1">ETL & Data Modeling Pipeline:</span>
          Cleaned and transformed heterogeneous transaction data using Python (Pandas/NumPy) and optimized SQL window functions. Modeled in Power BI with dynamic DAX measures for real-time executive decision intelligence.
        </div>
      </div>
    </div>
  );
};
