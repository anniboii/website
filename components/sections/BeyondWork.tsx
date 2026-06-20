"use client";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { beyondWork } from "@/content/data";

export function BeyondWork() {
  return (
    <section id="beyond" className="pt-4 pb-4 md:pt-12 md:pb-4">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          label="Beyond Work"
          title="The full picture."
          subtitle="You can't understand a person from a resume. Here's the rest."
        />

        {/* Drumming */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="card-base p-8 md:p-12 mb-8"
        >
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <span className="section-label">Personal</span>
              <h3 className="text-3xl md:text-4xl font-bold mt-3 mb-5" style={{ color: "var(--text-primary)" }}>
                {beyondWork.drumming.headline}
              </h3>
              <p className="text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                {beyondWork.drumming.description}
              </p>
            </div>
            {/* Image/video placeholder */}
            {/* TODO: Replace with real drumming images or video */}
            <div className="grid grid-cols-2 gap-3">
              {[1, 2, 3, 4].map((n) => (
                <div
                  key={n}
                  className="aspect-square rounded-xl flex items-center justify-center"
                  style={{ background: "var(--bg-secondary)", border: "1px solid var(--border)" }}
                >
                  <p className="text-xs text-center px-2" style={{ color: "var(--text-muted)" }}>
                    Photo {n}
                    <br />
                    <code style={{ color: "var(--accent)", fontSize: "9px" }}>
                      /public/images/drumming/{n}.jpg
                    </code>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Other interests */}
        <div className="grid md:grid-cols-2 gap-5">
          {beyondWork.otherInterests.map((interest, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="card-base p-6"
            >
              <h4 className="text-base font-bold mb-2" style={{ color: "var(--text-primary)" }}>
                {interest.title}
              </h4>
              <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                {interest.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
