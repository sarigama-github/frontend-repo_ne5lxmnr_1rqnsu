export default function MenuGrid() {
  const items = [
    { name: 'Espresso', desc: 'Rich, bold, classic.', price: '$3.50' },
    { name: 'Cortado', desc: 'Balanced espresso and milk.', price: '$4.00' },
    { name: 'Latte', desc: 'Silky steamed milk, smooth shot.', price: '$4.50' },
    { name: 'Mocha', desc: 'Chocolate + espresso harmony.', price: '$4.75' },
    { name: 'Matcha', desc: 'Ceremonial grade, creamy.', price: '$4.50' },
    { name: 'Cold Brew', desc: 'Slow steeped, low acidity.', price: '$4.25' },
  ]

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((it) => (
        <div key={it.name} className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-lg p-5 hover:bg-white/10 transition-colors">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-white">{it.name}</h3>
            <span className="text-emerald-400 text-sm">{it.price}</span>
          </div>
          <p className="mt-2 text-white/70 text-sm">{it.desc}</p>
        </div>
      ))}
    </div>
  )
}
