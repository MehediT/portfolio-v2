"use client";

import dynamic from "next/dynamic";

const HeroScene3D = dynamic(() => import("./HeroScene3D"), { ssr: false });

function LeftPanel() {
  return (
    <div className="relative w-1/2 bg-white bg-grid overflow-hidden">
      <div className="absolute inset-0">
        <HeroScene3D />
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-8">
        <div className="animate-fade-up flex flex-col items-center gap-3" style={{ animationDelay: "100ms" }}>
          <h1 className="font-display font-bold text-foreground leading-none tracking-[-0.04em] text-[clamp(4.5rem,8vw,8.5rem)]">
            Mehedi<br />Touré
          </h1>
          <p className="text-lg text-foreground/80 font-medium px-5 py-2 bg-white/30 backdrop-blur-sm rounded-full border border-border">
            Fullstack &amp; Android Developer
          </p>
        </div>
      </div>
    </div>
  );
}

function FloatingCircles() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute w-72 h-72 rounded-full bg-white/10 -top-16 -left-16 animate-hero-float" />
      <div className="absolute w-96 h-96 rounded-full bg-white/5 bottom-[-4rem] right-[-4rem] animate-hero-float-reverse" />
      <div className="absolute w-48 h-48 rounded-full bg-white/[0.07] top-1/2 left-1/3 -translate-y-1/2 animate-hero-float-slow" />
    </div>
  );
}

function AvailabilityBadge() {
  return (
    <div className="animate-fade-up" style={{ animationDelay: "100ms" }}>
      <span className="inline-flex items-center gap-2.5 px-3.5 py-1.5 bg-white/10 border border-white/20 rounded-full text-[13px] text-white/80">
        <span className="w-2 h-2 rounded-full bg-green-400 animate-dot-pulse" aria-hidden="true" />
        Available for new projects
      </span>
    </div>
  );
}

function HeroHeading() {
  return (
    <>
      <div className="animate-fade-up" style={{ animationDelay: "220ms" }}>
        <h1 className="font-display font-bold text-white leading-none tracking-[-0.03em] text-[clamp(3rem,5vw,5rem)]">
          Mehedi<br />Touré
        </h1>
      </div>
      <div className="animate-fade-up" style={{ animationDelay: "370ms" }}>
        <p className="text-lg md:text-xl text-white/70 font-medium">
          Fullstack &amp; Android Developer
        </p>
      </div>
      <div className="animate-fade-up" style={{ animationDelay: "500ms" }}>
        <p className="text-[15px] text-white/60 leading-relaxed max-w-md">
          Building scalable web applications and native Android experiences.
          Next.js, Supabase, Kotlin and Jetpack Compose. Currently at{" "}
          <span className="text-white font-medium">Weblib</span>, Paris.
        </p>
      </div>
    </>
  );
}

function HeroCTAs() {
  return (
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
  );
}

function QuickStats() {
  return (
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
  );
}

function WhoAmI() {
  return (
    <div className="animate-fade-up flex flex-col gap-4" style={{ animationDelay: "370ms" }}>
      <p className="text-white/90 text-[15px] leading-relaxed">
        Software engineer driven by innovation and technology. My expertise spans{" "}
        <span className="text-white font-medium">mobile development</span> (Kotlin, Jetpack Compose)
        and <span className="text-white font-medium">full-stack solutions</span> (Next.js, Supabase),
        with a strong focus on system architecture and clean code.
      </p>
      <p className="text-white/70 text-[14px] leading-relaxed">
        Currently at <span className="text-white font-medium">Weblib</span>, Paris — exploring
        AI-powered applications and scalable digital systems.
      </p>
      <div className="flex items-center gap-3 pt-1">
        <a
          href="https://github.com/mehedit"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-white/70 text-[13px] hover:bg-white/20 hover:text-white transition-all duration-200"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
          </svg>
          mehedit
        </a>
        <a
          href="https://linkedin.com/in/mehedi-toure"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-white/70 text-[13px] hover:bg-white/20 hover:text-white transition-all duration-200"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
          mehedi-toure
        </a>
        <a
          href="mailto:mehedi.toure@gmail.com"
          aria-label="Email"
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-white/70 text-[13px] hover:bg-white/20 hover:text-white transition-all duration-200"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <rect width="20" height="16" x="2" y="4" rx="2" />
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
          </svg>
          Email
        </a>
      </div>
    </div>
  );
}

function RightPanel() {
  return (
    <div className="relative w-1/2 bg-[#0071E3] flex items-center justify-center overflow-hidden">
      <FloatingCircles />
      <div className="relative z-10 px-10 lg:px-16 max-w-xl w-full">
        <div className="flex flex-col gap-7">
          <AvailabilityBadge />
          <WhoAmI />
          <HeroCTAs />
          <QuickStats />
        </div>
      </div>
    </div>
  );
}

function ScrollCue() {
  return (
    <div
      className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in"
      style={{ animationDelay: "1200ms" }}
      aria-hidden="true"
    >
      <span className="text-[11px] text-muted tracking-widest uppercase">Scroll</span>
      <svg width="16" height="20" viewBox="0 0 16 20" fill="none" className="text-muted animate-bounce">
        <path d="M8 1v14M3 11l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex overflow-hidden">
      <LeftPanel />
      <RightPanel />
      <ScrollCue />
    </section>
  );
}
