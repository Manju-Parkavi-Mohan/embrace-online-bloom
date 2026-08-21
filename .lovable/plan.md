# Make the ADL Automotive shop card pop

## Current state
The "Shop online at ADL Automotive" card lives inside the About section, merged with `FeaturedProducts` into one dark `bg-ink` container. It already uses a white CTA button, but visually it still sits inline with the rest of the page flow and can blend in.

## Goal
Make the ADL Automotive storefront element unmistakably eye-catching so visitors notice it as a distinct action, while keeping it a reversible trial.

## Proposed options (pick one)

### Option A — Breakout banner card
- Convert the dark container into a full-width banner that breaks out of the `section-shell` max-width on desktop.
- Add a subtle top/bottom border using the amber accent (`--accent`) to separate it from the light About section.
- Keep the merged product grid inside, but give the top banner area more vertical padding and a stronger `shadow-brand`.
- Best for: immediate visual dominance without changing colors.

### Option B — Accent-framed floating card
- Keep the card inside the section shell but wrap it in a rounded-3xl container with a 2px amber accent gradient border (or `ring-2 ring-accent`).
- Add a small floating "Shop Online" badge/pill at the top-right corner using the accent color.
- Slightly increase the card's shadow and give it a gentle `hover:scale-[1.01]` transition.
- Best for: a premium "featured" look that stays contained.

### Option C — Sticky corner CTA (separate from card)
- Extract the storefront CTA into a compact sticky pill button that appears after scrolling past the About section.
- The pill sits fixed at the bottom-right of the viewport on mobile and desktop, reading "Shop ADL Automotive" with a cart icon.
- The existing card remains but the primary conversion path is the sticky CTA.
- Best for: maximum visibility, but more intrusive.

## Recommended first trial
**Option A** is the safest high-impact change: it makes the existing element pop by giving it more room and a colored border, without adding new floating UI or sticky elements.

## Implementation steps
1. Update `src/components/site/About.tsx`:
   - Wrap the dark ADL + FeaturedProducts container in a full-width breakout wrapper.
   - Add an amber top border and stronger shadow.
   - Increase internal vertical padding for the header row.
2. Keep `FeaturedProducts.tsx` unchanged except for any spacing adjustments needed by the new container.
3. Verify responsive behavior on mobile (no horizontal overflow) and desktop (breakout aligns with viewport edges).
4. Preview and measure visual impact before deciding to keep, refine, or revert.

## Reversibility
All changes are CSS/className only inside `About.tsx`; reverting is a single file rollback.
