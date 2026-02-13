'use client'

import React, { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FallingPetals } from '../animations/FallingPetals'

interface PasswordGateProps {
  onUnlock: () => void
}

export const PasswordGate = ({ onUnlock }: PasswordGateProps) => {
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (password.toLowerCase() === 'emmuonomanh') {
      setPassword('')
      onUnlock()
    } else {
      setError(true)
      setPassword('')
      setTimeout(() => setError(false), 1500)
    }
  }

  return (
    <div className="relative w-full h-screen overflow-hidden bg-gradient-to-b from-[#F7A072] via-[#9C89B8] to-[#1A1F3A] flex items-center justify-center">
      <FallingPetals />

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="glass-effect p-12 max-w-md w-full mx-4"
      >
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-serif text-white mb-2 tracking-wider">あなたは私と一番何をしたいですか？</h1>
          <p className="text-xs md:text-sm text-white/70">Nơi Của Định Mệnh</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <input
              ref={inputRef}
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Nhập mật khẩu..."
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-[#FFB7C5] focus:shadow-lg focus:shadow-[#FFB7C5]/30 transition-all"
            />
          </div>

          <AnimatePresence>
            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="text-center text-red-300 text-sm"
              >
                Mật khẩu sai. Thử lại nhé.
              </motion.div>
            )}
          </AnimatePresence>

          <button
            type="submit"
            className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-[#FFB7C5] to-[#F7A072] text-[#1A1F3A] font-semibold hover:shadow-lg hover:shadow-[#FFB7C5]/50 transition-all duration-300"
          >
            Mở Khóa
          </button>
        </form>

        <p className="text-center text-white/40 text-xs mt-6">
          Khoảnh khắc này chỉ dành cho chúng ta
        </p>
      </motion.div>
    </div>
  )
}
