"use client";

import { motion } from "framer-motion";
import { MenuCard } from "./MenuCard";
import type { MenuCategory } from "@/data/menu";

interface MenuSectionProps {
  category: MenuCategory;
  index: number;
}

const sectionHeaderVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
    },
  },
};

export function MenuSection({ category, index }: MenuSectionProps) {
  return (
    <section
      id={category.id}
      className="scroll-mt-36"
      aria-labelledby={`heading-${category.id}`}
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={sectionHeaderVariants}
        className="mb-6 sm:mb-8"
      >
        {/* Category header */}
        <div className="flex items-center gap-3 mb-2">
          <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-2xl bg-gradient-to-br from-brand-green/15 to-brand-green/5">
            <span className="font-poppins font-bold text-sm sm:text-base text-brand-green">
              {(index + 1).toString().padStart(2, "0")}
            </span>
          </div>
          <h2
            id={`heading-${category.id}`}
            className="font-poppins font-bold text-xl sm:text-2xl text-brand-blue-dark"
          >
            {category.name}
          </h2>
        </div>

        {/* Category meta info */}
        <div className="flex flex-wrap items-center gap-2 ml-11 sm:ml-[52px]">
          {category.defaultPrice && (
            <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-brand-green/8 font-inter font-semibold text-xs text-brand-green-dark">
              Starting at ${category.defaultPrice.toFixed(2)}
            </span>
          )}
          {category.mealAddOn && (
            <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-brand-purple/6 font-inter text-xs text-brand-purple-dark">
              🍽️ {category.mealAddOn}
            </span>
          )}
          {category.description && (
            <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-slate-50 font-inter text-xs text-slate-500">
              {category.description}
            </span>
          )}
        </div>
      </motion.div>

      {/* Items grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
        {category.items.map((item, itemIndex) => (
          <MenuCard key={item.id} item={item} index={itemIndex} />
        ))}
      </div>
    </section>
  );
}
