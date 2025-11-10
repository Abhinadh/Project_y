import { useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import {services} from './components/Services'
import Groom from './components/Groom'
import Kids from './components/Kids'
import WhyUs from './components/WhyUs'
import Gallery from './components/Gallery'
import Prices from './components/Prices'
import Reviews from './components/Reviews'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll('[data-reveal]'))
    const setHidden = (el) => el.classList.add('reveal-hidden')
    elements.forEach(setHidden)
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('reveal-show')
          e.target.classList.remove('reveal-hidden')
          io.unobserve(e.target)
        }
      })
    }, { threshold: 0.15 })
    elements.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-base-950 text-white">
      <Header />
      <main>
        <div data-reveal><Hero /></div>
        <div data-reveal><services /></div>
        <div data-reveal><Groom /></div>
        <div data-reveal><Kids /></div>
        <div data-reveal><WhyUs /></div>
        <div data-reveal><Gallery /></div>
        <div data-reveal><Prices /></div>
        <div data-reveal><Reviews /></div>
        <div data-reveal><Contact /></div>
      </main>
      <Footer />
    </div>
  )
}

export default App
