"use client";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { experiences } from "@/content/data";
import { CheckCircle } from "lucide-react";

export function Experience() {
  return (
    <section id="experience" className="pt-4 pb-4 md:pt-16 md:pb-4">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          label="Experience"
          title="Where I've worked."
          subtitle="From India's top startups to global research labs each role sharpened a different edge"
        />

        <div className="space-y-5">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="card-base p-6 md:p-8"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-5">
                <div className="flex items-start gap-4">
                  {/* Logo placeholder */}
                  {/* TODO: Replace with <Image src={exp.logo} alt={exp.org} width={44} height={44} /> */}
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 text-xs font-bold"
                    style={{ background: "var(--accent-dim)", color: "var(--accent)" }}
                  >
                    {exp.org.slice(0, 2).toUpperCase()}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="text-lg font-bold" style={{ color: "var(--text-primary)" }}>
                        {exp.role}
                      </h3>
                      {exp.isCurrent && (
                        <span
                          className="text-xs px-2 py-0.5 rounded-full font-medium"
                          style={{ background: "var(--accent-dim)", color: "var(--accent)" }}
                        >
                          Incoming
                        </span>
                      )}
                    </div>
                    <p className="text-sm font-medium mt-0.5" style={{ color: "var(--accent)" }}>
                      {exp.org}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3 flex-shrink-0">
                  <span
                    className="text-xs px-2.5 py-1 rounded-full"
                    style={{ background: "var(--bg-secondary)", color: "var(--text-muted)" }}
                  >
                    {exp.type}
                  </span>
                  <span className="text-sm" style={{ color: "var(--text-muted)" }}>
                    {exp.period}
                  </span>
                </div>
              </div>

              <p className="text-sm leading-relaxed mb-5" style={{ color: "var(--text-secondary)" }}>
                {exp.description}
              </p>

              <ul className="space-y-2 mb-5">
                {exp.achievements.map((ach, j) => (
                  <li key={j} className="flex items-start gap-2.5 text-sm" style={{ color: "var(--text-secondary)" }}>
                    <CheckCircle size={14} className="mt-0.5 flex-shrink-0" style={{ color: "var(--accent)" }} />
                    {ach}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {exp.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2.5 py-1 rounded-full"
                    style={{ background: "var(--border)", color: "var(--text-muted)" }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
