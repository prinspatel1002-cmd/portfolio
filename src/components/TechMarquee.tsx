import React from 'react';
import { Database, Code2, Layout, Smartphone, BarChart3, Wrench, Cpu, Terminal, GitBranch, Sparkles } from 'lucide-react';

export const TechMarquee: React.FC = () => {
  const items = [
    { name: "Python", icon: <Code2 className="w-4 h-4 text-cyan-400" /> },
    { name: "SQL & Relational DBMS", icon: <Database className="w-4 h-4 text-blue-400" /> },
    { name: "Power BI & DAX", icon: <BarChart3 className="w-4 h-4 text-amber-400" /> },
    { name: "Pandas & NumPy", icon: <Terminal className="w-4 h-4 text-emerald-400" /> },
    { name: "React.js", icon: <Layout className="w-4 h-4 text-cyan-400" /> },
    { name: "Flutter & Dart", icon: <Smartphone className="w-4 h-4 text-sky-400" /> },
    { name: "Scikit-Learn & ML", icon: <Cpu className="w-4 h-4 text-violet-400" /> },
    { name: "Advanced Excel", icon: <BarChart3 className="w-4 h-4 text-emerald-400" /> },
    { name: "Node.js & Express", icon: <Code2 className="w-4 h-4 text-green-400" /> },
    { name: "MongoDB", icon: <Database className="w-4 h-4 text-emerald-500" /> },
    { name: "Git & GitHub", icon: <GitBranch className="w-4 h-4 text-rose-400" /> },
    { name: "Jupyter Notebook", icon: <Sparkles className="w-4 h-4 text-orange-400" /> },
  ];

  // Duplicate items for continuous seamless loop
  const duplicatedItems = [...items, ...items];

  return (
    <div className="relative py-8 bg-[#060910] border-y border-slate-800/80 overflow-hidden">
      {/* Left and right fade gradients */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#080B12] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#080B12] to-transparent z-10 pointer-events-none" />

      <div className="flex animate-marquee items-center gap-4">
        {duplicatedItems.map((tech, idx) => (
          <div
            key={idx}
            className="flex items-center gap-2.5 px-4 py-2 rounded-xl bg-slate-900/60 border border-slate-800/80 text-xs font-mono font-medium text-slate-300 hover:text-white hover:border-cyan-500/40 hover:bg-slate-800 transition whitespace-nowrap shadow-sm group"
          >
            <span className="p-1 rounded-md bg-slate-800 group-hover:scale-110 transition">
              {tech.icon}
            </span>
            <span>{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
