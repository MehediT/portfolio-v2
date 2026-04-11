import ScrollReveal from "./ScrollReveal";
import { Check } from "lucide-react";

interface Plan {
  name: string;
  description: string;
  features: string[];
  cta: string;
  featured?: boolean;
}

const PLANS: Plan[] = [
  {
    name: "Consultation",
    description:
      "A focused 90-minute session to review your codebase, architecture, or technical roadmap.",
    features: [
      "90-minute video call",
      "Code or architecture review",
      "Written summary & action items",
      "Follow-up by email",
    ],
    cta: "Book a session",
  },
  {
    name: "Project",
    description:
      "A custom web or mobile app, from design handoff to production deployment.",
    features: [
      "Scoping call & technical spec",
      "Full-stack web or Android app",
      "Design-to-code implementation",
      "Supabase / backend setup",
      "Deployment on Vercel or Play Store",
      "2 weeks of post-launch support",
    ],
    cta: "Discuss your project",
    featured: true,
  },
  {
    name: "Retainer",
    description:
      "Ongoing development partnership — continuous feature delivery, maintenance, and technical guidance.",
    features: [
      "Up to 20 hours / week",
      "Priority Slack response",
      "Weekly progress updates",
      "Feature dev & bug fixes",
      "Flexible scope adjustments",
    ],
    cta: "Let's talk",
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="bg-background-secondary py-24 md:py-32">
      <div className="mx-auto max-w-[1200px] px-5 md:px-10 lg:px-16">

        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <ScrollReveal>
            <p className="text-sm font-medium text-accent tracking-wider uppercase mb-4">
              Work With Me
            </p>
          </ScrollReveal>
          <ScrollReveal delay={80}>
            <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-bold text-foreground leading-tight tracking-tight">
              Simple, honest pricing.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={160}>
            <p className="text-[17px] text-muted leading-relaxed mt-4">
              Whether you need a quick second opinion or a long-term technical partner —
              there's a format that fits.
            </p>
          </ScrollReveal>
        </div>

        {/* Pricing cards */}
        <div className="flex gap-5 overflow-x-auto snap-x snap-mandatory scroll-smooth pt-5 pb-4 -mx-5 px-5 lg:-mx-0 lg:px-0 lg:overflow-visible lg:grid lg:grid-cols-3 lg:items-stretch">
          {PLANS.map((plan, i) => (
            <ScrollReveal key={plan.name} delay={i * 100} className="min-w-[280px] shrink-0 snap-center lg:min-w-0 lg:shrink lg:h-full">
              <div
                className={`relative rounded-[var(--radius-card-lg)] p-6 md:p-8 h-full flex flex-col transition-all duration-300 ${
                  plan.featured
                    ? "bg-accent text-white shadow-[var(--shadow-xl)]"
                    : "bg-white shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] hover:-translate-y-1"
                }`}
              >
                {plan.featured && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="px-3.5 py-1 bg-foreground text-white text-[11px] font-semibold rounded-full tracking-wider uppercase">
                      Most popular
                    </span>
                  </div>
                )}

                {/* Plan name */}
                <p className={`text-[13px] font-medium tracking-wider uppercase mb-4 ${plan.featured ? "text-white/70" : "text-muted"}`}>
                  {plan.name}
                </p>

                {/* Description */}
                <p className={`text-[14px] leading-relaxed mb-8 ${plan.featured ? "text-white/80" : "text-muted"}`}>
                  {plan.description}
                </p>

                {/* Features */}
                <ul className="flex flex-col gap-3 flex-1 mb-8" role="list">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-[14px]">
                      <Check
                        size={15}
                        className={`shrink-0 mt-0.5 ${plan.featured ? "text-white" : "text-accent"}`}
                        aria-hidden="true"
                      />
                      <span className={plan.featured ? "text-white/80" : "text-muted"}>
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href="#contact"
                  className={`inline-flex items-center justify-center w-full py-3.5 rounded-full text-[15px] font-normal transition-all duration-200 hover:scale-[1.01] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
                    plan.featured
                      ? "bg-white text-accent hover:bg-white/90 focus-visible:ring-white"
                      : "bg-foreground text-white hover:bg-foreground/90 focus-visible:ring-foreground"
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Fine print */}
        <ScrollReveal delay={300}>
          <p className="text-center text-[13px] text-muted mt-10">
            All rates are negotiable — happy to discuss a custom arrangement.{" "}
            <a href="#contact" className="text-accent hover:underline">
              Get in touch
            </a>
            .
          </p>
        </ScrollReveal>

      </div>
    </section>
  );
}
