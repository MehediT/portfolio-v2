"use client";

import { useState, useEffect } from "react";

const NAV_LINKS = [
  { href: "#about",   label: "About"   },
  { href: "#work",    label: "Work"    },
  { href: "#pricing", label: "Pricing" },
  { href: "#contact", label: "Contact" },
];

interface NavInnerProps {
  variant: "dark" | "light";
  menuOpen: boolean;
  setMenuOpen: (v: boolean) => void;
}

function NavInner({ variant, menuOpen, setMenuOpen }: NavInnerProps) {
  const isLight = variant === "light";
  return (
    <div className="mx-auto max-w-[1200px] px-5 md:px-10 lg:px-16">
      <div className="flex items-center justify-between h-16">
        {/* Logo */}
        <a
          href="#"
          className={`font-display text-[15px] font-semibold tracking-tight transition-colors duration-200 ${
            isLight ? "text-white" : "text-foreground"
          }`}
        >
          Mehedi Touré
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
          {NAV_LINKS.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className={`text-sm font-medium transition-colors duration-200 ${
                isLight
                  ? "text-white/75 hover:text-white"
                  : "text-muted hover:text-accent"
              }`}
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <a
          href="#contact"
          className={`hidden md:inline-flex items-center px-5 py-2.5 text-sm font-normal rounded-full transition-all duration-200 hover:scale-[1.01] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
            isLight
              ? "bg-white text-accent hover:bg-white/90 focus-visible:ring-white"
              : "bg-accent hover:bg-accent-hover text-white focus-visible:ring-accent focus-visible:ring-offset-background"
          }`}
        >
          Hire me
        </a>

        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`md:hidden p-2 rounded-lg transition-colors ${
            isLight ? "text-white/80 hover:text-white" : "text-muted hover:text-accent"
          }`}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
            {menuOpen ? (
              <>
                <line x1="4" y1="4" x2="16" y2="16" />
                <line x1="16" y1="4" x2="4" y2="16" />
              </>
            ) : (
              <>
                <line x1="3" y1="6"  x2="17" y2="6"  />
                <line x1="3" y1="10" x2="17" y2="10" />
                <line x1="3" y1="14" x2="17" y2="14" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <nav className="md:hidden pb-4 flex flex-col gap-1" aria-label="Mobile navigation">
          {NAV_LINKS.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="px-2 py-3 text-sm font-medium text-muted border-b border-border transition-colors hover:text-accent"
            >
              {label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="mt-3 inline-flex items-center justify-center px-5 py-3 bg-accent hover:bg-accent-hover text-white text-sm font-normal rounded-full transition-all duration-200"
          >
            Hire me
          </a>
        </nav>
      )}
    </div>
  );
}

export default function Nav() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const baseClass = "fixed top-0 inset-x-0 z-50 transition-all duration-300 border-b";
  const scrolledClass = "glass border-black/[.08]";

  if (scrolled) {
    return (
      <header className={`${baseClass} ${scrolledClass}`}>
        <NavInner variant="dark" menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      </header>
    );
  }

  // Hero state: two clipped headers — left (dark) + right (light)
  return (
    <>
      {/* Left half — white panel, dark text */}
      <header
        className={`${baseClass} bg-transparent border-transparent`}
        style={{ clipPath: "inset(0 50% 0 0)" }}
        aria-hidden="true"
      >
        <NavInner variant="dark" menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      </header>

      {/* Right half — blue panel, white text */}
      <header
        className={`${baseClass} bg-transparent border-transparent`}
        style={{ clipPath: "inset(0 0 0 50%)" }}
      >
        <NavInner variant="light" menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      </header>
    </>
  );
}
