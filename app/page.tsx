"use client";

import { useState, useEffect, useCallback } from "react";
import { Hero } from "@/components/Hero";
import { CategoryNav } from "@/components/CategoryNav";
import { MenuSection } from "@/components/MenuSection";
import { menuCategories, totalMenuItems } from "@/data/menu";
import { motion } from "framer-motion";
import { UtensilsCrossed } from "lucide-react";

export default function Home() {
  const [activeCategory, setActiveCategory] = useState(menuCategories[0].id);

  const handleScroll = useCallback(() => {
    const sections = menuCategories
      .map((cat) => ({
        id: cat.id,
        el: document.getElementById(cat.id),
      }))
      .filter((s) => s.el !== null);

    // Find the section closest to the top of the viewport
    const headerOffset = 160; // sticky header + category nav height
    let current = sections[0]?.id ?? menuCategories[0].id;

    for (const section of sections) {
      if (section.el) {
        const rect = section.el.getBoundingClientRect();
        if (rect.top <= headerOffset + 50) {
          current = section.id;
        }
      }
    }

    setActiveCategory(current);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <Hero />

      {/* Menu Section */}
      <div id="menu">
        {/* Menu Section Header */}
        <div className="bg-white pt-12 sm:pt-16 pb-4 sm:pb-6 px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-7xl mx-auto text-center space-y-3"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-green/8 border border-brand-green/15">
              <UtensilsCrossed
                className="w-4 h-4 text-brand-green"
                aria-hidden="true"
              />
              <span className="font-inter font-medium text-sm text-brand-green-dark">
                {totalMenuItems} Items · {menuCategories.length} Categories
              </span>
            </div>
            <h2 className="font-poppins font-bold text-2xl sm:text-3xl md:text-4xl text-brand-blue-dark">
              Our Complete Menu
            </h2>
            <p className="font-inter text-sm sm:text-base text-slate-500 max-w-lg mx-auto">
              Explore our full range of fresh wraps, protein bowls, smoothies,
              and more — all made with quality ingredients.
            </p>
          </motion.div>
        </div>

        {/* Sticky Category Navigation */}
        <CategoryNav
          categories={menuCategories}
          activeCategory={activeCategory}
        />

        {/* All Menu Sections */}
        <div className="bg-gradient-to-b from-slate-50/50 to-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-12 sm:space-y-16">
            {menuCategories.map((category, index) => (
              <MenuSection
                key={category.id}
                category={category}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
