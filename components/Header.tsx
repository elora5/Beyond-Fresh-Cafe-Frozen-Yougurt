"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { Menu, X, MapPin } from "lucide-react";

const navLinks = [
  { label: "Menu", href: "#menu" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
] as const;

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 20);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.1 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-xl shadow-lg shadow-brand-green/5 border-b border-brand-green/10"
          : "bg-white/60 backdrop-blur-md"
      }`}
      role="banner"
    >
      {/* Scroll Progress Bar */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-brand-green via-brand-purple to-brand-green origin-left z-50"
        style={{ scaleX }}
      />
      <nav
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        <div className="flex h-16 sm:h-20 items-center justify-between">
          {/* Logo & Brand */}
          <Link
            href="/"
            className="flex items-center gap-2 sm:gap-3 group"
            aria-label="Beyond Fresh Cafe - Home"
          >
            <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden bg-white ring-2 ring-brand-green/20 group-hover:ring-brand-green/50 transition-all duration-300">
              <Image
                src="/logo.jpg"
                alt="Beyond Fresh Cafe Frozen Yougurt Logo"
                fill
                sizes="48px"
                className="object-contain p-1"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-poppins font-bold text-sm sm:text-base text-brand-blue-dark leading-tight tracking-tight">
                Beyond Fresh
              </span>
              <span className="font-poppins font-semibold text-[10px] sm:text-xs text-brand-green leading-tight">
                Cafe & Frozen Yougurt
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="relative px-4 py-2 font-inter font-medium text-sm text-brand-blue-light hover:text-brand-green transition-colors duration-200 rounded-full hover:bg-brand-green/5 group"
              >
                {link.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-brand-green rounded-full group-hover:w-6 transition-all duration-300" />
              </Link>
            ))}

            <a
              href="https://www.google.com/maps/search/?api=1&query=8560+8A+Ave+SW+Calgary+AB+T3H+1T1"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 lg:ml-4 inline-flex items-center gap-2 px-5 py-2.5 font-inter font-semibold text-sm text-white bg-gradient-to-r from-brand-green to-brand-green-dark rounded-full shadow-lg shadow-brand-green/25 hover:shadow-brand-green/40 hover:scale-105 active:scale-95 transition-all duration-200"
              aria-label="Visit Us - Find our location on Google Maps"
            >
              <MapPin className="w-4 h-4" aria-hidden="true" />
              Visit Us
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={toggleMenu}
            className="md:hidden relative p-2 rounded-xl text-brand-blue-dark hover:bg-brand-green/10 transition-colors duration-200"
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
          >
            <AnimatePresence mode="wait" initial={false}>
              {isMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-6 h-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-6 h-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              id="mobile-navigation"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="md:hidden overflow-hidden"
              role="navigation"
              aria-label="Mobile navigation"
            >
              <div className="pb-4 pt-2 space-y-1">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.label}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.08, duration: 0.3 }}
                  >
                    <Link
                      href={link.href}
                      onClick={closeMenu}
                      className="block px-4 py-3 font-inter font-medium text-brand-blue-dark hover:text-brand-green hover:bg-brand-green/5 rounded-xl transition-all duration-200"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}

                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: navLinks.length * 0.08, duration: 0.3 }}
                  className="pt-2 px-4"
                >
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=8560+8A+Ave+SW+Calgary+AB+T3H+1T1"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={closeMenu}
                    className="flex items-center justify-center gap-2 w-full px-5 py-3 font-inter font-semibold text-sm text-white bg-gradient-to-r from-brand-green to-brand-green-dark rounded-2xl shadow-lg shadow-brand-green/25 hover:shadow-brand-green/40 transition-all duration-200"
                    aria-label="Visit Us - Find our location on Google Maps"
                  >
                    <MapPin className="w-4 h-4" aria-hidden="true" />
                    Visit Us
                  </a>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}
