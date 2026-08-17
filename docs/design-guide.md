# Andrew Posadas Portfolio Design Guide

## Purpose

The portfolio should feel like one considered product: calm, capable, human, and technical. Every page uses the same layout frame, typography hierarchy, surface language, and interaction rules. New UI should compose these primitives instead of inventing one-off values.

## Foundations

### Color

| Token | Use |
| --- | --- |
| `zinc-950` | Page canvas and deepest contrast |
| `zinc-900` | Elevated surface |
| `zinc-800` | Borders and subtle separation |
| `zinc-300` | Supporting text |
| `white` | Primary text |
| `green-200` | Accent, active states, and primary actions |

Use green deliberately: it signifies a decision, a path forward, or an interactive focus—not decoration.

### Typography

- **Headlines:** Montserrat, bold, tight tracking. Use page titles only once per page.
- **Body:** Roboto, regular/light, `text-base leading-7` for long copy.
- **Eyebrows:** `text-[0.68rem] font-bold uppercase tracking-[0.16em]`.
- **Supporting metadata:** `text-sm leading-6 text-zinc-400`.

### Spacing

Use Tailwind’s 4px-derived scale. Preferred component gaps: `2`, `3`, `4`, `6`, `8`, `12`, and `16`. Do not introduce arbitrary spacing except for a specific visual requirement.

- Page horizontal padding: `px-4 sm:px-6`
- Page vertical padding: `py-8 sm:py-12 lg:py-16`
- Content width: `max-w-6xl mx-auto`
- Section rhythm: `mt-12 sm:mt-16` or `mt-16 sm:mt-24`
- Card padding: `p-6 sm:p-7` (feature) or `p-6` (standard)

## Layout

- Use `.site-frame` for every route’s main content area.
- Use `.page-intro` for standard page headings; reserve `.projects-hero` for campaign-style hero moments.
- Prefer a 6-column grid on desktop for asymmetric page layouts and 2–3 columns for card collections.
- Keep corners purposeful: `rounded-2xl` for ordinary surfaces and `rounded-3xl` for feature surfaces.

## Components

### Surfaces

- `.surface-card`: default elevated content; border, dark gradient, `rounded-2xl`.
- `.surface-feature`: higher-emphasis surface; `rounded-3xl` with a restrained green glow.
- Cards that are links use `.interactive-card`; hover moves only `-translate-y-1` and adds an accent border.

### Buttons and links

- `.button-primary`: green filled; reserved for the main action in a section.
- `.button-secondary`: dark outlined; use for lower-priority actions.
- `.icon-button`: circular control for social and utility actions.
- Every interactive element must retain the green focus ring.

### Forms

- Use `.field-label` and `.field-control`.
- Inputs use the same dark surface, `rounded-xl`, `p-3`, and green focus state.
- Validation feedback is direct and appears beneath the action.

### Navigation and footer

- Navigation is a slim, centered route switcher with an active green underline.
- Footer repeats the site frame, uses a top border, and stays visually quiet.

## Rules for future work

1. Start with existing tokens and component classes; add a new primitive only when existing ones cannot solve the problem.
2. Do not use custom hex colors, arbitrary spacing, or a new border radius in route code.
3. Every route must use `.site-frame`; every standalone content block must use a surface class.
4. New clickable cards, buttons, and inputs must include visible hover and keyboard focus states.
5. Use one page title, clear section headings, and eyebrow labels only where they improve scanning.
6. Validate at mobile and desktop breakpoints before merging UI work.
