"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Music, VolumeX } from "lucide-react";

export const MusicToggle = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play().catch(() => {
          setIsPlaying(false);
        });
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

  const toggleMusic = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <>
      <audio ref={audioRef} src="/David Hicken - A Day With You.mp3" loop />
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={toggleMusic}
        className="fixed top-8 right-8 z-50 p-3 rounded-full glass-effect backdrop-blur-xl border border-white/20 text-white hover:border-[#FFB7C5] transition-all duration-300"
      >
        {isPlaying ? <Music size={24} /> : <VolumeX size={24} />}
      </motion.button>
    </>
  );
};
