import { kids as tiers } from '../data/kids'

export default function Kids() {
  return (
    <section id="kids" className="py-16 section-light">
      <div className="container-xl">
        <header className="mb-8">
          <p className="section-subtitle text-onyx">For The Young Gentlemen</p>
          <h2 className="section-title">Kids & Teens</h2>
        </header>
        <div className="grid sm:grid-cols-3 gap-4 md:gap-6">
          {tiers.map(t => (
            <article key={t.title} className="card-light p-6">
              <h3 className="font-semibold">{t.title}</h3>
              <p className="text-sm text-black/60 mt-1">{t.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}


