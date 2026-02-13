'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

const galleryImages = [
  {
    id: 1,
    url: '/kn1.png',
    alt: 'Kỷ niệm 1',
  },
  {
    id: 2,
    url: '/kn2.png',
    alt: 'Kỷ niệm 2',
  },
  {
    id: 3,
    url: '/kn3.png',
    alt: 'Kỷ niệm 3',
  },
  {
    id: 4,
    url: '/kn4.png',
    alt: 'Kỷ niệm 4',
  },
  {
    id: 5,
    url: '/kn5.png',
    alt: 'Kỷ niệm 5',
  },
  {
    id: 6,
    url: '/kn6.png',
    alt: 'Kỷ niệm 6',
  },
]

export const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  return (
    <section className="py-20 px-4 md:px-8 bg-gradient-to-b from-white to-pink-50">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl lg:text-6xl font-serif text-center mb-4 sakura-text text-balance"
        >
          Ký Ức Nở Hoa
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center text-gray-600 text-lg mb-16"
        >
          Mỗi khoảnh khắc bên em là một kho báu
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              onClick={() => setSelectedImage(image.id)}
              className="relative h-64 rounded-lg overflow-hidden cursor-pointer group"
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl max-h-[80vh]"
            >
              <img
                src={galleryImages.find((img) => img.id === selectedImage)?.url}
                alt="Kích thước đầy đủ"
                className="w-full h-full object-cover rounded-lg"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-white/20 hover:bg-white/40 transition-all"
              >
                <X size={24} className="text-white" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
