"use client";

import { motion } from "framer-motion";

const services = [
  { icon: "⚡", title: "Telegram Bots", desc: "Elite automation agents for operations, sales, and support." },
  { icon: "🌐", title: "Websites", desc: "High-status digital headquarters, landing systems, and product layers." },
  { icon: "🖥", title: "Software", desc: "Custom tools, dashboards, admin systems, and internal platforms." },
  { icon: "📊", title: "Parsers", desc: "Data extraction engines with reliable pipelines and monitoring." },
  { icon: "🔗", title: "API Integrations", desc: "Secure connective tissue between services, apps, and workflows." },
  { icon: "🤖", title: "Automation", desc: "Business process acceleration with measurable time savings." },
];

export function Services() {
  return (
    <section id="services" className="relative mx-auto max-w-7xl px-5 pb-24 sm:px-8 lg:px-12">
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.7 }}
        className="mb-8 flex items-end justify-between gap-4"
      >
        <div>
          <div className="mb-3 text-xs uppercase tracking-[0.45em] text-royal-400">Imperial Services</div>
          <h2 className="text-3xl font-black sm:text-5xl">Luxury systems with operational force</h2>
        </div>
        <div className="hidden text-right text-sm text-white/55 md:block">Built for speed, status, and automation.</div>
      </motion.div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {services.map((item, index) => (
          <motion.article
            key={item.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5, delay: index * 0.06 }}
            whileHover={{ y: -10, rotateX: 6, rotateY: -6, scale: 1.01 }}
            className="group relative overflow-hidden rounded-[1.8rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.12),transparent_38%)] opacity-0 transition duration-300 group-hover:opacity-100" />
            <div className="relative">
              <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-royal-400/25 bg-royal-400/10 text-2xl shadow-[0_0_35px_rgba(212,175,55,0.15)]">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold text-white">{item.title}</h3>
              <p className="mt-3 max-w-sm leading-7 text-white/65">{item.desc}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
