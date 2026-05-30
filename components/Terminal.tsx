"use client";

import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

const commands = [
  "> create_bot()",
  "> deploy_project()",
  "> automate_business()",
  "> scale_infrastructure()",
];

export function Terminal() {
  const [index, setIndex] = useState(0);
  const [typed, setTyped] = useState("");
  const current = useMemo(() => commands[index % commands.length], [index]);

  useEffect(() => {
    let i = 0;
    setTyped("");
    const timer = window.setInterval(() => {
      i += 1;
      setTyped(current.slice(0, i));
      if (i >= current.length) window.clearInterval(timer);
    }, 24);

    const swap = window.setTimeout(() => setIndex((v) => v + 1), 2600);

    return () => {
      window.clearInterval(timer);
      window.clearTimeout(swap);
    };
  }, [current]);

  return (
    <section id="terminal" className="relative mx-auto max-w-7xl px-5 pb-24 sm:px-8 lg:px-12">
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
        className="grid gap-5 lg:grid-cols-[1.05fr_0.95fr]"
      >
        <div className="rounded-[2rem] border border-white/10 bg-[#0a0a0e]/85 p-6 shadow-hard backdrop-blur-xl">
          <div className="mb-4 flex items-center justify-between text-xs uppercase tracking-[0.4em] text-white/45">
            <span>Interactive Terminal</span>
            <span>Live</span>
          </div>
          <div className="space-y-4 rounded-[1.6rem] border border-white/10 bg-black/55 p-5 font-mono text-sm leading-7 text-[#f1ddb1]">
            <div className="text-white/50">simulator@bel_monarh:~$</div>
            <motion.div key={index} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>
              {typed || "> booting..."}
            </motion.div>
            <div className="h-5 w-3 animate-pulse border-r-2 border-royal-400" />
          </div>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
          <div className="mb-4 flex items-center justify-between text-xs uppercase tracking-[0.4em] text-white/45">
            <span>Python Command Center</span>
            <span>Analytics</span>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-[1.5rem] border border-white/10 bg-black/40 p-4 font-mono text-sm text-[#f1ddb1]">
              <pre className="whitespace-pre-wrap leading-7">{`def build_empire():
    automate()
    scale()
    dominate()
    return "Success"`}</pre>
            </div>
            <div className="rounded-[1.5rem] border border-white/10 bg-black/40 p-4">
              <div className="grid h-full min-h-[12rem] place-items-center rounded-[1rem] border border-white/5 bg-[linear-gradient(180deg,rgba(212,175,55,0.08),transparent)] text-sm text-white/60">
                Live graphs and signals
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
