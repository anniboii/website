import Link from "next/link";
import { nowPage } from "@/content/data";
import { ArrowLeft } from "lucide-react";

export const metadata = { title: "Now" };

export default function NowPage() {
  const sections = [
    { label: "Working on", items: nowPage.working, emoji: "⚙️" },
    { label: "Learning", items: nowPage.learning, emoji: "📖" },
    { label: "Reading", items: nowPage.reading, emoji: "📚" },
    { label: "Building", items: nowPage.building, emoji: "🔨" },
  ];

  return (
    <div className="min-h-screen pt-28 pb-24">
      <div className="max-w-2xl mx-auto px-6">
        <Link href="/" className="inline-flex items-center gap-2 text-sm mb-10 hover:opacity-70 transition-opacity" style={{ color: "var(--text-muted)" }}>
          <ArrowLeft size={14} /> Back home
        </Link>

        <div className="flex items-center gap-3 mb-4">
          <div className="editorial-line" />
          <span className="section-label">Now</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight" style={{ color: "var(--text-primary)" }}>
          What I'm doing now.
        </h1>
        <p className="text-sm mb-2" style={{ color: "var(--text-muted)" }}>
          Last updated: {nowPage.lastUpdated}
        </p>
        <p className="text-base mb-14 leading-relaxed" style={{ color: "var(--text-secondary)" }}>
          Inspired by Derek Sivers'{" "}
          <a href="https://nownownow.com/about" target="_blank" rel="noopener noreferrer" style={{ color: "var(--accent)" }} className="hover:opacity-70 transition-opacity">
            /now movement
          </a>
          . A snapshot of what has my attention right now.
        </p>

        <div className="space-y-10">
          {sections.map(({ label, items, emoji }) => (
            <div key={label}>
              <h2 className="text-lg font-bold mb-4 flex items-center gap-2" style={{ color: "var(--text-primary)" }}>
                <span>{emoji}</span> {label}
              </h2>
              <ul className="space-y-2">
                {items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-base" style={{ color: "var(--text-secondary)" }}>
                    <span className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "var(--accent)" }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 p-5 rounded-xl text-sm" style={{ background: "var(--bg-card)", border: "1px solid var(--border)", color: "var(--text-muted)" }}>
          {/* TODO: Update nowPage object in content/data.ts whenever things change */}
          To update this page, edit <code style={{ color: "var(--accent)" }}>content/data.ts → nowPage</code>
        </div>
      </div>
    </div>
  );
}
