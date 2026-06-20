"use client";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { leadership } from "@/content/data";
import { Trophy } from "lucide-react";

export function Leadership() {
  return (
    <section id="leadership" className="pt-4 pb-4 md:pt-12 md:pb-4">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          label="Leadership & Impact"
          title="Building communities, not just careers."
          subtitle="Leadership isn't a title. It's about what you leave behind when you're done."
        />

        {/* SARC block */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="card-base p-8 md:p-12 mb-12"
        >
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <span className="section-label">{leadership.sarc.period}</span>
              <h3 className="text-2xl md:text-3xl font-bold mt-3 mb-2" style={{ color: "var(--text-primary)" }}>
                {leadership.sarc.title}
              </h3>
              <p className="text-base font-medium mb-5" style={{ color: "var(--accent)" }}>
                {leadership.sarc.role}
              </p>
              <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
                {leadership.sarc.description}
              </p>
              <ul className="space-y-2.5">
                {leadership.sarc.achievements.map((ach, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm" style={{ color: "var(--text-secondary)" }}>
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "var(--accent)" }} />
                    {ach}
                  </li>
                ))}
              </ul>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 content-start">
              {leadership.sarc.stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-6 rounded-xl text-center"
                  style={{ background: "var(--bg-secondary)", border: "1px solid var(--border)" }}
                >
                  <p className="text-3xl font-bold" style={{ color: "var(--text-primary)" }}>
                    {stat.value}{stat.suffix}
                  </p>
                  <p className="text-xs mt-1" style={{ color: "var(--text-muted)" }}>{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Awards */}
        <h3 className="text-xl font-bold mb-6 flex items-center gap-2" style={{ color: "var(--text-primary)" }}>
          <Trophy size={18} style={{ color: "var(--accent)" }} />
          IIT Bombay Gymkhana Awards
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {leadership.awards.map((award, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="card-base p-5"
            >
              <div className="flex items-start gap-3">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 text-xs font-bold"
                  style={{ background: "var(--accent-dim)", color: "var(--accent)" }}
                >
                  {i + 1}
                </div>
                <div>
                  <p className="text-sm font-semibold" style={{ color: "var(--text-primary)" }}>{award.title}</p>
                  <p className="text-xs mt-0.5" style={{ color: "var(--text-muted)" }}>{award.category} · {award.year}</p>
                  <p className="text-xs mt-2 leading-relaxed" style={{ color: "var(--text-secondary)" }}>{award.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
