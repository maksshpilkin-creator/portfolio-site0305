# devbymax — UI/UX Quick Reference

## Design Tokens
| Token | Value |
|-------|-------|
| --bg | #0A0A0A |
| --surface | #141414 |
| --accent | #C8A96E |
| --text | #F0F0F0 |
| --muted | #888888 |
| --border | rgba(255,255,255,0.08) |
| --border-hover | rgba(255,255,255,0.15) |
| --radius-card | 16px |
| --radius-btn | 12px |

## Typography
| Role | Font | Weight | Size (desktop) |
|------|------|--------|---------------|
| H1 | Syne | 700 | 64–72px |
| H2 | Syne | 700 | 48px |
| H3 | Syne | 600 | 28px |
| Body | Inter | 400 | 16px |
| Small | Inter | 500 | 14px |
| Label | Inter | 600 | 11px uppercase |

## Spacing (8px grid)
8 / 16 / 24 / 32 / 48 / 64 / 80 / 100px

Section vertical padding: 100px desktop, 60px mobile
Container: max-width 1200px, padding 0 24px

## Components

### Button primary
bg: #C8A96E | color: #0A0A0A | weight: 600 | radius: 12px | padding: 16px 32px
hover: bg #D4B87A, transform scale(1.02), transition 0.2s ease

### Button secondary (ghost)
bg: transparent | border: 1px solid rgba(255,255,255,0.2) | color: #F0F0F0
hover: border rgba(255,255,255,0.4), bg rgba(255,255,255,0.04)

### Card
bg: #141414 | border: 1px solid rgba(255,255,255,0.08) | radius: 16px | padding: 32px
hover: border rgba(255,255,255,0.15), translateY(-4px), box-shadow: 0 0 24px rgba(200,169,110,0.1)
transition: all 0.3s ease

### Badge / Tag
bg: rgba(200,169,110,0.12) | color: #C8A96E | radius: 100px | padding: 4px 12px
font: Inter 500 11px uppercase tracking 0.08em

### Section label (above H2)
color: #C8A96E | font: Inter 600 11px | uppercase | letter-spacing: 0.12em

## Sections

### Header
height: 72px | position: sticky | top: 0 | z-index: 100
default bg: transparent
scrolled bg: rgba(10,10,10,0.85) | backdrop-filter: blur(12px) | border-bottom: 1px solid rgba(255,255,255,0.06)
Logo: "devbymax" — Syne 700 18px #F0F0F0
Nav links: Inter 500 15px #888888, hover #F0F0F0
CTA button in header: "Напишите в TG →" — primary style, smaller (pad 10px 20px)
Mobile: hamburger menu, nav collapses to full-screen overlay

### Hero
layout: 2-col grid (1fr 1fr), gap 64px, align center
min-height: 100vh | padding-top: 72px (header offset)
background: #0A0A0A with subtle radial gradient top-left rgba(200,169,110,0.04)

Left column:
- Section label above H1: "ВЕБ-РАЗРАБОТКА ДЛЯ БИЗНЕСА" — gold, 11px caps
- H1: 64px Syne 700, line-height 1.1, color #F0F0F0
  "приводят клиентов" — color #C8A96E
- Body: 18px Inter 400 #888888, max-width 480px
- CTA row: primary button + ghost button, gap 16px
- Trust line: 5 stars + text, Inter 14px #888888

Right column:
- CSS browser mockup: radius 12px, border 1px rgba(255,255,255,0.08)
  bg gradient dark, inner content area with grid lines
- Floating notification badge: position absolute, bg #141414, border gold, radius 12px
  "15 заявок за первый месяц 🔥"

Mobile (≤768px): single column, hero image below text, reduced font sizes

### Social Proof (Marquee)
height: 64px | bg: #0D0D0D | border-top/bottom: 1px solid rgba(255,255,255,0.06)
infinite horizontal scroll, speed: 40s linear
items: "15+ проектов ★" "кафе, салоны, магазины ★" "от 5 до 7 дней ★" "PageSpeed 90+ ★" "Telegram поддержка ★"
separator: ★ gold
font: Inter 500 14px #888888

