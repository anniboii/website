import Link from "next/link";
import { blogPosts } from "@/content/data";
import { Clock, ArrowLeft } from "lucide-react";

export const metadata = { title: "Blog" };

export default function BlogPage() {
  return (
    <div className="min-h-screen pt-28 pb-24">
      <div className="max-w-3xl mx-auto px-6">
        <Link href="/" className="inline-flex items-center gap-2 text-sm mb-10 hover:opacity-70 transition-opacity" style={{ color: "var(--text-muted)" }}>
          <ArrowLeft size={14} /> Back home
        </Link>
        <div className="flex items-center gap-3 mb-4">
          <div className="editorial-line" />
          <span className="section-label">Writing</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight" style={{ color: "var(--text-primary)" }}>
          Thinking out loud.
        </h1>
        <p className="text-lg mb-16" style={{ color: "var(--text-secondary)" }}>
          Essays on engineering, leadership, startups, and personal growth.
        </p>

        <div className="space-y-4">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="card-base p-6 flex items-start justify-between gap-4 group block"
            >
              <div className="flex-1">
                <div className="flex flex-wrap gap-2 mb-2">
                  {post.featured && (
                    <span className="text-xs px-2 py-0.5 rounded-full font-medium" style={{ background: "var(--accent-dim)", color: "var(--accent)" }}>
                      Featured
                    </span>
                  )}
                  {post.tags.slice(0, 2).map((tag) => (
                    <span key={tag} className="text-xs px-2 py-0.5 rounded-full" style={{ background: "var(--border)", color: "var(--text-muted)" }}>
                      {tag}
                    </span>
                  ))}
                </div>
                <h2 className="text-base font-bold mb-1 group-hover:opacity-80 transition-opacity" style={{ color: "var(--text-primary)" }}>
                  {post.title}
                </h2>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>{post.excerpt}</p>
              </div>
              <div className="flex-shrink-0 text-right">
                <p className="text-xs flex items-center gap-1 justify-end" style={{ color: "var(--text-muted)" }}>
                  <Clock size={11} /> {post.readingTime}
                </p>
                <p className="text-xs mt-1" style={{ color: "var(--text-muted)" }}>{post.date}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
