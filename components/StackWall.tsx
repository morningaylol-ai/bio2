"use client";

import { motion } from "framer-motion";

const stack = ["Python", "JavaScript", "TypeScript", "Node.js", "React", "Next.js", "PostgreSQL", "Docker", "Redis", "Linux"];

export function StackWall() {
  return (
    <section id="stack" className="relative mx-auto max-w-7xl px-5 pb-24 sm:px-8 lg:px-12">
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
        className="rounded-[2rem] border border-white/10 bg-[#09090c]/85 p-6 backdrop-blur-xl"
      >
        <div className="mb-5 flex items-end justify-between gap-4">
          <div>
            <div className="mb-2 text-xs uppercase tracking-[0.4em] text-royal-400">Tech Stack</div>
            <h2 className="text-3xl font-black sm:text-4xl">The instruments of the empire</h2>
          </div>
          <div className="hidden text-sm text-white/50 md:block">Built for throughput and status.</div>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {stack.map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.04 }}
              whileHover={{ y: -6, scale: 1.03 }}
              className="rounded-2xl border border-white/10 bg-white/5 px-4 py-6 text-center font-semibold text-white/85 transition"
            >
              {item}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
