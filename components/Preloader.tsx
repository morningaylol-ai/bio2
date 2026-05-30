"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import gsap from "gsap";

const lines = [
  "> Loading neural systems...",
  "> Connecting global nodes...",
  "> Initializing AI modules...",
  "> Deploying infrastructure...",
  "> Access granted.",
];

export function Preloader() {
  const [visible, setVisible] = useState(true);
  const [step, setStep] = useState(0);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    tl.fromTo(".boot-crown", { opacity: 0, scale: 0.7 }, { opacity: 1, scale: 1, duration: 0.9 })
      .fromTo(".boot-title", { opacity: 0, y: 18 }, { opacity: 1, y: 0, duration: 0.5 }, "-=0.2")
      .fromTo(".boot-panel", { opacity: 0 }, { opacity: 1, duration: 0.4 }, "-=0.1")
      .fromTo(".boot-bar", { width: "0%" }, { width: "100%", duration: 2.6 }, "-=0.1");

    let current = 0;
    const interval = window.setInterval(() => {
      current += 1;
      setStep(current);
      if (current >= lines.length) {
        window.clearInterval(interval);
        window.setTimeout(() => setVisible(false), 700);
      }
    }, 420);

    return () => {
      window.clearInterval(interval);
      tl.kill();
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.16),transparent_35%)]" />
          <div className="relative z-10 mx-auto flex w-full max-w-2xl flex-col items-center px-5 text-center">
            <motion.div
              className="boot-crown mb-7 text-7xl opacity-0 drop-shadow-[0_0_34px_rgba(212,175,55,0.75)]"
              animate={{ rotate: [0, -4, 4, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              👑
            </motion.div>
            <div className="boot-title translate-y-2 text-2xl font-semibold tracking-[0.45em] text-royal-400 opacity-0">
              BEL_MONARH OS v1.0
            </div>
            <div className="mt-4 h-px w-36 bg-royal-400/40" />
            <div className="boot-panel mt-8 w-full rounded-[1.75rem] border border-white/10 bg-white/5 p-5 text-left font-mono text-sm leading-7 text-[#f1ddb1] opacity-0 backdrop-blur-xl">
              {lines.map((line, index) => (
                <motion.div
                  key={line}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: step >= index ? 1 : 0.15, x: 0 }}
                  transition={{ duration: 0.35 }}
                >
                  {line}
                </motion.div>
              ))}
            </div>
            <div className="mt-8 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
              <div className="boot-bar h-full w-0 rounded-full bg-gradient-to-r from-royal-700 via-royal-400 to-royal-100 shadow-glow" />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
