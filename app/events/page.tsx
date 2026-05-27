import type { Metadata } from "next";
import PageHero from "../components/PageHero";

export const metadata: Metadata = {
  title: "Events",
  description:
    "Host your private event at Pompeii's Pizzeria in Port Huron, MI. We accommodate groups up to 120 guests for birthdays, reunions, corporate dinners & more.",
};

const eventTypes = [
  { icon: "🎂", title: "Birthday Parties", description: "Make your birthday unforgettable with a private Italian feast for family and friends." },
  { icon: "💼", title: "Corporate Dinners", description: "Impress clients or treat your team to an elegant Italian dinner in a warm, welcoming atmosphere." },
  { icon: "👨‍👩‍👧‍👦", title: "Family Reunions", description: "Bring the whole family together over homemade Italian food in our spacious dining room." },
  { icon: "🎓", title: "Graduations", description: "Celebrate milestones with a memorable dinner at Pompeii's — we handle the food, you enjoy the moment." },
  { icon: "💍", title: "Rehearsal Dinners", description: "Start the wedding festivities right with an intimate dinner for your wedding party." },
  { icon: "🏆", title: "Team Celebrations", description: "Sports team, club, or organization — we love celebrating achievements with the community." },
];

export default function EventsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Private Dining · Up to 120 Guests"
        title="Host Your Event"
        subtitle="Our dining room is the perfect backdrop for any celebration — intimate or grand."
      />

      {/* Capacity highlight */}
      <section className="py-6 bg-[#D4941A]">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <p
            className="text-[#1E0E05] font-bold text-lg"
            style={{ fontFamily: "var(--font-oranienbaum), serif" }}
          >
            Pompeii&apos;s accommodates groups of <span className="text-[#C8332A]">up to 120 guests</span> for private on-site dining
          </p>
        </div>
      </section>

      {/* Event types */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Private dining room photo */}
          <img
            src="https://images.unsplash.com/photo-1561065270-5c2af775b542?w=1400&q=80"
            alt="Private dining room setup for events"
            className="w-full h-80 object-cover rounded-2xl mb-14"
          />
          <div className="text-center mb-12">
            <p className="text-[#C8332A] text-sm font-semibold tracking-[0.2em] uppercase mb-3">Perfect For</p>
            <h2
              className="text-4xl font-bold text-[#1E0E05] mb-4"
              style={{ fontFamily: "var(--font-oranienbaum), serif" }}
            >
              Every Occasion
            </h2>
            <div className="w-14 h-1 bg-[#D4941A] mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
            {eventTypes.map((event) => (
              <div
                key={event.title}
                className="bg-[#FFF8EE] rounded-2xl p-6 border border-[#D4941A]/15 hover:border-[#D4941A]/40 hover:shadow-md transition-all duration-200"
              >
                <div className="text-3xl mb-3">{event.icon}</div>
                <h3
                  className="font-bold text-[#1E0E05] mb-2"
                  style={{ fontFamily: "var(--font-oranienbaum), serif" }}
                >
                  {event.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{event.description}</p>
              </div>
            ))}
          </div>

          {/* What to expect */}
          <div className="bg-[#1E0E05] rounded-3xl p-8 sm:p-10 text-white">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3
                  className="text-2xl font-bold text-[#D4941A] mb-4"
                  style={{ fontFamily: "var(--font-oranienbaum), serif" }}
                >
                  What to Expect
                </h3>
                <ul className="space-y-3 text-white/80 text-sm">
                  {[
                    "Dedicated space for your group — up to 120 guests",
                    "Full menu available for private events",
                    "Customizable menu for your dietary needs",
                    "Endless homemade focaccia and house salad included with entrées",
                    "Full bar service — beer, wine and spirits",
                    "Warm, welcoming atmosphere that feels like a family gathering",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-[#D4941A] mt-0.5 flex-shrink-0">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                <p
                  className="text-white font-bold text-lg mb-2"
                  style={{ fontFamily: "var(--font-oranienbaum), serif" }}
                >
                  Book Your Event
                </p>
                <p className="text-white/60 text-sm mb-5">
                  Contact us to check availability and discuss your event needs. We&apos;ll make it special.
                </p>
                <div className="flex flex-col gap-3">
                  <a
                    href="tel:+18109663400"
                    className="flex items-center justify-center gap-2 bg-[#D4941A] hover:bg-[#E8A832] text-[#1E0E05] font-semibold px-5 py-3 rounded-full transition-all duration-200"
                  >
                    Call (810) 966-3400
                  </a>
                  <a
                    href="mailto:pompeiis@sbcglobal.net"
                    className="flex items-center justify-center gap-2 border border-white/20 hover:border-white text-white font-semibold px-5 py-3 rounded-full transition-all duration-200"
                  >
                    pompeiis@sbcglobal.net
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
