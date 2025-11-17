export default function Footer() {
  return (
    <footer className="bg-[#0b0c0f] text-white/70 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row gap-6 items-center justify-between">
        <p>© {new Date().getFullYear()} Retro Brew. All rights reserved.</p>
        <div className="flex items-center gap-6">
          <a href="#about" className="hover:text-white">About</a>
          <a href="#menu" className="hover:text-white">Menu</a>
          <a href="#visit" className="hover:text-white">Visit</a>
        </div>
      </div>
    </footer>
  )
}
