"use client";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { aboutContent } from "@/content/data";

export function About() {
  return (
    <section id="about" className="pt-4 pb-4 md:pt-12 md:pb-4">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          label="About"
          title="More than a degree."
          subtitle="A story of building things that matter at the intersection of engineering, leadership, and creativity."
        />

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <p
              className="text-2xl md:text-3xl font-semibold leading-snug mb-8"
              style={{ color: "var(--text-primary)" }}
            >
              {aboutContent.headline}
            </p>
            <div className="space-y-5">
              {aboutContent.paragraphs.map((para, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="text-base md:text-lg leading-relaxed"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {para}
                </motion.p>
              ))}
            </div>

            {/* Pull quote */}
            <motion.blockquote
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-10 pl-5 italic text-lg"
              style={{
                borderLeft: "2px solid var(--accent)",
                color: "var(--text-secondary)",
              }}
            >
              "The best engineers are storytellers. The best leaders are builders."
            </motion.blockquote>
          </motion.div>

          {/* Image + quick facts */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-6"
          >
            <img
              src="/images/directors.jpeg"
              alt="Aniruddh Goyal"
              className="rounded-2xl"
            />

            {/* Quick facts grid */}
            <div className="grid grid-cols-2 gap-3">
              {[
                { label: "Institution", value: "IIT Bombay" },
                { label: "Degree", value: "B.Tech + M.Tech (Dual Degree)" },
                { label: "Department", value: "Mechanical Engineering" },
                { label: "Next Role", value: "Senior Associate, Meesho" },
              ].map(({ label, value }) => (
                <div
                  key={label}
                  className="card-base p-4"
                >
                  <p className="text-xs mb-1" style={{ color: "var(--text-muted)" }}>{label}</p>
                  <p className="text-sm font-semibold" style={{ color: "var(--text-primary)" }}>{value}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
