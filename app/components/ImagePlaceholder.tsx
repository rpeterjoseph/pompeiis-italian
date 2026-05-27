interface ImagePlaceholderProps {
  label?: string;
  sublabel?: string;
  className?: string;
}

/**
 * Placeholder shown wherever a real photo will eventually go.
 * To swap in a real image, replace this component with next/image:
 *
 *   import Image from "next/image";
 *   <Image src="/images/my-photo.jpg" alt="..." fill className="object-cover" />
 *   (wrap in a relative-positioned parent)
 */
export default function ImagePlaceholder({
  label = "Photo Coming Soon",
  sublabel,
  className = "",
}: ImagePlaceholderProps) {
  return (
    <div
      className={`relative flex flex-col items-center justify-center rounded-2xl overflow-hidden border-2 border-dashed border-[#D4941A]/30 bg-gradient-to-br from-[#1E0E05]/5 to-[#D4941A]/5 min-h-40 ${className}`}
    >
      <svg
        className="w-10 h-10 text-[#D4941A]/30 mb-3"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
      <p className="text-[#1E0E05]/40 text-sm font-medium text-center px-6 leading-snug">
        {label}
      </p>
      {sublabel && (
        <p className="text-[#1E0E05]/25 text-xs mt-1 text-center px-6">{sublabel}</p>
      )}
    </div>
  );
}
