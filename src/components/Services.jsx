// src/data/services.jsx


// src/components/Services.jsx  (line 1)
import { services as items } from '../data/services'   // ← NO change needed
export const services = [
  {
    title: "Hair Care",
    desc: "Cuts, treatments, coloring, scalp therapy",
    icon: (
      <img
        src="/media/face_care.webp"
        alt="Hair Care"
        loading="lazy" 
        className="w-16 h-16 object-cover rounded-full border-4 border-white shadow-2xl"
      />
    ),
  },
  {
    title: "Face Care",
    desc: "Facials, beard styling, skincare",
    icon: "🧴",
  },
  {
    title: "Body Care",
    desc: "Massages, scrubs, rejuvenation",
    icon: "💆‍♂️",
  },
]