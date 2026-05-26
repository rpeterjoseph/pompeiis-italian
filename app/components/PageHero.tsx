interface PageHeroProps {
  title: string;
  subtitle?: string;
  eyebrow?: string;
}

export default function PageHero({ title, subtitle, eyebrow }: PageHeroProps) {
  return (
    <section
      className="relative pt-32 pb-16 text-center overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #1a0a0a 0%, #3d1010 40%, #2C1810 70%, #1a1a0a 100%)",
      }}
    >
      {/* Diagonal line pattern */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #C9A84C 0, #C9A84C 1px, transparent 0, transparent 50%)",
          backgroundSize: "20px 20px",
        }}
      />

      <div className="relative z-10 max-w-3xl mx-auto px-4">
        {eyebrow && (
          <p className="text-[#C9A84C] text-xs font-semibold tracking-[0.3em] uppercase mb-4">
            {eyebrow}
          </p>
        )}
        <h1
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight"
          style={{ fontFamily: "var(--font-oranienbaum), serif" }}
        >
          {title}
        </h1>
        <div className="flex items-center justify-center gap-4 mb-4">
          <div className="h-px w-12 bg-[#C9A84C]/60" />
          <div className="w-1.5 h-1.5 rounded-full bg-[#C9A84C]" />
          <div className="h-px w-12 bg-[#C9A84C]/60" />
        </div>
        {subtitle && (
          <p className="text-white/70 text-lg leading-relaxed">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
