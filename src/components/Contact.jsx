import { site } from '../data/site'

export default function Contact() {
  const formAction = `https://formspree.io/f/${site.formspreeId}`
  return (
    <section id="contact" className="py-16">
      <div className="container-xl grid lg:grid-cols-2 gap-8 md:gap-10">
        <div>
          <header className="mb-6">
            <p className="section-subtitle">Reach Us</p>
            <h2 className="section-title">Contact</h2>
          </header>
          <form action={formAction} method="POST" className="card p-6 space-y-4" aria-label="Contact form">
            <label className="block">
              <span className="text-sm">Name</span>
              <input name="name" required className="mt-1 w-full rounded-md bg-base-900/60 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-gold/50" placeholder="Your name" />
            </label>
            <label className="block">
              <span className="text-sm">Phone</span>
              <input name="phone" required inputMode="tel" className="mt-1 w-full rounded-md bg-base-900/60 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-gold/50" placeholder="Your phone" />
            </label>
            <label className="block">
              <span className="text-sm">Message</span>
              <textarea name="message" rows="4" className="mt-1 w-full rounded-md bg-base-900/60 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-gold/50" placeholder="How can we help?" />
            </label>
            <button className="btn-primary w-full">Send</button>
          </form>
        </div>
        <div className="space-y-4">
          <iframe title="Map" className="w-full h-72 rounded-xl border border-white/10" loading="lazy" referrerPolicy="no-referrer-when-downgrade" src="https://www.google.com/maps?q=Kochi%20Kerala&output=embed"></iframe>
          <div className="card p-6 text-sm text-smoke">
            <p><span className="text-white">Phone:</span> <a href={`tel:${site.phone.replace(/\s/g, '')}`} className="text-gold hover:text-gold-light transition-colors">{site.phoneDisplay}</a></p>
            <p className="mt-1"><span className="text-white">Address:</span> {site.address}</p>
            <div className="mt-3 flex gap-3">
              <a aria-label="WhatsApp" href={site.socials.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-outline px-3 py-2">WA</a>
              <a aria-label="Instagram" href={site.socials.instagram} target="_blank" rel="noopener noreferrer" className="btn-outline px-3 py-2">IG</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


