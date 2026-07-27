"use client";

import { motion } from "framer-motion";
import { ChevronDown, Sparkles, Heart, Leaf } from "lucide-react";
import Image from "next/image";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay,
      duration: 0.7,
      ease: "easeOut" as const,
    },
  }),
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (delay: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay,
      duration: 0.5,
      ease: "easeOut" as const,
    },
  }),
};

const floatingAnimation = {
  y: [-8, 8, -8],
  transition: {
    duration: 4,
    repeat: Infinity,
    ease: "easeInOut" as const,
  },
};

const floatingAnimationSlow = {
  y: [-6, 6, -6],
  rotate: [0, 5, -5, 0],
  transition: {
    duration: 6,
    repeat: Infinity,
    ease: "easeInOut" as const,
  },
};

export function Hero() {
  return (
    <section
      id="about"
      className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden px-4 pt-20 pb-16"
      aria-label="Welcome to Beyond Fresh Cafe"
    >
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-emerald-50/60 to-purple-50/40" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-green/5 via-transparent to-brand-purple/5" />

      {/* Animated decorative orbs */}
      <motion.div
        animate={floatingAnimation}
        className="absolute top-24 left-[8%] w-24 h-24 sm:w-40 sm:h-40 rounded-full bg-gradient-to-br from-brand-green/15 to-brand-green/5 blur-2xl"
      />
      <motion.div
        animate={floatingAnimationSlow}
        className="absolute top-[30%] right-[5%] w-32 h-32 sm:w-52 sm:h-52 rounded-full bg-gradient-to-br from-brand-purple/10 to-brand-purple/5 blur-2xl"
      />
      <motion.div
        animate={{
          ...floatingAnimation,
          transition: { ...floatingAnimation.transition, delay: 1 },
        }}
        className="absolute bottom-[20%] left-[15%] w-20 h-20 sm:w-36 sm:h-36 rounded-full bg-gradient-to-br from-yellow-300/10 to-orange-200/5 blur-2xl"
      />

      {/* Floating decorative icons */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15, ...floatingAnimationSlow }}
        transition={{ delay: 1 }}
        className="absolute top-[18%] right-[12%] hidden sm:block"
      >
        <Leaf className="w-12 h-12 text-brand-green" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.12, ...floatingAnimation }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-[30%] left-[8%] hidden sm:block"
      >
        <Heart className="w-10 h-10 text-brand-purple" />
      </motion.div>

      {/* Subtle dot pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #0f172a 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* Main content */}
      <div className="relative z-10 text-center max-w-3xl mx-auto space-y-6 sm:space-y-8">
        {/* Logo accent */}
        <motion.div
          custom={0.1}
          initial="hidden"
          animate="visible"
          variants={scaleIn}
          className="flex justify-center"
        >
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden bg-white ring-4 ring-brand-green/20 shadow-2xl shadow-brand-green/20"
          >
            <Image
              src="/logo.jpg"
              alt="Beyond Fresh Cafe Frozen Yougurt"
              fill
              sizes="96px"
              className="object-contain"
              priority
            />
          </motion.div>
        </motion.div>

        {/* Badge */}
        <motion.div
          custom={0.2}
          initial="hidden"
          animate="visible"
          variants={scaleIn}
          className="flex justify-center"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/70 backdrop-blur-sm border border-brand-green/15 shadow-sm">
            <Sparkles
              className="w-4 h-4 text-brand-green"
              aria-hidden="true"
            />
            <span className="font-inter font-medium text-sm text-brand-green-dark">
              Digital Menu
            </span>
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h1
          custom={0.3}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="font-poppins font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-brand-blue-dark leading-[1.15] tracking-tight"
        >
          Fresh, Healthy &{" "}
          <span className="relative inline-block">
            <span className="bg-gradient-to-r from-brand-green via-brand-green-dark to-brand-green bg-clip-text text-transparent">
              Delicious
            </span>
            <motion.span
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 1, duration: 0.6, ease: "easeOut" }}
              className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-brand-green/40 to-brand-green-dark/40 rounded-full origin-left"
            />
          </span>
          <br />
          <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
            Meals, Orchestrated.
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          custom={0.5}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="font-inter text-base sm:text-lg md:text-xl text-brand-blue-light/70 max-w-xl mx-auto leading-relaxed"
        >
          Quality standards you can verify in every bowl, wrap, and frozen
          yogurt.
        </motion.p>

        {/* Trust Signal */}
        <motion.div
          custom={0.7}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="flex justify-center"
        >
          <div className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl bg-white/50 backdrop-blur-sm border border-brand-purple/10">
            <div className="flex -space-x-1.5">
              {[
                "bg-brand-green",
                "bg-brand-purple",
                "bg-yellow-400",
                "bg-brand-green-dark",
              ].map((color, i) => (
                <div
                  key={i}
                  className={`w-7 h-7 rounded-full ${color} ring-2 ring-white flex items-center justify-center`}
                >
                  <Heart className="w-3 h-3 text-white fill-white" />
                </div>
              ))}
            </div>
            <p className="font-inter text-sm text-brand-blue-light/80 text-left">
              <span className="font-semibold text-brand-blue-dark">
                Loved by thousands
              </span>{" "}
              of locals for our
              <br className="hidden sm:inline" /> signature wraps, fresh
              smoothies, and frozen yogurt.
            </p>
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          custom={0.9}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="pt-4 sm:pt-6 relative"
        >
          {/* Animated pulse ring */}
          <motion.div
            animate={{
              scale: [1, 1.25, 1],
              opacity: [0.4, 0, 0.4],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-4 sm:top-6 left-0 right-0 bottom-0 bg-brand-green rounded-full blur-md z-0"
          />
          <a
            href="#menu"
            className="relative z-10 group inline-flex items-center gap-2.5 px-8 py-4 font-poppins font-semibold text-base text-white bg-gradient-to-r from-brand-green to-brand-green-dark rounded-full shadow-xl shadow-brand-green/25 hover:shadow-brand-green/40 hover:scale-105 active:scale-95 transition-all duration-300"
            aria-label="Scroll down to view our menu"
          >
            Scroll to Menu
            <motion.span
              animate={{ y: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <ChevronDown className="w-5 h-5" aria-hidden="true" />
            </motion.span>
          </a>
        </motion.div>
      </div>

      {/* Bottom wave/gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
