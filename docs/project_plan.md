# devbymax — Detailed Project Plan

11 phases, each = one Claude Code task. Execute in order. Never skip.

---

## Phase 1 — Scaffold
**What to build:** Empty project skeleton with all infrastructure in place.

**Files changed:**
- `index.html` — full document structure with all 11 section IDs, semantic HTML5, meta tags
- `css/style.css` — CSS custom properties (design tokens), Google Fonts @import, reset, base styles
- `js/main.js` — empty init, DOMContentLoaded wrapper

**Definition of done:**
- Google Fonts loaded: Syne (600,700), Inter (400,500)
- All CSS vars defined: --bg, --surface, --accent, --text, --muted, --border
- OG meta tags: title, description, image placeholder, url
- All 11 sections present as empty `<section id="...">` with correct IDs:
  header, hero, social-proof, problems, services, cases, process, pricing, faq, cta, footer
- Page renders at 375px with no overflow

**Ref screenshot:** refs/9.png (general layout reference)

---

## Phase 2 — Header + Hero
**What to build:** Sticky navigation and full hero section with browser mockup.

**Files changed:**
- `index.html` — header and hero markup
- `css/style.css` — header, hero, browser mockup, badge styles

**Definition of done:**
- Header: 72px height, sticky, transparent → blur on scroll (backdrop-filter: blur(12px))
- Logo: "devbymax" Syne 700 18px
- Nav links: Услуги | Цены | Проекты | Связь
- Header CTA button: "Напишите в TG →" links to https://t.me/devbymax
- Hero: 2-column grid, left = text, right = browser mockup
- H1: "Делаю сайты, которые приводят клиентов вашему бизнесу" — "приводят клиентов" in #C8A96E
- Subheadline: "Лендинги, сайты-визитки и автоматизация заявок для кафе, салонов и магазинов. Под ключ за 5-7 дней."
- Primary CTA: "Обсудить проект →" → https://t.me/devbymax
- Secondary CTA: "Смотреть работы →" → #cases (anchor)
- Browser mockup: CSS-only, dark window chrome, content area with gradient, floating badge "15 заявок за первый месяц 🔥"
- Trust line below CTAs

**Ref screenshot:** refs/9.png

---

## Phase 3 — Social Proof + Problems
**What to build:** Marquee ticker and problems section with 3 cards.

**Files changed:**
- `index.html` — marquee and problems markup
- `css/style.css` — marquee animation, problem cards
- `js/main.js` — no JS required (pure CSS animation)

**Definition of done:**
- Marquee: infinite horizontal scroll, 40s linear, items separated by ★
  Items: "15+ проектов ★" "кафе, салоны, магазины ★" "от 5 до 7 дней ★" "PageSpeed 90+ ★" "Telegram поддержка ★"
  Duplicated for seamless loop
- Section label: "ПОЧЕМУ БЕЗ САЙТА — ПЛОХО"
- H2: "Ваш бизнес теряет клиентов без сайта"
- 3 cards in CSS grid (1fr 1fr 1fr):
  - 🔍 "Клиенты не находят вас" / "Ищут услуги в Google, но — они уходят к конкуренту, у которого есть сайт."
  - 💬 "Нет удобного способа связаться" / "Клиент хочет написать вам что-нибудь, но не знает как. Уходит к тому, у кого есть сайт."
  - 😰 "Страшно начать" / "Кажется, что делать сайт долго, дорого, и непонятно. Но это не так — я помогаю сделать это просто."
- Resolution line: "Я решаю все три проблемы. Быстро, понятно и без головной боли." — centered, gold color

**Ref screenshot:** refs/10.png

---

## Phase 4 — Services
**What to build:** 4 service cards with emoji icons, descriptions, and pricing hints.

**Files changed:**
- `index.html` — services markup
- `css/style.css` — services grid and card styles

