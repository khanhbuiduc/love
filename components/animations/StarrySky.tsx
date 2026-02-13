'use client'

import React, { useEffect, useState } from 'react'

export const StarrySky = () => {
  const [stars, setStars] = useState<Array<{ id: number; x: number; y: number; size: number; duration: number }>>([])

  useEffect(() => {
    const starCount = 50
    const newStars = Array.from({ length: starCount }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      duration: 3 + Math.random() * 2,
    }))
    setStars(newStars)
  }, [])

  return (
    <div className="absolute inset-0">
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            background: '#F5F5F5',
            boxShadow: '0 0 8px 1px rgba(245, 245, 245, 0.6)',
            animation: `twinkle ${star.duration}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 2}s`,
          }}
        />
      ))}
    </div>
  )
}
