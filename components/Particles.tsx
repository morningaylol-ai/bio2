"use client";

import { useMemo } from "react";

type Particle = {
  left: string;
  top: string;
  size: string;
  delay: string;
  duration: string;
};

export function Particles() {
  const particles = useMemo<Particle[]>(() => {
    return Array.from({ length: 24 }, (_, i) => ({
      left: `${(i * 13) % 100}%`,
      top: `${(i * 19) % 100}%`,
      size: `${2 + (i % 4)}px`,
      delay: `${(i % 7) * 0.6}s`,
      duration: `${6 + (i % 5)}s`,
    }));
  }, []);

  const streams = useMemo(() => Array.from({ length: 9 }, (_, i) => i), []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[1] overflow-hidden">
      <div className="absolute inset-0 royal-grid opacity-[0.12]" />
      <div className="absolute inset-0 data-streams opacity-[0.14]" />
      <div className="noise absolute inset-0" />
      {particles.map((p, index) => (
        <span
          key={index}
          className="absolute rounded-full bg-royal-100/85 shadow-[0_0_20px_rgba(255,241,184,0.7)] animate-float"
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            animationDelay: p.delay,
            animationDuration: p.duration,
          }}
        />
      ))}
      {streams.map((i) => (
        <span
          key={i}
          className="absolute top-0 h-full w-px bg-gradient-to-b from-transparent via-royal-400/15 to-transparent animate-drift"
          style={{ left: `${10 + i * 11}%`, animationDelay: `${i * 0.35}s` }}
        />
      ))}
    </div>
  );
}
