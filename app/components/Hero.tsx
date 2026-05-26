export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Hero section"
    >
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "linear-gradient(135deg, #1a0a0a 0%, #3d1010 30%, #2C1810 60%, #1a1a0a 100%)",
        }}
      />
      <div
        className="absolute inset-0 z-0 opacity-10"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #C9A84C 0, #C9A84C 1px, transparent 0, transparent 50%)",
          backgroundSize: "20px 20px",
        }}
      />

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto pt-20">
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="h-px w-16 bg-[#C9A84C]" />
          <span className="text-[#C9A84C] text-xs font-semibold tracking-[0.35em] uppercase">
            Est. 2002 &middot; Port Huron, MI
          </span>
          <div className="h-px w-16 bg-[#C9A84C]" />
        </div>

        <h1
          className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-4 leading-tight"
          style={{ fontFamily: "var(--font-oranienbaum), serif" }}
        >
          Pompeii&apos;s
          <br />
          <span className="text-[#C9A84C] italic">Pizzeria</span>
          <span className="text-white"> &amp; Italian Eatery</span>
        </h1>

        {/* Real tagline */}
        <p className="text-xl sm:text-2xl text-white/90 mb-2 font-light tracking-wide" style={{ fontFamily: "var(--font-oranienbaum), serif" }}>
          The Best Italian Food in the Blue Water Area
        </p>
        <p className="text-sm text-[#C9A84C]/80 mb-3 tracking-[0.25em] uppercase font-medium">
          Stone-Oven Pizza &middot; Homemade Pasta &middot; Full Bar &middot; Catering
        </p>

        {/* Stone oven badge */}
        <div className="inline-flex items-center gap-2 bg-white/5 border border-[#C9A84C]/20 rounded-full px-4 py-1.5 mb-10 text-xs text-white/60">
          <svg className="w-3.5 h-3.5 text-[#C9A84C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
          </svg>
          Hand-tossed pizzas cooked in stone ovens · Consistency, Great Food &amp; Great Service
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <a
            href="/menu"
            className="bg-[#8B1A1A] hover:bg-[#A52020] text-white font-semibold px-7 py-3 rounded-full text-base transition-all duration-200 shadow-lg hover:-translate-y-0.5"
          >
            View Full Menu
          </a>
          <a
            href="tel:+18109663400"
            className="bg-[#C9A84C] hover:bg-[#E8C96B] text-[#2C2C2C] font-semibold px-7 py-3 rounded-full text-base transition-all duration-200 shadow-lg hover:-translate-y-0.5"
          >
            Call Now
          </a>
          <a
            href="https://www.google.com/maps/dir/?api=1&destination=1120+Military+St,+Port+Huron,+MI+48060"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-white/40 hover:border-white text-white font-semibold px-7 py-3 rounded-full text-base transition-all duration-200 hover:bg-white/10 hover:-translate-y-0.5"
          >
            Get Directions
          </a>
          <a
            href="/catering"
            className="border-2 border-[#C9A84C]/60 hover:border-[#C9A84C] text-[#C9A84C] font-semibold px-7 py-3 rounded-full text-base transition-all duration-200 hover:bg-[#C9A84C]/10 hover:-translate-y-0.5"
          >
            Catering &amp; Events
          </a>
        </div>

        {/* Quick info */}
        <div className="flex flex-wrap justify-center gap-6 text-white/60 text-sm">
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-[#C9A84C] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span>1120 Military St, Port Huron, MI</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-[#C9A84C] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span>(810) 966-3400</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-[#C9A84C] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Mon–Wed 11AM–9PM &middot; Thu 11AM–10PM &middot; Fri–Sat 11AM–11PM &middot; Sun 12PM–9PM</span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <svg className="w-6 h-6 text-[#C9A84C]/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