**Definition of done:**
- Section label: "УСЛУГИ"
- H2: "Что я делаю"
- Subtext: "Каждый сайт — это инструмент который работает для вашего бизнеса, а не просто красивая страница"
- 2×2 card grid, gap 24px:
  1. 🚀 **Лендинг** — "Профессиональный продающий сайт для услуги или товара. Разработка, адаптив, анимации."
  2. 📋 **Сайт-визитка** — "Быстрый сайт для представления вас или вашего бизнеса. Имя, контакты, услуги."
  3. ⚙️ **Сайт + автоматизация** — "Интеграция с Telegram, создание автоответов и воронки заявок."
  4. 🎯 **Квиз / опрос** — "Интерактивный опрос для сбора лидов. Отправка результатов в Telegram."
- Each card has hover state: border brighten, translateY(-4px), gold glow
- Emoji 40px, H3 Syne 600 20px, body Inter 400 15px #888888

**Ref screenshot:** refs/8.png

---

## Phase 5 — Cases
**What to build:** 2 full case study cards with problem/solution/metrics/testimonials.

**Files changed:**
- `index.html` — cases markup
- `css/style.css` — case card layout

**Definition of done:**
- Section label: "КЕЙС ПРОЕКТ"
- H2: "Результаты, а не просто картинки"
- Case 1 card — "Сайт для beauty-мастера":
  - Tags: ВИЗИТКА | BEAUTY | КЛИЕНТ ВСЕГДА ПРАВ
  - Проблема block + Решение block
  - Metrics: 5 дней | 47 лидов | 15 клиентов
  - CTA link: "Смотреть сайт →"
  - Testimonial: quote + "— Люся, beauty-мастер"
- Case 2 card — "Связка с захватом лидов":
  - Tags: ЛЕНДИНГ | АВТО | ЗАЯВКИ
  - Проблема block + Решение block
  - Metrics: 2 дней | 41 заявка | 12 клиентов
  - Testimonial: quote + "— Дмитрий, владелец Romma"
- Metrics numbers: Syne 700 36px #C8A96E
- Case card image area: CSS gradient dark placeholder (left column)

**Ref screenshots:** refs/2.png, refs/3.png

---

## Phase 6 — Process
**What to build:** 5-step zigzag timeline with numbered gold circles and day badges.

**Files changed:**
- `index.html` — process markup
- `css/style.css` — zigzag layout, timeline, step cards

**Definition of done:**
- Section label: "ПРОЦЕСС"
- H2: "Как мы будем работать"
- Sub: "От первого сообщения до готового сайта — всего 5 шагов"
- 5 steps in zigzag layout (odd = left, even = right):
  1. **Бриф** — День 1 — "Созваниваемся или переписываемся в Telegram. Я узнаю про ваш бизнес, цели, дизайн, цены. Займёт 30 минут."
  2. **Макет** — День 2 — "Создаю прототип сайта в Figma. Вы видите структуру до начала разработки. Правки — пожалуйста."
  3. **Разработка** — День 3–4 — "Верстаю сайт: HTML, CSS, анимации. Адаптив под все устройства. Вы видите прогресс."
  4. **Правки** — День 5 — "Вносим до 3 раундов правок. Всё по делу — без задержек."
  5. **Запуск** — День 6–7 — "Подключаю домен, настраиваю хостинг, проверяю форму и метрики. Сайт живёт."
- Gold numbered circle: 40px, bg #C8A96E, color #0A0A0A, Syne 700
- Day badge: pill, bg rgba(200,169,110,0.12), color #C8A96E
- Vertical dashed line connecting steps: rgba(200,169,110,0.2)
- Mobile: single column, left-aligned

**Ref screenshots:** refs/5.png, refs/11.png

---

## Phase 7 — Pricing
**What to build:** 3-tier pricing section with feature lists and Популярный badge.

**Files changed:**
- `index.html` — pricing markup
- `css/style.css` — pricing grid, tier cards, badge

