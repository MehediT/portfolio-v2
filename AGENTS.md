<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

---

# Project Overview

**Portfolio v2** — personal portfolio for Mehedi Touré (Fullstack & Android Developer, Paris).
Single-page app, Apple-inspired minimal design, light-mode first.

## Tech Stack

| Layer       | Tech                                            |
|-------------|--------------------------------------------------|
| Framework   | Next.js 16 (App Router)                          |
| UI          | React 19, Tailwind CSS 4 (CSS-first, `@theme`)   |
| 3D          | Three.js, @react-three/fiber, @react-three/drei   |
| Icons       | lucide-react                                      |
| Language    | TypeScript 5                                      |
| Linting     | ESLint 9 + eslint-config-next                     |
| Deploy      | Vercel                                            |

## Scripts

```bash
npm run dev    # local dev server
npm run build  # production build (use to verify before merge)
npm run lint   # ESLint
```

---

# Architecture

## File Structure

```
app/
├── layout.tsx          # Root layout, SEO metadata, font loading
├── page.tsx            # Home — renders all sections in order
├── globals.css         # Design tokens (@theme), animations, utilities
└── components/
    ├── Nav.tsx          # Fixed header, glassmorphism, mobile menu (client)
    ├── Hero.tsx         # Landing section, name, CTAs, 3D mount placeholder
    ├── HeroCards.tsx    # Alternative 2×2 floating cards (unused)
    ├── About.tsx        # Bio, experience cards, education
    ├── Projects.tsx     # 4 project cards in grid
    ├── Skills.tsx       # 4 skill categories in grid
    ├── Pricing.tsx      # 3 plan cards, featured "Project" plan
    ├── Contact.tsx      # Email CTA, social links, footer
    └── ScrollReveal.tsx # IntersectionObserver fade-up wrapper (client)
public/
├── models/             # 3D assets (.glb)
└── favicon.ico
```

## Page Composition (`app/page.tsx`)

Sections render in this order — do not reorder without explicit request:

1. `<Nav />`
2. `<Hero />`
3. `<About />`
4. `<Projects />`
5. `<Skills />`
6. `<Pricing />`
7. `<Contact />`

Navigation uses hash anchors: `#about`, `#work`, `#pricing`, `#contact`.

## Component Conventions

- **Server components by default.** Only add `"use client"` when needed (event handlers, hooks, browser APIs).
- Currently client: `Nav.tsx`, `ScrollReveal.tsx`.
- All sections use a consistent container: `max-w-[1200px] mx-auto` with `px-5 md:px-10 lg:px-16` padding.
- Each section has: uppercase label (accent color) → headline → content wrapped in `<ScrollReveal>`.

---

# Design System

All tokens live in `app/globals.css` under `@theme`. Do not duplicate values — reference CSS variables.

## Colors

| Token                    | Value       | Usage                      |
|--------------------------|-------------|----------------------------|
| `--color-background`     | `#FFFFFF`   | Page background             |
| `--color-background-secondary` | `#F5F5F7` | Alternating section bg   |
| `--color-foreground`     | `#1D1D1F`   | Primary text               |
| `--color-muted`          | `#6E6E73`   | Secondary text             |
| `--color-accent`         | `#0071E3`   | CTAs, links, highlights    |
| `--color-accent-hover`   | `#0077ED`   | Accent hover state         |
| `--color-border`         | `#D2D2D7`   | Borders, dividers          |

Dark tokens (`--color-dark-*`) exist but are not activated yet.

## Typography

- **Display:** `--font-display` (SF Pro Display, system fallbacks) — headlines
- **Body:** `--font-sans` (SF Pro Text, system fallbacks) — body text
- **Mono:** `--font-mono` (SF Mono, Fira Code) — code snippets
- Responsive sizing via `clamp()` — do not use fixed font sizes for headings.

## Border Radius & Shadows

