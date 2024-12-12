'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import Link from 'next/link'
import { FaArrowRight } from 'react-icons/fa'

export default function LandingPage() {
  const headerRef = useRef(null)
  const ctaRef = useRef(null)

  useEffect(() => {
    // Set initial opacity to 0
    if (headerRef.current) headerRef.current.style.opacity = '0'
    if (ctaRef.current) ctaRef.current.style.opacity = '0'

    // Create the animations
    const headerAnim = gsap.to(headerRef.current, {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: 'power3.out',
      paused: true
    })

    const ctaAnim = gsap.to(ctaRef.current, {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: 'power3.out',
      paused: true
    })

    // Play the animations
    headerAnim.play()
    setTimeout(() => ctaAnim.play(), 500)

    // Cleanup function
    return () => {
      headerAnim.kill()
      ctaAnim.kill()
    }
  }, [])

  return (
    <div className="min-h-[calc(100vh-4rem)] flex flex-col justify-center items-center px-4 pt-16">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-200/50 via-purple-200/50 to-pink-200/50 z-0"></div>
      <header ref={headerRef} className="text-center mb-12 relative z-10" style={{ transform: 'translateY(-50px)' }}>
        <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 drop-shadow-lg">
          Welcome to My Portfolio
        </h1>
        <p className="text-2xl md:text-3xl text-gray-800 max-w-3xl mx-auto font-light leading-relaxed drop-shadow">
          Explore my projects and discover how I bring ideas to life through code and creativity.
        </p>
      </header>
      <div ref={ctaRef} className="relative z-10" style={{ transform: 'translateY(50px)' }}>
        <Link href="/projects" className="group inline-flex items-center bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105">
          <span className="mr-2">See Projects</span>
          <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-200" />
        </Link>
      </div>
    </div>
  )
}

