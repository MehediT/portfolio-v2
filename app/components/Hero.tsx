import IPhone3D from "./IPhone3D";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-background overflow-hidden flex items-center">
      {/* Subtle grid */}
      <div className="absolute inset-0 bg-grid pointer-events-none" />

      {/* Soft blue radial wash — right side, where 3D will live */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_70%_at_72%_50%,rgba(0,113,227,0.06),transparent)] pointer-events-none" />

      <div className="relative z-10 mx-auto w-full max-w-[1200px] px-5 md:px-10 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-8 items-center min-h-screen py-32">

          {/* ── Left: Text content ── */}
          <div className="flex flex-col gap-7">
            {/* Availability badge */}
            <div className="animate-fade-up" style={{ animationDelay: "100ms" }}>
              <span className="inline-flex items-center gap-2.5 px-3.5 py-1.5 bg-background-secondary border border-border rounded-full text-[13px] text-muted">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-dot-pulse" aria-hidden="true" />
                Available for new projects
              </span>
            </div>

            {/* Name */}
            <div className="animate-fade-up" style={{ animationDelay: "220ms" }}>
              <h1 className="font-display font-bold text-foreground leading-none tracking-[-0.03em] text-[clamp(3rem,8vw,7rem)]">
                Mehedi<br />Touré
              </h1>
            </div>

            {/* Role */}
            <div className="animate-fade-up" style={{ animationDelay: "370ms" }}>
              <p className="text-lg md:text-xl text-muted font-medium">
                Fullstack &amp; Android Developer
              </p>
            </div>

            {/* Bio excerpt */}
            <div className="animate-fade-up" style={{ animationDelay: "500ms" }}>
              <p className="text-[15px] text-muted leading-relaxed max-w-md">
                Building scalable web applications and native Android experiences.
                Next.js, Supabase, Kotlin and Jetpack Compose. Currently at{" "}
                <span className="text-foreground font-medium">Weblib</span>, Paris.
              </p>
            </div>

            {/* CTAs */}
            <div
              className="animate-fade-up flex flex-wrap gap-3 pt-1"
              style={{ animationDelay: "620ms" }}
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
              style={{ animationDelay: "740ms" }}
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

          {/* ── Right: 3D mount ── */}
          {/*
            Reserved for a Three.js / R3F scene.
            Mount your canvas inside this div (#hero-3d-mount).
          */}
          {/* ── Right: 3D iPhone ── */}
          <div
            id="hero-3d-mount"
            className="relative flex items-center justify-center min-h-[360px] lg:min-h-[560px]"
            aria-hidden="true"
          >
            <IPhone3D />
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
