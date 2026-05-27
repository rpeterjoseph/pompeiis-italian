const reviews = [
  {
    name: "Tripadvisor Reviewer",
    rating: 5,
    text: "If I had to choose only one thing it would be the Fettuccine Carbonara. Unbelievable food, excellent staff — the #1 place to eat in Port Huron.",
  },
  {
    name: "Tripadvisor Reviewer",
    rating: 5,
    text: "The pizza is also very good the next day warmed up. Organization and efficiency in feeding such a large group — perfect for a private event.",
  },
  {
    name: "Tripadvisor Reviewer",
    rating: 4,
    text: "Salad, focaccia bread, and blush sauce manicotti were incredible. The staff makes you feel right at home. We've been coming here for years.",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`w-4 h-4 ${star <= rating ? "text-[#D4941A]" : "text-gray-300"}`}
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
    <section id="reviews" className="py-20 bg-[#FFF8EE]" aria-label="Customer reviews">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-[#C8332A] text-sm font-semibold tracking-[0.2em] uppercase mb-3">
            What Our Guests Say
          </p>
          <h2
            className="text-4xl sm:text-5xl font-bold text-[#1E0E05] mb-4"
            style={{ fontFamily: "var(--font-oranienbaum), serif" }}
          >
            Loved by the
            <span className="text-[#C8332A] italic"> Blue Water Community</span>
          </h2>
          <div className="w-16 h-1 bg-[#D4941A] mx-auto mb-6 rounded-full" />

          <div className="inline-flex items-center gap-4 bg-white border border-[#D4941A]/20 rounded-2xl px-6 py-4 shadow-sm">
            <div className="text-center">
              <div
                className="text-4xl font-bold text-[#1E0E05]"
                style={{ fontFamily: "var(--font-oranienbaum), serif" }}
              >
                4.5
              </div>
              <StarRating rating={5} />
              <p className="text-xs text-gray-500 mt-1">on Tripadvisor</p>
            </div>
            <div className="w-px h-12 bg-gray-200" />
            <div className="text-left">
              <p className="font-semibold text-[#1E0E05] text-sm">#6 of 104 Restaurants</p>
              <p className="text-gray-500 text-xs">in Port Huron · 179 reviews</p>
              <p className="text-[#3D5C34] text-xs font-medium mt-1">Family-Friendly · Local Favorite</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {reviews.map((review, i) => (
            <article
              key={i}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100"
            >
              <div className="flex items-center justify-between mb-4">
                <StarRating rating={review.rating} />
                <span className="text-xs text-gray-400 bg-gray-50 px-2 py-1 rounded-full">Tripadvisor</span>
              </div>
              <blockquote className="text-gray-600 text-sm leading-relaxed mb-4 italic">
                &ldquo;{review.text}&rdquo;
              </blockquote>
              <footer className="flex items-center gap-2">
                <div className="w-8 h-8 bg-[#C8332A]/10 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-[#C8332A]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-gray-500 text-xs">{review.name}</p>
              </footer>
            </article>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { stat: "2002", label: "Year Established" },
            { stat: "4.5★", label: "Tripadvisor Rating" },
            { stat: "120", label: "Guest Capacity" },
            { stat: "#6", label: "of 104 in Port Huron" },
          ].map((item) => (
            <div key={item.label} className="text-center bg-white rounded-xl p-5 shadow-sm border border-gray-100">
              <div
                className="text-3xl font-bold text-[#C8332A] mb-1"
                style={{ fontFamily: "var(--font-oranienbaum), serif" }}
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
