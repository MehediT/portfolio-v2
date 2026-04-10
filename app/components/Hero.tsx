export default function Hero() {
  return (
    <section className="relative min-h-screen flex overflow-hidden">

      {/* ── Left: Tilted card panel ── */}
      <div className="relative w-1/2 bg-background flex items-center justify-center"
           style={{ perspective: "1200px" }}
      >
        <div className="absolute inset-0 bg-grid pointer-events-none" />

        {/* Tilted blue card */}
        <div
          className="relative w-[420px] aspect-[16/10] rounded-[28px] animate-fade-up"
          style={{
            animationDelay: "400ms",
            transform: "rotateY(-12deg) rotateX(6deg)",
            transformStyle: "preserve-3d",
          }}
        >
          {/* Card shadow */}
          <div className="absolute inset-0 rounded-[28px]"
               style={{ boxShadow: "30px 40px 80px rgba(0,0,0,0.18), 10px 15px 30px rgba(0,0,0,0.10)" }}
          />

          {/* Card body */}
          <div className="relative w-full h-full rounded-[28px] bg-gradient-to-br from-[#0071E3] via-[#0A84FF] to-[#5AC8FA] overflow-hidden">
            {/* Subtle light reflection */}
            <div className="absolute inset-0 rounded-[28px] bg-gradient-to-br from-white/20 via-transparent to-transparent pointer-events-none" />

            {/* Soft glow spots */}
            <div className="absolute w-48 h-48 rounded-full bg-white/10 -top-12 -right-12 blur-2xl" />
            <div className="absolute w-36 h-36 rounded-full bg-white/[0.06] bottom-8 left-8 blur-xl" />

            {/* Card content */}
            <div className="relative z-10 flex flex-col justify-between h-full p-8">
              <div>
                <p className="text-white/60 text-xs font-medium tracking-widest uppercase">Portfolio</p>
                <h3 className="text-white font-display font-bold text-2xl mt-2 tracking-tight">Mehedi Touré</h3>
                <p className="text-white/50 text-sm mt-1">Fullstack & Android Developer</p>
              </div>
              <div className="flex items-end justify-between">
                <div className="flex gap-3">
                  <span className="px-3 py-1 rounded-full bg-white/10 text-white/70 text-xs">Next.js</span>
                  <span className="px-3 py-1 rounded-full bg-white/10 text-white/70 text-xs">Kotlin</span>
                  <span className="px-3 py-1 rounded-full bg-white/10 text-white/70 text-xs">Supabase</span>
                </div>
                <span className="text-white/30 font-display text-4xl font-bold">MT</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Right: Blue panel with all content ── */}
      <div className="relative w-1/2 bg-[#0071E3] flex items-center justify-center overflow-hidden">
        {/* Animated floating circles */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute w-72 h-72 rounded-full bg-white/10 -top-16 -left-16 animate-hero-float" />
          <div className="absolute w-96 h-96 rounded-full bg-white/5 bottom-[-4rem] right-[-4rem] animate-hero-float-reverse" />
          <div className="absolute w-48 h-48 rounded-full bg-white/[0.07] top-1/2 left-1/3 -translate-y-1/2 animate-hero-float-slow" />
        </div>

        {/* Content */}
        <div className="relative z-10 px-10 lg:px-16 max-w-xl w-full">
          <div className="flex flex-col gap-7">
            {/* Availability badge */}
            <div className="animate-fade-up" style={{ animationDelay: "100ms" }}>
              <span className="inline-flex items-center gap-2.5 px-3.5 py-1.5 bg-white/10 border border-white/20 rounded-full text-[13px] text-white/80">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-dot-pulse" aria-hidden="true" />
                Available for new projects
              </span>
            </div>

            {/* Name */}
            <div className="animate-fade-up" style={{ animationDelay: "220ms" }}>
              <h1 className="font-display font-bold text-white leading-none tracking-[-0.03em] text-[clamp(3rem,5vw,5rem)]">
                Mehedi<br />Touré
              </h1>
            </div>

            {/* Role */}
            <div className="animate-fade-up" style={{ animationDelay: "370ms" }}>
              <p className="text-lg md:text-xl text-white/70 font-medium">
                Fullstack &amp; Android Developer
              </p>
            </div>

            {/* Bio excerpt */}
            <div className="animate-fade-up" style={{ animationDelay: "500ms" }}>
              <p className="text-[15px] text-white/60 leading-relaxed max-w-md">
                Building scalable web applications and native Android experiences.
                Next.js, Supabase, Kotlin and Jetpack Compose. Currently at{" "}
                <span className="text-white font-medium">Weblib</span>, Paris.
              </p>
            </div>

            {/* CTAs */}
            <div
              className="animate-fade-up flex flex-wrap gap-3 pt-1"
              style={{ animationDelay: "620ms" }}
            >
              <a
                href="#work"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-white text-[#0071E3] text-[15px] font-medium rounded-full transition-all duration-200 hover:bg-white/90 hover:scale-[1.01] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0071E3]"
              >
                View my work
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 border border-white/30 text-white text-[15px] font-normal rounded-full transition-all duration-200 hover:bg-white/10 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0071E3]"
              >
                Get in touch
              </a>
            </div>

            {/* Quick stats */}
            <div
              className="animate-fade-up flex gap-8 pt-4 border-t border-white/20"
              style={{ animationDelay: "740ms" }}
            >
              <div>
                <p className="text-2xl font-display font-bold text-white">4+</p>
                <p className="text-[13px] text-white/60 mt-0.5">Years experience</p>
              </div>
              <div>
                <p className="text-2xl font-display font-bold text-white">10+</p>
                <p className="text-[13px] text-white/60 mt-0.5">Projects shipped</p>
              </div>
              <div>
                <p className="text-2xl font-display font-bold text-white">2</p>
                <p className="text-[13px] text-white/60 mt-0.5">Companies</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in"
        style={{ animationDelay: "1200ms" }}
        aria-hidden="true"
      >
        <span className="text-[11px] text-muted tracking-widest uppercase">Scroll</span>
        <svg width="16" height="20" viewBox="0 0 16 20" fill="none" className="text-muted animate-bounce">
          <path d="M8 1v14M3 11l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </section>
  );
}
