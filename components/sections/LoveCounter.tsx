'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'

export const LoveCounter = () => {
  const [time, setTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })

  useEffect(() => {
    const anniversaryDate = new Date('2023-03-23').getTime()

    const calculateTime = () => {
      const now = new Date().getTime()
      const difference = now - anniversaryDate

      setTime({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      })
    }

    calculateTime()
    const interval = setInterval(calculateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  const CounterCard = ({ label, value }: { label: string; value: number }) => (
    <motion.div
      whileHover={{ y: -5 }}
      className="glass-effect p-6 rounded-lg text-center"
    >
      <div className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FFB7C5] to-[#F7A072] mb-2">
        {String(value).padStart(2, '0')}
      </div>
      <div className="text-white/70 font-serif text-lg">{label}</div>
    </motion.div>
  )

  return (
    <section className="py-20 px-4 md:px-8 bg-gradient-to-b from-[#1A1F3A] to-[#2D3859] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-gradient-to-r from-[#FFB7C5] to-[#F7A072] blur-3xl"
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl lg:text-6xl font-serif text-center mb-4 text-white text-balance"
        >
          Thời Gian Bên Nhau
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mb-16"
        >
          <Heart className="w-12 h-12 text-[#FFB7C5] animate-pulse" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
        >
          <CounterCard label="Ngày" value={time.days} />
          <CounterCard label="Giờ" value={time.hours} />
          <CounterCard label="Phút" value={time.minutes} />
          <CounterCard label="Giây" value={time.seconds} />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center text-white/60 text-lg mt-12 font-serif"
        >
          Mỗi khoảnh khắc bên em là một điều phước lành
        </motion.p>
      </div>
    </section>
  )
}
