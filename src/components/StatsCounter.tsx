import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Award, Code2, Database, Sparkles, TrendingUp } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface StatItem {
  icon: React.ReactNode;
  value: number;
  suffix: string;
  decimals?: number;
  label: string;
  sub: string;
}

export const StatsCounter: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });
  const { theme } = useTheme();

  const stats: StatItem[] = [
    {
      icon: <Award className="w-5 h-5 text-blue-600 dark:text-cyan-400" />,
      value: 8.2,
      decimals: 1,
      suffix: "",
      label: "Academic CGPA",
      sub: "B.Tech Computer Engineering"
    },
    {
      icon: <Code2 className="w-5 h-5 text-indigo-600 dark:text-blue-400" />,
      value: 4,
      suffix: " Projects",
      label: "Engineered Showcases",
      sub: "ML, AI, Flutter & Full-Stack"
    },
    {
      icon: <Database className="w-5 h-5 text-violet-600 dark:text-indigo-400" />,
      value: 15,
      suffix: "+",
      label: "Modern Technologies",
      sub: "Python, SQL, React, Flutter..."
    },
    {
      icon: <TrendingUp className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
      value: 94,
      suffix: "%",
      label: "Predictive Precision",
      sub: "Regression & Classifier Tuning"
    }
  ];

  return (
    <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 sm:-mt-10 mb-12">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
        {stats.map((stat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 35, scale: 0.9 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{
              duration: 0.6,
              delay: idx * 0.1,
              type: 'spring',
              damping: 20,
              stiffness: 200,
            }}
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
            className="relative overflow-hidden rounded-2xl bg-white/90 dark:bg-[#0c1322]/90 backdrop-blur-xl border border-slate-200/90 dark:border-slate-800 p-4 sm:p-6 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.06)] dark:shadow-2xl group transition-all"
          >
            {/* Top accent glow line */}
            <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-blue-500 dark:via-cyan-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="flex items-center justify-between mb-3">
              <div className="p-2.5 rounded-xl bg-blue-50 dark:bg-slate-900 border border-blue-100 dark:border-slate-800 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                {stat.icon}
              </div>
              <Sparkles className="w-3.5 h-3.5 text-slate-300 dark:text-slate-700 group-hover:text-cyan-400 transition" />
            </div>

            <div className="flex items-baseline gap-1">
              <Counter target={stat.value} decimals={stat.decimals || 0} start={isInView} />
              <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 dark:from-cyan-400 dark:to-blue-400 bg-clip-text text-transparent">
                {stat.suffix}
              </span>
            </div>

            <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white mt-1">
              {stat.label}
            </h4>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 truncate">
              {stat.sub}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

// Animated Number Counter Hook & Component
const Counter: React.FC<{ target: number; decimals: number; start: boolean }> = ({ target, decimals, start }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startVal = 0;
    const duration = 1800; // ms
    const startTime = performance.now();

    const animate = (time: number) => {
      const elapsed = time - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Easing: easeOutExpo
      const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const current = startVal + (target - startVal) * ease;

      setCount(current);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [start, target]);

  return (
    <span className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white font-mono">
      {decimals > 0 ? count.toFixed(decimals) : Math.floor(count)}
    </span>
  );
};
