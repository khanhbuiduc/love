'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Heart, Sparkles, Music, Sunset, Star, Flame } from 'lucide-react'

const reasons = [
  {
    id: 1,
    title: 'Sự dịu dàng Của Em',
    description: 'Cách em quan tâm đến anh, khi em nói chuyện với anh, khi em ôm anh, khi em hôn anh, tất cả đều làm anh hạnh phúc',
    icon: Heart,
  },
  {
    id: 2,
    title: 'Nụ Cười Của Em',
    description: 'Ngày đầu mình gặp nhau, nụ cười rạng rỡ của em đã làm anh say đắm. Lúc đó anh ngập ngừng chẳng dám nói gì, chỉ biết con tim mình đã lỡ nhịp.',
    icon: Sparkles,
  },
  {
    id: 3,
    title: 'Khoảnh Khắc Của Ta',
    description: 'Là những lúc cùng khóc, cùng cười, rồi lại ngây ngô đứng hình khi chạm mặt nhau.',
    icon: Music,
  },
  {
    id: 4,
    title: 'Ước Mơ Của Em',
    description: 'Em là người đầu tiên cho anh thấy một ước mơ rõ ràng: một là yêu anh, hai là được cất cao tiếng hát. Anh sẽ luôn ở đây ủng hộ em.',
    icon: Sunset,
  },
  {
    id: 5,
    title: 'Sự Tự Tin Của Em',
    description: 'Ngày xưa anh nhút nhát và tự ti lắm, nhưng nhờ những lời động viên của em qua bao cuộc gọi, anh đã thấy mình tự tin và yêu đời hơn biết bao.',
    icon: Star,
  },
  {
    id: 6,
    title: 'Tình Yêu Của Em',
    description: 'Và điều kỳ diệu nhất, chính là tình yêu vô bờ bến mà em dành cho anh.',
    icon: Flame,
  },
]

export const ReasonsCards = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section className="py-20 px-4 md:px-8 bg-gradient-to-b from-pink-50 to-purple-50">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl lg:text-6xl font-serif text-center mb-4 sakura-text text-balance"
        >
          Những Cánh Hoa Yêu Thương
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center text-gray-600 text-lg mb-16"
        >
          Những lý do em là tất cả của anh
        </motion.p>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {reasons.map((reason, index) => {
            const Icon = reason.icon
            return (
              <motion.div
                key={reason.id}
                variants={cardVariants}
                whileHover={{
                  y: -8,
                  boxShadow: '0 20px 40px rgba(255, 183, 197, 0.3)',
                }}
                className="glass-effect p-8 rounded-lg border-2 border-white/20 hover:border-[#FFB7C5] transition-all duration-300 group"
              >
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                  className="w-16 h-16 rounded-full bg-gradient-to-br from-[#FFB7C5] to-[#F7A072] flex items-center justify-center mb-4 group-hover:shadow-lg group-hover:shadow-[#FFB7C5]/50"
                >
                  <Icon className="w-8 h-8 text-white" />
                </motion.div>

                <h3 className="text-2xl font-serif text-[#1A1F3A] mb-2">{reason.title}</h3>
                <p className="text-gray-600">{reason.description}</p>

                <motion.div
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                  className="mt-4 h-1 bg-gradient-to-r from-[#FFB7C5] to-transparent rounded-full"
                />
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
