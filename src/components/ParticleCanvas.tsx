import React, { useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';

export const ParticleCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };

    window.addEventListener('resize', handleResize);

    // Mouse coordinates
    let mouse = { x: -1000, y: -1000, radius: 150 };
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    // Burst shockwave on click
    const shockwaves: Array<{ x: number; y: number; radius: number; maxRadius: number; alpha: number }> = [];
    const handleClick = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      shockwaves.push({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        radius: 5,
        maxRadius: 180,
        alpha: 0.8,
      });

      // Also impart burst velocity to nearby particles
      for (let p of particles) {
        const dx = p.x - (e.clientX - rect.left);
        const dy = p.y - (e.clientY - rect.top);
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 180 && dist > 0) {
          p.vx += (dx / dist) * 4;
          p.vy += (dy / dist) * 4;
        }
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('click', handleClick);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    // Create particles
    const particleCount = Math.min(Math.floor((width * height) / 14000), 65);
    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      baseAlpha: number;
      pulsePhase: number;
    }

    const particles: Particle[] = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.6,
        size: Math.random() * 2 + 1,
        baseAlpha: Math.random() * 0.45 + 0.35,
        pulsePhase: Math.random() * Math.PI * 2,
      });
    }

    const isDark = theme === 'dark';

    // Animation Loop
    let packetTimer = 0;
    const render = () => {
      ctx.clearRect(0, 0, width, height);
      packetTimer += 0.03;

      // Draw Shockwaves
      for (let i = shockwaves.length - 1; i >= 0; i--) {
        const sw = shockwaves[i];
        sw.radius += 4;
        sw.alpha *= 0.94;

        ctx.strokeStyle = isDark
          ? `rgba(56, 189, 248, ${sw.alpha})`
          : `rgba(37, 99, 235, ${sw.alpha * 0.9})`;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(sw.x, sw.y, sw.radius, 0, Math.PI * 2);
        ctx.stroke();

        if (sw.radius >= sw.maxRadius || sw.alpha <= 0.02) {
          shockwaves.splice(i, 1);
        }
      }

      // Draw connection lines & data packets
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 125) {
            const alpha = (1 - dist / 125) * (isDark ? 0.22 : 0.16);
            ctx.strokeStyle = isDark
              ? `rgba(56, 189, 248, ${alpha})`
              : `rgba(37, 99, 235, ${alpha})`;
            ctx.lineWidth = 0.9;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();

            // Traveling glowing data packet
            if ((i + j) % 5 === 0) {
              const progress = (Math.sin(packetTimer + i) + 1) / 2;
              const px = particles[i].x + (particles[j].x - particles[i].x) * progress;
              const py = particles[i].y + (particles[j].y - particles[i].y) * progress;

              ctx.fillStyle = isDark ? 'rgba(56, 189, 248, 0.8)' : 'rgba(37, 99, 235, 0.7)';
              ctx.beginPath();
              ctx.arc(px, py, 1.4, 0, Math.PI * 2);
              ctx.fill();
            }
          }
        }
      }

      // Connect particles to mouse with electric filaments
      if (mouse.x > 0 && mouse.y > 0) {
        for (let p of particles) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < mouse.radius) {
            const alpha = (1 - dist / mouse.radius) * 0.45;
            ctx.strokeStyle = isDark
              ? `rgba(56, 189, 248, ${alpha})`
              : `rgba(37, 99, 235, ${alpha})`;
            ctx.lineWidth = 1.2;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();
          }
        }
      }

      // Draw and update particles
      for (let p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        p.pulsePhase += 0.04;

        // Friction back to baseline speed
        p.vx *= 0.985;
        p.vy *= 0.985;
        if (Math.abs(p.vx) < 0.2) p.vx = (Math.random() - 0.5) * 0.5;
        if (Math.abs(p.vy) < 0.2) p.vy = (Math.random() - 0.5) * 0.5;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        // Mouse repelling / gentle attraction
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < mouse.radius && dist > 0) {
          const force = (mouse.radius - dist) / mouse.radius;
          p.x -= (dx / dist) * force * 1.8;
          p.y -= (dy / dist) * force * 1.8;
        }

        const dynamicAlpha = p.baseAlpha + Math.sin(p.pulsePhase) * 0.15;
        ctx.fillStyle = isDark
          ? `rgba(56, 189, 248, ${dynamicAlpha})`
          : `rgba(37, 99, 235, ${dynamicAlpha * 0.8})`;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        // Node halo for larger particles
        if (p.size > 2) {
          ctx.strokeStyle = isDark
            ? `rgba(56, 189, 248, ${dynamicAlpha * 0.3})`
            : `rgba(37, 99, 235, ${dynamicAlpha * 0.25})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size * 2, 0, Math.PI * 2);
          ctx.stroke();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('click', handleClick);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none opacity-75 z-0"
    />
  );
};