**Definition of done:**
- Section label: "ЦЕНЫ"
- H2: "Прозрачные цены без сюрпризов"
- Sub: "Выберите подходящий пакет — чем больше нам сайт — тем лучше результат"
- 3 cards in grid:

  **Старт — от 10 000 ₽**
  - ✓ Сайт-визитка с описанием услуг
  - ✓ Адаптив под все устройства
  - ✓ Базовая SEO настройка
  - ✓ Дизайн на основе готового шаблона
  - ✓ Готово за 3–5 дней
  - Button ghost: "Выбрать"

  **Бизнес — от 15 000 ₽** ← "Популярный" badge, border accent
  - ✓ Лендинг до 5 разделов
  - ✓ Форма обратной связи + Telegram уведомления
  - ✓ Анимации и интерактивный дизайн
  - ✓ Интеграция с CRM или таблицами
  - ✓ Google Analytics подключение
  - ✓ SEO оптимизация
  - ✓ Готово за 5–7 дней после оплаты
  - Button primary: "Выбрать"

  **Про — от 25 000 ₽**
  - ✓ Всё из пакета Бизнес
  - ✓ Многостраничный сайт — до 10+ страниц
  - ✓ Сложный функционал и автоматизация
  - ✓ Личный кабинет или каталог
  - ✓ A/B тестирование
  - ✓ Приоритет в очереди
  - Button ghost: "Выбрать"

- All "Выбрать" buttons → https://t.me/devbymax
- "Популярный" badge: absolute positioned above middle card, pill, bg #C8A96E, color #0A0A0A
- Middle card: border 1px rgba(200,169,110,0.4), slight scale(1.02)
- Price: Syne 700 36px #C8A96E
- Mobile: single column (Бизнес card first)

**Ref screenshots:** refs/1.png, refs/4.png, refs/12.png

---

## Phase 8 — FAQ + Final CTA + Footer
**What to build:** Accordion FAQ, glowing final CTA block, and minimal footer.

**Files changed:**
- `index.html` — FAQ, CTA, footer markup
- `css/style.css` — accordion, CTA glow, footer
- `js/main.js` — accordion toggle logic

**Definition of done:**
- FAQ accordion (5–6 items), JS toggle, max-height animation 0.35s
- Questions from docs/content.md FAQ section
- Final CTA: radial glow bg, H2 56px centered, sub text, large Telegram button
- Footer: logo + tagline left, nav links right, copyright bar below
- All Telegram links point to https://t.me/devbymax

**Ref screenshots:** none (derived from design system)

---

## Phase 9 — Animations
**What to build:** Scroll-triggered reveals, counter animation, all hover transitions.

**Files changed:**
- `js/main.js` — IntersectionObserver setup, counter logic
- `css/style.css` — reveal initial states, transition declarations

**Definition of done:**
- All section entries: translateY(24px) opacity 0 → translateY(0) opacity 1 on IO trigger (threshold 0.15)
- Metric counters (cases section): count up from 0 on scroll enter, duration 1.5s ease-out
- All card hovers working (translateY, border, glow)
- Header blur triggers correctly on scroll
- Marquee pauses on hover (animation-play-state: paused)
- No janky repaints, no layout shift

---

## Phase 10 — Mobile
**What to build:** Full 375px audit, hamburger menu, sticky bottom CTA bar.

**Files changed:**
- `css/style.css` — breakpoints ≤768px and ≤375px
- `js/main.js` — hamburger toggle
- `index.html` — mobile CTA bar markup

**Definition of done:**
- All grids collapse to single column at ≤768px
- Hero: text full width, browser mockup below or hidden
- H1: 40px on mobile
- Hamburger menu: ☰ icon, full-screen overlay nav, close on link click
- Sticky bottom CTA bar (mobile only): "Написать в Telegram →" button fixed bottom, bg #C8A96E, color #0A0A0A
- No horizontal overflow at 375px
- Touch targets ≥ 44px
- Images lazy-loaded

---

## Phase 11 — Polish
**What to build:** Final QA pass, favicon, performance audit.

**Files changed:**
- `index.html` — favicon link, final meta check
- `assets/favicon.ico` + `assets/favicon.svg`
- `css/style.css` — any spacing/typography tweaks from QA

**Definition of done:**
- Favicon present (svg preferred + ico fallback)
- All links tested: nav anchors, Telegram CTAs, "Смотреть сайт" case links
- PageSpeed Insights score > 90 mobile + desktop
- Images: all webp, all have alt text, all lazy-loaded (except hero)
- No console errors
- Tested in Chrome, Firefox, Safari, mobile Chrome
- OG image renders correctly on social share preview
