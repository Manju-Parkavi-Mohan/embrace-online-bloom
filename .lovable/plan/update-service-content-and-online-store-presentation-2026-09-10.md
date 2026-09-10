# Update service content and online-store presentation

## What will change
- Replace the first four service entries with the four supplied topics, preserving the submitted headings and paragraph structure on each service page.
- Update service cards, page titles, descriptions, highlights, and included items so each service consistently reflects its new subject.
- Send the fifth and sixth service cards directly to their specified ADL Automotive product-category URLs in a new tab.
- Remove the Shop Online showcase from the About section.
- Show that same dark Shop Online and product showcase in a responsive popup when the dedicated Online Store section enters view, with a clear close control.

## Technical details
- Extend the service data model with structured content sections and heading levels, then render those sections semantically beneath each service page’s single H1.
- Keep internal navigation for services 1–4 and use external links only for services 5–6.
- Use the existing dialog system and an intersection observer tied to the Online Store section; open once per page visit and preserve keyboard/focus accessibility.
- Retain the existing colors, Sora/Manrope typography, product feed, and responsive behavior.

## Verification
- Check all six service cards and the four detailed pages.
- Confirm both category links resolve to the exact supplied URLs.
- Confirm the popup opens at the Online Store section and the former inline About showcase is gone on desktop and mobile.
