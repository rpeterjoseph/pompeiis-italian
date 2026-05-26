const cateringFeatures = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: "Up to 120 Guests",
    description: "Our dining room can accommodate groups up to 120 people — perfect for large parties and events.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    title: "Catering Trays & To-Go",
    description: "Order Italian favorites by the tray for your office, party, or any special gathering.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    title: "Private Events",
    description: "Reserve our space for birthdays, anniversaries, reunions, corporate dinners & more.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
    title: "Custom Menus",
    description: "Work with our team to create a custom menu that fits your event, dietary needs, and budget.",
  },
];

export default function Catering() {
  return (
    <section
      id="catering"
      className="py-20 bg-white"
      aria-label="Catering and events"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <div>
            <p className="text-[#8B1A1A] text-sm font-semibold tracking-[0.2em] uppercase mb-3">
              Events & Catering
            </p>
            <h2
              className="text-4xl sm:text-5xl font-bold text-[#2C2C2C] mb-4 leading-tight"
              style={{ fontFamily: "var(--font-oranienbaum), serif" }}
            >
              Bring Italian to
              <br />
              <span className="text-[#8B1A1A] italic">Your Next Event</span>
            </h2>
            <div className="w-16 h-1 bg-[#C9A84C] mb-6 rounded-full" />
            <p className="text-gray-600 text-lg leading-relaxed mb-4">
              Whether you&apos;re planning an intimate family celebration or a large corporate dinner,
              Pompeii&apos;s has the food, space, and experience to make it special.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              We offer catering trays and to-go orders for off-site events, as well as full
              on-site dining for groups of up to 120 guests. Our team will work with you to
              create the perfect Italian feast for any occasion.
            </p>

            {/* Contact for catering */}
            <div className="bg-[#FDF6E3] border border-[#C9A84C]/20 rounded-2xl p-6 mb-6">
              <p className="font-semibold text-[#2C2C2C] mb-3" style={{ fontFamily: "var(--font-oranienbaum), serif" }}>
                Plan Your Event
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="tel:+18109663400"
                  className="flex items-center justify-center gap-2 bg-[#8B1A1A] hover:bg-[#A52020] text-white font-semibold px-6 py-3 rounded-full transition-all duration-200 hover:-translate-y-0.5 shadow-md"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call to Book
                </a>
                <a
                  href="mailto:pompeiis@sbcglobal.net"
                  className="flex items-center justify-center gap-2 border-2 border-[#8B1A1A] text-[#8B1A1A] hover:bg-[#8B1A1A] hover:text-white font-semibold px-6 py-3 rounded-full transition-all duration-200 hover:-translate-y-0.5"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Email Us
                </a>
              </div>
            </div>
          </div>

          {/* Right: Feature cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {cateringFeatures.map((feature) => (
              <div
                key={feature.title}
                className="bg-[#FDF6E3] rounded-2xl p-5 border border-[#C9A84C]/15 hover:border-[#C9A84C]/40 hover:shadow-md transition-all duration-200"
              >
                <div className="w-10 h-10 bg-[#8B1A1A]/10 rounded-xl flex items-center justify-center text-[#8B1A1A] mb-3">
                  {feature.icon}
                </div>
                <h3
                  className="font-bold text-[#2C2C2C] mb-1 text-sm"
                  style={{ fontFamily: "var(--font-oranienbaum), serif" }}
                >
                  {feature.title}
                </h3>
                <p className="text-gray-500 text-xs leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
