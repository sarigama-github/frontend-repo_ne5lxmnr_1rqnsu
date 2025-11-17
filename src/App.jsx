import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ParallaxSection from './components/ParallaxSection'
import MenuGrid from './components/MenuGrid'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-[#0b0c0f] text-white">
      <Navbar />
      <main>
        <Hero />

        <ParallaxSection
          id="about"
          title="Handcrafted coffee, crafted for creatives"
          subtitle="Our space blends retro tech charm with modern craft coffee—pull up a chair, open your laptop, and stay a while."
          image="https://images.unsplash.com/photo-1498804103079-a6351b050096?q=80&w=1470&auto=format&fit=crop"
          speed={0.08}
        >
          <div className="grid md:grid-cols-3 gap-6">
            <Feature
              title="Single-origin beans"
              text="Thoughtfully sourced and roasted to highlight nuanced flavor notes."
            />
            <Feature
              title="Brew bar"
              text="Espresso, pour-overs, and playful specials rotated weekly."
            />
            <Feature
              title="Workspace ready"
              text="Fast Wi‑Fi, plenty of outlets, good music, better vibes."
            />
          </div>
        </ParallaxSection>

        <ParallaxSection
          id="menu"
          title="Signature sips"
          subtitle="Classics you love with an inventive twist"
          image="https://images.unsplash.com/photo-1497515114629-f71d768fd07c?q=80&w=1470&auto=format&fit=crop"
          speed={0.06}
        >
          <MenuGrid />
        </ParallaxSection>

        <ParallaxSection
          id="gallery"
          title="Scenes from the bar"
          subtitle="Moments, textures, and the glow of old screens"
          image="https://images.unsplash.com/photo-1470337458703-46ad1756a187?q=80&w=1470&auto=format&fit=crop"
          speed={0.04}
        >
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              'https://images.unsplash.com/photo-1459755486867-b55449bb39ff?q=80&w=1470&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?q=80&w=1470&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1442512595331-e89e73853f31?q=80&w=1470&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1422207239328-29f83832206c?q=80&w=1470&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1502465771179-51f3535da42f?q=80&w=1470&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1504439468489-c8920d796a29?q=80&w=1470&auto=format&fit=crop',
            ].map((src) => (
              <img key={src} src={src} alt="Coffee" className="aspect-video object-cover rounded-lg border border-white/10" />
            ))}
          </div>
        </ParallaxSection>

        <ParallaxSection
          id="visit"
          title="Visit Retro Brew"
          subtitle="123 Analog Ave, Suite 80s • Open 7am - 7pm"
          image="https://images.unsplash.com/photo-1500964757637-c85e8a162699?q=80&w=1470&auto=format&fit=crop"
          speed={0.02}
        >
          <form className="grid gap-4 max-w-xl">
            <div className="grid sm:grid-cols-2 gap-4">
              <input className="bg-white/5 border border-white/10 rounded-md px-4 py-3 placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-emerald-500" placeholder="Name" />
              <input type="email" className="bg-white/5 border border-white/10 rounded-md px-4 py-3 placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-emerald-500" placeholder="Email" />
            </div>
            <input type="date" className="bg-white/5 border border-white/10 rounded-md px-4 py-3 placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-emerald-500" />
            <textarea rows="4" className="bg-white/5 border border-white/10 rounded-md px-4 py-3 placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-emerald-500" placeholder="Notes" />
            <button type="button" className="inline-flex items-center rounded-md bg-emerald-500 hover:bg-emerald-600 text-white px-5 py-3 w-max">Reserve a table</button>
          </form>
        </ParallaxSection>
      </main>
      <Footer />
    </div>
  )
}

function Feature({ title, text }) {
  return (
    <div className="p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur">
      <h3 className="font-semibold text-white">{title}</h3>
      <p className="mt-2 text-white/70 text-sm">{text}</p>
    </div>
  )
}

export default App
