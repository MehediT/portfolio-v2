// Swap the <div> placeholder in the "me" card with <Image> once you have a photo:
// import Image from "next/image";
// Then replace the initials div with:
// <Image src="/images/mehedi.jpg" alt="Mehedi Touré" fill className="object-cover" />

const cards = [
  {
    id: "me",
    label: "Mehedi Touré",
    delay: "0s",
    duration: "4.2s",
    accent: "from-[#1a1a2e] to-[#2d2d4e]",
    glow: "rgba(100,100,220,0.35)",
    icon: (
      <div className="flex items-center justify-center w-full h-full">
        <span
          className="font-display font-bold text-white tracking-tight"
          style={{ fontSize: "clamp(2rem, 5vw, 2.5rem)", lineHeight: 1 }}
        >
          MT
        </span>
      </div>
    ),
  },
  {
    id: "android",
    label: "Android",
    delay: "0.55s",
    duration: "3.8s",
    accent: "from-[#0d1f0d] to-[#0d2b0d]",
    glow: "rgba(61,220,132,0.35)",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-16 h-16">
        {/* Antennae */}
        <line x1="16" y1="11" x2="11" y2="4" stroke="#3ddc84" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="10.5" cy="3.5" r="1.5" fill="#3ddc84" />
        <line x1="32" y1="11" x2="37" y2="4" stroke="#3ddc84" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="37.5" cy="3.5" r="1.5" fill="#3ddc84" />
        {/* Head */}
        <path d="M9 18 A15 15 0 0 1 39 18 Z" fill="#3ddc84" />
        {/* Eyes */}
        <circle cx="18" cy="14" r="2" fill="white" />
        <circle cx="30" cy="14" r="2" fill="white" />
        {/* Body */}
        <rect x="8" y="19" width="32" height="20" rx="5" fill="#3ddc84" />
        {/* Arms */}
        <rect x="2" y="19" width="5" height="16" rx="2.5" fill="#3ddc84" />
        <rect x="41" y="19" width="5" height="16" rx="2.5" fill="#3ddc84" />
        {/* Legs */}
        <rect x="13" y="40" width="8" height="10" rx="3" fill="#3ddc84" />
        <rect x="27" y="40" width="8" height="10" rx="3" fill="#3ddc84" />
      </svg>
    ),
  },
  {
    id: "ai",
    label: "AI & LLM",
    delay: "1.1s",
    duration: "4.6s",
    accent: "from-[#1a0a2e] to-[#2d0a4e]",
    glow: "rgba(160,80,255,0.35)",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-16 h-16">
        {/* Sparkle center */}
        <path d="M24 6 L26.5 20 L40 24 L26.5 28 L24 42 L21.5 28 L8 24 L21.5 20 Z" fill="white" fillOpacity="0.9" />
        {/* Small sparkles */}
        <path d="M10 10 L11 15 L16 16 L11 17 L10 22 L9 17 L4 16 L9 15 Z" fill="white" fillOpacity="0.5" />
        <path d="M38 32 L39 36 L43 37 L39 38 L38 42 L37 38 L33 37 L37 36 Z" fill="white" fillOpacity="0.5" />
      </svg>
    ),
  },
  {
    id: "web",
    label: "Web",
    delay: "0.3s",
    duration: "5s",
    accent: "from-[#001533] to-[#002855]",
    glow: "rgba(0,113,227,0.35)",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-16 h-16">
        <circle cx="24" cy="24" r="17" stroke="white" strokeWidth="2" strokeOpacity="0.85" />
        {/* Longitude lines */}
        <ellipse cx="24" cy="24" rx="8" ry="17" stroke="white" strokeWidth="2" strokeOpacity="0.85" />
        {/* Latitude lines */}
        <line x1="7" y1="17" x2="41" y2="17" stroke="white" strokeWidth="2" strokeOpacity="0.5" />
        <line x1="7" y1="24" x2="41" y2="24" stroke="white" strokeWidth="2" strokeOpacity="0.5" />
        <line x1="7" y1="31" x2="41" y2="31" stroke="white" strokeWidth="2" strokeOpacity="0.5" />
      </svg>
    ),
  },
];

export default function HeroCards() {
  return (
    <div className="relative flex items-center justify-center w-full h-full">
      {/* Background glow blob */}
      <div className="absolute w-80 h-80 rounded-full bg-accent/[0.08] blur-3xl pointer-events-none" />

      {/* 2×2 card grid */}
      <div
        className="relative grid grid-cols-2 gap-4"
        style={{ width: 312 }}
      >
        {cards.map((card) => (
          <div
            key={card.id}
            className="group relative flex flex-col items-center gap-2.5"
            style={{
              animation: `float ${card.duration} ease-in-out ${card.delay} infinite`,
            }}
          >
            {/* Card */}
            <div
              className={`
                relative w-[148px] h-[148px] rounded-[24px] overflow-hidden
                bg-gradient-to-br ${card.accent}
                border border-white/[0.08]
                transition-all duration-300 ease-out
                hover:scale-[1.06] hover:-translate-y-1 cursor-pointer
              `}
              style={{
                boxShadow: `0 4px 24px rgba(0,0,0,0.18), 0 0 0 1px rgba(255,255,255,0.04)`,
              }}
            >
              {/* Glow on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                  background: `radial-gradient(ellipse at 50% 50%, ${card.glow}, transparent 70%)`,
                }}
              />

              {/* Top-right shine */}
              <div className="absolute -top-6 -right-6 w-16 h-16 rounded-full bg-white/[0.04] blur-xl pointer-events-none" />

              {/* Icon */}
              <div className="relative z-10 flex items-center justify-center w-full h-full">
                {card.icon}
              </div>
            </div>

            {/* Label */}
            <span className="text-[12px] font-medium text-muted tracking-wide">
              {card.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
