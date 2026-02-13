'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { StarrySky } from '../animations/StarrySky'

export const Footer = () => {
  return (
    <section className="relative py-20 px-4 md:px-8 bg-gradient-to-b from-[#1A1F3A] to-black overflow-hidden">
      <StarrySky />

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <motion.p
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="text-2xl md:text-3xl font-serif text-white"
          >
            "Dưới những vì sao, tình yêu chúng mình tỏa sáng nhất"
          </motion.p>

          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-5xl"
          >
            ♡
          </motion.div>

          <p className="text-white/50 text-sm">
            Được làm từ tình yêu và những khoảnh khắc của Bùi Đức Khánh - "cún yêu" trong sáng của em
          </p>
        </motion.div>
      </div>
    </section>
  )
}
