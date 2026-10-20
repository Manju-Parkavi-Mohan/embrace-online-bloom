# AutoDome

Commercial-vehicle diagnostics & repair site (Sharjah, UAE). Built with TanStack Start v1, React 19, Vite 7 and Tailwind CSS v4.

See `README.md` for setup, structure and deployment notes.

Service data keeps separate card and banner image fields so homepage tiles can change independently of service-page banners.

Service navigation uses optional menuTitle independently of page titles so menu-only renames do not alter service content.
Approved route metadata lives in src/lib/seo.ts independently of service descriptions so search copy can change without rewriting visible content.
Public favicon and logo files are direct, optimized images so VPS deployments and search crawlers can access them without asset proxies.
Shared consultation links target /contact without a hash so every "Request Consultation" button opens the dedicated Contact page at the top rather than skipping its introduction.
The shared Contact section supports disabling reveal animations; the dedicated Contact page disables them so tall content is visible on arrival without waiting for intersection thresholds.
