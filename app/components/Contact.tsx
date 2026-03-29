import ScrollReveal from "./ScrollReveal";
import { ArrowUpRight } from "lucide-react";

const SOCIAL = [
  {
    label: "GitHub",
    href: "https://github.com/mehedit",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/mehedi-toure/",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
];

export default function Contact() {
  return (
    <section id="contact" className="bg-background-secondary py-24 md:py-40">
      <div className="mx-auto max-w-[1200px] px-5 md:px-10 lg:px-16">
        <div className="max-w-3xl mx-auto text-center">

          {/* Label */}
          <ScrollReveal>
            <p className="text-sm font-medium text-accent tracking-wider uppercase mb-8">
              Contact
            </p>
          </ScrollReveal>

          {/* Headline */}
          <ScrollReveal delay={80}>
            <h2 className="font-display font-bold text-foreground leading-[1.05] tracking-[-0.03em] text-[clamp(2.5rem,6vw,5rem)] mb-6">
              Let's build something.
            </h2>
          </ScrollReveal>

          {/* Sub */}
          <ScrollReveal delay={160}>
            <p className="text-[17px] text-muted leading-relaxed max-w-lg mx-auto mb-12">
              Have a project in mind, want to collaborate, or just want to say hello?
              I'd love to hear from you.
            </p>
          </ScrollReveal>

          {/* Email CTA */}
          <ScrollReveal delay={240}>
            <a
              href="mailto:mehedi.toure@gmail.com"
              className="inline-flex items-center gap-3 px-8 py-4 bg-accent hover:bg-accent-hover text-white text-[17px] font-normal rounded-full transition-all duration-200 hover:scale-[1.01] active:scale-[0.98] shadow-[var(--shadow-glow)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4 mb-12"
            >
              mehedi.toure@gmail.com
              <ArrowUpRight size={18} aria-hidden="true" />
            </a>
          </ScrollReveal>

          {/* Divider */}
          <ScrollReveal delay={300}>
            <div className="flex items-center gap-5 justify-center mb-10">
              <div className="h-px bg-border flex-1 max-w-24" aria-hidden="true" />
              <span className="text-[12px] text-muted tracking-wider uppercase">or find me on</span>
              <div className="h-px bg-border flex-1 max-w-24" aria-hidden="true" />
            </div>
          </ScrollReveal>

          {/* Social links */}
          <ScrollReveal delay={360}>
            <div className="flex items-center justify-center gap-4">
              {SOCIAL.map(({ label, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-5 py-3 border border-border text-muted hover:text-foreground hover:border-foreground/20 bg-background rounded-full text-[14px] font-medium transition-all duration-200 hover:shadow-[var(--shadow-card)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4"
                >
                  {icon}
                  {label}
                </a>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Footer */}
      <div className="mx-auto max-w-[1200px] px-5 md:px-10 lg:px-16 mt-24 pt-8 border-t border-border">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[13px] text-muted">
            © {new Date().getFullYear()} Mehedi Touré. All rights reserved.
          </p>
          <p className="text-[13px] text-muted">
            Paris, France
          </p>
        </div>
      </div>
    </section>
  );
}
