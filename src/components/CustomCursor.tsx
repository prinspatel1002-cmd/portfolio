import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

interface TrailParticle {
  id: number;
  x: number;
  y: number;
  size: number;
}

export const CustomCursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [trail, setTrail] = useState<TrailParticle[]>([]);
  const trailIdRef = useRef(0);
  const { theme } = useTheme();

  useEffect(() => {
    // Only run on devices with a mouse
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    if (isTouch) return;

    setIsVisible(true);

    let lastSparkleTime = 0;
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });

      // Spawn trail sparkles with throttling
      const now = performance.now();
      if (now - lastSparkleTime > 35) {
        lastSparkleTime = now;
        trailIdRef.current += 1;
        const newParticle: TrailParticle = {
          id: trailIdRef.current,
          x: e.clientX + (Math.random() - 0.5) * 8,
          y: e.clientY + (Math.random() - 0.5) * 8,
          size: Math.random() * 4 + 2,
        };

        setTrail((prev) => [...prev.slice(-14), newParticle]);
      }
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.getAttribute('role') === 'button'
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    // Periodically prune trail particles
    const interval = setInterval(() => {
      setTrail((prev) => (prev.length > 0 ? prev.slice(1) : prev));
    }, 45);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      clearInterval(interval);
    };
  }, []);

  if (!isVisible) return null;

  const isDark = theme === 'dark';

  return (
    <>
      {/* Floating Sparkle Trail Particles */}
      {trail.map((p) => (
        <motion.div
          key={p.id}
          initial={{ opacity: 0.8, scale: 1 }}
          animate={{ opacity: 0, scale: 0.2, y: p.y - 12 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          className="fixed pointer-events-none z-50 rounded-full"
          style={{
            left: p.x - p.size / 2,
            top: p.y - p.size / 2,
            width: p.size,
            height: p.size,
            backgroundColor: isDark ? '#38bdf8' : '#2563eb',
            boxShadow: isDark
              ? '0 0 8px rgba(56, 189, 248, 0.8)'
              : '0 0 8px rgba(37, 99, 235, 0.6)',
          }}
        />
      ))}

      {/* Main Core Dot Cursor */}
      <motion.div
        className={`fixed top-0 left-0 w-2.5 h-2.5 rounded-full pointer-events-none z-50 ${
          isDark ? 'bg-cyan-400 shadow-[0_0_12px_#38bdf8]' : 'bg-blue-600 shadow-[0_0_10px_#2563eb]'
        }`}
        animate={{
          x: mousePosition.x - 5,
          y: mousePosition.y - 5,
          scale: isClicking ? 0.6 : isHovered ? 0 : 1,
        }}
        transition={{ type: 'spring', damping: 32, stiffness: 450, mass: 0.1 }}
      />

      {/* Outer Magnetic Ring Follower */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-50"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          scale: isClicking ? 0.8 : isHovered ? 1.75 : 1,
          borderColor: isDark
            ? isHovered ? 'rgba(56, 189, 248, 0.9)' : 'rgba(56, 189, 248, 0.45)'
            : isHovered ? 'rgba(37, 99, 235, 0.9)' : 'rgba(59, 130, 246, 0.5)',
          borderWidth: isHovered ? '2px' : '1.5px',
          borderStyle: 'solid',
          backgroundColor: isDark
            ? isHovered ? 'rgba(56, 189, 248, 0.12)' : 'transparent'
            : isHovered ? 'rgba(37, 99, 235, 0.1)' : 'transparent',
          boxShadow: isHovered
            ? isDark
              ? '0 0 20px rgba(56, 189, 248, 0.3)'
              : '0 0 16px rgba(37, 99, 235, 0.25)'
            : 'none',
        }}
        transition={{ type: 'spring', damping: 24, stiffness: 280, mass: 0.18 }}
      />
    </>
  );
};
