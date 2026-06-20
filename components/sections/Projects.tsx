"use client";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { research, projects } from "@/content/data";
import { GitFork, ExternalLink, BookOpen } from "lucide-react";

export function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32" style={{ background: "var(--bg-secondary)" }}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Research */}
        <SectionHeader
          label="Research"
          title="Pushing the frontier."
          subtitle="Novel simulation frameworks and computational methods for advanced manufacturing."
        />

        {/* Featured research */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="card-base p-8 md:p-10 mb-24"
        >
          <div className="flex items-center gap-2 mb-2">
            <span className="section-label">Featured Project</span>
          </div>
          <div className="grid md:grid-cols-2 gap-10 mt-6">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold leading-snug mb-3" style={{ color: "var(--text-primary)" }}>
                {research.featured.title}
              </h3>
              <p className="text-sm font-medium mb-1" style={{ color: "var(--accent)" }}>
                {research.featured.subtitle} · {research.featured.supervisor}
              </p>
              <p className="text-xs mb-5" style={{ color: "var(--text-muted)" }}>
                {research.featured.period}
              </p>
              <p className="text-sm leading-relaxed mb-5" style={{ color: "var(--text-secondary)" }}>
                {research.featured.description}
              </p>
              <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
                {research.featured.longDescription}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {research.featured.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2.5 py-1 rounded-full font-medium"
                    style={{ background: "var(--accent-dim)", color: "var(--accent)" }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-3">
                <a
                  href={research.featured.links.thesis}
                  className="flex items-center gap-1.5 text-sm px-4 py-2 rounded-lg border transition-all hover:opacity-80"
                  style={{ borderColor: "var(--border-strong)", color: "var(--text-secondary)" }}
                >
                  <BookOpen size={14} /> Thesis
                </a>
                <a
                  href={research.featured.links.github}
                  className="flex items-center gap-1.5 text-sm px-4 py-2 rounded-lg border transition-all hover:opacity-80"
                  style={{ borderColor: "var(--border-strong)", color: "var(--text-secondary)" }}
                >
                  <GitFork size={14} /> Code
                </a>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-sm font-semibold mb-3" style={{ color: "var(--text-primary)" }}>
                Key Contributions
              </h4>
              {research.featured.contributions.map((c, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  className="flex items-start gap-3 p-4 rounded-xl"
                  style={{ background: "var(--bg-primary)", border: "1px solid var(--border)" }}
                >
                  <span className="text-lg font-bold tabular-nums" style={{ color: "var(--accent)", opacity: 0.4 }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>{c}</p>
                </motion.div>
              ))}
              {/* Simulation result placeholder */}
              <div
                className="w-full h-36 rounded-xl flex items-center justify-center mt-4"
                style={{ background: "var(--bg-primary)", border: "1px dashed var(--border-strong)" }}
              >
                <p className="text-xs text-center" style={{ color: "var(--text-muted)" }}>
                  Simulation results image
                  <br />
                  <code style={{ color: "var(--accent)" }}>/public/images/research/fem-result.png</code>
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Projects grid */}
        <SectionHeader
          label="Projects"
          title="Things I've built."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="card-base p-6 flex flex-col"
            >
              {/* Image/video placeholder */}
              <div
                className="w-full h-36 rounded-lg mb-5 flex items-center justify-center"
                style={{ background: "var(--bg-secondary)", border: "1px solid var(--border)" }}
              >
                <p className="text-xs" style={{ color: "var(--text-muted)" }}>
                  Image / video placeholder
                </p>
              </div>
              <h3 className="text-base font-bold mb-2" style={{ color: "var(--text-primary)" }}>
                {project.title}
              </h3>
              <p className="text-sm leading-relaxed flex-1 mb-4" style={{ color: "var(--text-secondary)" }}>
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-0.5 rounded-full"
                    style={{ background: "var(--border)", color: "var(--text-muted)" }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-2">
                {project.links.github && (
                  <a href={project.links.github} className="flex items-center gap-1 text-xs hover:opacity-70 transition-opacity" style={{ color: "var(--text-muted)" }}>
                    <GitFork size={13} /> Code
                  </a>
                )}
                {project.links.live && (
                  <a href={project.links.live} className="flex items-center gap-1 text-xs hover:opacity-70 transition-opacity" style={{ color: "var(--text-muted)" }}>
                    <ExternalLink size={13} /> Live
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
