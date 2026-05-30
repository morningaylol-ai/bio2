"use client";

import { motion } from "framer-motion";

const steps = ["IDEA", "ARCHITECTURE", "DEVELOPMENT", "AUTOMATION", "DEPLOYMENT", "SCALING"];

export function Workflow() {
  return (
    <section className="relative mx-auto max-w-7xl px-5 pb-24 sm:px-8 lg:px-12">
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
        className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
      >
        <div className="mb-6 text-xs uppercase tracking-[0.4em] text-royal-400">Workflow</div>
        <div className="grid gap-4 md:grid-cols-6">
          {steps.map((item, index) => (
            <div key={item} className="relative flex items-center justify-center">
              <motion.div
                whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(212,175,55,0.25)" }}
                className="w-full rounded-2xl border border-white/10 bg-black/35 px-4 py-8 text-center font-bold tracking-[0.2em] text-white/90"
              >
                <div className="text-sm sm:text-base">{item}</div>
              </motion.div>
              {index < steps.length - 1 && (
                <div className="absolute right-[-10px] top-1/2 hidden h-px w-5 bg-royal-400/60 md:block" />
              )}
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
