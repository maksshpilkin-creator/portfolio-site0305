# devbymax — Design Improvements

---

## 🔴 CRITICAL

### 1. Hero mockup — add contrast and glow
Problem: browser mockup on the right blends into the dark background — invisible.
Fix:
- Add box-shadow: 0 0 60px rgba(200,169,110,0.12) around the mockup container
- Make inner browser window slightly lighter: bg #1A1A1A instead of #141414
- Add thin frame: border: 1px solid rgba(200,169,110,0.15)
- Make floating badge "15 заявок" more visible — increase border opacity to 0.4

### 2. "Сайт который окупится" section — redesign or remove
Problem: looks like a random block with no visual weight or clear purpose.
Two options:

Option A — Remove it entirely if there's no strong reason for it to exist.

Option B — Keep it, make it powerful. Turn it into a full-width statement block:
- Remove card/container, let text breathe at full width
- Increase heading to 48–56px, Syne 700
- Add vertical gold line on the left: 3px wide, full height, color #C8A96E
- Text padding-left from the line: 32px
- Section background: #0F0F0D (slightly warmer black)
- Add checklist on the right: "Ready in 7 days / Mobile adaptive / Telegram notifications / SEO"

### 3. Stats counters (12+, 4, 39, 74+) — strengthen the block
Problem: numbers float in empty space, no visual structure.
Fix:
- Add vertical dividers between each counter: 1px solid rgba(255,255,255,0.08), height 60px
- Increase number size to 56–64px, Syne 700, color #C8A96E
- Increase label size to 14px, Inter 500, color #888888
- Wrap entire block in a container: background #141414, border-radius 16px, padding 48px
- Add subtle gold border: 1px solid rgba(200,169,110,0.1)

---

## 🟡 IMPORTANT

### 4. Services section — fix the grid
Problem: 4 cards in one row are too narrow, text feels cramped.
Fix:
- Change grid from 4 columns to 2×2: grid-template-columns: repeat(2, 1fr)
- Increase card padding to 36px
- Add short gold top accent per card: border-top: 2px solid #C8A96E, width 40px (not full width — accent only)
- Increase emoji size to 48px
- Add gap between emoji and heading: 20px

### 5. Cases — replace colored placeholders with CSS wireframe mockup
Problem: green BEAUTY / ROMMA blocks look like unfinished placeholders.
Fix:
- Remove colored background, replace with dark CSS wireframe mockup:
  - Top strip (fake header): height 32px, bg #252525, top border-radius
  - Hero block placeholder: height 120px, bg #1E1E1E
  - Three card shapes below: height 60px, bg #252525, border-radius 8px
  - All on background #141414
- Add browser chrome dot bar at top (3 circles: red / yellow / green)
- Add thin border: border: 1px solid rgba(255,255,255,0.08)

### 6. Process timeline — fix zigzag layout
Problem: cards vary in height, center line is barely visible.
Fix:
- Center vertical line: width 2px, background repeating-linear-gradient(to bottom, #C8A96E 0px, #C8A96E 8px, transparent 8px, transparent 16px)
- Set all step cards to same min-height: 160px
- Numbered circle: 48px, background #C8A96E, color #0A0A0A, Syne 700 20px — pinned exactly to the line
- Move day badge INSIDE the card, top-left corner
- Add connector dot (8px circle, gold) between line and card edge

### 7. FAQ — fix rhythm and dividers
Problem: too much empty space, dividers nearly invisible.
Fix:
- Divider between questions: border-bottom: 1px solid rgba(255,255,255,0.1) — raise opacity from 0.06 to 0.1
- Reduce section padding-top from ~140px to 80px
- "+" icon on the right: increase to 20px, color #C8A96E, add rotate(45deg) on open with transition 0.3s
- Open answer: add padding-left: 16px, border-left: 2px solid rgba(200,169,110,0.3)

---

## 🟢 POLISH

### 8. Nav link hover states
Add transitions to header navigation links:
- Default: color #888888
- Hover: color #F0F0F0, transition: color 0.2s ease
- Active section (on scroll): color #C8A96E — add JS scrollspy to detect current section

### 9. Footer — add visual closure
Problem: the page just stops, no sense of ending.
Fix:
- Add gold top border: border-top: 1px solid rgba(200,169,110,0.2)
- Add padding-bottom: 48px below copyright
- Make "devbymax" logo in footer larger: 20px, Syne 700

### 10. Marquee ticker — make it visible
If the ticker blends into the background:
- Section background: #0D0D0D (distinct from hero)
- Add border-top and border-bottom: 1px solid rgba(255,255,255,0.06)
- Increase item text color: #666666 → #888888
- Separator ★: color #C8A96E, opacity 0.6

### 11. Pricing — strengthen middle card highlight
Problem: "Популярный" badge is too small and easy to miss.
Fix:
- Badge: increase padding to 6px 20px, font-size to 12px
- Middle card: add box-shadow: 0 0 40px rgba(200,169,110,0.1)
- Middle card: always scale(1.03) — not just on hover
- "Выбрать" button in middle card: full width (width: 100%)

---

## Priority order

1. Hero mockup — quick win, high impact
2. Stats counters — quick win, high impact
3. "Сайт который окупится" — decide: remove or redesign
4. Services — 2×2 grid
5. Cases — CSS wireframe mockup
6. Process timeline — line and card sizing
7. FAQ — dividers and padding
8. Pricing — middle card emphasis
9. Marquee — visibility
10. Nav hover + scrollspy
11. Footer — visual closure