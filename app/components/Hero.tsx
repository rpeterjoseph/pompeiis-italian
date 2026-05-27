export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Hero section"
    >
      <img
        src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&q=80"
        alt="Pompeii's Pizzeria interior"
        className="absolute inset-0 w-full h-full object-cover object-center z-0"
      />
      <div
        className="absolute inset-0 z-0 opacity-85"
        style={{
          background:
            "linear-gradient(135deg, #150800 0%, #2A0A02 30%, #1E0E05 60%, #150800 100%)",
        }}
      />
      <div
        className="absolute inset-0 z-0 opacity-10"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #D4941A 0, #D4941A 1px, transparent 0, transparent 50%)",
          backgroundSize: "20px 20px",
        }}
      />

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto pt-20">
        {/*
          ── STAMP LOGO SLOT ─────────────────────────────────────────────
          Add your stamp/circular logo above the headline:
          1. Copy logo  →  /public/images/logo-stamp.png
          2. Add `import Image from "next/image";` at top of file
          3. Replace this div with:
             <div className="mb-6 mx-auto w-28 h-28 relative">
               <Image src="/images/logo-stamp.png" alt="Pompeii's" fill className="object-contain" />
             </div>
          ─────────────────────────────────────────────────────────────── */}
        <div
          className="w-28 h-28 border-2 border-dashed border-[#D4941A]/40 rounded-full flex flex-col items-center justify-center mb-6 mx-auto"
          title="Add logo-stamp.png to /public/images/"
        >
          <svg className="w-7 h-7 text-[#D4941A]/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span className="text-[#D4941A]/40 text-[10px] mt-1 tracking-wider uppercase">Stamp Logo</span>
        </div>

        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="h-px w-16 bg-[#D4941A]" />
          <span className="text-[#D4941A] text-xs font-semibold tracking-[0.35em] uppercase">
            Est. 2002 &middot; Port Huron, MI
          </span>
          <div className="h-px w-16 bg-[#D4941A]" />
        </div>

        <h1
          className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-4 leading-tight"
          style={{ fontFamily: "var(--font-oranienbaum), serif" }}
        >
          Pompeii&apos;s
          <br />
          <span className="text-[#D4941A] italic">Pizzeria</span>
          <span className="text-white"> &amp; Italian Eatery</span>
        </h1>

        {/* Real tagline */}
        <p className="text-xl sm:text-2xl text-white/90 mb-2 font-light tracking-wide" style={{ fontFamily: "var(--font-oranienbaum), serif" }}>
          The Best Italian Food in the Blue Water Area
        </p>
        <p className="text-sm text-[#D4941A]/80 mb-3 tracking-[0.25em] uppercase font-medium">
          Stone-Oven Pizza &middot; Homemade Pasta &middot; Full Bar &middot; Catering
        </p>

        {/* Stone oven badge */}
        <div className="inline-flex items-center gap-2 bg-white/5 border border-[#D4941A]/20 rounded-full px-4 py-1.5 mb-10 text-xs text-white/60">
          <svg className="w-3.5 h-3.5 text-[#D4941A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
          </svg>
          Hand-tossed pizzas cooked in stone ovens · Consistency, Great Food &amp; Great Service
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <a
            href="/menu"
            className="bg-[#C8332A] hover:bg-[#D44035] text-white font-semibold px-7 py-3 rounded-full text-base transition-all duration-200 shadow-lg hover:-translate-y-0.5"
          >
            View Full Menu
          </a>
          <a
            href="tel:+18109663400"
            className="bg-[#D4941A] hover:bg-[#E8A832] text-[#1E0E05] font-semibold px-7 py-3 rounded-full text-base transition-all duration-200 shadow-lg hover:-translate-y-0.5"
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
            className="border-2 border-[#D4941A]/60 hover:border-[#D4941A] text-[#D4941A] font-semibold px-7 py-3 rounded-full text-base transition-all duration-200 hover:bg-[#D4941A]/10 hover:-translate-y-0.5"
          >
            Catering &amp; Events
          </a>
        </div>

        {/* Quick info */}
        <div className="flex flex-wrap justify-center gap-6 text-white/60 text-sm">
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-[#D4941A] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span>1120 Military St, Port Huron, MI</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-[#D4941A] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span>(810) 966-3400</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-[#D4941A] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Mon–Wed 11AM–9PM &middot; Thu 11AM–10PM &middot; Fri–Sat 11AM–11PM &middot; Sun 12PM–9PM</span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <svg className="w-6 h-6 text-[#D4941A]/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
