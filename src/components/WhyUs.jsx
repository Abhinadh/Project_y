import { features } from '../data/features'

export default function WhyUs() {
  return (
    <section id="why" className="py-16 section-light">
      <div className="container-xl">
        <header className="mb-8">
          <p className="section-subtitle text-onyx">Why Choose Us</p>
          <h2 className="section-title">Luxury That Respects Your Time</h2>
        </header>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {features.map(f => (
            <div key={f.title} className="card-light p-6 group hover:shadow-xl transition-all duration-300">
              {f.image && (
                <div className="mb-4 overflow-hidden rounded-lg">
                  <img 
                    src={f.image} 
                    alt={f.title}
                    className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
              )}
              <h3 className="font-semibold text-lg">{f.title}</h3>
              <p className="text-sm text-black/60 mt-2">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


