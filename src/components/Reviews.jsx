import { reviews } from '../data/reviews'

export default function Reviews() {
  // Duplicate reviews for seamless infinite scroll
  const duplicatedReviews = [...reviews, ...reviews]

  // Review card component
  const ReviewCard = ({ review, index }) => (
    <div className="flex-shrink-0 px-3 md:px-4 w-[280px] sm:w-[320px] md:w-[350px] lg:w-[380px]">
      <div className="relative group h-full">

        {/* Card */}
        <div className="card-light p-6 md:p-7 h-full rounded-xl bg-white border-2 border-gold/20 shadow-lg hover:shadow-2xl transition-all duration-300 hover:border-gold/40">

          {/* Quote Icon */}
          <div className="absolute top-4 right-4 opacity-10">
            <svg className="w-12 h-12 text-gold" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.984zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
            </svg>
          </div>
          
          {/* Rating + user */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center text-white font-bold shadow-md">
                {review.name.charAt(0)}
              </div>
              <div>
                <h3 className="font-bold text-lg text-base-950">{review.name}</h3>
                <div className="flex items-center gap-1 mt-0.5">
                  <span aria-label={`${review.rating} stars`} className="text-gold text-lg">
                    {'★'.repeat(review.rating)}
                  </span>
                  <span className="text-xs text-black/40 ml-1">({review.rating}/5)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Review Text */}
          <p className="text-sm md:text-base text-black/70 mt-4 leading-relaxed italic">
            "{review.text}"
          </p>

          {/* Verified */}
          <div className="mt-6 pt-4 border-t border-gold/20">
            <div className="flex items-center gap-2 text-xs text-black/40">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Verified Customer</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  )

  return (
    <section id="reviews" className="py-16 section-light">
      <div className="container-xl">
        <header className="mb-8">
          <p className="section-subtitle text-onyx">Client Love</p>
          <h2 className="section-title">Reviews</h2>
        </header>

        {/* Scrolling Container */}
        <div className="relative overflow-hidden">

          {/* Scrolling row */}
          <div className="overflow-hidden py-4">
            <div className="flex scroll-ticker">
              {duplicatedReviews.map((r, index) => (
                <ReviewCard key={`${r.name}-${index}`} review={r} index={index} />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
