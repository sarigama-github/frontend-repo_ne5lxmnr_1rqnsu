import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden bg-[#0b0c0f]">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/S4k-6fqjuV5AuVZe/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl text-white">
            <p className="text-emerald-400/90 tracking-widest uppercase text-xs mb-3">Coffee • Tech • Retro Vibes</p>
            <h1 className="text-4xl sm:text-6xl font-extrabold leading-tight">
              Brewed for Makers.
              <br />
              Served with Parallax Delight.
            </h1>
            <p className="mt-4 text-white/80 text-lg">
              A creative coffee space where vintage pixels meet modern pours. Sip espresso, code ideas, feel the flow.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <a href="#menu" className="inline-flex items-center rounded-full bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 transition-colors">
                Explore Menu
              </a>
              <a href="#visit" className="inline-flex items-center rounded-full bg-white/10 hover:bg-white/20 text-white px-6 py-3 transition-colors">
                Visit Us
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-[#0b0c0f]" />
    </section>
  )
}
