"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { siteConfig } from "@/content/data";
import { GitFork, Mail, Send } from "lucide-react";
import { IconGithub, IconLinkedin, IconYoutube, IconInstagram } from "@/components/ui/BrandIcons";

const socials = [
  { icon: Mail, label: "Email", href: `mailto:${siteConfig.email}`, value: siteConfig.email },
  { icon: IconLinkedin, label: "LinkedIn", href: siteConfig.social.linkedin, value: "linkedin.com/in/aniruddhgoyal" },
  { icon: IconGithub, label: "GitHub", href: siteConfig.social.github, value: "github.com/aniruddh-goyal" },
  { icon: IconYoutube, label: "YouTube", href: siteConfig.social.youtube, value: "youtube.com/@AniruddhGoyalIITB" },
  { icon: IconInstagram, label: "Instagram", href: siteConfig.social.instagram, value: "@anniboii" },
];

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Wire up to your preferred form handler (Formspree, Resend, etc.)
    setSent(true);
  };

  return (
    <section id="contact" className="pt-4 pb-4 md:pt-12 md:pb-4" style={{ background: "var(--bg-secondary)" }}>
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          label="Contact"
          title="Reach out to me."
          subtitle="Whether it's a collaboration, a conversation, or just saying hi, I'd love to hear from you."
        />

        <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {/* Socials */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-3"
          >
            <p className="text-sm font-semibold mb-5" style={{ color: "var(--text-primary)" }}>Find me at</p>
            {socials.map(({ icon: Icon, label, href, value }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl border transition-all duration-200 hover:opacity-80 group"
                style={{ border: "1px solid var(--border)", background: "var(--bg-card)" }}
              >
                <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: "var(--accent-dim)" }}>
                  <Icon size={16} style={{ color: "var(--accent)" }} />
                </div>
                <div>
                  <p className="text-xs" style={{ color: "var(--text-muted)" }}>{label}</p>
                  <p className="text-sm font-medium" style={{ color: "var(--text-primary)" }}>{value}</p>
                </div>
              </a>
            ))}
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {sent ? (
              <div className="card-base p-8 flex flex-col items-center justify-center h-full text-center">
                <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4" style={{ background: "var(--accent-dim)" }}>
                  <Send size={20} style={{ color: "var(--accent)" }} />
                </div>
                <h3 className="text-lg font-bold mb-2" style={{ color: "var(--text-primary)" }}>Message sent!</h3>
                <p className="text-sm" style={{ color: "var(--text-secondary)" }}>I'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="card-base p-7 space-y-4">
                <p className="text-sm font-semibold mb-5" style={{ color: "var(--text-primary)" }}>Send a message</p>
                {[
                  { id: "name", label: "Your name", type: "text", placeholder: "Aniruddh Goyal" },
                  { id: "email", label: "Email address", type: "email", placeholder: "you@example.com" },
                ].map(({ id, label, type, placeholder }) => (
                  <div key={id}>
                    <label className="block text-xs mb-1.5" style={{ color: "var(--text-muted)" }}>{label}</label>
                    <input
                      type={type}
                      required
                      placeholder={placeholder}
                      value={form[id as keyof typeof form]}
                      onChange={(e) => setForm({ ...form, [id]: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg text-sm outline-none transition-all"
                      style={{
                        background: "var(--bg-secondary)",
                        border: "1px solid var(--border)",
                        color: "var(--text-primary)",
                      }}
                    />
                  </div>
                ))}
                <div>
                  <label className="block text-xs mb-1.5" style={{ color: "var(--text-muted)" }}>Message</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="What's on your mind?"
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg text-sm outline-none resize-none transition-all"
                    style={{
                      background: "var(--bg-secondary)",
                      border: "1px solid var(--border)",
                      color: "var(--text-primary)",
                    }}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-medium transition-all hover:opacity-90"
                  style={{ background: "var(--accent)", color: "#0A0A0A" }}
                >
                  <Send size={14} /> Send Message
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
