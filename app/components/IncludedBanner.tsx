export default function IncludedBanner() {
  return (
    <div className="bg-[#3D5C34] text-white py-5 px-4">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-8 text-center sm:text-left">
        <div className="flex items-center gap-2 text-[#E8A832] font-semibold text-sm tracking-wide uppercase">
          <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
          </svg>
          Included with Every Entrée
        </div>
        <div className="hidden sm:block w-px h-5 bg-white/20" />
        <div className="flex flex-wrap justify-center sm:justify-start gap-4 text-sm text-white/90">
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E8A832] flex-shrink-0" />
            Endless Homemade Focaccia Bread
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E8A832] flex-shrink-0" />
            Dipping Oil
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E8A832] flex-shrink-0" />
            Pompeii&apos;s House Salad
          </span>
        </div>
      </div>
    </div>
  );
}
