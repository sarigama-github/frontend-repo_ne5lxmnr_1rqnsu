import { useEffect, useRef } from 'react'

function useParallax(speed = 0.3) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const onScroll = () => {
      const y = window.scrollY
      el.style.transform = `translate3d(0, ${y * speed}px, 0)`
    }
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [speed])
  return ref
}

export function ParallaxBg({ image, speed = 0.2, className = '' }) {
  const ref = useParallax(speed)
  return (
    <div ref={ref} className={`pointer-events-none absolute inset-0 -z-10 ${className}`} style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
  )
}

export default function ParallaxSection({ id, title, subtitle, children, tint = 'dark', image, speed }) {
  return (
    <section id={id} className={`relative py-24 sm:py-32 ${tint === 'dark' ? 'bg-[#0b0c0f] text-white' : 'bg-white text-gray-900'}`}>
      <div className="absolute inset-0 overflow-hidden">
        {image && <ParallaxBg image={image} speed={speed} className={`${tint === 'dark' ? 'opacity-20' : 'opacity-10'}`} />}
        {tint === 'dark' && <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-[#0b0c0f]" />}
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">{title}</h2>
          {subtitle && <p className="mt-3 text-white/80">{subtitle}</p>}
        </div>
        <div className="mt-10">
          {children}
        </div>
      </div>
    </section>
  )
}
