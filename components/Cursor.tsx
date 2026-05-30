"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function Cursor() {
  const [mounted, setMounted] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setMounted(true);
    const onMove = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <motion.div
        className="pointer-events-none fixed z-[90] hidden h-4 w-4 rounded-full border border-royal-400/70 bg-royal-400/10 shadow-[0_0_30px_rgba(212,175,55,0.65)] md:block"
        animate={{ x: pos.x - 8, y: pos.y - 8 }}
        transition={{ type: "spring", stiffness: 180, damping: 24, mass: 0.2 }}
      />
      <motion.div
        className="pointer-events-none fixed z-[89] hidden h-12 w-12 rounded-full border border-royal-400/20 bg-royal-400/5 blur-[1px] md:block"
        animate={{ x: pos.x - 24, y: pos.y - 24 }}
        transition={{ type: "spring", stiffness: 90, damping: 18, mass: 0.25 }}
      />
    </>
  );
}
