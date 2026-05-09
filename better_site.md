# Site improvement to-do

Ordered by impact. Each item references the section ID in `index.html`.

---

## 1. `#hero` — Add a visual of actual work

- [ ] Add a browser/device mockup image (PNG or CSS frame) showing the best case study site
- [ ] Place it to the right of the headline on desktop, below on mobile
- [ ] Use an existing screenshot from `refs/` or `refs2/` if available
- [ ] Goal: visitors can *see* what they're buying, not just read about it

---

## 2. `#stats` — Fix weak numbers

- [ ] Remove or hide the raw "4 projects" count — it hurts trust at first glance
- [ ] Add a short descriptor under each number (e.g. "13+ довольных клиентов", "42 заявки суммарно")
- [ ] If a number is low, reframe it: "4 нишевых проекта с измеримым ROI"
- [ ] Goal: every stat should *build* confidence, not raise questions

---

## 3. `#cases` — Make results the headline

- [ ] For each case card, add a visible result line at the top (e.g. "23 заявки за первый месяц")
- [ ] Result must be readable without hover or click — no hiding it in a tooltip or detail view
- [ ] Format: bold metric + short context in one line
- [ ] Goal: prove results before the visitor has to ask

---

## 4. `#services` — Highlight the main offer

- [ ] Identify the most profitable / most-sold service card
- [ ] Add `border: 1px solid var(--border-accent)` to that card in `css/style.css`
- [ ] Add a small badge ("Популярное" or "Рекомендую") in the top-right corner of the card
- [ ] Optionally make that card slightly larger or use `--shadow-card-hover`
- [ ] Goal: guide the visitor toward the service you most want to sell

---

## 5. `#process` — Cut copy in half

- [ ] Each step currently has 2–3 lines of description — trim to 1 sentence max
- [ ] Keep only the outcome of each step, cut the explanation
- [ ] Example: "Созвон — узнаю задачи и цели" instead of a full paragraph
- [ ] Goal: visitors skim this section; make it scannable in 10 seconds

---

## 6. `#problems` — Sharpen the pain points

- [ ] Replace generic flat icons with something more expressive (emoji, custom SVG, or just remove icons)
- [ ] Rewrite each card headline to be more specific and painful:
  - Instead of "Клиенты не находят" → "Конкуренты в поиске, вас нет"
  - Instead of "Нет удобного сайта" → "Клиент зашёл, не понял, ушёл"
  - Instead of "Страница неактивна" → "Страница в соцсети — не продаёт"
- [ ] Goal: visitor reads it and thinks "это про меня"

---

## 7. `(global)` — Add at least one testimonial with a face

- [ ] Add a testimonial block near `#hero` (below the headline) or between `#cases` and `#process`
- [ ] Include: photo or avatar, name, business type, and one specific result sentence
- [ ] Example: "Максим сделал лендинг за 6 дней. За первую неделю — 8 заявок. — Алексей, мастер по ремонту"
- [ ] Style with `var(--surface)` card, `var(--border-accent)` left border
- [ ] Goal: social proof with a human face converts significantly better than logos alone
