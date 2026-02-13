'use client'

import React, { useEffect, useState } from 'react'

interface ShootingStarProps {
  onShootingStar?: () => void
}

export const ShootingStar = ({ onShootingStar }: ShootingStarProps) => {
  const [star, setStar] = useState<{ id: number; startX: number; startY: number; endX: number; endY: number } | null>(
    null
  )

  useEffect(() => {
    const interval = setInterval(() => {
      const startX = Math.random() * 100
      const startY = Math.random() * 40
      const endX = startX + (Math.random() - 0.5) * 100
      const endY = startY + Math.random() * 60

      setStar({
        id: Date.now(),
        startX,
        startY,
        endX,
        endY,
      })

      onShootingStar?.()

      setTimeout(() => setStar(null), 2000)
    }, 12000 + Math.random() * 8000)

    return () => clearInterval(interval)
  }, [onShootingStar])

  if (!star) return null

  return (
    <div
      className="fixed w-1 h-1 rounded-full bg-white pointer-events-none"
      style={{
        left: `${star.startX}%`,
        top: `${star.startY}%`,
        boxShadow: '0 0 20px 2px rgba(245, 245, 245, 0.8)',
        animation: `shootingStar 2s ease-in forwards`,
        '--start-x': `${star.startX}`,
        '--end-x': `${star.endX}`,
        '--start-y': `${star.startY}`,
        '--end-y': `${star.endY}`,
      } as React.CSSProperties & { '--start-x': string; '--end-x': string; '--start-y': string; '--end-y': string }}
    />
  )
}