### Problems
section label: "ПОЧЕМУ БЕЗ САЙТА — ПЛОХО"
H2: "Ваш бизнес теряет клиентов без сайта"
3-card grid, gap 24px
Each card: icon top (emoji 32px), h3 20px, body 15px #888888
Resolution line below grid: centered, gold text, Inter 500 17px
Mobile: single column stack

### Services
section label: "УСЛУГИ"
H2: "Что я делаю"
Subtext below H2: Inter 400 17px #888888
2×2 grid (4 cards), gap 24px
Each card: emoji 40px top | h3 Syne 600 20px | body Inter 400 15px #888888
Mobile: single column

### Cases
section label: "КЕЙС ПРОЕКТ"
H2: "Результаты, а не просто картинки"
2 cards stacked, each full width, internal layout 2-col (image left + content right)
Tags: inline badge row above title (ВИЗИТКА / ЛЕНДИНГ, category, КЛИЕНТ)
Case title: Syne 700 24px
Проблема / Решение: labeled blocks, Inter 400 15px
Metrics row: 3 stat items (label + big number + unit), gold numbers
Testimonial quote: italic 15px #888888, attribution gold
CTA link: "Смотреть сайт →" underline, gold
Mobile: stack image above content

### Process
section label: "ПРОЦЕСС"
H2: "Как мы будем работать"
Sub: "От первого сообщения до готового сайта — всего 5 шагов"
Zigzag layout: odd steps left-aligned, even steps right-aligned
Each step: gold circle with number (40px) + content card beside it
Day badge: pill tag, bg rgba(200,169,110,0.12), text #C8A96E
Step title: Syne 600 20px
Step body: Inter 400 15px #888888
Connecting line: 1px dashed rgba(200,169,110,0.2), vertical
Mobile: single column left-aligned

### Pricing
section label: "ЦЕНЫ"
H2: "Прозрачные цены без сюрпризов"
Sub: "Выберите подходящий пакет — чем больше нам сайт — тем лучше результат"
3-col grid, gap 24px
Middle card (Бизнес): border rgba(200,169,110,0.4), slight scale(1.02), "Популярный" badge above
Card structure: name Syne 700 20px | price Syne 700 36px gold | feature list | CTA button
Feature items: checkmark ✓ + Inter 400 15px
Checkmark color: #C8A96E
Mobile: single column, middle card first

### FAQ
section label: "FAQ"
H2: optional or none
Accordion list, full width, max-width 720px centered
Item: question row (Inter 600 17px + + icon) | answer panel (Inter 400 15px #888888, 16px line-height)
border-bottom: 1px solid rgba(255,255,255,0.06) on each item
open state: + rotates to ×, answer slides down (max-height transition 0.35s ease)

### Final CTA
centered block, padding 120px 0
radial glow behind: rgba(200,169,110,0.06)
H2: Syne 700 56px, max-width 640px
Sub: Inter 400 18px #888888
Button: primary large (pad 20px 48px), Telegram icon inline
Mobile: reduced font, button full-width

### Footer
bg: #0D0D0D | border-top: 1px solid rgba(255,255,255,0.06)
2-col: left = logo + tagline | right = nav links
Bottom row: copyright + "Все права защищены"
Font: Inter 400 14px #888888

## Animation Timings
| Type | Duration | Easing |
|------|----------|--------|
| Micro (hover) | 0.2s | ease |
| Card hover | 0.3s | ease |
| Scroll reveal | 0.6s | ease-out |
| Counter | 1.5s | ease-out |
| Accordion | 0.35s | ease |
| Marquee | 40s | linear infinite |

Scroll reveal: translateY(24px) → translateY(0), opacity 0 → 1
Trigger: IntersectionObserver, threshold 0.15, once
