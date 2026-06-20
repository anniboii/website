import Link from "next/link";
import { siteConfig } from "@/content/data";
import { IconGithub, IconLinkedin, IconYoutube, IconInstagram } from "@/components/ui/BrandIcons";

export function Footer() {
  return (
    <footer className="py-12 border-t" style={{ borderColor: "var(--border)", background: "var(--bg-primary)" }}>
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold" style={{ background: "var(--accent)", color: "#0A0A0A" }}>AG</div>
          <span className="text-sm" style={{ color: "var(--text-muted)" }}>© {new Date().getFullYear()} {siteConfig.name}</span>
        </div>
        <div className="flex items-center gap-4">
          {[
            { Icon: IconGithub, href: siteConfig.social.github },
            { Icon: IconLinkedin, href: siteConfig.social.linkedin },
            { Icon: IconYoutube, href: siteConfig.social.youtube },
            { Icon: IconInstagram, href: siteConfig.social.instagram },
          ].map(({ Icon, href }, i) => (
            <a key={i} href={href} target="_blank" rel="noopener noreferrer" className="transition-opacity hover:opacity-60" style={{ color: "var(--text-muted)" }}>
              <Icon size={16} color="currentColor" />
            </a>
          ))}
        </div>
        <div className="flex items-center gap-4">
          {[{ label: "Now", href: "/now" }, { label: "Blog", href: "/blog" }, { label: "Resources", href: "/resources" }].map(({ label, href }) => (
            <Link key={href} href={href} className="text-xs transition-opacity hover:opacity-60" style={{ color: "var(--text-muted)" }}>{label}</Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
