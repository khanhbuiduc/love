"use client";

import React from "react";
import { motion } from "framer-motion";

export const HeroSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-gradient-to-b from-[#1A1F3A] via-[#2D3859] to-[#9C89B8]">
      {/* Animated clouds */}
      <motion.div
        animate={{ x: [-100, 100, -100] }}
        transition={{ duration: 20, repeat: Infinity }}
        className="absolute top-20 left-0 right-0 h-32 bg-gradient-to-b from-white/10 to-transparent rounded-full blur-3xl"
      />

      {/* Left character silhouette */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="absolute bottom-0 left-1/4 w-40 h-96"
      >
        <svg viewBox="0 0 200 400" className="w-full h-full">
          <defs>
            <linearGradient
              id="leftCharGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#FFB7C5" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#9C89B8" stopOpacity="0.6" />
            </linearGradient>
          </defs>
          {/* Head */}
          <circle
            cx="100"
            cy="60"
            r="35"
            fill="url(#leftCharGradient)"
            opacity="0.7"
          />
          {/* Hair */}
          <path
            d="M 65 45 Q 100 20 135 45"
            stroke="url(#leftCharGradient)"
            strokeWidth="8"
            fill="none"
            opacity="0.7"
          />
          {/* Body */}
          <rect
            x="80"
            y="100"
            width="40"
            height="120"
            fill="url(#leftCharGradient)"
            opacity="0.6"
          />
          {/* Legs */}
          <rect
            x="85"
            y="220"
            width="12"
            height="80"
            fill="url(#leftCharGradient)"
            opacity="0.5"
          />
          <rect
            x="103"
            y="220"
            width="12"
            height="80"
            fill="url(#leftCharGradient)"
            opacity="0.5"
          />
        </svg>
      </motion.div>

      {/* Right character silhouette */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="absolute bottom-0 right-1/4 w-40 h-96"
      >
        <svg viewBox="0 0 200 400" className="w-full h-full">
          <defs>
            <linearGradient
              id="rightCharGradient"
              x1="100%"
              y1="0%"
              x2="0%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#F7A072" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#FFB7C5" stopOpacity="0.6" />
            </linearGradient>
          </defs>
          {/* Head */}
          <circle
            cx="100"
            cy="60"
            r="35"
            fill="url(#rightCharGradient)"
            opacity="0.7"
          />
          {/* Hair */}
          <path
            d="M 65 45 Q 100 20 135 45"
            stroke="url(#rightCharGradient)"
            strokeWidth="8"
            fill="none"
            opacity="0.7"
          />
          {/* Body */}
          <rect
            x="80"
            y="100"
            width="40"
            height="120"
            fill="url(#rightCharGradient)"
            opacity="0.6"
          />
          {/* Legs */}
          <rect
            x="85"
            y="220"
            width="12"
            height="80"
            fill="url(#rightCharGradient)"
            opacity="0.5"
          />
          <rect
            x="103"
            y="220"
            width="12"
            height="80"
            fill="url(#rightCharGradient)"
            opacity="0.5"
          />
        </svg>
      </motion.div>

      {/* Center text */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="absolute inset-0 flex flex-col items-center justify-center z-10 text-center px-4"
      >
        <h1 className="text-3xl md:text-5xl lg:text-7xl font-serif text-white mb-6 tracking-wider text-balance px-4">
          Hai Con Tim Chung Một Phương Trời
        </h1>
        <p className="text-base md:text-lg lg:text-2xl text-white/70 mb-12 text-pretty max-w-2xl px-4">
          Hành trình bắt đầu từ tiếng gọi, và trở thành cả một đời thương nhớ.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => scrollToSection("timeline")}
          className="px-8 py-4 rounded-full bg-gradient-to-r from-[#FFB7C5] to-[#F7A072] text-[#1A1F3A] font-semibold text-lg hover:shadow-lg hover:shadow-[#FFB7C5]/50 transition-all"
        >
          Bắt đầu câu chuyện nào
        </motion.button>
      </motion.div>

      {/* Glowing glow effect around characters */}
      <motion.div
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute bottom-0 left-1/4 w-40 h-96 blur-3xl bg-gradient-to-t from-[#FFB7C5] to-transparent rounded-full opacity-20"
      />
      <motion.div
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute bottom-0 right-1/4 w-40 h-96 blur-3xl bg-gradient-to-t from-[#F7A072] to-transparent rounded-full opacity-20"
      />
    </div>
  );
};
