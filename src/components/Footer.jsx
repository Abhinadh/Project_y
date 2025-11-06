import { site } from '../data/site'

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-white/5">
      <div className="container-xl py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
          <p className="tracking-widest text-gold font-semibold">{site.name.toUpperCase()}</p>
          <nav className="flex gap-4 text-sm text-smoke">
            <a href="#services" className="hover:text-gold transition-colors">Services</a>
            <a href="#prices" className="hover:text-gold transition-colors">Prices</a>
            <a href="#contact" className="hover:text-gold transition-colors">Contact</a>
          </nav>
          <a href={`tel:${site.phone.replace(/\s/g, '')}`} className="flex items-center gap-2 text-sm text-gold font-semibold hover:text-gold-light transition-colors">
            <span>📞</span>
            <span>{site.phoneDisplay}</span>
          </a>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-smoke">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href={site.socials.whatsapp} target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors" aria-label="WhatsApp">
              WhatsApp
            </a>
            <a href={site.socials.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors" aria-label="Instagram">
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}


