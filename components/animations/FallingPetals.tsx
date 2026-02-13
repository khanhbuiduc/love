'use client'

import React, { useEffect, useState } from 'react'

export const FallingPetals = () => {
  const [petals, setPetals] = useState<Array<{ id: number; left: number; delay: number; duration: number }>>([])

  useEffect(() => {
    const initialPetals = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 2,
      duration: 8 + Math.random() * 4,
    }))
    setPetals(initialPetals)

    const interval = setInterval(() => {
      setPetals((prev) => {
        const newPetal = {
          id: Math.max(...prev.map((p) => p.id), 0) + 1,
          left: Math.random() * 100,
          delay: 0,
          duration: 8 + Math.random() * 4,
        }
        return prev.length > 30 ? [...prev.slice(-20), newPetal] : [...prev, newPetal]
      })
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {petals.map((petal) => (
        <div
          key={petal.id}
          className="absolute w-3 h-3 rounded-full opacity-60"
          style={{
            left: `${petal.left}%`,
            top: '-10px',
            background: `linear-gradient(135deg, #FFB7C5 0%, #FFE0EA 100%)`,
            animation: `fall ${petal.duration}s linear ${petal.delay}s infinite`,
            filter: 'blur(0.5px)',
          }}
        />
      ))}
    </div>
  )
}
