import ScrollReveal from "./ScrollReveal";

const EXPERIENCE = [
  {
    company: "Weblib",
    role: "Android Developer",
    period: "Sep 2024 — Present",
    location: "Paris 16, France",
    description:
      "Maintaining and optimizing TabInStore, a large-scale enterprise Android app used by retail clients to manage connected tablets in stores.",
    tech: ["Kotlin", "Jetpack Compose", "Room", "Hilt", "Retrofit"],
  },
  {
    company: "MetaLine",
    role: "Full Stack Developer",
    period: "Sep 2022 — Sep 2024",
    location: "Nanterre, France",
    description:
      "Built web applications including Quali-RSE, a CSR self-evaluation platform with dashboards, scoring systems, and admin tooling.",
    tech: ["C#", "Blazor", "JavaScript", "Entity Framework"],
  },
];

export default function About() {
  return (
    <section id="about" className="bg-background-secondary py-24 md:py-32">
      <div className="mx-auto max-w-[1200px] px-5 md:px-10 lg:px-16">

        {/* Section label */}
        <ScrollReveal>
          <p className="text-sm font-medium text-accent tracking-wider uppercase mb-4">
            About
          </p>
        </ScrollReveal>

        {/* Headline + bio */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          <div>
            <ScrollReveal delay={80}>
              <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-bold text-foreground leading-tight tracking-tight mb-8">
                Building things that<br />
                <span className="text-accent">actually work.</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={160}>
              <p className="text-[17px] text-muted leading-[1.7] mb-5">
                I'm a software engineer driven by a mix of pragmatism and curiosity.
                My work spans mobile development with Kotlin and Jetpack Compose, and
                full-stack solutions with Next.js and Supabase — always with a strong
                focus on system architecture, performance, and clean code.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={240}>
              <p className="text-[17px] text-muted leading-[1.7] mb-8">
                Passionate about building intelligent and sustainable digital systems
                that empower people. Currently exploring smart contracts, blockchain
                integration, and AI-powered applications in the crypto ecosystem.
              </p>
            </ScrollReveal>

            {/* Current focus pill */}
            <ScrollReveal delay={320}>
              <div className="inline-flex items-center gap-3 px-4 py-3 bg-white rounded-[14px] shadow-[var(--shadow-card)] border border-border/60">
                <span className="w-2.5 h-2.5 rounded-full bg-accent shrink-0" aria-hidden="true" />
                <p className="text-[13px] text-muted">
                  <span className="text-foreground font-medium">Currently exploring</span>
                  {" "}smart contracts, blockchain &amp; AI/crypto applications
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* Experience */}
          <div className="flex flex-col gap-6">
            <ScrollReveal delay={100}>
              <p className="text-sm font-medium text-muted uppercase tracking-wider mb-2">
                Experience
              </p>
            </ScrollReveal>

            {EXPERIENCE.map((job, i) => (
              <ScrollReveal key={job.company} delay={180 + i * 100}>
                <div className="bg-white rounded-[var(--radius-card)] p-6 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] hover:-translate-y-0.5 transition-all duration-300">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div>
                      <p className="font-display font-semibold text-foreground text-[15px]">
                        {job.company}
                      </p>
                      <p className="text-[13px] text-muted mt-0.5">{job.role}</p>
                    </div>
                    <div className="text-right shrink-0">
                      <p className="text-[12px] text-muted">{job.period}</p>
                      <p className="text-[12px] text-muted/70 mt-0.5">{job.location}</p>
                    </div>
                  </div>
                  <p className="text-[14px] text-muted leading-relaxed mb-4">
                    {job.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {job.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 bg-background-secondary text-[12px] text-muted rounded-[var(--radius-badge)] font-medium"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}

            {/* Education note */}
            <ScrollReveal delay={400}>
              <div className="flex items-center gap-3 px-4 py-3 border border-border rounded-[var(--radius-input)]">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-accent shrink-0" aria-hidden="true">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                  <path d="M6 12v5c3 3 9 3 12 0v-5"/>
                </svg>
                <p className="text-[13px] text-muted">
                  <span className="text-foreground font-medium">EFREI Paris</span>
                  {" "}— Engineering Degree in Computer Engineering (ongoing)
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
