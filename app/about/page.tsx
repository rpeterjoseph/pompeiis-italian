import type { Metadata } from "next";
import PageHero from "../components/PageHero";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Pompeii's Pizzeria & Italian Eatery — a family-owned Italian restaurant in Port Huron, MI, serving the Blue Water Area since 2002.",
};

export default function AboutPage() {
  return (
    <main>
      <PageHero
        eyebrow="Est. 2002 · Port Huron, MI"
        title="Our Story"
        subtitle="Family-owned, community-loved — serving the finest Italian food in the Blue Water Area for over 20 years."
      />

      {/* Motto */}
      <section className="py-16 bg-[#C8332A]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p
            className="text-3xl sm:text-4xl font-bold text-white italic mb-3"
            style={{ fontFamily: "var(--font-oranienbaum), serif" }}
          >
            &ldquo;Consistency, Great Food &amp; Great Service.&rdquo;
          </p>
          <p className="text-white/60 text-sm tracking-widest uppercase">The Pompeii&apos;s Promise — Since 2002</p>
        </div>
      </section>

      {/* Main story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-start">
            <div>
              <h2
                className="text-3xl sm:text-4xl font-bold text-[#1E0E05] mb-6"
                style={{ fontFamily: "var(--font-oranienbaum), serif" }}
              >
                A Cornerstone of the
                <br /><span className="text-[#C8332A] italic">Blue Water Area</span>
              </h2>
              <div className="w-14 h-1 bg-[#D4941A] mb-8 rounded-full" />

              {/* Restaurant photo placeholder */}
              <img
                src="https://images.unsplash.com/photo-1667388969250-1c7220bf3f37?w=900&q=80"
                alt="Pompeii's restaurant interior"
                className="w-full h-60 object-cover rounded-2xl mb-8"
              />

              <div className="space-y-5 text-gray-600 leading-relaxed">
                <p className="text-lg">
                  Pompeii&apos;s Pizzeria &amp; Italian Eatery opened its doors in 2002 with one simple
                  mission: to serve the freshest and most homemade Italian food possible to the
                  Port Huron community.
                </p>
                <p>
                  More than two decades later, that mission hasn&apos;t changed. Every sauce is made
                  from scratch. Every pizza is hand-tossed and stone-oven baked. Every pasta dish
                  is prepared fresh using quality ingredients and recipes designed to bring people
                  together around the table.
                </p>
                <p>
                  From our Fettuccine Carbonara — consistently called the must-order dish by
                  Tripadvisor reviewers — to our hearty lasagna, rich blush sauce manicotti, and
                  fresh grouper entrées, our menu reflects the full breadth of Italian and Italian-American
                  cuisine done right.
                </p>
                <p>
                  We&apos;re proud to be ranked <strong className="text-[#1E0E05]">#6 of 104 restaurants in Port Huron</strong> on
                  Tripadvisor, with a 4.5-star rating from 179 reviews. One reviewer called us
                  &ldquo;the #1 place to eat in Port Huron&rdquo; — and we work every day to live up to that.
                </p>
              </div>
            </div>

            <div className="space-y-5">
              {/* About page photo — stamp logo spot */}
              <div className="flex items-center gap-4 p-5 bg-[#FFF8EE] rounded-2xl border border-[#D4941A]/20">
                {/*
                  ── STAMP LOGO SLOT (About page) ─────────────────────────
                  1. Copy logo  →  /public/images/logo-stamp.png
                  2. Replace this div with:
                     import Image from "next/image";
                     <Image src="/images/logo-stamp.png" alt="Pompeii's" width={64} height={64} className="object-contain flex-shrink-0" />
                  ─────────────────────────────────────────────────────── */}
                <div
                  className="w-16 h-16 border border-dashed border-[#D4941A]/40 rounded-full flex flex-col items-center justify-center flex-shrink-0"
                  title="Add logo-stamp.png to /public/images/"
                >
                  <svg className="w-5 h-5 text-[#D4941A]/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-[#1E0E05] text-sm" style={{ fontFamily: "var(--font-oranienbaum), serif" }}>
                    Est. 2002 · Port Huron, MI
                  </p>
                  <p className="text-gray-500 text-xs mt-0.5">Family-owned &amp; operated for over 20 years</p>
                </div>
              </div>

              {[
                { icon: "🔥", title: "Stone-Oven Pizzas", body: "Every pizza is hand-tossed and cooked in our stone ovens, resulting in a crispy, perfectly charred crust that you just can't get from a conventional oven." },
                { icon: "🍝", title: "Scratch-Made Everything", body: "Our sauces, meatballs, pasta fillings, and soups are all made in-house from scratch. If we didn't make it ourselves, it doesn't make the menu." },
                { icon: "🥗", title: "Endless Focaccia & Salad", body: "Every entrée comes with endless homemade focaccia bread, dipping oil, and Pompeii's house salad — because a great meal starts before the main course." },
                { icon: "🍷", title: "Full Bar", body: "We offer a full selection of beer, wine and spirits to complement your meal. Ask about our wine pairings and daily cocktail specials." },
                { icon: "🎉", title: "Events & Catering", body: "Our dining room accommodates up to 120 guests for private events, and we offer catering trays for off-site gatherings of any size." },
                { icon: "🌿", title: "Gluten-Free Friendly", body: "We offer gluten-free pizza crust, garlic cheese bread, rice pasta, and more — because everyone deserves a great Italian meal." },
              ].map((item) => (
                <div key={item.title} className="flex gap-4 p-5 bg-[#FFF8EE] rounded-2xl border border-[#D4941A]/10">
                  <span className="text-2xl flex-shrink-0">{item.icon}</span>
                  <div>
                    <h3
                      className="font-bold text-[#1E0E05] mb-1"
                      style={{ fontFamily: "var(--font-oranienbaum), serif" }}
                    >
                      {item.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-[#FFF8EE] border-t border-[#D4941A]/20">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2
            className="text-3xl font-bold text-[#1E0E05] mb-4"
            style={{ fontFamily: "var(--font-oranienbaum), serif" }}
          >
            Come Experience It for Yourself
          </h2>
          <p className="text-gray-600 mb-7">
            We&apos;re open 7 days a week for dine-in and carryout. Come hungry — leave happy.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/menu" className="bg-[#C8332A] hover:bg-[#D44035] text-white font-semibold px-7 py-3 rounded-full transition-all duration-200 hover:-translate-y-0.5 shadow-md">
              View Our Menu
            </Link>
            <a href="tel:+18109663400" className="border-2 border-[#C8332A] text-[#C8332A] hover:bg-[#C8332A] hover:text-white font-semibold px-7 py-3 rounded-full transition-all duration-200 hover:-translate-y-0.5">
              Call (810) 966-3400
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
