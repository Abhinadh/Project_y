import { site } from '../data/site'

export default function Hero() {
  return (
    <section id="hero" aria-label="Being Handsome hero" className="relative min-h-[70svh] sm:min-h-[85vh] flex items-center">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/media/hero.mp4"
        poster="/media/hero-poster.jpg"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/60 to-base-950" />
      <div className="relative container-xl text-center space-y-5 sm:space-y-6 py-16 sm:py-0">
        <p className="uppercase tracking-[.3em] text-[10px] sm:text-xs text-gold">{site.subtitle}</p>
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">BEING HANDSOME</h1>
        <p className="text-sm sm:text-base text-smoke px-2 sm:px-0">{site.tagline}</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center px-4">
          <a href="#contact" className="btn-primary">Book Now</a>
          <a href="#services" className="btn-outline">Our Services</a>
        </div>
        <p className="text-xs text-smoke/80">{site.hours}</p>
      </div>
    </section>
  )
}


