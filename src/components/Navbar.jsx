import { useState, useEffect } from 'react'
import { Menu, Coffee } from 'lucide-react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { href: '#about', label: 'About' },
    { href: '#menu', label: 'Menu' },
    { href: '#gallery', label: 'Gallery' },
    { href: '#visit', label: 'Visit' },
  ]

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${scrolled ? 'backdrop-blur-xl bg-black/40 border-b border-white/10' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 text-white">
            <div className="p-2 rounded-md bg-gradient-to-br from-amber-500 to-orange-600 shadow-lg shadow-amber-500/20">
              <Coffee size={18} />
            </div>
            <span className="font-semibold tracking-wide">Retro Brew</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-white transition-colors">
                {l.label}
              </a>
            ))}
            <a href="#visit" className="inline-flex items-center rounded-full bg-emerald-500/90 hover:bg-emerald-500 text-white px-4 py-2 transition-colors">
              Reserve
            </a>
          </nav>

          <button className="md:hidden text-white" onClick={() => setOpen((v) => !v)} aria-label="Open menu">
            <Menu />
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-black/70 backdrop-blur-xl">
          <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-3">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="text-white/90" onClick={() => setOpen(false)}>
                {l.label}
              </a>
            ))}
            <a href="#visit" className="mt-2 inline-flex items-center rounded-full bg-emerald-500 text-white px-4 py-2 w-max" onClick={() => setOpen(false)}>
              Reserve
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
