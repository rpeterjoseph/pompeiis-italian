const gfOptions = [
  {
    icon: "🍕",
    title: "Gluten-Free Pizza",
    description: "Enjoy our full pizza lineup on a dedicated gluten-free crust — same great taste, no wheat.",
  },
  {
    icon: "🧀",
    title: "GF Garlic Cheese Bread",
    description: "Our fan-favorite garlic cheese bread is available on a gluten-free base.",
  },
  {
    icon: "🍝",
    title: "Rice Pasta",
    description: "Swap any pasta dish to rice pasta — perfect for our Alfredo, marinara & more.",
  },
  {
    icon: "🌿",
    title: "Dishes Over Fresh Spinach",
    description: "Many entrées can be served over a bed of fresh spinach instead of pasta.",
  },
  {
    icon: "🍺",
    title: "Redbridge Gluten-Free Beer",
    description: "We carry Redbridge, a sorghum-based gluten-free beer, for our GF guests.",
  },
];

export default function GlutenFree() {
  return (
    <section
      id="gluten-free"
      className="py-20 bg-[#3D5C34]"
      aria-label="Gluten-free options"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-[#E8A832] text-sm font-semibold tracking-[0.2em] uppercase mb-3">
            Dietary Options
          </p>
          <h2
            className="text-4xl sm:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-oranienbaum), serif" }}
          >
            Gluten-Free <span className="text-[#E8A832] italic">Friendly</span>
          </h2>
          <div className="w-16 h-1 bg-[#E8A832] mx-auto mb-5 rounded-full" />
          <p className="text-white/80 max-w-2xl mx-auto text-lg">
            At Pompeii&apos;s, we believe everyone deserves a great Italian meal. We offer a variety of
            gluten-free options so all our guests can enjoy the food they love.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {gfOptions.map((option) => (
            <div
              key={option.title}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-5 text-center hover:bg-white/15 transition-colors duration-200"
            >
              <div className="text-4xl mb-3" role="img" aria-label={option.title}>
                {option.icon}
              </div>
              <h3
                className="text-white font-bold text-base mb-2"
                style={{ fontFamily: "var(--font-oranienbaum), serif" }}
              >
                {option.title}
              </h3>
              <p className="text-white/70 text-sm leading-relaxed">{option.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <p className="text-white/70 text-sm mb-4">
            Please inform your server of any dietary restrictions. We&apos;re happy to accommodate your needs.
          </p>
          <a
            href="tel:+18109663400"
            className="inline-flex items-center gap-2 bg-[#E8A832] hover:bg-white text-[#1E0E05] font-semibold px-7 py-3 rounded-full transition-all duration-200 hover:-translate-y-0.5"
          >
            Ask About Dietary Options
          </a>
        </div>
      </div>
    </section>
  );
}
