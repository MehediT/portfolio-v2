"use client";

import { useState } from "react";
import ScrollReveal from "./ScrollReveal";

const PRIMARY_STACK = [
  {
    name: "Kotlin",
    color: "#7F52FF",
    icon: "https://cdn.simpleicons.org/kotlin/7F52FF",
  },
  {
    name: "Jetpack Compose",
    color: "#4285F4",
    icon: "https://cdn.simpleicons.org/jetpackcompose/4285F4",
  },
  {
    name: "Next.js",
    color: "#ffffff",
    bg: "#000000",
    icon: "https://cdn.simpleicons.org/nextdotjs/ffffff",
  },
  {
    name: "TypeScript",
    color: "#3178C6",
    icon: "https://cdn.simpleicons.org/typescript/3178C6",
  },
  {
    name: "Supabase",
    color: "#3ECF8E",
    icon: "https://cdn.simpleicons.org/supabase/3ECF8E",
  },
  {
    name: "Tailwind CSS",
    color: "#06B6D4",
    icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4",
  },
  {
    name: "React",
    color: "#61DAFB",
    icon: "https://cdn.simpleicons.org/react/61DAFB",
  },
  {
    name: "Python",
    color: "#3776AB",
    icon: "https://cdn.simpleicons.org/python/3776AB",
  },
];

const MORE_STACK = [
  {
    name: "PostgreSQL",
    color: "#4169E1",
    icon: "https://cdn.simpleicons.org/postgresql/4169E1",
  },
  {
    name: "Docker",
    color: "#2496ED",
    icon: "https://cdn.simpleicons.org/docker/2496ED",
  },
  {
    name: "Three.js",
    color: "#ffffff",
    bg: "#000000",
    icon: "https://cdn.simpleicons.org/threedotjs/ffffff",
  },
  {
    name: "Vercel",
    color: "#ffffff",
    bg: "#000000",
    icon: "https://cdn.simpleicons.org/vercel/ffffff",
  },
  {
    name: "Figma",
    color: "#F24E1E",
    icon: "https://cdn.simpleicons.org/figma/F24E1E",
  },
  {
    name: "Git",
    color: "#F05032",
    icon: "https://cdn.simpleicons.org/git/F05032",
  },
];

function StackBadge({ name, color, bg, icon }: { name: string; color: string; bg?: string; icon: string }) {
  return (
    <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-full border border-border/60 bg-background shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] hover:-translate-y-0.5 transition-all duration-200">
      <span
        className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 p-1"
        style={{ backgroundColor: bg ?? `${color}18` }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={icon} alt="" width={14} height={14} className="w-full h-full object-contain" aria-hidden="true" />
      </span>
      <span className="text-[13px] font-medium text-foreground whitespace-nowrap">{name}</span>
    </div>
  );
}

export default function Skills() {
  const [expanded, setExpanded] = useState(false);
  return (
    <section className="bg-background-secondary py-24 md:py-32">
      <div className="mx-auto max-w-[1200px] px-5 md:px-10 lg:px-16">

        {/* Header */}
        <div className="max-w-2xl mb-14">
          <ScrollReveal>
            <p className="text-sm font-medium text-accent tracking-wider uppercase mb-4">
              Stack
            </p>
          </ScrollReveal>
          <ScrollReveal delay={80}>
            <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-bold text-foreground leading-tight tracking-tight">
              Tools I reach for.
            </h2>
          </ScrollReveal>
        </div>

        {/* Stack grid */}
        <ScrollReveal delay={120}>
          <div className="flex flex-wrap gap-3 justify-center">
            {PRIMARY_STACK.map((s) => <StackBadge key={s.name} {...s} />)}

            {expanded && MORE_STACK.map((s) => <StackBadge key={s.name} {...s} />)}

            <button
              onClick={() => setExpanded((v) => !v)}
              className="flex items-center gap-1.5 px-4 py-2.5 rounded-full border border-dashed border-border/60 text-muted hover:text-foreground hover:border-border transition-all duration-200"
            >
              <svg
                width="13" height="13" viewBox="0 0 14 14" fill="none"
                className={`transition-transform duration-200 ${expanded ? "rotate-45" : ""}`}
                aria-hidden="true"
              >
                <path d="M7 1v12M1 7h12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
              </svg>
              <span className="text-[13px] font-medium">{expanded ? "Less" : "More"}</span>
            </button>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
