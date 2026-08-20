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
- Page bottom padding: `pb-16 sm:pb-24`
- Content width: `max-w-6xl mx-auto`
- Section rhythm: `pt-16 sm:pt-24`
- Standard card padding: `p-7 sm:p-8`; large callout padding: `p-7 sm:p-10 lg:p-12`

## Layout

- Every page uses a zinc-950 canvas with `px-4 sm:px-6`, then centers content with `mx-auto max-w-6xl`.
- Use one strong primary hero per route. A split text-and-image hero is reserved for a personal or feature landing page, not repeated as a generic callout.
- Prefer a 6-column grid on desktop for asymmetric page layouts and 2–3 columns for card collections.
- Keep corners purposeful: `rounded-2xl` for ordinary surfaces and `rounded-3xl` for feature surfaces.

## Homepage patterns

### Section headings

Use the shared homepage heading pattern for every primary section:

- Eyebrow: `text-[0.68rem] font-bold uppercase tracking-[0.18em] text-green-200/85`
- Heading: `mt-3 text-3xl tracking-[-0.04em] text-white sm:text-4xl`
- Supporting copy: `mt-5 text-base leading-7 text-zinc-400`

There are two approved heading arrangements:

1. **Standard:** a left-aligned heading block with an optional description below it. Use for strengths, interactive examples, and callouts.
2. **Split:** a heading on the left and a short `max-w-sm` description aligned at the bottom right, separated from the content below by `border-b border-zinc-800 pb-6`. Use for work and experience sections.

### Cards and collections

- **Strength cards:** a three-column collection on desktop. Each card uses `rounded-2xl border border-zinc-800 bg-zinc-900/60 p-7 sm:p-8`, a small numbered eyebrow, and a generous gap before its heading.
- **Metric cards:** use the same surface as strength cards, with a Montserrat green value and a short supporting label. Keep metrics to a small, credible set.
- **Technology toolkit:** follows the metrics, separated by a top border. It is a compact, label-first row of recognizable logos. Do not turn it into a second card collection or add horizontal scrolling.
- **Production-work cards:** image-led linked cards use the established `.project-card` pattern. They include an image wash for legibility, project context, a concise description, and a plain-text “Visit site” affordance. Do not add decorative arrows.

### Narrative sections

- **Approach section:** use a ruled two-column editorial layout. The heading sits on the left and the explanation on the right. It should stay copy-led, without an icon or decorative image.
- **Interactive example:** introduce the AI assistant as a concrete implementation example before the chat surface. The chat stays inside the ordinary dark card system, not a visually separate product.
- **Closing callout:** use one full-width `rounded-2xl` surface. A personal, contextual photo may sit behind the content only when it supports the message. Preserve the subject of the photo in the crop and use a restrained gradient or brightness treatment for readable copy. Do not repeat the hero split layout or reuse project imagery here.

## Professional experience pages

Use this pattern for employer-facing experience pages. The intent is to establish range and credibility, not to sell a consulting package.

- **Professional hero:** use the shared content frame and a `rounded-2xl border border-zinc-800 bg-linear-to-br from-zinc-900 to-zinc-950` surface. The standard eyebrow and a page title use the main visual hierarchy. A single credible metric may appear as oversized, low-contrast background type with a restrained green radial glow. Keep it non-interactive and decorative only.
- **Professional snapshot:** use the ruled 12-column editorial layout: heading in `lg:col-span-5`, body in `lg:col-span-6 lg:col-start-7`, and `border-b border-zinc-800 py-16 sm:py-24`. This keeps a short professional summary readable without turning it into a card.
- **Career timeline:** reuse the approved split heading, followed by a divided list. Each entry uses `grid gap-6 py-8 sm:py-12 lg:grid-cols-12 lg:gap-10`, a date and location column at `lg:col-span-3`, and role details at `lg:col-span-9`. Keep each role to three outcome-led points.
- **Credentials:** use a two-column credential grid within an eight-column content area. Give the strongest current credential a full-row `sm:col-span-2` treatment. Each credential surface uses a low-contrast provider name as background texture, not an icon. Preserve readable content above it and use the accent border only on hover.
- **Education:** pair the credential grid with a quiet four-column education card. Do not over-emphasize it relative to current professional work.
- **Visual CTA:** when a closing CTA needs more presence, use the ordinary large callout surface with a restrained green gradient and layered circular borders set behind the content. Keep the rings decorative, low contrast, and away from buttons and copy.

