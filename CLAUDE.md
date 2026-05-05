# CLAUDE.md — devbymax

## What this project is
Portfolio landing page for a freelance web developer (devbymax).
Sells website development to small businesses: cafes, beauty salons, shops.
Single page. Russian copy. One CTA: https://t.me/devbymax
Deploy: Netlify. Domain: devbymax.com

---

## Read these files before any task
1. `docs/content.md` — all Russian copy. Use verbatim. Never invent text.
2. `docs/ui_ux.md` — full visual spec per section. Colors, spacing, components.
3. `docs/project_plan.md` — 11 build phases. Always know which phase you're on.
4. `refs/` — design screenshots. Source of truth for layout decisions.

---

## Stack
HTML + CSS + Vanilla JS only.
No React. No Vue. No npm. No build step.
Animations: GSAP via CDN or pure CSS keyframes.
Fonts: Google Fonts CDN (Syne + Inter).
Images: webp format, lazy loading. No external image URLs.

---

## File structure
```
index.html        all HTML, all sections
css/style.css     all styles, CSS vars at top
js/main.js        scroll-reveal, counters, accordion, hamburger
assets/           images, icons, favicon
refs/             design screenshots (read-only reference)
docs/             specs and content
```

---

## Design tokens
```css
--bg:      #0A0A0A
--surface: #141414
--accent:  #C8A96E
--text:    #F0F0F0
--muted:   #888888
--border:  rgba(255,255,255,0.08)
```
Headings: Syne 600–700 | Body: Inter 400–500
Section padding: 100px vertical (60px mobile)
Container: max-width 1200px, padding 0 24px

---

## Section order in index.html
1. `#header` — sticky, blur on scroll, CTA button always visible
2. `#hero` — 2 cols: headline left + CSS browser mockup right
3. `#social-proof` — marquee ticker
4. `#problems` — 3 pain-point cards + gold resolution line
5. `#services` — 4 service cards with emoji + price
6. `#cases` — 2 case studies with metrics + inline testimonials
7. `#process` — zigzag timeline, 5 steps, day badges
8. `#pricing` — 3 tiers (Старт / Бизнес / Про), middle highlighted
9. `#faq` — accordion
10. `#cta` — final CTA with radial glow
11. `#footer`

---

## Code rules
- Output code immediately. No preamble, no explanation after.
- Always return COMPLETE files. Never write `/* rest unchanged */`.
- Mobile first. Every component must render at 375px.
- No Lorem ipsum anywhere. All text from `docs/content.md`.
- No placeholder `<img>` tags — use CSS gradients for mockup areas.
- No inline styles — everything in style.css via CSS variables.
- Semantic HTML: `<header>`, `<main>`, `<section>`, `<footer>`, `<nav>`.
- All Telegram links: `https://t.me/devbymax`
- PageSpeed target: 90+ mobile and desktop.

---

## Component quick reference

**Button primary**
`bg #C8A96E | color #0A0A0A | weight 600 | radius 12px | pad 16px 32px`
hover: `bg #D4B87A, scale(1.02), transition 0.2s ease`

**Button ghost**
`bg transparent | border 1px solid rgba(255,255,255,0.2) | color #F0F0F0`
hover: `border rgba(255,255,255,0.4), bg rgba(255,255,255,0.04)`

**Card**
`bg #141414 | border 1px solid rgba(255,255,255,0.08) | radius 16px | pad 32px`
hover: `border rgba(255,255,255,0.15), translateY(-4px), box-shadow 0 8px 32px rgba(200,169,110,0.08), transition 0.3s ease`

**Section label** (above every H2)
`color #C8A96E | Inter 600 11px | uppercase | letter-spacing 0.12em`

**Badge / tag pill**
`bg rgba(200,169,110,0.12) | color #C8A96E | radius 100px | pad 4px 12px | Inter 600 11px uppercase`

---

## Animation rules
| What | Duration | Easing |
|------|----------|--------|
| Hover micro | 0.2s | ease |
| Card hover | 0.3s | ease |
| Scroll reveal | 0.6s | ease-out |
| Counter | 1.5s | ease-out |
| Accordion | 0.35s | ease |
| Marquee | 40s | linear infinite |

Scroll reveal: `translateY(24px) + opacity 0` → `translateY(0) + opacity 1`
Trigger: IntersectionObserver, threshold 0.15, fire once.
Cards stagger: each +0.1s delay.

---

## Never do
- No frameworks (React, Vue, Next.js, Tailwind)
- No new sections without asking
- No color changes without explicit request
- No Lorem ipsum
- No heavy animations that cause layout shift
- No `// rest unchanged` or partial file returns
- No inventing copy — only use `docs/content.md`