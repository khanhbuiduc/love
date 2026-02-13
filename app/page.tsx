'use client'

import { useState } from 'react'
import { PasswordGate } from '@/components/sections/PasswordGate'
import { HeroSection } from '@/components/sections/HeroSection'
import { Timeline } from '@/components/sections/Timeline'
import { Gallery } from '@/components/sections/Gallery'
import { LoveCounter } from '@/components/sections/LoveCounter'
import { LoveLetter } from '@/components/sections/LoveLetter'
import { ReasonsCards } from '@/components/sections/ReasonsCards'
import { Footer } from '@/components/sections/Footer'
import { WishModal } from '@/components/sections/WishModal'
import { ShootingStar } from '@/components/animations/ShootingStar'
import { FallingPetals } from '@/components/animations/FallingPetals'
import { MusicToggle } from '@/components/ui/MusicToggle'

export default function Home() {
  const [isUnlocked, setIsUnlocked] = useState(false)
  const [showWishModal, setShowWishModal] = useState(false)

  if (!isUnlocked) {
    return <PasswordGate onUnlock={() => setIsUnlocked(true)} />
  }

  return (
    <main className="w-full overflow-x-hidden">
      <MusicToggle />
      <FallingPetals />
      <ShootingStar onShootingStar={() => setShowWishModal(true)} />
      <WishModal isOpen={showWishModal} onClose={() => setShowWishModal(false)} />

      <HeroSection />
      <Timeline />
      <Gallery />
      <LoveCounter />
      <LoveLetter />
      <ReasonsCards />
      <Footer />
    </main>
  )
}
