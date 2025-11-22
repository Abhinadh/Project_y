import { site } from '../data/site'
import { FaWhatsapp, FaInstagram, FaPhoneAlt } from "react-icons/fa"

export default function Contact() {
  const formAction = () => {
    alert("Contact us through WhatsApp or phone.")
  }

  return (
    <section id="contact" className="py-16">
      <div className="container-xl">

        {/* HEADER */}
        <header className="mb-10 text-center">
          <p className="section-subtitle">Reach Us</p>
          <h2 className="section-title">Contact</h2>
        </header>

        {/* GRID: CONTACT CARD + MAP */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 mb-12">

          {/* CONTACT INFO CARD */}
          <div className="card p-6 text-sm text-smoke">
            <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>

            <p>
              <span className="text-white">Phone:</span>{' '}
              <a
                href={`tel:${site.phone.replace(/\s/g, '')}`}
                className="text-gold hover:text-gold-light transition-colors"
              >
                {site.phoneDisplay}
              </a>
            </p>

            <p className="mt-2">
              <span className="text-white">Address:</span> {site.address}
            </p>

            {/* SOCIAL BUTTONS */}
            <div className="mt-4 flex flex-wrap gap-3">

              <a
                aria-label="WhatsApp"
                href={site.socials.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline px-3 py-2 flex items-center gap-2"
              >
                <FaWhatsapp className="text-xl text-green-500" />
                <span>WhatsApp</span>
              </a>

              <a
                aria-label="Instagram"
                href={site.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline px-3 py-2 flex items-center gap-2"
              >
                <FaInstagram className="text-xl text-pink-500" />
                <span>Instagram</span>
              </a>

              <a
                aria-label="Call"
                href={`tel:${site.phone.replace(/\s/g, '')}`}
                className="btn-outline px-3 py-2 flex items-center gap-2"
              >
                <FaPhoneAlt className="text-xl text-blue-500" />
                <span>Call</span>
              </a>

            </div>
          </div>

          {/* MAP SECTION */}
          <iframe
            title="Salon Location Map"
            className="w-full h-64 sm:h-80 lg:h-full rounded-xl border border-white/10"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps?q=Kochi%20Kerala&output=embed"
          ></iframe>
        </div>

        {/* CONTACT FORM */}
        <form
          action={formAction}
          method="POST"
          className="card p-6 space-y-4 max-w-xl mx-auto"
          aria-label="Contact form"
        >
          <label className="block">
            <span className="text-sm">Name</span>
            <input
              name="name"
              required
              className="mt-1 w-full rounded-md bg-base-900/60 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-gold/50"
              placeholder="Your name"
            />
          </label>

          <label className="block">
            <span className="text-sm">Phone</span>
            <input
              name="phone"
              required
              inputMode="tel"
              className="mt-1 w-full rounded-md bg-base-900/60 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-gold/50"
              placeholder="Your phone"
            />
          </label>

          <label className="block">
            <span className="text-sm">Message</span>
            <textarea
              name="message"
              rows="4"
              className="mt-1 w-full rounded-md bg-base-900/60 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-gold/50"
              placeholder="How can we help?"
            />
          </label>

          <button className="btn-primary w-full">Send</button>
        </form>

      </div>
    </section>
  )
}
