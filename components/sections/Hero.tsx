"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Download, ChevronDown } from "lucide-react";
import { siteConfig, heroMetrics, roles } from "@/content/data";

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const duration = 1800;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) { setCount(value); clearInterval(timer); }
      else setCount(Math.floor(current));
    }, duration / steps);
    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}{suffix}
    </span>
  );
}

function KineticRole() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % roles.length);
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-10 md:h-12 overflow-hidden relative">
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -40, opacity: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="absolute text-2xl md:text-3xl font-light tracking-wide"
          style={{ color: "var(--accent)" }}
        >
          {roles[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-20">
      {/* Ambient background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% -10%, var(--accent-dim) 0%, transparent 70%)",
        }}
      />
      {/* Subtle grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(var(--text-primary) 1px, transparent 1px), linear-gradient(90deg, var(--text-primary) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 w-full py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — text */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="editorial-line" />
                <span className="section-label">Aniruddh Goyal</span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.05] mb-6"
              style={{ color: "var(--text-primary)" }}
            >
              Engineer.
              <br />
              Builder.
              <br />
              <span style={{ color: "var(--accent)" }}>Creator.</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="mb-4"
            >
              <KineticRole />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="text-base md:text-lg leading-relaxed max-w-lg mb-10"
              style={{ color: "var(--text-secondary)" }}
            >
              IIT Bombay Alumni | 
              Incoming Senior Associate at Meesho | Researcher, content creator,
              and builder of communities.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-wrap gap-3"
            >
              <Link
                href="#experience"
                className="flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 hover:opacity-90 hover:scale-[1.02]"
                style={{ background: "var(--accent)", color: "#0A0A0A" }}
              >
                Explore My Work <ArrowRight size={15} />
              </Link>
              <Link
                href="#contact"
                className="flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium border transition-all duration-200 hover:opacity-80"
                style={{ borderColor: "var(--border-strong)", color: "var(--text-primary)" }}
              >
                Get In Touch
              </Link>
              
            </motion.div>
          </div>

          {/* Right — image placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 0.75 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:flex justify-center"
          >
            <img
              src="/images/hero.png"
              alt="Aniruddh Goyal"
              className="rounded-2xl"
            />
          </motion.div>
          
          
        </div>

        {/* Metrics row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.46, 1] }}
          className="mt-20 grid grid-cols-2 md:grid-cols-5 gap-px rounded-xl overflow-hidden"
          style={{ border: "1px solid var(--border)", background: "var(--border)" }}
        >
          {heroMetrics.map((metric) => (
            <div
              key={metric.label}
              className="flex flex-col items-center justify-center py-6 px-4 text-center"
              style={{ background: "var(--bg-primary)" }}
            >
              <span
                className="text-2xl md:text-3xl font-bold tabular-nums"
                style={{ color: "var(--text-primary)" }}
              >
                <AnimatedCounter value={metric.value} suffix={metric.suffix} />
              </span>
              <span className="text-xs mt-1 leading-tight" style={{ color: "var(--text-muted)" }}>
                {metric.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ color: "var(--text-muted)" }}
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
}
