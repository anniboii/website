import Link from "next/link";
import { resources } from "@/content/data";
import { ArrowLeft, ExternalLink } from "lucide-react";

export const metadata = { title: "Resources" };

export default function ResourcesPage() {
  return (
    <div className="min-h-screen pt-28 pb-24">
      <div className="max-w-3xl mx-auto px-6">
        <Link href="/" className="inline-flex items-center gap-2 text-sm mb-10 hover:opacity-70 transition-opacity" style={{ color: "var(--text-muted)" }}>
          <ArrowLeft size={14} /> Back home
        </Link>
        <div className="flex items-center gap-3 mb-4">
          <div className="editorial-line" />
          <span className="section-label">Resources</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight" style={{ color: "var(--text-primary)" }}>
          Things I use & recommend.
        </h1>
        <p className="text-lg mb-16" style={{ color: "var(--text-secondary)" }}>
          Books, tools, and resources that have genuinely shaped how I think and work.
        </p>

        <div className="space-y-14">
          {resources.map(({ category, items }) => (
            <div key={category}>
              <h2 className="text-sm font-bold uppercase tracking-widest mb-5" style={{ color: "var(--accent)" }}>
                {category}
              </h2>
              <div className="space-y-3">
                {items.map((item, i) => (
                  <a
                    key={i}
                    href={"affiliateUrl" in item ? item.affiliateUrl : item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card-base p-5 flex items-start justify-between gap-4 group block"
                  >
                    <div>
                      <p className="text-sm font-semibold mb-0.5 group-hover:opacity-80 transition-opacity" style={{ color: "var(--text-primary)" }}>
                        {item.title}
                        {"author" in item && <span className="font-normal ml-2" style={{ color: "var(--text-muted)" }}>by {item.author}</span>}
                      </p>
                      <p className="text-sm" style={{ color: "var(--text-secondary)" }}>{item.description}</p>
                    </div>
                    <ExternalLink size={14} className="flex-shrink-0 mt-0.5 opacity-40 group-hover:opacity-100 transition-opacity" style={{ color: "var(--accent)" }} />
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
