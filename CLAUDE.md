# CLAUDE.md

This file defines execution rules for Claude Code in this repository.

---

# 1. Project Identity

Botpartner.no is a high-ticket B2B qualification machine.

Core positioning:
Vi bygger strukturerte nettsider som konverterer.
AI brukes der det styrker kvalifisering og flyt.

This is not an informational website.
It exists to generate qualified B2B leads.

Every change must improve:
- Clarity
- Authority
- Conversion
- Structural simplicity

---

# 2. Technical Constraints (Non-Negotiable)

- Static HTML / CSS / Vanilla JS only
- No frameworks
- No build tools
- No package manager
- No refactoring unless explicitly requested
- No renaming classes or IDs
- No splitting CSS
- No introducing new dependencies
- No layout hierarchy changes unless explicitly requested
- Preserve mobile behavior

All edits must be minimal and scoped.

---

# 3. File Structure

Pages:
- index.html
- losninger.html
- system.html
- ai-assistent-nettside.html
- nettside.html

Styling:
- botpartner_web.css (single monolithic file)

JavaScript:
- botpartner_web.js (navigation scroll + mobile menu only)

---

# 4. Conversion Rules

This is a high-ticket B2B site.

- One primary CTA per section.
- Primary CTA depends on page intent:
  - Nettside flow: "Book gjennomgang"
  - AI flow: "Book demo"
- All CTAs must remain consistent within page context.
- CTAs must link to the correct anchor or mail action for that flow.
- Avoid AI buzzword inflation.
- Focus on business outcomes:
  - More qualified leads
  - More booked meetings
  - Less admin work
  - Faster response

Do not add decorative UI.
Do not add visual experiments.
Do not redesign.

Only improve clarity and intent.

# 5. Execution Model (MANDATORY)

When making changes:

1. List affected files.
2. Explain intent in 2–4 short bullet points.
3. Return diffs only (no full file dumps).
4. No commentary after diff unless requested.

Never:

- Rewrite entire sections unless asked.
- Propose full redesigns.
- Add new systems.
- Modify CSS architecture.

---

# 6. SEO Discipline

SEO is controlled and intentional.

Allowed:
- Title improvements
- Meta description refinement
- Canonical tags
- Open Graph hygiene
- Heading structure clarity (H1 → H2 → H3)

Not allowed:
- Adding keyword stuffing
- New pages may only be created when explicitly requested and strategically justified.
- Expanding scope into blog/content marketing

---

# 7. Navbar Rules

Navbar must remain:
- Clean
- Stable
- Readable on all backgrounds
- No animation experiments
- No layered overlay hacks

Keep implementation simple and robust.

---

# 8. Token Discipline

- Be concise.
- Avoid repetition.
- No marketing fluff.
- No long explanations.
- Output should be production-ready.

---

# 9. Strategic Guardrail

If a requested change weakens positioning,
complicates structure,
or introduces scope creep,

Flag it before implementing.

Do not over-prioritize AI positioning
when page intent is website-first.

# 11. Pre-Edit Verification (MANDATORY)

Before writing any diff:

- Confirm the exact existing HTML structure you are modifying.
- Confirm the exact class names or IDs exist.
- Do not assume structure.
- If uncertain, search first.

After writing diff:

- Confirm no unintended selectors were touched.
- Confirm mobile behavior is preserved.
- Confirm CTA consistency remains intact.