## Personal narrative pages

Use this pattern for an About page or other page where Andrew's perspective is central.

- **Title-only personal hero:** use the shared `max-w-6xl` frame, `rounded-2xl`, `border-zinc-800`, and a contained personal photo. The hero title sits at the lower left with `p-7 sm:p-10 lg:p-12`. Keep the title-only treatment deliberately spare: do not add an eyebrow or supporting paragraph inside it.
- **Image treatment:** a left-to-right zinc overlay protects title legibility without obscuring the people in the photo. Preserve faces within the crop, provide an appropriately sized source asset, and use Next image optimization with an explicit `sizes` value and quality setting.
- **Opening narrative:** begin beneath the hero in the standard section frame. The first paragraph uses the full content width at `text-base leading-8 text-zinc-300 sm:text-lg`, rather than an artificially narrow reading column.
- **Story chapters:** after the opening paragraph, separate ideas with `mt-12` and use the approved standard heading pattern. Use `mt-6` before the supporting copy.
- **Pull quote:** a single key line may appear in a `rounded-2xl border border-zinc-800 bg-zinc-900/60` surface with `p-7 sm:p-10 lg:p-12`. Use Montserrat, `text-3xl sm:text-4xl lg:text-5xl`, and green only on the meaningful phrase.
- **Personal CTA:** use the ordinary elevated dark callout surface and the existing primary and secondary pill-button treatments. Keep it focused on one practical next step.

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
- **Contact layout:** begin with a standard dark-gradient title hero, then use a 12-column grid with a four-column personal contact panel and an eight-column form surface. Keep direct email and relevant social links secondary to the form.

### Navigation and footer

- Navigation uses the shared `max-w-6xl px-4 sm:px-6` frame, a `h-16` centered route switcher, and a quiet `border-b border-zinc-900/80` separator.
- Labels use `text-[0.68rem] font-bold uppercase tracking-[0.14em]`. Keep the set to Home, About, Experience, Projects, and Contact.
- The active route is white with a single `h-px` green underline. Inactive routes are zinc-400 and turn green on hover. Do not add a pill container, icons, or a second navigation action.
- Footer repeats the site frame, uses a top border, and stays visually quiet.
- Footer uses a simple responsive layout: identity on the left and copyright on the right. Keep navigation in the header only, and do not include deprecated or private routes.

### Motion

- Use the shared reveal primitives for a subtle `18px` upward slide and fade as a section or row enters view.
- Stagger adjacent cards by `80ms`; keep each reveal to `450ms` with a calm ease-out curve.
- Animate rows and supporting content, not every individual word or control. Motion should reinforce page rhythm without competing with the content.
- Respect `prefers-reduced-motion`: revealed content remains immediately visible and does not move.

## Rules for future work

1. Start with existing tokens and component classes; add a new primitive only when existing ones cannot solve the problem.
2. Do not use custom hex colors, arbitrary spacing, or a new border radius in route code.
3. Reuse the approved standard or split section-heading pattern rather than recreating eyebrow, heading, and description styles in each route.
4. Every standalone content block must use an approved surface treatment.
5. New clickable cards, buttons, and inputs must include visible hover and keyboard focus states.
6. Use one page title, clear section headings, and eyebrow labels only where they improve scanning.
7. Validate at mobile and desktop breakpoints before merging UI work.
8. For a personal page, use the title-only hero and narrative rules above instead of repeating the homepage split hero.
9. For professional pages, use the experience patterns above and keep evidence, chronology, and next steps more prominent than services language.
10. Use optimized source images and explicit responsive sizes for all large photography.
