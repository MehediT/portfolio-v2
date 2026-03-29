import ScrollReveal from "./ScrollReveal";
import { ArrowUpRight } from "lucide-react";

interface Project {
  title: string;
  type: "Mobile" | "Web" | "Enterprise";
  context: string;
  description: string;
  tech: string[];
  github?: string;
  demo?: string;
  accent: string;
}

const PROJECTS: Project[] = [
  {
    title: "TabInStore",
    type: "Enterprise",
    context: "Weblib · Professional",
    description:
      "Large-scale enterprise Android application used by major retail clients to manage and control connected tablets across hundreds of stores. Focus on optimization, clean architecture, and UX.",
    tech: ["Kotlin", "Jetpack Compose", "Room", "Hilt", "Retrofit"],
    accent: "bg-orange-500/10 text-orange-600",
  },
  {
    title: "RateMyDate",
    type: "Mobile",
    context: "Personal · Ongoing",
    description:
      "Android app allowing users to rate and analyze their dating experiences through AI-powered sentiment analysis and personalized insights. Built with modern Kotlin stack.",
    tech: ["Kotlin", "Jetpack Compose", "Room", "Hilt", "Retrofit"],
    github: "https://github.com/mehedit/RateMyDate",
    accent: "bg-pink-500/10 text-pink-600",
  },
  {
    title: "LeadGenAI",
    type: "Web",
    context: "Personal · Ongoing",
    description:
      "B2B prospecting automation platform — data scraping, AI-driven message generation, and integrated CRM export. Built for agencies and sales teams.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "Python"],
    accent: "bg-violet-500/10 text-violet-600",
  },
  {
    title: "Portfolio v2",
    type: "Web",
    context: "Personal · This site",
    description:
      "Full-stack portfolio with dynamic content, Apple-inspired design system, and 3D elements. Built with Next.js, TypeScript, and Supabase for data management.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
    github: "https://github.com/mehedit/portfolio-mehedi",
    demo: "https://mehedi-toure.com",
    accent: "bg-blue-500/10 text-blue-600",
  },
];

const TYPE_COLORS: Record<string, string> = {
  Mobile:     "bg-orange-50 text-orange-600 border-orange-200/60",
  Web:        "bg-blue-50 text-blue-600 border-blue-200/60",
  Enterprise: "bg-foreground/5 text-foreground border-border",
};

export default function Projects() {
  return (
    <section id="work" className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-[1200px] px-5 md:px-10 lg:px-16">

        {/* Header */}
        <div className="max-w-2xl mb-16">
          <ScrollReveal>
            <p className="text-sm font-medium text-accent tracking-wider uppercase mb-4">
              Selected Work
            </p>
          </ScrollReveal>
          <ScrollReveal delay={80}>
            <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-bold text-foreground leading-tight tracking-tight">
              Things I've built.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={160}>
            <p className="text-[17px] text-muted leading-relaxed mt-4">
              A mix of professional work, personal projects, and ongoing experiments
              across web and mobile.
            </p>
          </ScrollReveal>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 gap-5">
          {PROJECTS.map((project, i) => (
            <ScrollReveal key={project.title} delay={i * 80}>
              <article className="group relative bg-background rounded-[var(--radius-card)] p-7 md:p-8 border border-border/60 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">

                {/* Top row: type badge + links */}
                <div className="flex items-center justify-between mb-5">
                  <span className={`px-2.5 py-1 text-[12px] font-medium rounded-[var(--radius-badge)] border ${TYPE_COLORS[project.type]}`}>
                    {project.type}
                  </span>
                  <div className="flex items-center gap-2">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 text-muted hover:text-accent transition-colors duration-150"
                        aria-label={`${project.title} GitHub repository`}
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                          <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                        </svg>
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 text-muted hover:text-accent transition-colors duration-150"
                        aria-label={`${project.title} live demo`}
                      >
                        <ArrowUpRight size={16} aria-hidden="true" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Title + context */}
                <div className="mb-4">
                  <h3 className="font-display font-semibold text-foreground text-[19px] tracking-tight mb-1">
                    {project.title}
                  </h3>
                  <p className="text-[13px] text-muted">{project.context}</p>
                </div>

                {/* Description */}
                <p className="text-[14px] text-muted leading-relaxed flex-1 mb-6">
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 bg-background-secondary text-[12px] text-muted rounded-[var(--radius-badge)] font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>

        {/* View all CTA */}
        <ScrollReveal delay={320}>
          <div className="mt-12 text-center">
            <a
              href="https://github.com/mehedit"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[15px] text-accent font-medium hover:gap-3 transition-all duration-200"
            >
              See all on GitHub
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
