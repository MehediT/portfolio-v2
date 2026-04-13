import ScrollReveal from "./ScrollReveal";
import { Check } from "lucide-react";

interface Plan {
  name: string;
  description: string;
  features: string[];
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
              there&apos;s a format that fits.
            </p>
          </ScrollReveal>
        </div>

        {/* Pricing cards */}
        <div className="flex flex-col gap-4 md:gap-5 lg:grid lg:grid-cols-3 lg:items-stretch">
          {PLANS.map((plan, i) => (
            <ScrollReveal key={plan.name} delay={i * 100} className="lg:h-full">
              <div
                className={`relative rounded-[var(--radius-card-lg)] p-5 md:p-6 h-full flex flex-col transition-all duration-300 ${
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
                <p className={`text-[13px] font-medium tracking-wider uppercase mb-2 ${plan.featured ? "text-white/70" : "text-muted"}`}>
                  {plan.name}
                </p>

                {/* Description */}
                <p className={`text-[14px] leading-relaxed mb-4 ${plan.featured ? "text-white/80" : "text-muted"}`}>
                  {plan.description}
                </p>

                {/* Features */}
                <ul className="flex flex-col gap-2" role="list">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-[13px]">
                      <Check
                        size={14}
                        className={`shrink-0 mt-0.5 ${plan.featured ? "text-white" : "text-accent"}`}
                        aria-hidden="true"
                      />
                      <span className={plan.featured ? "text-white/80" : "text-muted"}>
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Single CTA */}
        <ScrollReveal delay={300}>
          <div className="flex flex-col items-center mt-12">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-10 py-4 rounded-full text-[15px] font-medium bg-foreground text-white transition-all duration-200 hover:bg-foreground/90 hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-foreground"
            >
              Let&apos;s discuss
            </a>
            <p className="text-[13px] text-muted mt-4">
              All rates are negotiable — happy to tailor a custom arrangement.
            </p>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
