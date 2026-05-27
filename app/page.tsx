import Hero from "./components/Hero";
import About from "./components/About";
import IncludedBanner from "./components/IncludedBanner";
import Reviews from "./components/Reviews";
import GlutenFree from "./components/GlutenFree";
import ImagePlaceholder from "./components/ImagePlaceholder";
import Link from "next/link";

const featuredDishes = [
  {
    name: "Fettuccine Carbonara",
    description: "Sautéed ham, bacon, fresh mushrooms and onions tossed with fettuccine in homemade garlic cream sauce. Our most talked-about dish.",
    category: "Traditional Pasta",
    price: "$15.95",
    badge: "Chef's Favorite",
  },
  {
    name: "Pompeii's Pie Pizza",
    description: "The ultimate pizza — pepperoni, ham, bacon, Italian sausage, green peppers and onions, hand-tossed and stone-oven baked.",
    category: "Specialty Pizza",
    price: "$15.00+",
    badge: "Signature",
  },
  {
    name: "Blush Sauce Manicotti",
    description: "Rich 5-cheese filling rolled in pasta, baked golden brown and topped with our legendary homemade marinara blush sauce.",
    category: "Traditional Pasta",
    price: "$14.95",
    badge: "Guest Favorite",
  },
  {
    name: "Lasagna",
    description: "Our tantalizing lasagna layered with hearty meat sauce, 4 cheeses, and baked to perfection. A Port Huron institution.",
    category: "Traditional Pasta",
    price: "$13.95",
    badge: "Classic",
  },
];

