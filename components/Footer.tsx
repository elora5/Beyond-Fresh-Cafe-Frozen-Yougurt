"use client";

import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Star,
  ExternalLink,
} from "lucide-react";
import Image from "next/image";

const contactInfo = {
  address: "#315, 8560 8A Ave SW, Calgary, AB T3H 1T1",
  phone: "587-353-5550",
  email: "info@beyondfreshcafe.com",
  googleMapsUrl:
    "https://www.google.com/maps/search/?api=1&query=8560+8A+Ave+SW+Calgary+AB+T3H+1T1",
} as const;


const hoursOfOperation = [
  { days: "Monday – Friday", hours: "7:00 AM – 9:00 PM" },
  { days: "Saturday", hours: "8:00 AM – 10:00 PM" },
  { days: "Sunday", hours: "9:00 AM – 8:00 PM" },
] as const;

const reviewPlaceholders = [
  {
    platform: "Google",
    rating: 4.8,
    reviewCount: 320,
    quote: "Best frozen yogurt and wraps in town! Fresh ingredients every time.",
    author: "Happy Customer",
  },
  {
    platform: "Yelp",
    rating: 4.7,
    reviewCount: 185,
    quote: "Amazing smoothies and protein bowls. My go-to place for healthy food!",
    author: "Loyal Patron",
  },
] as const;

const footerLinks = [
  { label: "Menu", href: "#menu" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
] as const;

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut" as const,
    },
  }),
};

