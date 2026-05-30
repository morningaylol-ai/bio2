"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";

const Scene = dynamic(() => import("./Scene").then((m) => m.Scene), {
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.14),transparent_55%)]" />,
});

const stats = [
  { value: "100+", label: "Projects" },
  { value: "50+", label: "Clients" },
  { value: "24/7", label: "Support" },
  { value: "99.9%", label: "Uptime" },
];

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden px-5 pb-24 pt-6 sm:px-8 lg:px-12">
      <div className="absolute inset-0">
        <Scene />
      </div>

      <header className="relative z-10 mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-white/5 px-4 py-3 shadow-hard backdrop-blur-xl md:px-6">
        <div className="flex items-center gap-3">
          <span className="h-3 w-3 rounded-full bg-royal-400 shadow-[0_0_16px_rgba(212,175,55,0.9)]" />
          <span className="font-semibold tracking-[0.35em] text-[#eedca6]">BEL_MONARH</span>
        </div>
        <nav className="hidden gap-6 text-sm text-white/65 md:flex">
          <a href="#services" className="transition hover:text-royal-400">Services</a>
          <a href="#terminal" className="transition hover:text-royal-400">Terminal</a>
          <a href="#dashboard" className="transition hover:text-royal-400">Dashboard</a>
        </nav>
        <a href="https://t.me/bel_monarh" className="rounded-full border border-royal-400/30 bg-royal-400/10 px-4 py-2 text-sm font-semibold text-[#fff4ca] transition hover:bg-royal-400/20">
          TELEGRAM
        </a>
      </header>

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-10 pt-14 lg:grid-cols-[1.15fr_0.85fr] lg:pt-20">
        <motion.div
          initial={{ opacity: 0, y: 38 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-royal-400/20 bg-royal-400/10 px-4 py-2 text-xs uppercase tracking-[0.45em] text-[#f3dfaa] backdrop-blur-md">
            Digital Headquarters
          </div>

          <motion.h1
            className="max-w-4xl text-6xl font-black tracking-[0.06em] text-white drop-shadow-[0_0_30px_rgba(212,175,55,0.2)] sm:text-7xl lg:text-8xl"
            initial={{ opacity: 0, x: -28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            BEL_MONARH
          </motion.h1>

          <motion.div
            className="mt-5 text-lg font-medium uppercase tracking-[0.45em] text-royal-400 sm:text-xl"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.18 }}
          >
            Developer. Architect. Automation Engineer.
          </motion.div>

          <motion.p
            className="mt-8 max-w-2xl text-lg leading-8 text-white/75 sm:text-xl"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
          >
            I build systems. I automate businesses. I create digital products.
            This is not a portfolio — it is a private operating system for a technology empire.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.32 }}
          >
            <a href="https://t.me/bel_monarh" className="rounded-2xl border border-royal-400/40 bg-royal-400 px-7 py-4 text-sm font-black uppercase tracking-[0.25em] text-black shadow-glow transition hover:scale-[1.02]">
              TELEGRAM
            </a>
            <a href="#projects" className="rounded-2xl border border-white/15 bg-white/5 px-7 py-4 text-sm font-black uppercase tracking-[0.25em] text-white transition hover:scale-[1.02] hover:border-royal-400/50 hover:bg-royal-400/10">
              PROJECTS
            </a>
          </motion.div>

          <div className="mt-10 grid max-w-2xl grid-cols-2 gap-4 sm:grid-cols-4">
            {stats.map((item, index) => (
              <motion.div
                key={item.label}
                whileHover={{ y: -6, scale: 1.02 }}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.12 * index + 0.35 }}
                className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl shadow-hard"
              >
                <div className="text-3xl font-black text-[#f4e0a2]">{item.value}</div>
                <div className="mt-2 text-xs uppercase tracking-[0.3em] text-white/50">{item.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="relative z-10"
          initial={{ opacity: 0, scale: 0.92, rotate: -3 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-5 shadow-[0_0_120px_rgba(212,175,55,0.12)] backdrop-blur-xl">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,236,160,0.14),transparent_30%),linear-gradient(135deg,rgba(255,255,255,0.08),transparent_35%)]" />
            <div className="relative rounded-[1.6rem] border border-royal-400/15 bg-[#07070a]/80 p-5">
              <div className="flex items-center justify-between text-xs uppercase tracking-[0.35em] text-white/45">
                <span>Live Command Chamber</span>
                <span>Online</span>
              </div>
              <div className="mt-4 h-px w-full bg-white/10" />

              <div className="mt-5 grid gap-4 md:grid-cols-2">
                <div className="rounded-3xl border border-white/10 bg-black/40 p-4">
                  <div className="mb-3 text-sm font-semibold text-[#e8d7aa]">System Activity</div>
                  <div className="grid h-52 place-items-center rounded-2xl border border-white/5 bg-[linear-gradient(180deg,rgba(212,175,55,0.08),transparent)] text-center text-sm text-white/60">
                    Loading analytics...
                  </div>
                </div>
                <div className="rounded-3xl border border-white/10 bg-black/40 p-4">
                  <div className="mb-3 text-sm font-semibold text-[#e8d7aa]">Empire Allocation</div>
                  <div className="grid h-52 place-items-center rounded-2xl border border-white/5 bg-[linear-gradient(180deg,rgba(212,175,55,0.08),transparent)] text-center text-sm text-white/60">
                    Core systems online
                  </div>
                </div>
              </div>

              <div className="mt-5 rounded-3xl border border-royal-400/20 bg-[linear-gradient(135deg,rgba(212,175,55,0.12),rgba(255,255,255,0.03))] p-4 font-mono text-sm text-[#f1ddb1]">
                <div className="mb-2 text-white/40">Live Output</div>
                <div className="space-y-1">
                  <div>&gt; uptime_status() :: stable</div>
                  <div>&gt; node_cluster() :: synchronized</div>
                  <div>&gt; revenue_stream() :: active</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
