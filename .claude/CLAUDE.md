# CLAUDE.md

Execution rules for Claude Code in the Botpartner repository.

This document defines how Claude must reason, prioritize and modify the website.

---

# 1. Project Identity

Botpartner.no is a high-ticket B2B lead generation system.

It is NOT a generic company website.

It exists to:

generate qualified inbound leads
book discovery calls
demonstrate product authority

Botpartner delivers:

conversion-optimized websites
+
controlled AI assistants
=
a unified digital frontline.

The goal is simple:

More booked meetings from existing traffic.

Every change must improve:

clarity
trust
authority
conversion

If a change does not improve one of these, it should not be implemented.

---

# 2. Strategic Documents (Source of Truth)

Claude must treat the NotebookLM strategy documents as authoritative.

Primary strategic files:

All files in notebooklm use cli

These define:

product positioning  
growth strategy  
SEO priorities  
execution roadmap

When implementing changes:

1. First consult EXECUTION.md
2. Then verify alignment with STRATEGY.md
3. Ensure messaging matches TRUTH.md

Claude must NOT invent strategy.

Claude executes the plan defined in these documents.

---

# 3. Current Strategic Priority

The current priority order is:

1️⃣ Fix SEO conversion leaks  
2️⃣ Improve clarity of value proposition  
3️⃣ Strengthen B2B authority  
4️⃣ Improve conversion flow  
5️⃣ Minor design improvements

Do NOT prioritize:

visual redesign
animations
UI experiments
AI buzzword expansion

Traffic and conversion come first.

---

# 4. Technical Constraints (Non-Negotiable)

The site must remain:

Static HTML  
Vanilla CSS  
Vanilla JavaScript

No frameworks  
No build tools  
No package manager  
No dependencies

Do not introduce:

React
Tailwind
build pipelines
JS libraries

Performance and simplicity are intentional design decisions.

---

# 5. File Structure

Pages:

index.html  
losninger.html  
system.html  
ai-assistent-nettside.html  
nettside.html  

Styling:

botpartner_web.css (single monolithic file)

JavaScript:

botpartner_web.js

JS is limited to:

navigation
scroll behavior
mobile menu
assistant embed

Do not introduce additional JS systems.

---

# 6. Conversion Design Rules

Botpartner is a high-ticket B2B conversion site.

Design must follow these principles:

Minimal  
Authoritative  
Structured  
Fast

Avoid:

decorative UI
visual clutter
animation experiments
generic "AI startup" design

Every section must answer one question:

Why should this company trust Botpartner?

Each section should contain:

clear problem
clear outcome
one action

---

# 7. CTA Discipline

One primary CTA per section.

Primary CTA options:

Book gjennomgang
Book demo
Se i produksjon

CTAs must:

remain consistent within a page
align with page intent
be visually obvious

Avoid:

multiple competing CTAs
confusing navigation flows

---

# 8. SEO Discipline

SEO improvements are allowed and encouraged.

Allowed changes:

title optimization
meta description improvement
heading structure improvements
internal linking
structured data
canonical tags
open graph improvements

Priority keywords currently include:

AI assistenter for bedrifter
AI assistent for nettside
AI for klinikker
AI kundeservice bedrift
automatisert booking

Claude may optimize pages to better capture these queries.

However:

No keyword stuffing  
No spammy SEO tactics

SEO must remain natural and professional.

---

# 9. Conversion Flow (Critical)

The intended funnel is:

Traffic  
→ Landing page  
→ Clear value proposition  
→ Trust (case or proof)  
→ CTA  
→ Book meeting

Pages must reinforce this flow.

Do not introduce distractions.

---

# 10. Design Philosophy

Botpartner design should feel:

premium
minimal
structured
technical

Comparable aesthetic references:

Stripe
Linear
Vercel

Avoid:

overly colorful startup aesthetics
heavy illustrations
complex layouts

Speed and clarity matter more than visual novelty.

---

# 11. Execution Model

When implementing changes:

1. List affected files
2. Explain intent in 2–4 short bullets
3. Return diffs only
4. Avoid long explanations

Claude should operate like a senior engineer executing a clear plan.

---

# 12. Strategic Guardrail

If a requested change:

complicates structure
weakens positioning
reduces clarity
introduces technical complexity

Claude must flag it before implementing.

The system should remain:

simple
fast
focused on conversion

---

# 13. Pre-Edit Verification (Mandatory)

Before modifying any code:

Confirm the exact HTML structure.
Confirm class names exist.
Confirm selectors are correct.

After editing:

Confirm mobile layout still works.
Confirm CTAs still function.
Confirm CSS selectors were not unintentionally changed.

Never assume structure.

Verify before editing.

---

# 14. Token Discipline

Claude responses should be:

concise
precise
technical

Avoid:

marketing fluff
long explanations
unnecessary context

Output should be production-ready.

