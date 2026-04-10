import IPhone3D from "./IPhone3D";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex overflow-hidden">

      {/* ── Left: White panel ── */}
      <div className="relative w-1/2 bg-background flex items-center justify-center">
        {/* Subtle grid */}
        <div className="absolute inset-0 bg-grid pointer-events-none" />

        <div className="relative z-10 px-10 lg:px-16 max-w-xl w-full">
          <div className="flex flex-col gap-7">
            {/* Availability badge */}
            <div className="animate-fade-up" style={{ animationDelay: "100ms" }}>
              <span className="inline-flex items-center gap-2.5 px-3.5 py-1.5 bg-background-secondary border border-border rounded-full text-[13px] text-muted">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-dot-pulse" aria-hidden="true" />
                Available for new projects
              </span>
            </div>

            {/* Role */}
            <div className="animate-fade-up" style={{ animationDelay: "220ms" }}>
              <p className="text-lg md:text-xl text-muted font-medium">
                Fullstack &amp; Android Developer
              </p>
            </div>

            {/* Bio excerpt */}
            <div className="animate-fade-up" style={{ animationDelay: "370ms" }}>
              <p className="text-[15px] text-muted leading-relaxed max-w-md">
                Next.js, Supabase, Kotlin and Jetpack Compose. Currently at{" "}
                <span className="text-foreground font-medium">Weblib</span>, Paris.
              </p>
            </div>

            {/* CTAs */}
            <div
              className="animate-fade-up flex flex-wrap gap-3 pt-1"
              style={{ animationDelay: "500ms" }}
            >
              <a
                href="#work"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-accent hover:bg-accent-hover text-white text-[15px] font-normal rounded-full transition-all duration-200 hover:scale-[1.01] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
              >
                View my work
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 border border-border text-foreground text-[15px] font-normal rounded-full transition-all duration-200 hover:bg-background-secondary hover:border-border active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border focus-visible:ring-offset-2"
              >
                Get in touch
              </a>
            </div>

            {/* Quick stats */}
            <div
              className="animate-fade-up flex gap-8 pt-4 border-t border-border"
              style={{ animationDelay: "620ms" }}
            >
              <div>
                <p className="text-2xl font-display font-bold text-foreground">2+</p>
                <p className="text-[13px] text-muted mt-0.5">Years experience</p>
              </div>
              <div>
                <p className="text-2xl font-display font-bold text-foreground">10+</p>
                <p className="text-[13px] text-muted mt-0.5">Projects shipped</p>
              </div>
              <div>
                <p className="text-2xl font-display font-bold text-foreground">2</p>
                <p className="text-[13px] text-muted mt-0.5">Companies</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Right: Blue panel ── */}
      <div className="relative w-1/2 bg-[#0071E3] flex items-center justify-center overflow-hidden">
        {/* Animated floating circles */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute w-72 h-72 rounded-full bg-white/10 -top-16 -left-16 animate-hero-float" />
          <div className="absolute w-96 h-96 rounded-full bg-white/5 bottom-[-4rem] right-[-4rem] animate-hero-float-reverse" />
          <div className="absolute w-48 h-48 rounded-full bg-white/[0.07] top-1/2 left-1/3 -translate-y-1/2 animate-hero-float-slow" />
        </div>

        {/* Content inside right panel */}
        <div className="relative z-10 px-12 text-white">
          <div className="animate-fade-up" style={{ animationDelay: "300ms" }}>
            <p className="text-lg font-medium tracking-wide uppercase opacity-80">
              Portfolio
            </p>
          </div>
          <div className="animate-fade-up mt-4" style={{ animationDelay: "500ms" }}>
            <h2 className="font-display font-bold text-5xl xl:text-6xl leading-tight tracking-tight">
              Mehedi<br />Touré
            </h2>
          </div>
          <div className="animate-fade-up mt-6" style={{ animationDelay: "700ms" }}>
            <p className="text-white/70 text-base max-w-xs leading-relaxed">
              Fullstack &amp; Android Developer — building scalable web applications and native experiences.
            </p>
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
