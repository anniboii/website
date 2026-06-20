"use client";
import { motion } from "framer-motion";

interface SectionHeaderProps {
  label: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export function SectionHeader({ label, title, subtitle, align = "left" }: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`mb-16 ${align === "center" ? "text-center" : ""}`}
    >
      <div className={`flex items-center gap-3 mb-4 ${align === "center" ? "justify-center" : ""}`}>
        <div className="editorial-line" />
        <span className="section-label">{label}</span>
      </div>
      <h2
        className="text-4xl md:text-5xl font-bold tracking-tight leading-tight"
        style={{ color: "var(--text-primary)" }}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg max-w-2xl leading-relaxed" style={{ color: "var(--text-secondary)" }}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
