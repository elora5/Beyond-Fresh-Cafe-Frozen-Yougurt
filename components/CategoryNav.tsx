"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { MenuCategory } from "@/data/menu";

interface CategoryNavProps {
  categories: MenuCategory[];
  activeCategory: string;
}

export function CategoryNav({ categories, activeCategory }: CategoryNavProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const checkScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 4);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 4);
  }, []);

  useEffect(() => {
    checkScroll();
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", checkScroll, { passive: true });
    window.addEventListener("resize", checkScroll);
    return () => {
      el.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, [checkScroll]);

  // Scroll active pill into view
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const activeEl = el.querySelector(`[data-category="${activeCategory}"]`);
    if (activeEl) {
      activeEl.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  }, [activeCategory]);

  const scroll = (direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({
      left: direction === "left" ? -200 : 200,
      behavior: "smooth",
    });
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="sticky top-16 sm:top-20 z-40 bg-white/90 backdrop-blur-xl border-b border-slate-100 shadow-sm"
      aria-label="Menu category navigation"
    >
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Left scroll button */}
        {canScrollLeft && (
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 flex items-center justify-center bg-white/95 shadow-md rounded-full border border-slate-100 text-slate-400 hover:text-brand-green transition-colors"
            aria-label="Scroll categories left"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
        )}

        {/* Scrollable pill row */}
        <div
          ref={scrollRef}
          className="flex items-center gap-1.5 sm:gap-2 py-3 overflow-x-auto scrollbar-hide"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <a
                key={cat.id}
                href={`#${cat.id}`}
                data-category={cat.id}
                className={`relative shrink-0 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full font-inter text-xs sm:text-sm font-medium whitespace-nowrap transition-colors duration-200 ${
                  isActive
                    ? "text-white"
                    : "bg-slate-50 text-slate-500 hover:bg-brand-green/10 hover:text-brand-green-dark"
                }`}
                aria-current={isActive ? "true" : undefined}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeCategoryPill"
                    className="absolute inset-0 bg-brand-green rounded-full shadow-md shadow-brand-green/20"
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  />
                )}
                <span className="relative z-10">{cat.name}</span>
              </a>
            );
          })}
        </div>

        {/* Right scroll button */}
        {canScrollRight && (
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 flex items-center justify-center bg-white/95 shadow-md rounded-full border border-slate-100 text-slate-400 hover:text-brand-green transition-colors"
            aria-label="Scroll categories right"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        )}
      </div>
    </motion.nav>
  );
}
