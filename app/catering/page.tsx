import type { Metadata } from "next";
import PageHero from "../components/PageHero";

export const metadata: Metadata = {
  title: "Catering",
  description:
    "Pompeii's Pizzeria offers catering trays and to-go orders for any size gathering in Port Huron, MI. Italian food for your office, party, or event.",
};

const packages = [
  {
    title: "Pasta Trays",
    description: "Lasagna, manicotti, spaghetti, fettuccine carbonara, and more — served in full trays ready to go.",
    serves: "Serves 8–12",
  },
  {
    title: "Pizza Trays",
    description: "Any of our specialty or classic pizzas cut and packed to go. Stone-oven baked to perfection.",
    serves: "Serves 6–8",
  },
  {
    title: "Salad & Bread",
    description: "Pompeii's signature house salad and endless homemade focaccia bread with dipping oil.",
    serves: "Serves 10+",
  },
  {
    title: "Appetizer Spread",
    description: "Bruschetta bread, meatballs, pepperoni stix, and garlic cheese bread for a perfect starter spread.",
    serves: "Serves 8–10",
  },
];

export default function CateringPage() {
  return (
    <main>
      <PageHero
        eyebrow="Off-Site & On-Site"
        title="Catering"
        subtitle="Authentic Italian food for any gathering — delivered fresh from our kitchen to your event."
      />

      {/* Intro */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[#8B1A1A] text-sm font-semibold tracking-[0.2em] uppercase mb-3">Catering</p>
              <h2
                className="text-4xl font-bold text-[#2C2C2C] mb-5 leading-tight"
                style={{ fontFamily: "var(--font-oranienbaum), serif" }}
              >
                Bring Pompeii&apos;s to
                <br /><span className="text-[#8B1A1A] italic">Your Next Gathering</span>
              </h2>
              <div className="w-14 h-1 bg-[#C9A84C] mb-7 rounded-full" />
              <p className="text-gray-600 text-lg leading-relaxed mb-5">
                Whether it&apos;s a corporate lunch, a birthday celebration, a graduation, or a neighborhood
                get-together — Pompeii&apos;s catering brings the flavors of our kitchen straight to your event.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                We offer a full range of to-go trays including pasta, pizza, salads, appetizers, and
                desserts. All items are prepared fresh to order. Just call ahead and we&apos;ll have
                everything ready for pickup.
              </p>
              <div className="bg-[#FDF6E3] border border-[#C9A84C]/20 rounded-2xl p-6">
                <p
                  className="font-bold text-[#2C2C2C] mb-4"
                  style={{ fontFamily: "var(--font-oranienbaum), serif" }}
                >
                  Ready to Order?
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="tel:+18109663400"
                    className="flex items-center justify-center gap-2 bg-[#8B1A1A] hover:bg-[#A52020] text-white font-semibold px-6 py-3 rounded-full transition-all duration-200 hover:-translate-y-0.5 shadow-md"
                  >
                    Call (810) 966-3400
                  </a>
                  <a
                    href="mailto:pompeiis@sbcglobal.net"
                    className="flex items-center justify-center gap-2 border-2 border-[#8B1A1A] text-[#8B1A1A] hover:bg-[#8B1A1A] hover:text-white font-semibold px-6 py-3 rounded-full transition-all duration-200 hover:-translate-y-0.5"
                  >
                    Email Us
                  </a>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {packages.map((pkg) => (
                <div
                  key={pkg.title}
                  className="bg-[#FDF6E3] rounded-2xl p-5 border border-[#C9A84C]/15 hover:border-[#C9A84C]/40 hover:shadow-md transition-all duration-200"
                >
                  <h3
                    className="font-bold text-[#2C2C2C] mb-2"
                    style={{ fontFamily: "var(--font-oranienbaum), serif" }}
                  >
                    {pkg.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-3">{pkg.description}</p>
                  <span className="text-xs font-semibold text-[#5C6B2E] bg-[#5C6B2E]/10 px-2.5 py-1 rounded-full">
                    {pkg.serves}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="py-16 bg-[#FDF6E3]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-3xl font-bold text-[#2C2C2C] mb-10"
            style={{ fontFamily: "var(--font-oranienbaum), serif" }}
          >
            Why Cater with Pompeii&apos;s?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { icon: "🍕", title: "Stone-Oven Fresh", body: "Every pizza and pasta is made fresh to order the day of your event." },
              { icon: "🤝", title: "Easy Pickup", body: "Call ahead, we&apos;ll have your full order packaged and ready when you arrive." },
              { icon: "🌿", title: "Dietary Friendly", body: "Gluten-free options available. Just let us know your needs when ordering." },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3
                  className="font-bold text-[#2C2C2C] mb-2"
                  style={{ fontFamily: "var(--font-oranienbaum), serif" }}
                >
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