- Cards: `--radius-card: 24px`, shadow: `--shadow-card` → `--shadow-card-hover` on hover
- Badges/pills: `--radius-badge: 6px`
- Pricing featured card: `--shadow-xl`
- Accent glow: `--shadow-glow`

## Animations

- `fade-up` / `fade-in` keyframes in globals.css
- `ScrollReveal` component handles scroll-triggered fade-up with staggered delays
- `dot-pulse` for availability badge
- `@utility glass` — nav glassmorphism (backdrop-blur + saturate)
- Always respect `prefers-reduced-motion`.

---

# Coding Guidelines

## Styling

- **Tailwind CSS 4** — CSS-first config, no `tailwind.config.js`.
- Use existing CSS variables (`var(--color-accent)`, etc.) via Tailwind classes (`text-accent`, `bg-background-secondary`).
- Responsive: mobile-first (`sm:`, `md:`, `lg:` breakpoints).
- No inline `style={}` unless absolutely necessary (e.g., dynamic values).

## 3D (Three.js / R3F)

- React Three Fiber + drei are installed.
- Hero section has a mount point: `<div id="hero-3d-mount">`.
- 3D model available: `public/models/low_poly_android_phone.glb`.
- Any 3D component must be client-side (`"use client"`).

## Accessibility

- Semantic HTML (`<section>`, `<nav>`, `<main>`, `<footer>`).
- All interactive elements must be keyboard-accessible.
- Respect `prefers-reduced-motion` for animations.
- Ensure sufficient color contrast (WCAG AA minimum).

---

# Git Workflow

Read `.github/CONTRIBUTING.md` before making any code changes.
The short version:

1. **Branch first** — `git checkout -b feat/your-feature` before touching any file.
2. **Stage selectively** — `git add <specific files>`, never `git add .`.
3. **Atomic commits** — see below.
4. **Commit with co-authors** — every commit must include:
   ```
   Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
   Co-Authored-By: MehediT <mehedi.toure@gmail.com>
   ```
5. **Merge with `--no-ff`** — always, no exceptions.
6. **Verify before merge** — run `npm run build` to catch errors.

## Atomic Commits — MANDATORY

**Every commit must represent one single logical change.** Never bundle unrelated changes into one commit.

### Rules

- **One concern per commit.** A new component is one commit. Integrating it into a page is another. Updating docs is another.
- **Each user request = at least one commit.** When the user asks for a correction, a new feature, or a tweak — commit it separately before moving on.
- **Multi-step features get multiple commits.** Break large work into sequential commits, each buildable on its own:
  ```
  feat(hero): add PhoneMockup component shell
  feat(hero): add neumorphic to-do cards to PhoneMockup
  feat(hero): integrate PhoneMockup into Hero section
  chore(docs): update AGENTS.md with project architecture
  ```
- **Corrections and refinements are their own commits.** If the user asks to fix proportions, change colors, or add a detail — that's a separate commit, not amended into the previous one:
  ```
  fix(phone): correct chassis ratio to 9:19.5
  style(phone): replace gold accent with theme blue
  feat(phone): add camera lens to Dynamic Island
  ```
- **Stage only the files that belong to that logical change.** If a commit is about adding a component, don't also stage unrelated doc changes.

### How to decide commit boundaries

Ask: *"Can I describe this change in one short sentence without 'and'?"*
- Yes → one commit
- No → split it

## Branch Naming

| Prefix       | When to use                          |
|--------------|--------------------------------------|
| `feat/`      | New section, component, or feature   |
| `fix/`       | Bug fix or visual correction         |
| `chore/`     | Config, deps, tooling, CI            |
| `refactor/`  | Restructure without behaviour change |
| `style/`     | Visual-only changes (colors, spacing)|

## Commit Format

```
type(scope): short imperative summary

Optional body explaining *why*, not what.

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
Co-Authored-By: MehediT <mehedi.toure@gmail.com>
```

Types: `feat`, `fix`, `chore`, `refactor`, `style`, `docs`
