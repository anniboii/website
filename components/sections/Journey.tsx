"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { timeline } from "@/content/data";

const typeColors: Record<string, string> = {
  education: "#6B8CFF",
  leadership: "#C8A96E",
  research: "#7EC8A0",
  work: "#E07B7B",
};

const typeLabels: Record<string, string> = {
  education: "Education",
  leadership: "Leadership",
  research: "Research",
  work: "Industry",
};

export function Journey() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start 0.8", "end 0.2"] });

  return (
    <section id="journey" className="pt-4 pb-4 md:pt-12 md:pb-4" style={{ background: "var(--bg-secondary)" }}>
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          label="Journey"
          title="Five years. Dozens of chapters."
          subtitle="The milestones that shaped who I am and what I build."
        />

        <div ref={containerRef} className="relative max-w-3xl mx-auto">
          {/* Vertical spine */}
          <div
            className="absolute left-6 md:left-8 top-0 bottom-0 w-px"
            style={{ background: "var(--border-strong)" }}
          />
          {/* Animated progress line */}
          <motion.div
            className="absolute left-6 md:left-8 top-0 w-px origin-top"
            style={{
              background: "linear-gradient(to bottom, var(--accent), #E8C98A)",
              scaleY: scrollYProgress,
              height: "100%",
            }}
          />

          <div className="space-y-12 pl-16 md:pl-20">
            {timeline.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="relative"
              >
                {/* Dot */}
                <div
                  className="absolute -left-[3.2rem] md:-left-[3.6rem] top-1.5 w-3.5 h-3.5 rounded-full border-2 z-10 transition-all duration-300"
                  style={{
                    background: item.isCurrent ? typeColors[item.type] : "var(--bg-secondary)",
                    borderColor: typeColors[item.type],
                    boxShadow: item.isCurrent ? `0 0 12px ${typeColors[item.type]}60` : "none",
                  }}
                />

                <div className="card-base p-6">
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span
                      className="text-xs font-semibold px-2 py-0.5 rounded-full"
                      style={{
                        background: `${typeColors[item.type]}18`,
                        color: typeColors[item.type],
                      }}
                    >
                      {typeLabels[item.type]}
                    </span>
                    <span className="text-xs" style={{ color: "var(--text-muted)" }}>{item.year}</span>
                    {item.isCurrent && (
                      <span
                        className="text-xs font-semibold px-2 py-0.5 rounded-full"
                        style={{ background: "var(--accent-dim)", color: "var(--accent)" }}
                      >
                        Current
                      </span>
                    )}
                  </div>
                  <h3 className="text-lg font-bold mb-1" style={{ color: "var(--text-primary)" }}>
                    {item.title}
                  </h3>
                  <p className="text-sm font-medium mb-3" style={{ color: "var(--accent)" }}>
                    {item.org}
                  </p>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
