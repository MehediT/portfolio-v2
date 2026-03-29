import ScrollReveal from "./ScrollReveal";

const STACK = [
  {
    category: "Frontend & Web",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
      </svg>
    ),
    skills: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Angular", "Vue.js"],
  },
  {
    category: "Backend & Data",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5"/><path d="M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3"/>
      </svg>
    ),
    skills: ["Supabase", "PostgreSQL", "MongoDB", "Python", "C#", "Java Spring"],
  },
  {
    category: "Mobile (Android)",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/>
      </svg>
    ),
    skills: ["Kotlin", "Jetpack Compose", "Room", "Hilt", "Retrofit", "Android SDK"],
  },
  {
    category: "Tools & Infra",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/>
      </svg>
    ),
    skills: ["Docker", "Git / GitHub", "Vercel", "Figma", "Jira", "Notion"],
  },
];

export default function Skills() {
  return (
    <section className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-[1200px] px-5 md:px-10 lg:px-16">

        {/* Header */}
        <div className="max-w-2xl mb-16">
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
          <ScrollReveal delay={160}>
            <p className="text-[17px] text-muted leading-relaxed mt-4">
              Comfortable across the full stack — from database to device.
            </p>
          </ScrollReveal>
        </div>

        {/* Skill groups */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {STACK.map((group, i) => (
            <ScrollReveal key={group.category} delay={i * 80}>
              <div className="bg-background-secondary rounded-[var(--radius-card)] p-6 border border-border/40 hover:shadow-[var(--shadow-card)] transition-all duration-300 h-full">
                {/* Icon */}
                <div className="w-10 h-10 rounded-[var(--radius-input)] bg-accent/10 flex items-center justify-center text-accent mb-5">
                  {group.icon}
                </div>
                <p className="font-display font-semibold text-foreground text-[15px] mb-4">
                  {group.category}
                </p>
                <ul className="flex flex-col gap-2.5" role="list">
                  {group.skills.map((skill) => (
                    <li key={skill} className="flex items-center gap-2.5 text-[14px] text-muted">
                      <span className="w-1 h-1 rounded-full bg-border shrink-0" aria-hidden="true" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Primary stack callout */}
        <ScrollReveal delay={320}>
          <div className="mt-10 p-6 rounded-[var(--radius-card)] border border-border bg-background-secondary">
            <p className="text-[13px] text-muted mb-3 font-medium uppercase tracking-wider">
              Primary stack
            </p>
            <div className="flex flex-wrap gap-2">
              {["Next.js", "Supabase", "Kotlin", "Jetpack Compose"].map((s) => (
                <span
                  key={s}
                  className="px-3.5 py-1.5 bg-accent/10 text-accent text-[13px] font-medium rounded-full border border-accent/20"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
