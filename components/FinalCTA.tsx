"use client";

import { motion } from "framer-motion";

export function FinalCTA() {
  return (
    <section id="projects" className="relative mx-auto max-w-7xl px-5 pb-28 sm:px-8 lg:px-12">
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
        className="relative overflow-hidden rounded-[2.5rem] border border-royal-400/20 bg-[linear-gradient(135deg,rgba(212,175,55,0.12),rgba(255,255,255,0.04))] p-8 text-center shadow-[0_0_120px_rgba(212,175,55,0.12)] sm:p-12"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,240,191,0.18),transparent_35%)]" />
        <div className="relative">
          <div className="text-xs uppercase tracking-[0.45em] text-[#fff1b8]">Final Protocol</div>
          <h2 className="mt-5 text-4xl font-black sm:text-6xl lg:text-7xl">
            YOUR IDEA <span className="text-royal-400">*</span> MY CODE <span className="text-royal-400">=</span> RESULT
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/75">
            A command-grade digital presence engineered for authority, clarity, and conversion.
          </p>
          <div className="mt-10 flex justify-center">
            <a href="https://t.me/bel_monarh" className="rounded-2xl border border-royal-400/40 bg-royal-400 px-8 py-4 text-sm font-black uppercase tracking-[0.3em] text-black shadow-glow transition hover:scale-[1.03]">
              TELEGRAM
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
