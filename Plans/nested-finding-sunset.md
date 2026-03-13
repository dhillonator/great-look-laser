# Great Look Laser — Calendly Links + Custom Booking Plan

## Context

Three changes requested after the editorial redesign was completed:

1. **Fix Calendly links** — all service-specific links were previously broken. Deepa has provided the correct URLs for all 8 services.
2. **Rename CTA** — "Book a Consultation" → "Book Now" everywhere. Topbar, hero, contact section, footer.
3. **Custom booking** — Add a "Custom" option below the services price list. User picks individual body parts via checkboxes, then taps "Book Now" which opens their native SMS app pre-filled with the selection to (604) 723-9281. Chosen approach: `sms:` URI (no backend needed).

---

## Changes Required

### 1. Calendly links — `src/app/page.tsx`

Replace the `link` field on each service in the `services` array:

| Service | Correct URL |
|---------|-------------|
| Full Body | `https://calendly.com/baljinder-glls/full-body` |
| Legs + Brazilian | `https://calendly.com/baljinder-glls/legs-brazilian` |
| Face + Full Arms | `https://calendly.com/baljinder-glls/full-face-arms` ✓ (already correct) |
| Face + Underarms | `https://calendly.com/baljinder-glls/face-underarms` |
| Face | `https://calendly.com/baljinder-glls/face` |
| Underarms | `https://calendly.com/baljinder-glls/underarms` |
| Brazilian | `https://calendly.com/baljinder-glls/brazillian` (note: user's spelling) |
| Legs | `https://calendly.com/baljinder-glls/legs` |

Main `openCalendly()` function (used by "Book Now" buttons only) stays as `https://calendly.com/baljinder-glls`.

### 2. Rename CTA — `src/app/page.tsx` + `src/components/Topbar.tsx`

Find and replace all occurrences of `"Book a Consultation"` → `"Book Now"`:
- Hero section CTA button
- Contact section CTA button
- Topbar desktop nav Book Now (already "Book Now" ✓)
- Topbar mobile menu button (already "Book Now" ✓)
- Footer button (already "Book Now" ✓)

### 3. Custom booking — `src/app/page.tsx`

**New state:**
```tsx
const [customParts, setCustomParts] = useState<string[]>([]);
```

**Body parts options** (individual areas, not packages):
- Full Body, Legs, Brazilian, Underarms, Face, Full Arms

**Placement:** Below the last service row in the pricing section, separated by a thin rule and a small "Custom" label.

**Structure:**
```
─────────────────────────── (border-t)
Custom                    (eyebrow label)
Build your own treatment

[ ] Full Body   [ ] Legs   [ ] Brazilian
[ ] Underarms   [ ] Face   [ ] Full Arms

[Book Now →]   (disabled until ≥1 part selected)
```

**SMS link construction:**
```tsx
const smsBody = `Hi, I'd like to book laser hair removal for: ${customParts.join(', ')}. Please call me back to confirm.`;
const smsLink = `sms:+16047239281?body=${encodeURIComponent(smsBody)}`;
window.location.href = smsLink;
```

**Analytics event:** `event({ action: 'custom_booking', category: 'Booking', label: customParts.join(', ') })`

**Styling:** Consistent with the editorial price list — no cards, no rounded corners. Checkboxes styled as small bordered squares with bronze accent when checked (`accent-[#8b7355]`). "Book Now →" is the same underline text-link style as all other CTAs, grayed out when nothing is selected.

---

## Files to Modify
- `src/app/page.tsx` — Calendly links, CTA rename, custom section
- `src/components/Topbar.tsx` — verify "Book a Consultation" is already "Book Now" (likely already correct, confirm only)

---

## Verification
- Click each service row → correct Calendly URL opens
- "Book Now" text appears everywhere (no "Book a Consultation" remaining)
- Custom section: select 2 parts → click Book Now → SMS app opens with pre-filled text on mobile / redirects on desktop
- Build: `npm run build` passes with no TypeScript errors

---

## Stack (unchanged)
- Next.js 15 App Router, TypeScript, Tailwind CSS 3.4.1, Framer Motion
- Deployment: Vercel

---

## Design System

### Typography
| Role | Font | Weight |
|------|------|--------|
| Headings / brand | Cormorant Garamond | 300 (light), 400 (regular), italic |
| Body / UI / nav | DM Sans | 300, 400, 500 |

Both imported via `next/font/google`, exposed as CSS variables `--font-cormorant` and `--font-dm-sans`, mapped to Tailwind `font-serif` / `font-sans`.

### Color Palette (replaces all orange/green)
| Token | Hex | Usage |
|-------|-----|-------|
| `#faf7f2` | warm ivory | page background, hero overlay tint |
| `#f2ece2` | warm linen | FAQ section background |
| `#1c1917` | warm near-black | primary text, contact section bg |
| `#231f1a` | darker charcoal | footer background |
| `#78716c` | warm gray | secondary text, captions |
| `#8b7355` | warm bronze | accent — prices, CTAs, hover states |
| `#e2d9cc` | warm divider | horizontal rules, borders |

### Layout Principles
- Left-aligned text throughout (no centered hero)
- Horizontal rules as section dividers (no card borders)
- `rounded-none` everywhere — no uniform rounded corners
- CTA style: underline border-bottom text links with arrow, not pill buttons
- Nav links: `tracking-widest uppercase` small caps feel

---

## Files to Modify

### 1. `tailwind.config.ts`
Add color tokens and font families to `theme.extend`:
```ts
colors: {
  ivory: '#faf7f2', linen: '#f2ece2', dark: '#1c1917',
  'dark-alt': '#231f1a', accent: '#8b7355', border: '#e2d9cc',
  'text-primary': '#1c1917', 'text-secondary': '#78716c',
},
fontFamily: {
  serif: ['var(--font-cormorant)', 'Georgia', 'serif'],
  sans:  ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
},
```

### 2. `src/app/globals.css`
Full rewrite — replace CSS variables, remove blob animations, orange hover glow, shadow-soft. Keep `scroll-behavior: smooth`. Add minimal accordion transition helper.

### 3. `src/app/layout.tsx`
Replace `Roboto` import with `Cormorant_Garamond` + `DM_Sans`, apply both `.variable` classes to `<body>`.

### 4. `src/components/Topbar.tsx`
Full rewrite (scroll logic preserved):
- Brand: `font-serif tracking-wide`, white on hero / dark on scroll
- Links: `tracking-widest uppercase text-sm`, no Book Now button in nav
- Scroll state: adds `bg-[#faf7f2] border-b border-[#e2d9cc]`
- Mobile menu: ivory background panel (not dark overlay), Cormorant large links

### 5. `src/app/page.tsx`
Full rewrite of all 5 sections (Calendly links + analytics events unchanged):

**Hero**
- `items-end pb-24` — content sits in lower-left, not dead center
- Warm overlay `rgba(15,10,5,0.45)` instead of cold black
- Large Cormorant headline: `"Great Look"` line 1, italic `"Laser"` line 2
- Eyebrow: `text-xs tracking-[0.3em] uppercase text-white/60` — e.g. "Surrey, BC — Laser Hair Removal"
- Tagline: "Reveal your smoothest skin." (DM Sans light)
- Sub-note: "For women of all skin types." (small, white/50)
- CTA: `border-b border-white/40` underline text link with `→`
- Switch to `<Image fill priority>` for better LCP

**Services/Pricing**
- Remove 4-col card grid (`bg-white rounded-2xl shadow-md border-orange-100`)
- Replace with editorial price list: full-width rows separated by `border-t border-[#e2d9cc]`
- Each row: `grid-cols-12` — service name (col-span-5), duration (col-span-4), price in Cormorant + "Book →" (col-span-3)
- Price in accent bronze (`#8b7355`), Cormorant `text-2xl`
- Hover: service name transitions to accent, "Book →" fades in

**FAQ**
- Remove 2-col card grid with green gradient background
- Replace with accordion using `useState<number | null>(null)`
- Import `AnimatePresence` from framer-motion (already a dependency)
- Each item: `border-t`, question in DM Sans medium, `+` / `−` indicator in accent
- `AnimatePresence` height animation on answer panel (`height: 0 → auto`)
- Background: `#f2ece2` (warm linen)

**Contact**
- Background: `#1c1917` (dark — visual contrast + CTA zone)
- 2-col layout: business details left, map right
- No icon boxes — clean typographic labels (`tracking-widest uppercase text-[#8b7355]`)
- Map: preserve iframe, add `filter: grayscale(25%) sepia(15%)` to desaturate Google Maps colors
- Phone, address, hours, CTA all as plain type on dark bg

**Footer**
- `bg-[#231f1a]`, horizontal flex, left-aligned brand name in Cormorant
- Right side: "Book Now →" text link + copyright
- No centered column

---

## Anti-Slop Checklist
| Removed | Replaced with |
|---------|---------------|
| `rounded-full` / `rounded-2xl` on buttons & cards | `rounded-none`, border-bottom CTA style |
| Orange gradient buttons (`from-orange-500`) | Bronze text links with `border-b` |
| Centered hero (`justify-center items-center`) | `items-end`, left-aligned |
| Card grid for services | Editorial price list with horizontal rules |
| Card grid for FAQ with green gradient | Accordion on linen background |
| `bg-white shadow-md` contact cards | Type-only layout on dark background |
| Roboto | Cormorant Garamond + DM Sans |

---

## Implementation Sequence
1. `tailwind.config.ts` — color tokens + fonts (everything depends on this)
2. `globals.css` — CSS variables
3. `layout.tsx` — font imports
4. `Topbar.tsx` — nav redesign
5. `page.tsx` — section by section: Hero → Services → FAQ → Contact → Footer

---

## Verification
- `npm run build` — no TypeScript or Tailwind errors
- `npm run dev` — visual review at localhost:3000
- Check: hero text is left-aligned, no orange anywhere, accordion opens/closes, services list hover states work, map renders, mobile menu uses ivory background
- Check mobile: hero text readable, services list readable on small screens
