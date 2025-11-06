import { groomHighlights as highlights, groomImage } from '../data/groom'

export default function Groom() {
  return (
    <section id="groom" className="py-16">
      <div className="container-xl grid lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12 items-center">
        <div>
          <p className="section-subtitle">Boost Your Appearance</p>
          <h2 className="section-title">Grooming Specialists</h2>
          <p className="mt-3 text-sm text-smoke">Experience expert treatments designed for men. From scalp therapies to precision styling, our team delivers a luxurious, masculine finish.</p>
          <div className="mt-6 grid sm:grid-cols-3 gap-3 md:gap-4">
            {highlights.map(h => (
              <div key={h.title} className="card p-4">
                <h3 className="font-semibold">{h.title}</h3>
                <p className="text-xs text-smoke mt-1">{h.desc}</p>
              </div>
            ))}
          </div>
          <a href="#prices" className="btn-primary mt-6 inline-flex">View Prices</a>
        </div>
        <img src={groomImage} alt="Stylist grooming a gentleman" loading="lazy" className="block w-full h-auto rounded-xl border border-white/5 shadow-glow" />
      </div>
    </section>
  )
}


