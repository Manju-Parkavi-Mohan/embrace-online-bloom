# Make the ADL Automotive shop card pop

## Current state
The "Shop online at ADL Automotive" card lives inside the About section, merged with `FeaturedProducts` into one dark `bg-ink` container. It already uses a white CTA button, but visually it still sits inline with the rest of the page flow and can blend in.

## Goal
Make the ADL Automotive storefront element unmistakably eye-catching so visitors notice it as a distinct action, while keeping it a reversible trial.

## Selected approach
Combine **Option B** (accent-framed featured card) + **Option C** (sticky corner CTA).

### Part 1 — Accent-framed featured card (About section)
- Keep the dark ADL + FeaturedProducts card inside the section shell.
- Wrap it in a `rounded-3xl` container with a 2px amber accent gradient border (`ring-2 ring-accent` or gradient border).
- Add a small floating "Shop Online" badge/pill at the top-right corner using the accent color.
- Increase the shadow (`shadow-lifted` or `shadow-brand`) and add a gentle `hover:scale-[1.01]` transition on the container.

### Part 2 — Sticky corner CTA
- Add a compact sticky pill button that appears after scrolling past the About section.
- Position it fixed at the bottom-right of the viewport on mobile and desktop.
- Label: "Shop ADL Automotive" with a cart/shopping-bag icon.
- Link to `SITE.storefront.url`.
- Make sure it does not overlap the existing WhatsApp/phone floating actions.

## Implementation steps
1. Update `src/components/site/About.tsx`:
   - Wrap the dark ADL + FeaturedProducts container in the accent-framed card.
   - Add the floating "Shop Online" badge.
   - Apply hover scale and stronger shadow.
2. Update `src/components/site/FloatingActions.tsx`:
   - Add a new sticky shop pill that shows after scrolling past the About section.
   - Position it above or beside the existing WhatsApp/phone buttons so nothing overlaps.
   - Use `ShoppingCart` or `ShoppingBag` icon with the ADL Automotive link.
3. Verify responsive behavior and z-index stacking on mobile and desktop.
4. Preview and decide whether to keep, refine, or revert.

## Reversibility
Changes are confined to `About.tsx` and `FloatingActions.tsx`; reverting is a simple rollback of those two files.