export default function Home() {
  return (
    <main>
      <Hero />

      {/* Stats bar */}
      <div className="bg-[#1E0E05] py-4 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {[
            { stat: "Est. 2002", label: "Family Owned" },
            { stat: "4.5 ★", label: "Tripadvisor Rating" },
            { stat: "#6 / 104", label: "Restaurants in Port Huron" },
            { stat: "120", label: "Guest Capacity" },
          ].map((item) => (
            <div key={item.label}>
              <p
                className="text-[#D4941A] font-bold text-lg"
                style={{ fontFamily: "var(--font-oranienbaum), serif" }}
              >
                {item.stat}
              </p>
              <p className="text-white/50 text-xs">{item.label}</p>
            </div>
          ))}
        </div>
      </div>

      <About />
      <IncludedBanner />

      {/* Featured Dishes */}
      <section className="py-20 bg-[#FFF8EE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[#C8332A] text-sm font-semibold tracking-[0.2em] uppercase mb-3">Crowd Favorites</p>
            <h2
              className="text-4xl sm:text-5xl font-bold text-[#1E0E05] mb-4"
              style={{ fontFamily: "var(--font-oranienbaum), serif" }}
            >
              Must-Try <span className="text-[#C8332A] italic">Dishes</span>
            </h2>
            <div className="w-16 h-1 bg-[#D4941A] mx-auto mb-4 rounded-full" />
            <p className="text-gray-600 max-w-xl mx-auto">
              From our stone-oven pizzas to homemade pasta — every dish is made fresh from quality ingredients.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
            {featuredDishes.map((dish) => (
              <div
                key={dish.name}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 border border-gray-100 flex flex-col"
              >
                {/* Dish photo placeholder */}
                <ImagePlaceholder label={dish.name} className="h-44 rounded-none" />
                <div className="bg-[#C8332A] px-4 py-3 flex items-center justify-between">
                  <span className="text-white/70 text-xs uppercase tracking-wider">{dish.category}</span>
                  <span className="text-[10px] font-bold bg-[#D4941A] text-[#1E0E05] px-2 py-0.5 rounded-full">
                    {dish.badge}
                  </span>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h3
                    className="font-bold text-[#1E0E05] text-base mb-2"
                    style={{ fontFamily: "var(--font-oranienbaum), serif" }}
                  >
                    {dish.name}
                  </h3>
                  <p className="text-gray-500 text-xs leading-relaxed flex-1">{dish.description}</p>
                  <p className="text-[#C8332A] font-bold text-sm mt-3">{dish.price}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/menu"
              className="inline-flex items-center gap-2 bg-[#C8332A] hover:bg-[#D44035] text-white font-semibold px-8 py-3 rounded-full transition-all duration-200 hover:-translate-y-0.5 shadow-md"
            >
              View Full Menu
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Restaurant Gallery */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-[#C8332A] text-sm font-semibold tracking-[0.2em] uppercase mb-3">
              A Taste of Pompeii&apos;s
            </p>
            <h2
              className="text-3xl sm:text-4xl font-bold text-[#1E0E05]"
              style={{ fontFamily: "var(--font-oranienbaum), serif" }}
            >
              Our Restaurant
            </h2>
            <div className="w-14 h-1 bg-[#D4941A] mx-auto mt-4 rounded-full" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <ImagePlaceholder label="Dining Room Interior" className="aspect-[4/3]" />
            <ImagePlaceholder label="Stone Oven Pizza" className="aspect-[4/3]" />
            <ImagePlaceholder label="Homemade Pasta" className="aspect-[4/3]" />
            <ImagePlaceholder label="Full Bar" className="aspect-[4/3]" />
            <ImagePlaceholder label="Private Event Setup" className="aspect-[4/3]" />
            <ImagePlaceholder label="Restaurant Exterior" className="aspect-[4/3]" />
          </div>
        </div>
      </section>

      <GlutenFree />
      <Reviews />

      {/* Catering CTA banner */}
      <section className="py-16 bg-[#1E0E05]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-[#D4941A] text-xs font-semibold tracking-[0.3em] uppercase mb-3">Private Dining & Catering</p>
          <h2
            className="text-3xl sm:text-4xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-oranienbaum), serif" }}
          >
            Hosting a Party or Event?
          </h2>
          <p className="text-white/60 mb-8 max-w-xl mx-auto">
            We accommodate groups up to 120 guests for dine-in events, and offer catering trays for any size gathering — birthdays, reunions, corporate dinners, and more.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/catering"
              className="bg-[#D4941A] hover:bg-[#E8A832] text-[#1E0E05] font-semibold px-7 py-3 rounded-full transition-all duration-200 hover:-translate-y-0.5"
            >
              Catering Info
            </Link>
            <Link
              href="/events"
              className="border-2 border-white/30 hover:border-white text-white font-semibold px-7 py-3 rounded-full transition-all duration-200 hover:bg-white/10 hover:-translate-y-0.5"
            >
              Private Events
            </Link>
          </div>
        </div>
      </section>

      {/* Location preview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-[#C8332A] text-sm font-semibold tracking-[0.2em] uppercase mb-3">Find Us</p>
              <h2
                className="text-3xl sm:text-4xl font-bold text-[#1E0E05] mb-4"
                style={{ fontFamily: "var(--font-oranienbaum), serif" }}
              >
                Come Visit Us in<br />
                <span className="text-[#C8332A] italic">Port Huron</span>
              </h2>
              <div className="w-12 h-1 bg-[#D4941A] mb-6 rounded-full" />
              <div className="space-y-3 mb-6 text-sm text-gray-600">
                <p className="flex items-start gap-2"><span className="text-[#D4941A] mt-0.5">📍</span> 1120 Military St, Port Huron, MI 48060</p>
                <p className="flex items-start gap-2"><span className="text-[#D4941A] mt-0.5">📞</span> <a href="tel:+18109663400" className="hover:text-[#C8332A]">(810) 966-3400</a></p>
                <p className="flex items-start gap-2"><span className="text-[#D4941A] mt-0.5">✉️</span> <a href="mailto:pompeiis@sbcglobal.net" className="hover:text-[#C8332A]">pompeiis@sbcglobal.net</a></p>
              </div>
              <div className="text-xs text-gray-500 bg-[#FFF8EE] rounded-xl p-4 border border-[#D4941A]/10">
                <p className="font-semibold text-[#1E0E05] mb-2">Hours of Operation</p>
                <p>Mon–Wed: 11:00 AM – 9:00 PM</p>
                <p>Thursday: 11:00 AM – 10:00 PM</p>
                <p>Fri–Sat: 11:00 AM – 11:00 PM</p>
                <p>Sunday: 12:00 PM – 9:00 PM</p>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=1120+Military+St,+Port+Huron,+MI+48060"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#C8332A] hover:bg-[#D44035] text-white font-semibold px-6 py-4 rounded-2xl transition-all duration-200 hover:-translate-y-0.5 shadow-md"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
                Get Directions
              </a>
              <a
                href="tel:+18109663400"
                className="flex items-center justify-center gap-2 bg-[#D4941A] hover:bg-[#E8A832] text-[#1E0E05] font-semibold px-6 py-4 rounded-2xl transition-all duration-200 hover:-translate-y-0.5 shadow-md"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call (810) 966-3400
              </a>
              <Link
                href="/contact"
                className="flex items-center justify-center gap-2 border-2 border-[#1E0E05]/20 hover:border-[#C8332A] text-[#1E0E05] hover:text-[#C8332A] font-semibold px-6 py-4 rounded-2xl transition-all duration-200"
              >
                Full Hours &amp; Directions
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
