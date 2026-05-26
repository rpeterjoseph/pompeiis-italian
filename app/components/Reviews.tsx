const reviews = [
  {
    name: "Sarah M.",
    source: "Tripadvisor",
    rating: 5,
    text: "Best Italian food in Port Huron, hands down! The lasagna is incredible and the staff makes you feel right at home. We've been coming here for years.",
    date: "Recent",
  },
  {
    name: "Tom W.",
    source: "Tripadvisor",
    rating: 5,
    text: "Pompeii's is a Blue Water Area gem. The pizza is perfectly made every single time, the portions are generous, and the prices are fair. Highly recommend!",
    date: "Recent",
  },
  {
    name: "Linda K.",
    source: "Tripadvisor",
    rating: 4,
    text: "We had our anniversary dinner here and it was wonderful. The pasta Alfredo was amazing, the staff was attentive, and the atmosphere was warm and cozy.",
    date: "Recent",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`w-4 h-4 ${star <= rating ? "text-[#C9A84C]" : "text-gray-300"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <section
      id="reviews"
      className="py-20 bg-[#FDF6E3]"
      aria-label="Customer reviews"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-[#8B1A1A] text-sm font-semibold tracking-[0.2em] uppercase mb-3">
            What Our Guests Say
          </p>
          <h2
            className="text-4xl sm:text-5xl font-bold text-[#2C2C2C] mb-4"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            Loved by the
            <span className="text-[#8B1A1A] italic"> Blue Water Community</span>
          </h2>
          <div className="w-16 h-1 bg-[#C9A84C] mx-auto mb-6 rounded-full" />

          {/* Overall rating badge */}
          <div className="inline-flex items-center gap-4 bg-white border border-[#C9A84C]/20 rounded-2xl px-6 py-4 shadow-sm">
            <div className="text-center">
              <div
                className="text-4xl font-bold text-[#2C2C2C]"
                style={{ fontFamily: "var(--font-playfair), serif" }}
              >
                4.5
              </div>
              <StarRating rating={5} />
              <p className="text-xs text-gray-500 mt-1">on Tripadvisor</p>
            </div>
            <div className="w-px h-12 bg-gray-200" />
            <div className="text-left">
              <p className="font-semibold text-[#2C2C2C] text-sm">Highly Rated</p>
              <p className="text-gray-500 text-xs">200+ reviews</p>
              <p className="text-[#5C6B2E] text-xs font-medium mt-1">Family-Friendly · Local Favorite</p>
            </div>
          </div>
        </div>

        {/* Review cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {reviews.map((review) => (
            <article
              key={review.name}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100"
            >
              <div className="flex items-center justify-between mb-4">
                <StarRating rating={review.rating} />
                <span className="text-xs text-gray-400 bg-gray-50 px-2 py-1 rounded-full">
                  {review.source}
                </span>
              </div>
              <blockquote className="text-gray-600 text-sm leading-relaxed mb-4 italic">
                &ldquo;{review.text}&rdquo;
              </blockquote>
              <footer className="flex items-center gap-2">
                <div className="w-8 h-8 bg-[#8B1A1A]/10 rounded-full flex items-center justify-center">
                  <span className="text-[#8B1A1A] font-bold text-xs">
                    {review.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-[#2C2C2C] text-sm">{review.name}</p>
                  <p className="text-gray-400 text-xs">{review.date}</p>
                </div>
              </footer>
            </article>
          ))}
        </div>

        {/* Reputation highlights */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { stat: "2002", label: "Year Established" },
            { stat: "4.5★", label: "Tripadvisor Rating" },
            { stat: "120", label: "Guest Capacity" },
            { stat: "20+", label: "Years Serving the Community" },
          ].map((item) => (
            <div key={item.label} className="text-center bg-white rounded-xl p-5 shadow-sm border border-gray-100">
              <div
                className="text-3xl font-bold text-[#8B1A1A] mb-1"
                style={{ fontFamily: "var(--font-playfair), serif" }}
              >
                {item.stat}
              </div>
              <p className="text-gray-500 text-xs font-medium">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
