# devbymax — Full UI/UX Specification

Source of truth for all visual decisions. Derived from /refs screenshots.

---

## 1. Design System

### Color Tokens
| Variable | Value | Usage |
|----------|-------|-------|
| `--bg` | `#0A0A0A` | Page background |
| `--surface` | `#141414` | Cards, panels |
| `--surface-2` | `#1A1A1A` | Elevated cards |
| `--accent` | `#C8A96E` | Gold — CTAs, highlights, numbers, icons |
| `--accent-hover` | `#D4B87A` | Button hover state |
| `--text` | `#F0F0F0` | Primary text |
| `--muted` | `#888888` | Secondary text, body copy |
| `--border` | `rgba(255,255,255,0.08)` | Card borders default |
| `--border-hover` | `rgba(255,255,255,0.15)` | Card borders on hover |
| `--border-accent` | `rgba(200,169,110,0.4)` | Highlighted card border (Бизнес tier) |

### Typography
| Role | Font | Weight | Desktop size | Mobile size | Line-height |
|------|------|--------|-------------|-------------|-------------|
| H1 | Syne | 700 | 64px | 40px | 1.1 |
| H2 | Syne | 700 | 48px | 32px | 1.15 |
| H3 | Syne | 600 | 24px | 20px | 1.3 |
| Price | Syne | 700 | 36px | 32px | 1 |
| Body | Inter | 400 | 16px | 15px | 1.6 |
| Body large | Inter | 400 | 18px | 16px | 1.6 |
| Small | Inter | 500 | 14px | 13px | 1.5 |
| Label | Inter | 600 | 11px | 11px | 1 |
| Label letter-spacing | — | — | 0.12em | 0.12em | — |

Google Fonts import:
```
https://fonts.googleapis.com/css2?family=Syne:wght@600;700&family=Inter:wght@400;500;600&display=swap
```

### Spacing (8px grid)
```
4px  8px  12px  16px  24px  32px  48px  64px  80px  100px  120px
```
Section vertical padding: `100px` desktop / `60px` mobile
Container: `max-width: 1200px; margin: 0 auto; padding: 0 24px`
Grid gap standard: `24px`
Card internal padding: `32px`

---

## 2. Component Library

### Button — Primary
```css
background: #C8A96E;
color: #0A0A0A;
font: 600 16px Inter;
border-radius: 12px;
padding: 16px 32px;
border: none;
cursor: pointer;
transition: background 0.2s ease, transform 0.2s ease;
```
Hover: `background: #D4B87A; transform: scale(1.02);`
Large variant (Final CTA): padding `20px 48px`, font-size `17px`
Small variant (Header): padding `10px 20px`, font-size `15px`

### Button — Ghost (Secondary)
```css
background: transparent;
color: #F0F0F0;
border: 1px solid rgba(255,255,255,0.2);
border-radius: 12px;
padding: 16px 32px;
font: 500 16px Inter;
transition: border-color 0.2s ease, background 0.2s ease;
```
Hover: `border-color: rgba(255,255,255,0.4); background: rgba(255,255,255,0.04);`

### Card
```css
background: #141414;
border: 1px solid rgba(255,255,255,0.08);
border-radius: 16px;
padding: 32px;
transition: border-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
```
Hover:
```css
border-color: rgba(255,255,255,0.15);
transform: translateY(-4px);
box-shadow: 0 8px 32px rgba(200,169,110,0.08);
```

### Badge / Tag (small pill)
```css
display: inline-flex;
align-items: center;
padding: 4px 12px;
background: rgba(200,169,110,0.12);
color: #C8A96E;
border-radius: 100px;
font: 600 11px/1 Inter;
letter-spacing: 0.08em;
text-transform: uppercase;
```

### Section Label (above H2)
```css
display: block;
color: #C8A96E;
font: 600 11px Inter;
letter-spacing: 0.12em;
text-transform: uppercase;
margin-bottom: 16px;
```

### Divider
```css
border: none;
border-top: 1px solid rgba(255,255,255,0.06);
```

---

## 3. Section-by-Section Specification

### 3.1 Header

**Layout:** Horizontal flex, space-between, align center
**Size:** height 72px, full width, sticky top: 0, z-index: 100

**States:**
- Default: `background: transparent`
- Scrolled (>50px): `background: rgba(10,10,10,0.85); backdrop-filter: blur(12px); border-bottom: 1px solid rgba(255,255,255,0.06)`
- Transition: `background 0.3s ease, backdrop-filter 0.3s ease`

