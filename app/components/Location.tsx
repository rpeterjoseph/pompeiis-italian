const hours = [
  { days: "Monday – Wednesday", time: "11:00 AM – 9:00 PM" },
  { days: "Thursday", time: "11:00 AM – 10:00 PM" },
  { days: "Friday – Saturday", time: "11:00 AM – 11:00 PM" },
  { days: "Sunday", time: "12:00 PM – 9:00 PM" },
];

export default function Location() {
  return (
    <section
      id="location"
      className="py-20 bg-white"
      aria-label="Hours and location"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-[#C8332A] text-sm font-semibold tracking-[0.2em] uppercase mb-3">
            Find Us
          </p>
          <h2
            className="text-4xl sm:text-5xl font-bold text-[#1E0E05] mb-4"
            style={{ fontFamily: "var(--font-oranienbaum), serif" }}
          >
            Hours &amp; <span className="text-[#C8332A] italic">Location</span>
          </h2>
          <div className="w-16 h-1 bg-[#D4941A] mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Left: Map + Contact */}
          <div className="flex flex-col gap-5">
            {/* Map placeholder */}
            <div className="relative rounded-2xl overflow-hidden shadow-md bg-[#F0D8C0] h-64 lg:h-80 border border-gray-200">
              <iframe
                title="Pompeii's Pizzeria location map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2926.9!2d-82.4249!3d42.9703!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s1120+Military+St%2C+Port+Huron%2C+MI+48060!5e0!3m2!1sen!2sus!4v1"
                className="w-full h-full"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
              {/* Fallback overlay in case embed fails */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="bg-white/90 rounded-xl p-4 text-center shadow-sm" style={{ display: "none" }}>
                  <p className="font-semibold text-[#1E0E05]">1120 Military St</p>
                  <p className="text-gray-500 text-sm">Port Huron, MI 48060</p>
                </div>
              </div>
            </div>

            {/* Contact info */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=1120+Military+St,+Port+Huron,+MI+48060"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 bg-[#C8332A] hover:bg-[#D44035] text-white font-semibold px-4 py-4 rounded-2xl transition-all duration-200 hover:-translate-y-0.5 shadow-md text-center"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
                <span className="text-sm">Get Directions</span>
              </a>
              <a
                href="tel:+18109663400"
                className="flex flex-col items-center gap-2 bg-[#D4941A] hover:bg-[#E8A832] text-[#1E0E05] font-semibold px-4 py-4 rounded-2xl transition-all duration-200 hover:-translate-y-0.5 shadow-md text-center"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-sm">(810) 966-3400</span>
              </a>
              <a
                href="mailto:pompeiis@sbcglobal.net"
                className="flex flex-col items-center gap-2 bg-[#3D5C34] hover:bg-[#4A6E40] text-white font-semibold px-4 py-4 rounded-2xl transition-all duration-200 hover:-translate-y-0.5 shadow-md text-center"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-sm">Email Us</span>
              </a>
            </div>

            {/* Address detail */}
            <div className="bg-[#FFF8EE] rounded-2xl p-5 border border-[#D4941A]/15">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-[#C8332A]/10 rounded-xl flex items-center justify-center text-[#C8332A] flex-shrink-0 mt-0.5">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-[#1E0E05]" style={{ fontFamily: "var(--font-oranienbaum), serif" }}>
                    Pompeii&apos;s Pizzeria &amp; Italian Eatery
                  </p>
                  <p className="text-gray-600 text-sm mt-0.5">1120 Military St</p>
                  <p className="text-gray-600 text-sm">Port Huron, MI 48060</p>
                  <p className="text-gray-500 text-xs mt-1">Serving the Blue Water Area since 2002</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Hours */}
          <div>
            <div className="bg-[#1E0E05] rounded-2xl overflow-hidden shadow-md">
              <div className="px-6 py-5 bg-[#C8332A]">
                <h3
                  className="text-white font-bold text-xl flex items-center gap-2"
                  style={{ fontFamily: "var(--font-oranienbaum), serif" }}
                >
                  <svg className="w-5 h-5 text-[#D4941A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Hours of Operation
                </h3>
              </div>
              <div className="px-6 py-5 space-y-4">
                {hours.map((item, i) => (
                  <div
                    key={item.days}
                    className={`flex items-center justify-between py-3 ${
                      i < hours.length - 1 ? "border-b border-white/10" : ""
                    }`}
                  >
                    <span className="text-white/80 font-medium text-sm">{item.days}</span>
                    <span className="text-[#D4941A] font-semibold text-sm">{item.time}</span>
                  </div>
                ))}
              </div>
              <div className="px-6 py-4 bg-[#150A03] border-t border-white/10">
                <p className="text-white/50 text-xs text-center">
                  Hours may vary on holidays. Call ahead to confirm.
                </p>
              </div>
            </div>

            {/* Carryout / Dine-in badges */}
            <div className="grid grid-cols-2 gap-4 mt-5">
              {[
                { label: "Dine-In", icon: "🍽️", desc: "Warm, welcoming atmosphere for families & groups" },
                { label: "Carryout", icon: "🥡", desc: "Call ahead and we'll have your order ready to go" },
                { label: "Catering", icon: "🎉", desc: "Off-site catering trays for any size gathering" },
                { label: "Full Bar", icon: "🍷", desc: "Beer, wine & spirits available during dining hours" },
              ].map((badge) => (
                <div
                  key={badge.label}
                  className="bg-[#FFF8EE] rounded-xl p-4 border border-[#D4941A]/15 hover:border-[#D4941A]/40 transition-colors"
                >
                  <div className="text-2xl mb-1" role="img" aria-label={badge.label}>
                    {badge.icon}
                  </div>
                  <p className="font-bold text-[#1E0E05] text-sm" style={{ fontFamily: "var(--font-oranienbaum), serif" }}>
                    {badge.label}
                  </p>
                  <p className="text-gray-500 text-xs leading-relaxed mt-0.5">{badge.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
