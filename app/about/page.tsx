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
      <section className="py-16 bg-[#8B1A1A]">
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
                className="text-3xl sm:text-4xl font-bold text-[#2C2C2C] mb-6"
                style={{ fontFamily: "var(--font-oranienbaum), serif" }}
              >
                A Cornerstone of the
                <br /><span className="text-[#8B1A1A] italic">Blue Water Area</span>
              </h2>
              <div className="w-14 h-1 bg-[#C9A84C] mb-8 rounded-full" />
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
                  We&apos;re proud to be ranked <strong className="text-[#2C2C2C]">#6 of 104 restaurants in Port Huron</strong> on
                  Tripadvisor, with a 4.5-star rating from 179 reviews. One reviewer called us
                  &ldquo;the #1 place to eat in Port Huron&rdquo; — and we work every day to live up to that.
                </p>
              </div>
            </div>

            <div className="space-y-5">
              {[
                { icon: "🔥", title: "Stone-Oven Pizzas", body: "Every pizza is hand-tossed and cooked in our stone ovens, resulting in a crispy, perfectly charred crust that you just can't get from a conventional oven." },
                { icon: "🍝", title: "Scratch-Made Everything", body: "Our sauces, meatballs, pasta fillings, and soups are all made in-house from scratch. If we didn't make it ourselves, it doesn't make the menu." },
                { icon: "🥗", title: "Endless Focaccia & Salad", body: "Every entrée comes with endless homemade focaccia bread, dipping oil, and Pompeii's house salad — because a great meal starts before the main course." },
                { icon: "🍷", title: "Full Bar", body: "We offer a full selection of beer, wine and spirits to complement your meal. Ask about our wine pairings and daily cocktail specials." },
                { icon: "🎉", title: "Events & Catering", body: "Our dining room accommodates up to 120 guests for private events, and we offer catering trays for off-site gatherings of any size." },
                { icon: "🌿", title: "Gluten-Free Friendly", body: "We offer gluten-free pizza crust, garlic cheese bread, rice pasta, and more — because everyone deserves a great Italian meal." },
              ].map((item) => (
                <div key={item.title} className="flex gap-4 p-5 bg-[#FDF6E3] rounded-2xl border border-[#C9A84C]/10">
                  <span className="text-2xl flex-shrink-0">{item.icon}</span>
                  <div>
                    <h3
                      className="font-bold text-[#2C2C2C] mb-1"
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
      <section className="py-14 bg-[#FDF6E3] border-t border-[#C9A84C]/20">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2
            className="text-3xl font-bold text-[#2C2C2C] mb-4"
            style={{ fontFamily: "var(--font-oranienbaum), serif" }}
          >
            Come Experience It for Yourself
          </h2>
          <p className="text-gray-600 mb-7">
            We&apos;re open 7 days a week for dine-in and carryout. Come hungry — leave happy.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/menu" className="bg-[#8B1A1A] hover:bg-[#A52020] text-white font-semibold px-7 py-3 rounded-full transition-all duration-200 hover:-translate-y-0.5 shadow-md">
              View Our Menu
            </Link>
            <a href="tel:+18109663400" className="border-2 border-[#8B1A1A] text-[#8B1A1A] hover:bg-[#8B1A1A] hover:text-white font-semibold px-7 py-3 rounded-full transition-all duration-200 hover:-translate-y-0.5">
              Call (810) 966-3400
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
