'use client'

import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

const wishes = [
  'Mong tình yêu chúng mình lớn mạnh hơn mỗi ngày',
  'Mãi biết ơn sự hiện diện của em trong đời anh',
  'Một ngàn kiếp sống cũng không đủ để bên em',
  'Em là phước lành lớn nhất và giấc mơ ngọt ngào nhất của anh',
  'Trong mọi kiếp sống, anh đều chọn em',
  'Tình yêu của chúng mình là cuộc phiêu lưu yêu thích của anh',
  'Cảm ơn em đã là mãi mãi của anh',
  'Bên em, anh tìm thấy mái nhà của mình',
]

interface WishModalProps {
  isOpen: boolean
  onClose: () => void
}

export const WishModal = ({ isOpen, onClose }: WishModalProps) => {
  const [currentWish, setCurrentWish] = useState(wishes[0])

  useEffect(() => {
    if (isOpen) {
      setCurrentWish(wishes[Math.floor(Math.random() * wishes.length)])
    }
  }, [isOpen])

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-md"
          >
            <div className="glass-effect p-8 rounded-2xl border-2 border-white/30">
              {/* Sparkles background */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl">
                {Array.from({ length: 5 }).map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{
                      y: [0, -100],
                      opacity: [1, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.4,
                    }}
                    className="absolute w-1 h-1 bg-white rounded-full"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: '100%',
                    }}
                  />
                ))}
              </div>

              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-white/20 transition-all z-10"
              >
                <X className="w-6 h-6 text-white" />
              </button>

              <motion.h2
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-3xl font-serif text-white mb-6 text-center"
              >
                Hãy Ước Một Điều
              </motion.h2>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                className="text-center mb-8"
              >
                <motion.div
                  animate={{
                    rotate: 360,
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                  }}
                  className="inline-block text-4xl mb-6"
                >
                  ✨
                </motion.div>
                <p className="text-white/90 text-lg font-serif leading-relaxed">
                  {currentWish}
                </p>
              </motion.div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onClose}
                className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-[#FFB7C5] to-[#F7A072] text-[#1A1F3A] font-semibold hover:shadow-lg hover:shadow-[#FFB7C5]/50 transition-all"
              >
                Đóng
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
