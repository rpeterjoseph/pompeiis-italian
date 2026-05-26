import type { Metadata } from "next";
import PageHero from "../components/PageHero";

export const metadata: Metadata = {
  title: "Contact & Hours",
  description:
    "Find Pompeii's Pizzeria & Italian Eatery at 1120 Military St, Port Huron, MI. Hours, directions, phone, and email.",
};

const hours = [
  { days: "Monday – Wednesday", time: "11:00 AM – 9:00 PM", note: "" },
  { days: "Thursday", time: "11:00 AM – 10:00 PM", note: "" },
  { days: "Friday – Saturday", time: "11:00 AM – 11:00 PM", note: "Late night" },
  { days: "Sunday", time: "12:00 PM – 9:00 PM", note: "" },
];

export default function ContactPage() {
  return (
    <main>
      <PageHero
        eyebrow="We'd Love to See You"
        title="Contact & Hours"
        subtitle="Stop in, call ahead, or reach us by email — we're here 7 days a week."
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">

            {/* Left: Map + contact */}
            <div className="flex flex-col gap-5">
              {/* Map */}
              <div className="rounded-2xl overflow-hidden shadow-md border border-gray-200 h-72">
                <iframe
                  title="Pompeii's Pizzeria location map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2926.9!2d-82.4249!3d42.9703!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s1120+Military+St%2C+Port+Huron%2C+MI+48060!5e0!3m2!1sen!2sus!4v1"
                  className="w-full h-full"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>

              {/* Quick action buttons */}
              <div className="grid grid-cols-3 gap-3">
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=1120+Military+St,+Port+Huron,+MI+48060"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-1.5 bg-[#8B1A1A] hover:bg-[#A52020] text-white font-semibold py-4 rounded-2xl transition-all duration-200 hover:-translate-y-0.5 text-center"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                  <span className="text-xs">Directions</span>
                </a>
                <a
                  href="tel:+18109663400"
                  className="flex flex-col items-center gap-1.5 bg-[#C9A84C] hover:bg-[#E8C96B] text-[#2C2C2C] font-semibold py-4 rounded-2xl transition-all duration-200 hover:-translate-y-0.5 text-center"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="text-xs">Call Us</span>
                </a>
                <a
                  href="mailto:pompeiis@sbcglobal.net"
                  className="flex flex-col items-center gap-1.5 bg-[#5C6B2E] hover:bg-[#6d7e37] text-white font-semibold py-4 rounded-2xl transition-all duration-200 hover:-translate-y-0.5 text-center"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-xs">Email</span>
                </a>
              </div>

              {/* Address card */}
              <div className="bg-[#FDF6E3] rounded-2xl p-5 border border-[#C9A84C]/15">
                <p className="font-bold text-[#2C2C2C] mb-3" style={{ fontFamily: "var(--font-oranienbaum), serif" }}>
                  Pompeii&apos;s Pizzeria &amp; Italian Eatery
                </p>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>📍 1120 Military St, Port Huron, MI 48060</p>
                  <p>📞 <a href="tel:+18109663400" className="hover:text-[#8B1A1A] transition-colors">(810) 966-3400</a></p>
                  <p>✉️ <a href="mailto:pompeiis@sbcglobal.net" className="hover:text-[#8B1A1A] transition-colors break-all">pompeiis@sbcglobal.net</a></p>
                </div>
              </div>
            </div>

            {/* Right: Hours */}
            <div>
              <div className="bg-[#2C2C2C] rounded-2xl overflow-hidden shadow-md mb-5">
                <div className="px-6 py-5 bg-[#8B1A1A] flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#C9A84C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h2
                    className="text-white font-bold text-xl"
                    style={{ fontFamily: "var(--font-oranienbaum), serif" }}
                  >
                    Hours of Operation
                  </h2>
                </div>
                <div className="px-6 py-5 space-y-0 divide-y divide-white/10">
                  {hours.map((item) => (
                    <div key={item.days} className="flex items-center justify-between py-4">
                      <div>
                        <span className="text-white/80 font-medium text-sm">{item.days}</span>
                        {item.note && (
                          <span className="ml-2 text-[10px] bg-[#C9A84C]/20 text-[#C9A84C] px-1.5 py-0.5 rounded-full">
                            {item.note}
                          </span>
                        )}
                      </div>
                      <span className="text-[#C9A84C] font-semibold text-sm">{item.time}</span>
                    </div>
                  ))}
                </div>
                <div className="px-6 py-3 bg-black/20 border-t border-white/10">
                  <p className="text-white/40 text-xs text-center">Hours may vary on holidays — call ahead to confirm.</p>
                </div>
              </div>

              {/* Services */}
              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: "Dine-In", icon: "🍽️", desc: "Full restaurant experience, 7 days a week" },
                  { label: "Carryout", icon: "🥡", desc: "Call ahead, we'll have it ready" },
                  { label: "Catering", icon: "🎉", desc: "Trays for any off-site event" },
                  { label: "Full Bar", icon: "🍷", desc: "Beer, wine & spirits" },
                ].map((s) => (
                  <div key={s.label} className="bg-[#FDF6E3] rounded-xl p-4 border border-[#C9A84C]/15">
                    <div className="text-2xl mb-1">{s.icon}</div>
                    <p className="font-bold text-[#2C2C2C] text-sm" style={{ fontFamily: "var(--font-oranienbaum), serif" }}>{s.label}</p>
                    <p className="text-gray-500 text-xs mt-0.5">{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
