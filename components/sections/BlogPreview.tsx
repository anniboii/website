"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { blogPosts } from "@/content/data";
import { ArrowRight, Clock } from "lucide-react";

export function BlogPreview() {
  const featured = blogPosts.filter((p) => p.featured).slice(0, 2);
  const rest = blogPosts.filter((p) => !p.featured).slice(0, 2);

  return (
    <section id="blog" className="pt-4 pb-4 md:pt-12 md:pb-4">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between mb-16">
          <SectionHeader
            label="Writing"
            title="Thinking out loud."
            subtitle="On engineering, leadership, startups, and everything in between."
          />
          <Link
            href="/blog"
            className="hidden md:flex items-center gap-1.5 text-sm font-medium hover:opacity-70 transition-opacity flex-shrink-0 mb-1"
            style={{ color: "var(--accent)" }}
          >
            All posts <ArrowRight size={14} />
          </Link>
        </div>

        {/* Featured */}
        <div className="grid md:grid-cols-2 gap-5 mb-5">
          {featured.map((post, i) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
            >
              <Link href={`/blog/${post.slug}`} className="card-base p-7 block h-full group">
                <div className="flex items-center gap-2 mb-4">
                  <span
                    className="text-xs px-2 py-0.5 rounded-full font-medium"
                    style={{ background: "var(--accent-dim)", color: "var(--accent)" }}
                  >
                    Featured
                  </span>
                  <span className="flex items-center gap-1 text-xs" style={{ color: "var(--text-muted)" }}>
                    <Clock size={11} /> {post.readingTime}
                  </span>
                </div>
                <h3 className="text-lg font-bold mb-3 group-hover:opacity-80 transition-opacity leading-snug" style={{ color: "var(--text-primary)" }}>
                  {post.title}
                </h3>
                <p className="text-sm leading-relaxed mb-5" style={{ color: "var(--text-secondary)" }}>
                  {post.excerpt}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {post.tags.map((tag) => (
                    <span key={tag} className="text-xs px-2 py-0.5 rounded-full" style={{ background: "var(--border)", color: "var(--text-muted)" }}>
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-1.5 text-xs font-medium" style={{ color: "var(--accent)" }}>
                  Read more <ArrowRight size={12} />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Non-featured */}
        <div className="grid md:grid-cols-2 gap-5">
          {rest.map((post, i) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <Link href={`/blog/${post.slug}`} className="card-base p-5 flex gap-4 items-start group block">
                <div className="flex-1">
                  <p className="text-xs mb-2 flex items-center gap-1.5" style={{ color: "var(--text-muted)" }}>
                    <Clock size={11} /> {post.readingTime}
                  </p>
                  <h4 className="text-sm font-semibold mb-1 group-hover:opacity-80 transition-opacity" style={{ color: "var(--text-primary)" }}>
                    {post.title}
                  </h4>
                  <p className="text-xs leading-relaxed" style={{ color: "var(--text-muted)" }}>{post.excerpt}</p>
                </div>
                <ArrowRight size={14} className="flex-shrink-0 mt-1 opacity-40 group-hover:opacity-100 transition-opacity" style={{ color: "var(--accent)" }} />
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 md:hidden">
          <Link href="/blog" className="flex items-center gap-1.5 text-sm font-medium" style={{ color: "var(--accent)" }}>
            All posts <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
