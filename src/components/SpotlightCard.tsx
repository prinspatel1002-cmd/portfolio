import React, { useRef, useState } from 'react';
import { useTheme } from '../context/ThemeContext';

interface SpotlightCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  spotlightColor?: string;
}

export const SpotlightCard: React.FC<SpotlightCardProps> = ({
  children,
  className = "",
  spotlightColor,
  ...props
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);
  const { theme } = useTheme();

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseEnter = () => setOpacity(1);
  const handleMouseLeave = () => setOpacity(0);

  const isDark = theme === 'dark';

  // Dynamic light / dark iridescent spotlight
  const defaultSpotlight = isDark 
    ? 'rgba(56, 189, 248, 0.12)' 
    : 'rgba(37, 99, 235, 0.12)';
  const activeSpotlight = spotlightColor || defaultSpotlight;

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative overflow-hidden rounded-2xl transition-all duration-300 ${
        isDark
          ? 'bg-[#0c1322] border border-slate-800/80 shadow-none'
          : 'bg-white/90 backdrop-blur-xl border border-slate-200/90 shadow-[0_10px_30px_-10px_rgba(15,23,42,0.06)] hover:shadow-[0_20px_40px_-12px_rgba(37,99,235,0.12)] hover:border-blue-300'
      } ${className}`}
      {...props}
    >
      {/* Dynamic Cursor Spotlight Overlay */}
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300"
        style={{
          opacity,
          background: isDark
            ? `radial-gradient(500px circle at ${position.x}px ${position.y}px, ${activeSpotlight}, transparent 80%)`
            : `radial-gradient(450px circle at ${position.x}px ${position.y}px, rgba(37, 99, 235, 0.12) 0%, rgba(124, 58, 237, 0.08) 50%, transparent 80%)`,
        }}
      />

      {/* Subtle Border Spotlight */}
      <div
        className="pointer-events-none absolute -inset-px rounded-2xl transition-opacity duration-300"
        style={{
          opacity,
          background: `radial-gradient(350px circle at ${position.x}px ${position.y}px, ${
            isDark ? 'rgba(56, 189, 248, 0.4)' : 'rgba(37, 99, 235, 0.45)'
          }, transparent 70%)`,
          mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude',
          padding: '1px',
        }}
      />

      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
};
