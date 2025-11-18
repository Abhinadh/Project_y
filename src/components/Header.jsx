import { useState } from 'react'
import { site } from '../data/site'

export default function Header() {
  const [open, setOpen] = useState(false)
  const links = [
    { href: '#services', label: 'Services' },
    { href: '#groom', label: 'Groom' },
    { href: '#kids', label: 'Kids' },
    { href: '#why', label: 'Why Us' },
    { href: '#gallery', label: 'Gallery' },
    { href: '#prices', label: 'Prices' },
    { href: '#reviews', label: 'Reviews' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-base-950/60 border-b border-white/5">
      <nav className="container-xl flex items-center justify-between h-14">
        <a href="/" className="momo-signature-regular tracking-widest text-gold">{site.name.toUpperCase()}</a>
        <ul className="hidden md:flex gap-6 text-sm ">
          {links.map((l) => (
            <li key={l.href}>
              <a className="text-smoke hover:text-white transition-colors " href={l.href}>{l.label}</a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-3">
          <a href={`tel:${site.phone.replace(/\s/g, '')}`} className="hidden lg:flex items-center gap-1 text-sm text-smoke hover:text-gold transition-colors">
            <span>📞</span>
            <span>{site.phoneDisplay}</span>
          </a>
          <a href="#contact" className="btn-primary hidden sm:inline-flex">Book Now</a>
          <button aria-label="Open menu" className="md:hidden rounded-md border border-gray-300 p-2 dark:border-gray-700" onClick={() => setOpen(true)}>
            <span className="block h-0.5 w-5 bg-current mb-1"></span>
            <span className="block h-0.5 w-5 bg-current mb-1"></span>
            <span className="block h-0.5 w-5 bg-current"></span>
          </button>
        </div>
      </nav>
      {open && (
        <div className="md:hidden fixed inset-0 z-50 bg-black/80" onClick={() => setOpen(false)}>
          <div className="absolute right-0 top-0 h-full w-64 bg-base-900/95 border-l border-white/10 p-6" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between">
              <span className="font-bold tracking-widest text-gold">{site.name.toUpperCase()}</span>
              <button aria-label="Close menu" className="rounded-md border border-white/10 px-2 py-1" onClick={() => setOpen(false)}>✕</button>
            </div>
          <ul className="mt- space-y-4 backdrop-blur-2xl bg-black/60  sm:text-lg md:text-xl 
     rounded-xl items-center text-center p-4">
              {links.map((l) => (
                <li key={l.href}>
                  <a className="block text-[16px] sm:text-lg md:text-xl text-white/90" href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
                </li>
              ))}
            </ul>
            {/* <a href={`tel:${site.phone.replace(/\s/g, '')}`} className="mt-4 flex items-center gap-2 text-sm text-gold font-semibold" onClick={() => setOpen(false)}>
              <span>📞</span>
              <span>{site.phoneDisplay}</span>
            </a>
            <a href="#contact" className="btn-primary mt-6 inline-flex w-full" onClick={() => setOpen(false)}>Book Now</a> */}
          </div>
        </div>
      )}
    </header>
  )
}


