"use client";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { creatorContent } from "@/content/data";
import { Music, ExternalLink, Mic } from "lucide-react";
import { IconYoutube } from "@/components/ui/BrandIcons";
import Image from "next/image";

export function Creator() {
  return (
    <section id="creator" className="pt-4 pb-4 md:pt-12 md:pb-8" style={{ background: "var(--bg-secondary)" }}>
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          label="Creator"
          title="Beyond the campus gates."
          subtitle="Content creator, speaker, and musician. Sharing stories, experiences, and ideas beyond academics and work."        />

        {/* Main 3 cards */}
        <div className="grid md:grid-cols-3 gap-5 mb-10">
          {/* YouTube */}
          <motion.a
            href={creatorContent.youtube.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="card-base p-7 block group"
          >
            <div className="relative w-full h-44 mb-5 overflow-hidden rounded-xl">
              <Image
                src={creatorContent.youtube.thumbnail}
                alt="YouTube"
                fill
                className="object-cover"
              />
            </div>
            
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
              style={{ background: "rgba(255,0,0,0.1)" }}
            >
              <IconYoutube size={22} color= "#FF4444" />
            </div>
            <p className="text-3xl font-bold mb-1" style={{ color: "var(--text-primary)" }}>
              {creatorContent.youtube.subscribers}
            </p>
            <p className="text-sm font-medium mb-3" style={{ color: "var(--text-muted)" }}>
              YouTube Subscribers
            </p>
            <p className="text-sm leading-relaxed mb-5" style={{ color: "var(--text-secondary)" }}>
              {creatorContent.youtube.description}
            </p>
            <ul className="space-y-1.5 mb-5">
              {creatorContent.youtube.highlights.map((h, i) => (
                <li key={i} className="flex items-center gap-2 text-xs" style={{ color: "var(--text-muted)" }}>
                  <span className="w-1 h-1 rounded-full" style={{ background: "var(--accent)" }} />
                  {h}
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-1.5 text-xs font-medium group-hover:opacity-70 transition-opacity" style={{ color: "var(--accent)" }}>
              Visit Channel <ExternalLink size={11} />
            </div>
          </motion.a>

          {/* Josh Talks */}
          <motion.a
            href={creatorContent.joshTalks.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="card-base p-7 block group"
          >
            <div className="relative w-full h-44 mb-5 overflow-hidden rounded-xl">
              <Image
                src={creatorContent.joshTalks.thumbnail}
                alt="Josh Talks"
                fill
                className="object-cover"
              />
            </div>

            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
              style={{ background: "rgba(255,215,0,0.1)" }}
            >
              <Mic size={22} style={{ color: "#FFD700" }} />
            </div>

            <p
              className="text-3xl font-bold mb-1"
              style={{ color: "var(--text-primary)" }}
            >
              Josh Talks
            </p>

            <p
              className="text-sm font-medium mb-3"
              style={{ color: "var(--text-muted)" }}
            >
              Speaker
            </p>

            <p
              className="text-sm leading-relaxed mb-6"
              style={{ color: "var(--text-secondary)" }}
            >
              {creatorContent.joshTalks.description}
            </p>

            <div
              className="flex items-center gap-1.5 text-xs font-medium"
              style={{ color: "var(--accent)" }}
            >
              Watch Talk <ExternalLink size={11} />
            </div>
          </motion.a>

          {/* Music */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="card-base p-7"
          >
            <div className="relative w-full h-44 mb-5 overflow-hidden rounded-xl">
              <Image
                src={creatorContent.music.thumbnail}
                alt="Music"
                fill
                className="object-cover"
              />
            </div>

            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
              style={{ background: "rgba(29,185,84,0.1)" }}
            >
              <Music size={22} style={{ color: "  #1DB954" }} />
            </div>
            <p className="text-3xl font-bold mb-1" style={{ color: "var(--text-primary)" }}>
              Original Music
            </p>
            <p className="text-sm font-medium mb-3" style={{ color: "var(--text-muted)" }}>
              Spotify · Apple Music
            </p>
            <p className="text-sm leading-relaxed mb-5" style={{ color: "var(--text-secondary)" }}>
              {creatorContent.music.description}
            </p>
            <p className="text-xs mb-4 font-medium" style={{ color: "var(--text-muted)" }}>
              {creatorContent.music.trackName}
            </p>
            <div className="flex gap-3">
              <a href={creatorContent.music.spotifyUrl} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full border transition-all hover:opacity-70"
                style={{ borderColor: "#1DB954", color: "#1DB954" }}>
                <Music size={11} /> Spotify
              </a>
              <a href={creatorContent.music.appleMusicUrl} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full border transition-all hover:opacity-70"
                style={{ borderColor: "#b91d1d", color: "#b91d1d" }}>
                <Music size={11} /> Apple Music
              </a>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