**Left — Logo:**
- Text: "devbymax"
- Font: Syne 700 18px #F0F0F0
- No icon/symbol

**Center — Nav:**
- Links: "Услуги" | "Цены" | "Проекты" | "Связь"
- Font: Inter 500 15px
- Color: #888888 default → #F0F0F0 hover
- Transition: color 0.2s ease
- Gap between links: 32px
- Href: #services | #pricing | #cases | #cta

**Right — CTA:**
- Button: "Напишите в TG →"
- Style: primary small (pad 10px 20px)
- Href: https://t.me/devbymax

**Mobile (≤768px):**
- Logo stays left
- Nav replaced by hamburger (☰ / ✕ 24px icon)
- Hamburger click: full-screen overlay, bg #0A0A0A, nav links vertically centered, 32px font
- Header CTA hidden in mobile nav overlay
- Bottom sticky CTA bar replaces it (see Section 3.10.1)

---

### 3.2 Hero

**Layout:** 2-column CSS grid `1fr 1fr`, gap 64px, align-items center
**Min-height:** `100vh`
**Padding-top:** 72px (offset for sticky header)
**Background:** `#0A0A0A` + subtle `radial-gradient(ellipse 800px 600px at 0% 0%, rgba(200,169,110,0.04), transparent)`

**Left column:**
1. Section label: "ВЕБ-РАЗРАБОТКА ДЛЯ БИЗНЕСА" — gold, 11px caps
2. H1 (64px Syne 700, line-height 1.1):
   "Делаю сайты, которые"
   "**приводят клиентов**" ← `color: #C8A96E`
   "вашему бизнесу"
