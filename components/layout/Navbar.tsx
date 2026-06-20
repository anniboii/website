"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import Link from "next/link";
import { Moon, Sun, Menu, X, Download } from "lucide-react";
import { siteConfig } from "@/content/data";

const navLinks = [
  { label: "About", href: "/#about" },
  //{ label: "Journey", href: "#journey" },
  { label: "Experience", href: "/#experience" },
  { label: "Creator", href: "/#creator" },
  { label: "Gallery", href: "/#gallery" },
  { label: "Blog", href: "/#blog" },
  { label: "Work", href: "/#work-with-me" },
  { label: "Contact", href: "/#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const toggleTheme = () => setTheme(resolvedTheme === "dark" ? "light" : "dark");

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "py-3 backdrop-blur-xl border-b"
            : "py-5"
        }`}
        style={{
          backgroundColor: scrolled ? "color-mix(in srgb, var(--bg-primary) 85%, transparent)" : "transparent",
          borderColor: scrolled ? "var(--border)" : "transparent",
        }}
      >
        <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="group flex items-center gap-2">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold transition-all duration-200 group-hover:scale-105"
              style={{ background: "var(--accent)", color: "#0A0A0A" }}
            >
              AG
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-1.5 text-sm rounded-md transition-all duration-200 hover:opacity-100"
                style={{ color: "var(--text-secondary)" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "var(--text-primary)";
                  e.currentTarget.style.background = "var(--border)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "var(--text-secondary)";
                  e.currentTarget.style.background = "transparent";
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-2">
            <a
              href={siteConfig.resumeUrl}
              download
              className="flex items-center gap-1.5 px-3 py-1.5 text-sm rounded-md border transition-all duration-200 hover:opacity-80"
              style={{ borderColor: "var(--border-strong)", color: "var(--text-secondary)" }}
            >
              <Download size={13} />
              Resume
            </a>

            {mounted && (
              <button
                onClick={toggleTheme}
                className="w-8 h-8 rounded-md flex items-center justify-center transition-all duration-200 hover:opacity-80"
                style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}
                aria-label="Toggle theme"
              >
                {resolvedTheme === "dark" ? <Sun size={14} style={{ color: "var(--text-secondary)" }} /> : <Moon size={14} style={{ color: "var(--text-secondary)" }} />}
              </button>
            )}
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden w-8 h-8 flex items-center justify-center rounded-md"
            style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={16} /> : <Menu size={16} />}
          </button>
        </nav>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 pt-20 px-6 md:hidden"
            style={{ background: "var(--bg-primary)" }}
          >
            <div className="flex flex-col gap-1 pt-4">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block px-4 py-3 text-lg font-medium rounded-lg transition-all"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <div className="mt-4 flex gap-3 px-4">
                <a
                  href={siteConfig.resumeUrl}
                  download
                  className="flex items-center gap-2 px-4 py-2 text-sm rounded-lg border"
                  style={{ borderColor: "var(--border-strong)", color: "var(--text-secondary)" }}
                >
                  <Download size={14} /> Resume
                </a>
                {mounted && (
                  <button
                    onClick={toggleTheme}
                    className="px-4 py-2 text-sm rounded-lg border flex items-center gap-2"
                    style={{ borderColor: "var(--border-strong)", color: "var(--text-secondary)" }}
                  >
                    {resolvedTheme === "dark" ? <><Sun size={14} /> Light</> : <><Moon size={14} /> Dark</>}
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
