"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { galleryCategories, galleryImages } from "@/content/data";
import Image from "next/image";

export function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const categories = ["All", ...galleryCategories];

  const filtered =
    activeCategory === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  return (
    <section id="gallery" className="pt-4 pb-4 md:pt-4 md:pb-4" style={{ background: "var(--bg-secondary)" }}>
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          label="Gallery"
          title="Moments that matter."
        />

        {/* Category filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className="px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200"
              style={{
                background: activeCategory === cat ? "var(--accent)" : "var(--bg-card)",
                color: activeCategory === cat ? "#0A0A0A" : "var(--text-secondary)",
                border: `1px solid ${activeCategory === cat ? "var(--accent)" : "var(--border)"}`,
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry-style grid */}
        <motion.div layout className="columns-2 md:columns-3 lg:columns-4 gap-3 space-y-3">
          <AnimatePresence>
            {filtered.map((img, i) => (
              <motion.div
                key={img.src + i}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="break-inside-avoid mb-3 rounded-xl overflow-hidden group cursor-pointer"
                style={{ border: "1px solid var(--border)" }}
              >
                <div
                  className="relative w-full overflow-hidden"
                  style={{
                    aspectRatio:
                      img.span === "tall"
                        ? "3/4"
                        : img.span === "wide"
                          ? "4/3"
                          : "1/1",
                  }}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
