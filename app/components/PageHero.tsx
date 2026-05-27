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
        background: "linear-gradient(135deg, #150800 0%, #2A0A02 40%, #1E0E05 70%, #150800 100%)",
      }}
    >
      {/* Diagonal line pattern */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #D4941A 0, #D4941A 1px, transparent 0, transparent 50%)",
          backgroundSize: "20px 20px",
        }}
      />

      <div className="relative z-10 max-w-3xl mx-auto px-4">
        {eyebrow && (
          <p className="text-[#D4941A] text-xs font-semibold tracking-[0.3em] uppercase mb-4">
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
          <div className="h-px w-12 bg-[#D4941A]/60" />
          <div className="w-1.5 h-1.5 rounded-full bg-[#D4941A]" />
          <div className="h-px w-12 bg-[#D4941A]/60" />
        </div>
        {subtitle && (
          <p className="text-white/70 text-lg leading-relaxed">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
