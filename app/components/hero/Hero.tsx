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
        <div className="animate-fade-up" style={{ animationDelay: "100ms" }}>
          <h1 className="font-display font-bold text-foreground leading-none tracking-[-0.04em] text-[clamp(4.5rem,8vw,8.5rem)]">
            Mehedi<br />Touré
          </h1>
          <p className="text-lg text-muted font-medium mt-3">
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

function SkillBlocks() {
  const skills = [
    { title: "Android Development",   sub: "Kotlin · Jetpack Compose",  icon: "📱" },
    { title: "Fullstack Development",  sub: "Next.js · React · Supabase", icon: "🌐" },
    { title: "Information Systems",    sub: "Architecture · Management",  icon: "🏗️" },
  ];
  return (
    <div className="flex flex-col gap-3">
      {skills.map(({ title, sub, icon }) => (
        <div key={title} className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center text-xl shrink-0">
            {icon}
          </div>
          <div>
            <p className="text-white text-[14px] font-semibold leading-tight">{title}</p>
            <p className="text-white/55 text-[12px] mt-0.5">{sub}</p>
          </div>
        </div>
      ))}
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
          <SkillBlocks />
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
