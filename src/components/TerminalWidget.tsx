import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Play, CheckCircle2, RotateCcw, Copy, Check } from 'lucide-react';

export const TerminalWidget: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'python' | 'sql' | 'ml'>('python');
  const [isRunning, setIsRunning] = useState(false);
  const [logs, setLogs] = useState<string[]>([]);
  const [copied, setCopied] = useState(false);

  const snippets = {
    python: `# Prins Patel — Data Analysis Pipeline
import pandas as pd
import numpy as np

# Load & clean enterprise records
df = pd.read_sql("SELECT * FROM telemetry_data", conn)
df_clean = df[~df['val'].isin(detect_iqr_outliers(df))]

print(f"✓ Cleaned {len(df_clean):,} records without anomalies")`,
    sql: `-- High-Performance Window Aggregation
WITH MonthlyMetrics AS (
  SELECT 
    customer_id,
    DATE_TRUNC('month', transaction_date) AS month,
    SUM(amount) OVER (PARTITION BY customer_id ORDER BY transaction_date) AS running_ltv
  FROM sales_orders
)
SELECT * FROM MonthlyMetrics WHERE running_ltv > 50000;`,
    ml: `# Predictive Machine Learning Engine
from sklearn.ensemble import GradientBoostingRegressor

model = GradientBoostingRegressor(n_estimators=300, learning_rate=0.05)
model.fit(X_train, y_train)

# Validation Metrics
score = model.score(X_test, y_test)
print(f"✓ Final Model R² Score: 0.8318 (+24.4% vs Baseline)")`
  };

  const handleRun = () => {
    setIsRunning(true);
    setLogs([]);

    const steps = [
      "Initialising runtime environment...",
      "Connecting to data storage...",
      activeTab === 'python'
        ? "Filtering 1,071 extreme outliers via Inter-Quartile Range..."
        : activeTab === 'sql'
        ? "Executing optimized window aggregation query in 42ms..."
        : "Training GradientBoosted regressor with cross-validation...",
      "Process finished with exit code 0. [READY]"
    ];

    steps.forEach((step, i) => {
      setTimeout(() => {
        setLogs((prev) => [...prev, step]);
        if (i === steps.length - 1) setIsRunning(false);
      }, (i + 1) * 350);
    });
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(snippets[activeTab]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full max-w-xl mx-auto rounded-2xl bg-[#090e1a]/95 border border-slate-800 shadow-2xl backdrop-blur-xl overflow-hidden font-mono text-xs">
      {/* Terminal Title Bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-[#0d1424] border-b border-slate-800/90">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-rose-500/80" />
          <div className="w-3 h-3 rounded-full bg-amber-500/80" />
          <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
          <span className="text-[11px] text-slate-400 font-sans ml-2 flex items-center gap-1.5">
            <Terminal className="w-3.5 h-3.5 text-cyan-400" />
            prins-analyst-terminal
          </span>
        </div>

        {/* Tab Buttons */}
        <div className="flex items-center gap-1">
          {(['python', 'sql', 'ml'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => {
                setActiveTab(tab);
                setLogs([]);
              }}
              className={`px-2.5 py-1 rounded-md text-[10px] uppercase font-semibold transition ${
                activeTab === tab
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
              }`}
            >
              {tab === 'python' ? 'pipeline.py' : tab === 'sql' ? 'query.sql' : 'model.py'}
            </button>
          ))}
        </div>
      </div>

      {/* Code Editor Window */}
      <div className="p-4 sm:p-5 relative bg-[#060a14] min-h-[160px] text-slate-300 overflow-x-auto leading-relaxed">
        <button
          onClick={handleCopy}
          className="absolute top-3 right-3 p-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-white transition"
          title="Copy snippet"
        >
          {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
        </button>

        <pre className="text-[11px] leading-5 font-mono">
          <code>{snippets[activeTab]}</code>
        </pre>
      </div>

      {/* Terminal Action / Execution Output Footer */}
      <div className="p-3 bg-[#0a0f1d] border-t border-slate-800/90 flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-[10px] text-slate-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>Python 3.11 • Pandas • Scikit-learn Ready</span>
          </div>

          <button
            onClick={handleRun}
            disabled={isRunning}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-[11px] font-semibold shadow-md hover:brightness-110 active:scale-95 disabled:opacity-50 transition"
          >
            {isRunning ? (
              <>
                <RotateCcw className="w-3 h-3 animate-spin" />
                <span>Executing...</span>
              </>
            ) : (
              <>
                <Play className="w-3 h-3 fill-current" />
                <span>Run Pipeline</span>
              </>
            )}
          </button>
        </div>

        {/* Live Output stream */}
        {logs.length > 0 && (
          <div className="p-2.5 rounded-lg bg-black/60 border border-slate-800 text-[11px] space-y-1 text-slate-300 animate-in fade-in">
            {logs.map((log, i) => (
              <div key={i} className="flex items-center gap-2">
                <span className="text-cyan-400">➜</span>
                <span className={i === logs.length - 1 ? 'text-emerald-400 font-semibold' : ''}>
                  {log}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
