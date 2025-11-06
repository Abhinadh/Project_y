import { prices as items } from '../data/prices'

export default function Prices() {
  return (
    <section id="prices" className="py-16">
      <div className="container-xl">
        <header className="mb-8">
          <p className="section-subtitle">Transparent & Fair</p>
          <h2 className="section-title">Prices</h2>
        </header>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {items.map((p) => (
            <article key={p.title} className={`card p-6 ${p.featured ? 'border-gold/50' : ''}`}>
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="font-semibold">{p.title}</h3>
                <span className={`text-sm ${p.featured ? 'text-gold font-semibold' : 'text-smoke'}`}>{p.price}</span>
              </div>
              {p.desc && <p className="text-xs text-smoke mt-2">{p.desc}</p>}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}


