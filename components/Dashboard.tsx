"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import gsap from "gsap";

const activity = [
  { name: "Mon", value: 42 },
  { name: "Tue", value: 58 },
  { name: "Wed", value: 47 },
  { name: "Thu", value: 78 },
  { name: "Fri", value: 86 },
  { name: "Sat", value: 71 },
  { name: "Sun", value: 91 },
];

const allocation = [
  { name: "Bots", value: 38 },
  { name: "Apps", value: 24 },
  { name: "APIs", value: 18 },
  { name: "Infra", value: 20 },
];

const pieColors = ["#D4AF37", "#8C6B1F", "#FFF1B8", "#5A4A18"];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const visible = useInView(ref, { once: true, amount: 0.6 });
  const [number, setNumber] = useState(0);

  useEffect(() => {
    if (!visible) return;
    const state = { n: 0 };
    gsap.to(state, {
      n: value,
      duration: 1.4,
      ease: "power3.out",
      onUpdate: () => setNumber(Number(state.n.toFixed(value % 1 === 0 ? 0 : 1))),
    });
  }, [visible, value]);

  return <span ref={ref}>{number}{suffix}</span>;
}

export function Dashboard() {
  const cards = useMemo(
    () => [
      { value: 100, suffix: "+", label: "Projects" },
      { value: 50, suffix: "+", label: "Clients" },
      { value: 24, suffix: "/7", label: "Support" },
      { value: 99.9, suffix: "%", label: "Uptime" },
    ],
    [],
  );

  return (
    <section id="dashboard" className="relative mx-auto max-w-7xl px-5 pb-24 sm:px-8 lg:px-12">
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
        className="mb-8 flex items-end justify-between gap-4"
      >
        <div>
          <div className="mb-3 text-xs uppercase tracking-[0.45em] text-royal-400">Python Command Center</div>
          <h2 className="text-3xl font-black sm:text-5xl">Massive analytics dashboard</h2>
        </div>
      </motion.div>

      <div className="grid gap-5 xl:grid-cols-[0.9fr_1.1fr]">
        <div className="grid gap-4 sm:grid-cols-2">
          {cards.map((card, index) => (
            <motion.div
              key={card.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: index * 0.06 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="rounded-[1.8rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
            >
              <div className="text-4xl font-black text-[#f4e0a2]">
                <Counter value={card.value} suffix={card.suffix} />
              </div>
              <div className="mt-2 text-xs uppercase tracking-[0.35em] text-white/50">{card.label}</div>
            </motion.div>
          ))}

          <div className="rounded-[1.8rem] border border-white/10 bg-black/40 p-6 sm:col-span-2">
            <div className="mb-4 text-sm font-semibold text-[#e8d7aa]">Live Code</div>
            <pre className="overflow-x-auto rounded-[1.25rem] border border-white/5 bg-black/40 p-5 font-mono text-sm leading-7 text-[#f1ddb1]">{`def build_empire():
    automate()
    scale()
    dominate()
    return "Success"`}</pre>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <div className="rounded-[1.8rem] border border-white/10 bg-[#0a0a0e]/80 p-5 backdrop-blur-xl">
            <div className="mb-3 text-sm font-semibold text-[#e8d7aa]">System Activity</div>
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={activity}>
                  <defs>
                    <linearGradient id="goldGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#D4AF37" stopOpacity={0.7} />
                      <stop offset="100%" stopColor="#D4AF37" stopOpacity={0.05} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.08)" />
                  <XAxis dataKey="name" stroke="rgba(255,255,255,0.4)" />
                  <YAxis stroke="rgba(255,255,255,0.4)" />
                  <Tooltip contentStyle={{ background: "#09090c", border: "1px solid rgba(212,175,55,0.25)", borderRadius: 16 }} />
                  <Area type="monotone" dataKey="value" stroke="#D4AF37" fillOpacity={1} fill="url(#goldGradient)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="rounded-[1.8rem] border border-white/10 bg-[#0a0a0e]/80 p-5 backdrop-blur-xl">
            <div className="mb-3 text-sm font-semibold text-[#e8d7aa]">Empire Allocation</div>
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={allocation} dataKey="value" nameKey="name" innerRadius={54} outerRadius={88} paddingAngle={4}>
                    {allocation.map((entry, idx) => (
                      <Cell key={entry.name} fill={pieColors[idx % pieColors.length]} />
                    ))}
                  </Pie>
                  <Tooltip contentStyle={{ background: "#09090c", border: "1px solid rgba(212,175,55,0.25)", borderRadius: 16 }} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
