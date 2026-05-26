export default function About() {
  const highlights = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
      title: "Family Owned & Operated",
      description: "A true family restaurant where every guest is treated like one of our own since 2002.",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
        </svg>
      ),
      title: "Stone-Oven Pizzas",
      description: "Hand-tossed dough cooked to perfection in stone ovens, with our signature house cheeses.",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      title: "Freshest & Homemade",
      description: "Every sauce, pasta, and meatball is made from scratch using time-honored Italian recipes.",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>
      ),
      title: "#6 of 104 in Port Huron",
      description: "Consistently top-rated on Tripadvisor — 179 reviews and a 4.5-star rating from our community.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-white" aria-label="About Pompeii's">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-[#8B1A1A] text-sm font-semibold tracking-[0.2em] uppercase mb-3">Our Story</p>
            <h2
              className="text-4xl sm:text-5xl font-bold text-[#2C2C2C] mb-6 leading-tight"
              style={{ fontFamily: "var(--font-oranienbaum), serif" }}
            >
              A Family Tradition
              <br />
              <span className="text-[#8B1A1A] italic">Since 2002</span>
            </h2>
            <div className="w-16 h-1 bg-[#C9A84C] mb-8 rounded-full" />

            {/* Motto callout */}
            <blockquote className="border-l-4 border-[#C9A84C] pl-5 mb-7 italic text-[#2C2C2C]">
              <p className="text-lg font-medium" style={{ fontFamily: "var(--font-oranienbaum), serif" }}>
                &ldquo;Consistency, Great Food &amp; Great Service.&rdquo;
              </p>
              <footer className="text-sm text-gray-500 mt-1 not-italic">— The Pompeii&apos;s Promise</footer>
            </blockquote>

            <p className="text-gray-600 text-lg leading-relaxed mb-5">
              Pompeii&apos;s Pizzeria &amp; Italian Eatery has been a cornerstone of the Port Huron dining
              scene since we first opened our doors in 2002. Our mission is simple: serve the freshest
              and most homemade Italian food possible, every single day.
            </p>
            <p className="text-gray-600 leading-relaxed mb-5">
              From our hand-tossed stone-oven pizzas and hearty lasagna, to our delicate veal scaloppini
              and fresh grouper dishes — every item on our menu is prepared fresh in our kitchen using
              quality ingredients and recipes made to impress.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Whether you&apos;re joining us for a family dinner, a quick carryout, planning a private
              event for up to 120 guests, or just stopping in for a bowl of our famous Chicken
              Florentine soup — Pompeii&apos;s is your home for authentic Italian in Port Huron.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="tel:+18109663400"
                className="bg-[#8B1A1A] hover:bg-[#A52020] text-white font-semibold px-6 py-3 rounded-full transition-all duration-200 hover:-translate-y-0.5 shadow-md"
              >
                Call Us Today
              </a>
              <a
                href="/about"
                className="border-2 border-[#8B1A1A] text-[#8B1A1A] hover:bg-[#8B1A1A] hover:text-white font-semibold px-6 py-3 rounded-full transition-all duration-200 hover:-translate-y-0.5"
              >
                Our Full Story
              </a>
            </div>
          </div>

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
                  style={{ fontFamily: "var(--font-oranienbaum), serif" }}
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