function RatingStars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1" aria-label={`Rating: ${rating} out of 5 stars`}>
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${
            i < Math.floor(rating)
              ? "fill-yellow-400 text-yellow-400"
              : "fill-yellow-400/30 text-yellow-400/30"
          }`}
          aria-hidden="true"
        />
      ))}
      <span className="ml-1 font-inter font-semibold text-sm text-white">
        {rating}
      </span>
    </div>
  );
}

export function Footer() {
  return (
    <footer
      id="contact"
      className="relative bg-brand-blue-dark overflow-hidden"
      role="contentinfo"
    >
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-blue-dark via-brand-blue to-brand-blue-dark opacity-80" />
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-green via-brand-purple to-brand-green" />

      {/* Decorative blurred orbs */}
      <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-brand-green/5 blur-3xl" />
      <div className="absolute bottom-20 left-10 w-48 h-48 rounded-full bg-brand-purple/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Reviews Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="py-12 sm:py-16 border-b border-white/10"
          aria-labelledby="reviews-heading"
        >
          <motion.h2
            custom={0}
            variants={fadeUpVariant}
            id="reviews-heading"
            className="font-poppins font-bold text-2xl sm:text-3xl text-white text-center mb-2"
          >
            What Our Customers Say
          </motion.h2>
          <motion.p
            custom={1}
            variants={fadeUpVariant}
            className="font-inter text-white/60 text-center mb-8 sm:mb-12 text-sm sm:text-base"
          >
            Loved by thousands of locals
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-3xl mx-auto">
            {reviewPlaceholders.map((review, index) => (
              <motion.div
                key={review.platform}
                custom={index + 2}
                variants={fadeUpVariant}
                className="group relative p-5 sm:p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-brand-green/30 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="font-poppins font-semibold text-sm text-brand-green">
                    {review.platform}
                  </span>
                  <span className="font-inter text-xs text-white/50">
                    {review.reviewCount} reviews
                  </span>
                </div>
                <RatingStars rating={review.rating} />
                <p className="mt-3 font-inter text-sm text-white/80 leading-relaxed italic">
                  &ldquo;{review.quote}&rdquo;
                </p>
                <p className="mt-2 font-inter text-xs text-white/40">
                  — {review.author}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Main Footer Content */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="py-12 sm:py-16 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8"
        >
          {/* Brand Column */}
          <motion.div custom={0} variants={fadeUpVariant} className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-full overflow-hidden bg-white ring-2 ring-brand-green/30">
                <Image
                  src="/logo.jpg"
                  alt="Beyond Fresh Cafe Frozen Yougurt Logo"
                  fill
                  sizes="48px"
                  className="object-contain p-1"
                />
              </div>
              <div>
                <h3 className="font-poppins font-bold text-lg text-white">
                  Beyond Fresh
                </h3>
                <p className="font-poppins font-semibold text-xs text-brand-green">
                  Cafe & Frozen Yougurt
                </p>
              </div>
            </div>
            <p className="font-inter text-sm text-white/60 leading-relaxed max-w-xs">
              Fresh, healthy & delicious meals crafted with quality ingredients.
              Every bowl, wrap, and frozen yogurt is made to perfection.
            </p>

            {/* Quick Links */}
            <nav aria-label="Footer navigation" className="pt-2">
              <ul className="flex gap-4">
                {footerLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="font-inter text-sm text-white/50 hover:text-brand-green transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </motion.div>

          {/* Contact Column */}
          <motion.div custom={1} variants={fadeUpVariant} className="space-y-4">
            <h3 className="font-poppins font-bold text-base text-white flex items-center gap-2">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-brand-green/10">
                <MapPin className="w-4 h-4 text-brand-green" aria-hidden="true" />
              </span>
              Contact Us
            </h3>
            <address className="not-italic space-y-3">
              <a
                href={contactInfo.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 group"
                aria-label={`Address: ${contactInfo.address}`}
              >
                <MapPin className="w-4 h-4 text-brand-green/70 mt-0.5 shrink-0" aria-hidden="true" />
                <span className="font-inter text-sm text-white/70 group-hover:text-brand-green transition-colors duration-200">
                  {contactInfo.address}
                </span>
              </a>
              <a
                href={`tel:${contactInfo.phone.replace(/[^\d+]/g, "")}`}
                className="flex items-center gap-3 group"
                aria-label={`Phone: ${contactInfo.phone}`}
              >
                <Phone className="w-4 h-4 text-brand-green/70 shrink-0" aria-hidden="true" />
                <span className="font-inter text-sm text-white/70 group-hover:text-brand-green transition-colors duration-200">
                  {contactInfo.phone}
                </span>
              </a>
              <a
                href={`mailto:${contactInfo.email}`}
                className="flex items-center gap-3 group"
                aria-label={`Email: ${contactInfo.email}`}
              >
                <Mail className="w-4 h-4 text-brand-green/70 shrink-0" aria-hidden="true" />
                <span className="font-inter text-sm text-white/70 group-hover:text-brand-green transition-colors duration-200">
                  {contactInfo.email}
                </span>
              </a>
            </address>
          </motion.div>

          {/* Hours Column */}
          <motion.div custom={2} variants={fadeUpVariant} className="space-y-4">
            <h3 className="font-poppins font-bold text-base text-white flex items-center gap-2">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-brand-green/10">
                <Clock className="w-4 h-4 text-brand-green" aria-hidden="true" />
              </span>
              Hours of Operation
            </h3>
            <div className="space-y-2.5">
              {hoursOfOperation.map((schedule) => (
                <div
                  key={schedule.days}
                  className="flex items-center justify-between gap-4 py-1.5 border-b border-white/5 last:border-0"
                >
                  <span className="font-inter text-sm text-white/70">
                    {schedule.days}
                  </span>
                  <span className="font-inter font-semibold text-sm text-brand-green-light whitespace-nowrap">
                    {schedule.hours}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="py-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3"
        >
          <p className="font-inter text-xs text-white/40">
            © {new Date().getFullYear()} Beyond Fresh Cafe Frozen Yougurt. All rights reserved.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-1 font-inter text-xs text-white/40 hover:text-brand-green transition-colors duration-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            Leave us a review
            <ExternalLink className="w-3 h-3" aria-hidden="true" />
          </a>
        </motion.div>
      </div>
    </footer>
  );
}
