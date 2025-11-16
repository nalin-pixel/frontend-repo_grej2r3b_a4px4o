import React, { useEffect, useRef } from 'react'

export default function ParallaxSection({ speed = 0.3, children, className = '' }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const handleScroll = () => {
      const rect = el.getBoundingClientRect()
      const offset = rect.top - window.innerHeight
      const translateY = Math.min(0, offset * speed)
      el.style.transform = `translateY(${translateY}px)`
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [speed])

  return (
    <section ref={ref} className={`transition-transform duration-300 will-change-transform ${className}`}>
      {children}
    </section>
  )
}
