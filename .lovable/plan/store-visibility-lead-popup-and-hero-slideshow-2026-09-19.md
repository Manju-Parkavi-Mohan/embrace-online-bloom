# Store visibility, lead popup, and hero slideshow

## What will change

- Keep the Online Store section visible on tablet and desktop, then place the featured-products showcase directly beneath its current content.
- Hide the inline Online Store section on mobile. When mobile visitors reach that point on the home page, open the existing store popup containing the store introduction, button, and featured products.
- Make the store popup mobile-only so desktop visitors are not interrupted by content already shown inline.
- Open a lead-focused contact-form popup once when a visitor reaches the footer, while keeping the existing Contact section and form on the page.
- Reuse the same form fields, validation, recipients, and submission behavior in the popup so both forms remain consistent.
- Rotate the supplied banner into the correct landscape orientation, add it as the first hero image, and crossfade automatically to the existing workshop image.
- Pause automatic slideshow movement for visitors who prefer reduced motion.

## Interaction details

- Store and contact popups each appear at most once per page visit and remain dismissible.
- The contact popup will use a compact form-focused layout suitable for lead capture rather than repeating the contact details and map.
- The hero text, buttons, partner logos, and existing image overlay remain unchanged above the slideshow.

## Technical details

- Extract the contact form into a reusable component shared by the page and modal to avoid duplicated validation or recipient logic.
- Use the existing dialog and button system, existing semantic color tokens, Sora headings, and Manrope body text.
- Add the uploaded hero image through the project asset flow and verify desktop and mobile layouts in the live preview.
