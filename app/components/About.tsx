export default function About() {
  const highlights = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
      title: "Family Owned & Operated",
      description: "A true family restaurant where every guest is treated like one of our own.",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      title: "Homemade-Style Recipes",
      description: "Fresh, scratch-made Italian food using time-honored recipes passed down through generations.",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "Proud Blue Water Community Member",
      description: "Serving Port Huron and the Blue Water Area with pride and dedication since 2002.",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>
      ),
      title: "4.5 Stars on Tripadvisor",
      description: "Consistently praised by locals and visitors alike for quality, value & friendly service.",
    },
  ];

  return (
    <section
      id="about"
      className="py-20 bg-white"
      aria-label="About Pompeii's"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text column */}
          <div>
            <p className="text-[#8B1A1A] text-sm font-semibold tracking-[0.2em] uppercase mb-3">
              Our Story
            </p>
            <h2
              className="text-4xl sm:text-5xl font-bold text-[#2C2C2C] mb-6 leading-tight"
              style={{ fontFamily: "var(--font-playfair), serif" }}
            >
              A Family Tradition
              <br />
              <span className="text-[#8B1A1A] italic">Since 2002</span>
            </h2>
            <div className="w-16 h-1 bg-[#C9A84C] mb-8 rounded-full" />
            <p className="text-gray-600 text-lg leading-relaxed mb-5">
              Pompeii&apos;s Pizzeria &amp; Italian Eatery has been a cornerstone of the Port Huron
              dining scene since we first opened our doors in 2002. What started as a family dream
              has grown into one of the Blue Water Area&apos;s most beloved Italian restaurants.
            </p>
            <p className="text-gray-600 leading-relaxed mb-5">
              We believe great Italian food starts with great ingredients and a whole lot of love.
              Every dish on our menu is prepared fresh in our kitchen — from our hand-tossed pizzas
              and hearty lasagna to our delicate ravioli and creamy pasta Alfredo.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Whether you&apos;re joining us for a family dinner, a quick carryout meal, or planning
              an event for up to 120 guests, Pompeii&apos;s is your home for authentic Italian comfort
              food right here in Port Huron.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="tel:+18109663400"
                className="bg-[#8B1A1A] hover:bg-[#A52020] text-white font-semibold px-6 py-3 rounded-full transition-all duration-200 hover:-translate-y-0.5 shadow-md"
              >
                Call Us Today
              </a>
              <a
                href="#location"
                className="border-2 border-[#8B1A1A] text-[#8B1A1A] hover:bg-[#8B1A1A] hover:text-white font-semibold px-6 py-3 rounded-full transition-all duration-200 hover:-translate-y-0.5"
              >
                Find Us
              </a>
            </div>
          </div>

          {/* Highlights grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="bg-[#FDF6E3] rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200 border border-[#C9A84C]/10"
              >
                <div className="w-12 h-12 bg-[#8B1A1A]/10 rounded-xl flex items-center justify-center text-[#8B1A1A] mb-4">
                  {item.icon}
                </div>
                <h3
                  className="font-bold text-[#2C2C2C] mb-2"
                  style={{ fontFamily: "var(--font-playfair), serif" }}
                >
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
