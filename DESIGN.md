# NomPourChat — Design System

## Color Palette

Defined as CSS custom properties in `app/globals.css`. Use Tailwind aliases only.

| Token | Tailwind class | HSL | Usage |
|-------|---------------|-----|-------|
| `--background` | `bg-background` | `28 98% 80%` | Page background, coral |
| `--background-secondary` | `bg-backgroundSecondary` | `10 100% 83%` | Cards, alphabet active, footer, hero |
| `--background-third` | `bg-backgroundThird` | `9 48% 95%` | Accordion items, FAQ items, secondary cards |
| `--foreground` | `text-foreground` | `222.2 84% 4.9%` | Body text |

**Rules:**
- Never hardcode hex/hsl values inline — use the Tailwind aliases above
- Semi-transparent overlays: `bg-backgroundSecondary/70`, `bg-backgroundThird/70`

## Typography

Two typefaces, each with a specific role:

| Font | Variable | Role | Tailwind |
|------|----------|------|---------|
| Poppins | `--font-poppins` | Headings, labels, navigation, bold UI | `font-poppins font-bold` |
| Lora | `--font-lora` | Body text, descriptions, FAQ answers | `font-lora` |

**Rules:**
- Headings (H1–H3): always `font-poppins font-bold`
- Body / descriptive content: always `font-lora`
- Never use `font-sans` or system-ui — both fonts are always available via Next.js variable fonts

## Spacing & Rounding

- Default border radius: `rounded-2xl` (cards, sections) — do not use `rounded-full` except for the alphabet pills and logo circle
- Section padding: `p-6` or `p-4` — consistent across cards
- Section margins: `mt-6` between major sections, `mt-4` between sub-items

## Components

### Alphabet navigation (`ListAlphabet`)
- Horizontal scroll, `overflow-x: auto`
- Each letter: `w-14 h-12 rounded-3xl font-poppins font-bold text-xl`
- Active letter: `bg-backgroundSecondary`
- Inactive: `bg-backgroundThird`
- Scrolls to the selected letter on mount

### Name accordion (`ListCatsNames`)
- Radix UI `Accordion` with `type="multiple"`
- First 5 names open by default (`defaultValue`)
- Item: `bg-backgroundThird/70 rounded-2xl` — no border
- Trigger: `font-poppins font-bold text-lg`
- Content: `font-lora text-base font-semibold`

### Section card (richDescription, FAQ)
- `bg-backgroundSecondary/70 rounded-2xl p-6`
- H2 inside: `font-poppins font-bold text-xl`
- Body: `font-lora text-base leading-relaxed`

### Prev/Next navigation (new — from design review 2026-05-20)
- Placed **below the name accordion, above the rich description**
- Pattern: flex row, `justify-between`, full width, `px-4 py-3`
- Each button: `bg-backgroundThird rounded-2xl px-4 py-2 font-poppins font-bold`
- Labels: `← Lettre [X]` and `Lettre [Y] →`

### Header logo row (updated — from design review 2026-05-20)
- Logo: `<a href="/"><Image src="/pawLogo.svg" width={60} height={60} /></a>`
- Tagline: `<span class="font-poppins text-sm font-medium hidden sm:block">Trouver le nom parfait pour votre chat</span>`
- Layout: `flex items-center gap-3 mt-3 ml-3`

## Page Structure: Letter page (`/nom-de-chat-en/[letter]`)

Canonical section order (decided 2026-05-20 — names-first for pSEO):

```
1. Header (logo + tagline)
2. H1 "Nom de chat en [LETTRE]"
3. Alphabet nav (ListAlphabet)
4. Short description card (CatResume) — 2 lines max, above the fold
5. Name accordion (ListCatsNames) — PRIMARY CONTENT
6. Prev/next navigation
7. Rich description (H2 + paragraph) — SEO supporting content
8. FAQ (H2 + items) — SEO supporting content
9. Footer
```

## Page Structure: Homepage (`/`)

```
1. Cat illustration in circle
2. H1 + paw icon
3. Description paragraph
4. Alphabet grid (26 letter links)
5. CTA button → /nom-de-chat-en/a
```

## Structured Data

All letter pages include:
- `BreadcrumbList` JSON-LD
- `ItemList` JSON-LD (all names for the letter)
- `FAQPage` JSON-LD (when `SEO_CONTENT[letter]` exists)
