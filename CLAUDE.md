# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Botpartner marketing website — a static HTML/CSS/JS site with no build tools, frameworks, or package managers. Served directly as static files, deployed to Netlify.

## Development

- **Dev server:** VSCode Live Server on port 5502 (configured in `.vscode/settings.json`)
- **No build step, no tests, no linter** — files are served as-is
- **Single external dependency:** Google Fonts (Inter 400/600/700)
- **Embedded widget:** Chat widget loaded from `botpartner-chatbot.netlify.app/embed.js`

## Architecture

**Pages:** `index.html` (landing), `losninger.html` (solutions), `system.html` (system architecture)

**Styling:** Single monolithic CSS file `botpartner_web.css` (~1300 lines). CSS custom properties defined at top:
- `--brand: #202942`, `--bg: #F5F7FA`, `--cta: #ff7e47`, `--muted: #6b7280`
- Breakpoints: mobile (<600px), tablet (600–860px), desktop (>860px), very small (<380px)
- Mobile-first responsive design

**JavaScript:** `botpartner_web.js` (~87 lines) handles nav scroll effect (transparent→solid) and mobile hamburger menu with IIFE pattern.

## Design Guidelines (from Cursor rules)

- Mobile-first, then tablet/desktop
- Max 2 fonts, 2 button styles, consistent spacing
- No new frameworks or dependencies — keep it vanilla HTML/CSS/JS
- Preserve existing class naming conventions
- Keep copy short, one primary CTA per section
- When adding sections: propose 2–3 layout variants, pick best, implement
- No unnecessary refactoring of existing code

## Conventions

- Semantic HTML5 (`<header>`, `<main>`, `<footer>`, `<section>`, `<details>`)
- BEM-inspired class names scoped per component (`.hero-*`, `.nav-*`, `.case-card`, `.deliver-card`)
- Reusable layout classes: `.grid-2`, `.section`, `.lead`, `.card`
- Button variants: `.cta-button`, `.btn-outline`
- Images use `loading="lazy"`
- Accessibility: ARIA attributes, `.visually-hidden`, keyboard nav (ESC to close menu)
- Schema.org structured data and Open Graph meta tags for SEO

---

## Conversion & Positioning Rules

This is a high-ticket B2B marketing site.
All changes should support clarity, authority and conversion.

- Do not redesign unless explicitly requested.
- Do not introduce new visual styles without approval.
- Keep sections structured and system-oriented.
- Avoid generic AI buzzwords.
- Prefer outcome-focused copy (booking, leads, reduced support).

Only one primary CTA per section.

---

## Token Discipline

- Keep responses concise.
- Do not restate obvious context.
- When editing code, return only changed files or diffs.
- Avoid long explanations unless explicitly requested.
- Do not propose large refactors unless necessary.

---

## Scope Control

When making changes:
- List affected files first.
- Do not rename CSS classes.
- Do not change layout hierarchy unless asked.
- Preserve mobile behavior.
- Do not add frameworks or build tools.
