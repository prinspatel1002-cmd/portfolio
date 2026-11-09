import React from 'react';
import { Database, Code2, Layout, Smartphone, BarChart3, Wrench, Cpu, Terminal, GitBranch, Sparkles } from 'lucide-react';

export const TechMarquee: React.FC = () => {
  const items = [
    { name: "Python", icon: <Code2 className="w-4 h-4 text-cyan-500" /> },
    { name: "SQL & Relational DBMS", icon: <Database className="w-4 h-4 text-blue-500" /> },
    { name: "Power BI & DAX", icon: <BarChart3 className="w-4 h-4 text-amber-500" /> },
    { name: "Pandas & NumPy", icon: <Terminal className="w-4 h-4 text-emerald-500" /> },
    { name: "React.js", icon: <Layout className="w-4 h-4 text-cyan-500" /> },
    { name: "Flutter & Dart", icon: <Smartphone className="w-4 h-4 text-sky-500" /> },
    { name: "Scikit-Learn & ML", icon: <Cpu className="w-4 h-4 text-violet-500" /> },
    { name: "Advanced Excel", icon: <BarChart3 className="w-4 h-4 text-emerald-500" /> },
    { name: "Node.js & Express", icon: <Code2 className="w-4 h-4 text-green-500" /> },
    { name: "MongoDB", icon: <Database className="w-4 h-4 text-emerald-600" /> },
    { name: "Git & GitHub", icon: <GitBranch className="w-4 h-4 text-rose-500" /> },
    { name: "Jupyter Notebook", icon: <Sparkles className="w-4 h-4 text-orange-500" /> },
  ];

  const duplicatedItems = [...items, ...items];

  return (
    <div className="relative py-8 bg-slate-50 dark:bg-[#060910] border-y border-slate-200 dark:border-slate-800/80 overflow-hidden transition-colors duration-300">
      {/* Left and right fade gradients */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-slate-50 dark:from-[#080B12] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-slate-50 dark:from-[#080B12] to-transparent z-10 pointer-events-none" />

      <div className="flex animate-marquee items-center gap-4">
        {duplicatedItems.map((tech, idx) => (
          <div
            key={idx}
            className="flex items-center gap-2.5 px-4 py-2 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800/80 text-xs font-mono font-medium text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-white hover:border-blue-400 dark:hover:border-cyan-500/40 shadow-sm transition whitespace-nowrap group"
          >
            <span className="p-1 rounded-md bg-slate-100 dark:bg-slate-800 group-hover:scale-110 transition">
              {tech.icon}
            </span>
            <span>{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
