"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { DollarSign, Utensils, Plus, ImageOff } from "lucide-react";
import Image from "next/image";
import type { MenuItem } from "@/data/menu";
import { formatPrice } from "@/data/menu";

interface MenuCardProps {
  item: MenuItem;
  index: number;
}

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.06,
      duration: 0.5,
      ease: "easeOut" as const,
    },
  }),
};

export function MenuCard({ item, index }: MenuCardProps) {
  const [imgError, setImgError] = useState(false);

  const displayPrice = item.price
    ? formatPrice(item.price)
    : item.sizes && item.sizes.length > 0
      ? `From ${formatPrice(item.sizes[0].price)}`
      : "Ask for price";

  return (
    <motion.article
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      whileHover={{ y: -6, transition: { duration: 0.25, ease: "easeOut" } }}
      className="group relative flex flex-col h-full rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-brand-green/8 hover:border-brand-green/20 transition-all duration-300 overflow-hidden"
      aria-label={`${item.name} - ${displayPrice}`}
    >
      {/* Food Image */}
      <div className="relative w-full aspect-[4/3] overflow-hidden bg-slate-50">
        {item.imageUrl && !imgError ? (
          <Image
            src={item.imageUrl}
            alt={item.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-brand-green/5 to-brand-purple/5">
            <ImageOff className="w-8 h-8 text-slate-300 mb-1" aria-hidden="true" />
            <span className="font-inter text-xs text-slate-400">Image loading...</span>
          </div>
        )}

        {/* Price overlay badge */}
        <div className="absolute top-3 right-3 inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-sm shadow-md border border-white/50">
          <DollarSign
            className="w-3 h-3 text-brand-green"
            aria-hidden="true"
          />
          <span className="font-inter font-bold text-xs text-brand-green-dark">
            {item.price
              ? item.price.toFixed(2)
              : item.sizes?.[0]?.price.toFixed(2) ?? "—"}
          </span>
        </div>

        {/* Gradient overlay at bottom of image */}
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white to-transparent" />
      </div>

      {/* Card content */}
      <div className="flex flex-col flex-1 p-4 sm:p-5 -mt-2">
        {/* Header row */}
        <div className="flex items-center gap-2 mb-1.5">
          <span className="shrink-0 inline-flex items-center justify-center w-7 h-7 rounded-full bg-brand-green/8 group-hover:bg-brand-green/15 transition-colors duration-300">
            <Utensils
              className="w-3 h-3 text-brand-green"
              aria-hidden="true"
            />
          </span>
          <h3 className="font-poppins font-bold text-sm sm:text-base text-brand-blue-dark leading-snug line-clamp-1">
            {item.name}
          </h3>
        </div>

        {/* Description */}
        <p className="font-inter text-xs sm:text-sm text-slate-500 leading-relaxed line-clamp-2 mb-3 ml-9">
          {item.description}
        </p>

        {/* Spacer to push bottom content down */}
        <div className="flex-1" />

        {/* Sizes (if available) */}
        {item.sizes && item.sizes.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-2 ml-9">
            {item.sizes.map((size) => (
              <span
                key={size.label}
                className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-slate-50 border border-slate-100 text-[10px] sm:text-xs font-inter"
              >
                <span className="font-medium text-slate-600">
                  {size.label}
                </span>
                <span className="font-semibold text-brand-green-dark">
                  {formatPrice(size.price)}
                </span>
              </span>
            ))}
          </div>
        )}

        {/* Combo info */}
        {item.comboPrice && (
          <div className="flex items-center gap-1.5 px-2.5 py-1.5 ml-9 rounded-xl bg-brand-purple/5 border border-brand-purple/10">
            <Plus
              className="w-3 h-3 text-brand-purple shrink-0"
              aria-hidden="true"
            />
            <span className="font-inter text-[10px] sm:text-xs text-brand-purple-dark">
              <span className="font-semibold">
                Combo {formatPrice(item.comboPrice)}
              </span>
              {item.comboDescription && (
                <span className="text-slate-400">
                  {" — "}
                  {item.comboDescription}
                </span>
              )}
            </span>
          </div>
        )}
      </div>
    </motion.article>
  );
}
