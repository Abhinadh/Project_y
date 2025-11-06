import { useState } from 'react'
import { gallery as images } from '../data/gallery'

export default function Gallery() {
  const [active, setActive] = useState(null)
  return (
    <section id="gallery" className="py-16">
      <div className="container-xl">
        <header className="mb-8">
          <p className="section-subtitle">Gallery</p>
          <h2 className="section-title">Our Work</h2>
        </header>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {images.map((img, i) => (
            <button key={img.src} className="relative group" onClick={() => setActive(i)} aria-label={`Open ${img.alt}`}>
              <img className="block w-full h-auto rounded-lg border border-white/5 shadow-glow" loading="lazy" src={img.src} alt={img.alt} />
            </button>
          ))}
        </div>
      </div>
      {active !== null && (
        <div role="dialog" aria-modal className="fixed inset-0 z-50 bg-black/80 backdrop-blur flex items-center justify-center p-4" onClick={() => setActive(null)}>
          <img className="max-h-[85vh] rounded-xl border border-white/10 shadow-glow" src={images[active].src} alt={images[active].alt} />
        </div>
      )}
    </section>
  )
}