3. Sub (18px Inter 400 #888888, max-width 480px, margin-top 24px):
   "Лендинги, сайты-визитки и автоматизация заявок для кафе, салонов и магазинов. Под ключ за 5–7 дней."
4. Button row (margin-top 40px, gap 16px, flex row):
   - Primary: "Обсудить проект →" → https://t.me/devbymax
   - Ghost: "Смотреть работы →" → #cases
5. Trust line (margin-top 32px, flex, gap 12px, align center):
   - ★★★★★ (gold) + "15+ довольных клиентов"
   - Font: Inter 500 14px #888888

**Right column — Browser Mockup:**
```
CSS-only browser window:
- Outer container: radius 12px, border 1px rgba(255,255,255,0.08), overflow hidden
- Browser chrome bar: bg #1A1A1A, h 36px, 3 dots (red/yellow/green 10px), URL bar fake
- Content area: bg gradient (dark subtle grid pattern), h ~300px
  gradient: linear-gradient(135deg, #141414 0%, #0F0F0F 100%)
  grid: repeating-linear-gradient subtle dark lines
- Floating notification badge:
  position: absolute, top 24px, right -16px
  bg: #141414, border: 1px solid rgba(200,169,110,0.3)
  radius: 12px, padding: 12px 16px
  content: "🔥 15 заявок за первый месяц"
  font: Inter 600 13px #F0F0F0
  box-shadow: 0 8px 24px rgba(0,0,0,0.4)
```

**Mobile (≤768px):**
- Grid collapses to 1 column
- Browser mockup: max-width 320px, centered, scale reduced
- H1: 40px
- Sub: 16px

---

### 3.3 Social Proof (Marquee)

**Layout:** Full-width strip, height 64px, overflow hidden
**Background:** `#0D0D0D`
**Borders:** top + bottom `1px solid rgba(255,255,255,0.06)`

**Marquee items** (repeat × 2 for seamless loop):
```
15+ проектов  ★  кафе, салоны, магазины  ★  от 5 до 7 дней  ★  PageSpeed 90+  ★  Telegram поддержка  ★
```
- ★ separator color: #C8A96E
- Item text: Inter 500 14px #888888
- Gap between items: 32px
- Animation: `translateX(0) → translateX(-50%)`, 40s linear infinite
- Pause on hover: `animation-play-state: paused`

---

### 3.4 Problems

**Layout:** Container, section standard padding
**Grid:** `grid-template-columns: repeat(3, 1fr)`, gap 24px

**Typography:**
- Section label: "ПОЧЕМУ БЕЗ САЙТА — ПЛОХО"
- H2: "Ваш бизнес теряет клиентов без сайта" — 48px Syne 700 centered
- H2 margin-bottom: 64px

**Cards (3 items):**
Each card layout (flex column, gap 16px):
- Emoji: 40px, margin-bottom 8px
- H3: Syne 600 20px #F0F0F0
- Body: Inter 400 15px #888888 line-height 1.6

Card 1: 🔍 "Клиенты не находят вас" / body text
Card 2: 💬 "Нет удобного способа связаться" / body text
Card 3: 😰 "Страшно начать" / body text

**Resolution line:**
- Margin-top: 48px
- Text: "Я решаю все три проблемы. Быстро, понятно и без головной боли."
- Style: centered, Inter 500 17px #C8A96E
- Optional: subtle gold underline or left-right decorative lines

**Mobile:** 1 column grid, H2 32px, left-aligned

---

### 3.5 Services

**Layout:** Container, standard padding
**Grid:** `repeat(2, 1fr)`, gap 24px (2×2 = 4 cards)

**Typography:**
- Section label: "УСЛУГИ"
- H2: "Что я делаю" — left aligned
- Sub (below H2): Inter 400 17px #888888, max-width 600px

**Cards (4 items):**
Card structure (flex column, gap 16px):
- Emoji: 40px (line-height 1)
- H3: Syne 600 20px #F0F0F0
- Body: Inter 400 15px #888888 line-height 1.6

| # | Emoji | Title | Body |
|---|-------|-------|------|
| 1 | 🚀 | Лендинг | Профессиональный продающий сайт для услуги или товара. Разработка, адаптив, анимации. |
| 2 | 📋 | Сайт-визитка | Быстрый сайт для представления вас или вашего бизнеса. Имя, контакты, услуги. |
| 3 | ⚙️ | Сайт + автоматизация | Интеграция с Telegram, создание автоответов и воронки заявок. |
| 4 | 🎯 | Квиз / опрос | Интерактивный опрос для сбора лидов. Результаты приходят в Telegram. |

**Hover:** card standard hover (see components)
**Mobile:** 1 column, H2 32px

---

### 3.6 Cases

**Layout:** Container, standard padding, stacked vertically, gap 32px
**Section header:**
- Label: "КЕЙС ПРОЕКТ"
- H2: "Результаты, а не просто картинки"
- margin-bottom: 64px

**Case Card layout:**
2-column grid `1fr 1fr`, gap 0, border-radius 16px, overflow hidden

Left column (image area):
- bg: `linear-gradient(135deg, #141414, #0F0F0F)` (CSS gradient placeholder)
- min-height: 360px
- Inner subtle pattern or grid lines

Right column (content area):
- bg: #141414, padding 40px
- Flex column, gap 20px

Content structure:
1. Tags row: inline badges (flex, gap 8px)
2. H3 Syne 700 24px: case title
3. Labeled block — **"Проблема"** label (gold 11px caps) + body text (Inter 400 15px #888888)
4. Labeled block — **"Решение"** label (gold 11px caps) + body text
5. Metrics row: 3 columns, each = metric number (Syne 700 36px #C8A96E) + label (Inter 500 12px #888888)
6. "Смотреть сайт →" link (Inter 600 14px #C8A96E, underline on hover)
7. Testimonial blockquote: italic Inter 400 15px #888888, attribution Inter 600 14px #C8A96E

**Case 1 specific:**
- Tags: ВИЗИТКА · BEAUTY · КЛИЕНТ ВСЕГДА ПРАВ
- Title: "Сайт для beauty-мастера"
- Metrics: 5 дней | 47 лидов | 15 клиентов
- Attribution: "— Люся, beauty-мастер"

**Case 2 specific:**
- Tags: ЛЕНДИНГ · АВТО · ЗАЯВКИ
- Title: "Связка с захватом лидов"
- Metrics: 2 дней | 41 заявка | 12 клиентов
- Attribution: "— Дмитрий, владелец Romma"

**Mobile:** stacked, image above content, image height 200px

---

### 3.7 Process

**Layout:** Container, standard padding
**Section header:**
- Label: "ПРОЦЕСС"
- H2: "Как мы будем работать"
- Sub: "От первого сообщения до готового сайта — всего 5 шагов"
- Text centered, margin-bottom 80px

**Zigzag layout:**
Odd steps (1,3,5): card on LEFT, number circle on RIGHT of center line
Even steps (2,4): card on RIGHT, number circle on LEFT of center line

Center vertical line: `width: 1px; background: repeating-linear-gradient(to bottom, rgba(200,169,110,0.2) 0px, rgba(200,169,110,0.2) 8px, transparent 8px, transparent 16px)`

**Number circle:**
- Size: 48px
- Background: #C8A96E
- Color: #0A0A0A
- Border-radius: 50%
- Font: Syne 700 20px
- Centered on the line

**Step card:**
- bg: #141414, border: 1px solid rgba(255,255,255,0.08), radius 16px, padding 32px
- Max-width: 460px
- Day badge: pill above title

**Day badges:**
1. "День 1"
2. "День 2"
3. "День 3–4"
4. "День 5"
5. "День 6–7"

**Step content:** H3 Syne 600 20px + body Inter 400 15px #888888 (see docs/content.md for copy)

**Mobile:** Single column, left-aligned, line on left edge
Number circles: 36px, left margin 0, step cards full width

---

### 3.8 Pricing

**Layout:** Container, standard padding
**Section header:**
- Label: "ЦЕНЫ"
- H2: "Прозрачные цены без сюрпризов"
- Sub: "Выберите подходящий пакет — чем больше нам сайт — тем лучше результат"
- Centered, margin-bottom 64px

**Grid:** `repeat(3, 1fr)`, gap 24px, align-items start

**Middle card (Бизнес) extras:**
- Position relative
- Border: `1px solid rgba(200,169,110,0.4)`
- Scale: `transform: scale(1.02)` always (not just hover)
- Box-shadow: `0 0 40px rgba(200,169,110,0.08)`
- "Популярный" badge: absolute, top -14px, left 50%, transform translateX(-50%)
  bg: #C8A96E, color: #0A0A0A, radius 100px, padding 4px 16px, font Inter 600 12px

**Card structure:**
1. Tier name: Syne 700 20px #F0F0F0, margin-bottom 8px
2. Price: Syne 700 36px #C8A96E + " ₽" unit
3. Feature list: `ul` no bullets, `li` with ✓ icon
   - ✓ color: #C8A96E
   - Text: Inter 400 15px #888888
   - Margin between items: 12px
   - Divider line above list: 1px rgba(255,255,255,0.06)
4. CTA button (full width): "Выбрать" → https://t.me/devbymax
   - Старт: ghost button
   - Бизнес: primary button
   - Про: ghost button

**Pricing feature lists:**

Старт (от 10 000 ₽):
- Сайт-визитка с описанием услуг
- Адаптив под все устройства
- Базовая SEO настройка
- Дизайн на основе готового шаблона
- Готово за 3–5 дней

Бизнес (от 15 000 ₽):
- Лендинг до 5 разделов
- Форма обратной связи + Telegram уведомления
- Анимации и интерактивный дизайн
- Интеграция с CRM или таблицами
- Google Analytics подключение
- SEO оптимизация
- Готово за 5–7 дней после оплаты

Про (от 25 000 ₽):
- Всё из пакета Бизнес
- Многостраничный сайт — до 10+ страниц
- Сложный функционал и автоматизация
- Личный кабинет или каталог
- A/B тестирование
- Приоритет в очереди

**Mobile:** Single column, Бизнес first, scale reset to 1, no hover scale

---

### 3.9 FAQ

**Layout:** Container, standard padding, max-width 720px, centered
**Section label:** "FAQ" (optional)
**Items:** 5–6 accordion items stacked, gap 0

**Accordion item structure:**
- Question row: flex, space-between, align center, padding 20px 0
  - Question text: Inter 600 17px #F0F0F0
  - Icon: "+" → "×" when open (Inter 500 20px #C8A96E, rotate 45deg transition 0.3s)
  - Border-bottom: 1px solid rgba(255,255,255,0.06)
- Answer panel: hidden by default, overflow hidden
  - max-height: 0 → max-height: 500px (transition 0.35s ease)
  - Content padding: 0 0 20px 0
  - Text: Inter 400 15px #888888, line-height 1.7

**State toggle:** JS adds `.open` class on click, removes from others

---

### 3.10 Final CTA

**Layout:** Full-width section, centered content, padding 120px 0
**Background:** #0A0A0A + `radial-gradient(ellipse 800px 600px at 50% 50%, rgba(200,169,110,0.06), transparent)`

**Content (centered):**
1. H2 Syne 700 56px, max-width 640px, centered, line-height 1.1
2. Sub: Inter 400 18px #888888, margin-top 24px, max-width 480px
3. Button primary large, margin-top 48px: "Написать в Telegram →" → https://t.me/devbymax

**Copy:**
- H2: "Готовы начать? Напишите мне в Telegram"
- Sub: "Расскажите про ваш бизнес — я ответ в течение часа и предложу решение."

**Mobile:** H2 36px, button full-width

#### 3.10.1 Sticky Mobile CTA Bar
- Position: fixed, bottom 0, left 0, right 0
- Display: flex (mobile only, hide on ≥768px)
- Height: 64px + safe-area-inset-bottom
- Background: #C8A96E
- Color: #0A0A0A
- Font: Inter 600 16px
- Text: "Написать в Telegram →"
- Link: https://t.me/devbymax
- z-index: 200

---

### 3.11 Footer

**Layout:** Container, padding 48px 0 32px
**Border-top:** 1px solid rgba(255,255,255,0.06)
**Grid:** 2 columns (logo side + nav side), gap 48px
**Bottom row:** flex, space-between, margin-top 32px, border-top same

**Left:** 
- "devbymax" Syne 700 18px
- Tagline: Inter 400 14px #888888 "Веб-разработка для малого бизнеса"

**Right:**
- Nav links: Услуги | Цены | Проекты | Связь
- Font: Inter 400 14px #888888, hover #F0F0F0

**Bottom bar:**
- Left: "© 2024 devbymax. Все права защищены."
- Right: "Политика конфиденциальности" link
- Font: Inter 400 13px #888888 both sides

**Mobile:** stacked single column, all centered

---

## 4. Emoji / Icon Registry

| Section | Emoji | Purpose |
|---------|-------|---------|
| Problems | 🔍 | "Клиенты не находят вас" |
| Problems | 💬 | "Нет удобного способа связаться" |
| Problems | 😰 | "Страшно начать" |
| Services | 🚀 | Лендинг |
| Services | 📋 | Сайт-визитка |
| Services | ⚙️ | Сайт + автоматизация |
| Services | 🎯 | Квиз / опрос |
| Hero badge | 🔥 | "15 заявок за первый месяц" |
| Pricing | ✓ | Feature list checkmarks |
| Header/CTA | → | Arrow in button labels |

---

## 5. Animation Reference

| Element | Trigger | Duration | Easing | Transform |
|---------|---------|----------|--------|-----------|
| Section heading | Scroll IO (0.15) | 0.6s | ease-out | translateY(24px)→0, opacity 0→1 |
| Cards (stagger) | Scroll IO (0.1) | 0.6s | ease-out | translateY(24px)→0, opacity 0→1, delay +0.1s each |
| Card hover | Mouse | 0.3s | ease | translateY(-4px), border-color, box-shadow |
| Button hover | Mouse | 0.2s | ease | scale(1.02), bg change |
| Counter | Scroll IO (once) | 1.5s | ease-out | count 0→target |
| Header bg | Scroll >50px | 0.3s | ease | bg + backdrop-filter |
| Marquee | Auto | 40s | linear ∞ | translateX(-50%) |
| Marquee pause | Hover | instant | — | animation-play-state: paused |
| Accordion open | Click | 0.35s | ease | max-height 0→500px |
| Accordion icon | Click | 0.3s | ease | rotate 0→45deg |
| Hamburger open | Click | 0.3s | ease | overlay fade in |

---

## 6. Responsive Breakpoints

| Breakpoint | Width | Changes |
|-----------|-------|---------|
| Desktop | ≥1200px | Full 2-col layouts, full font sizes |
| Tablet | 768–1199px | Some grids → 2col, reduced padding |
| Mobile L | 480–767px | All grids → 1col, hamburger nav |
| Mobile S | ≤375px | Reduced font sizes, compact spacing |

---

## 7. Accessibility

- All images: `alt` attribute required
- Focus styles: `outline: 2px solid #C8A96E; outline-offset: 2px` on interactive elements
- Color contrast: all text on dark bg meets WCAG AA
- Accordion: `aria-expanded`, `aria-controls` attributes
- Skip link: `<a href="#hero">` at top of page
- Semantic HTML: `<header>`, `<main>`, `<section>`, `<footer>`, `<nav>`
