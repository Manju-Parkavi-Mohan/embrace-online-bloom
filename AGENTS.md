# AutoDome

Commercial-vehicle diagnostics & repair site (Sharjah, UAE). Built with TanStack Start v1, React 19, Vite 7 and Tailwind CSS v4.

See `README.md` for setup, structure and deployment notes.

Service data keeps separate card and banner image fields so homepage tiles can change independently of service-page banners.

Service navigation uses optional menuTitle independently of page titles so menu-only renames do not alter service content.
Approved route metadata lives in src/lib/seo.ts independently of service descriptions so search copy can change without rewriting visible content.
Public favicon and logo files are direct, optimized images so VPS deployments and search crawlers can access them without asset proxies.
Shared consultation links target /#contact-form and the root must preserve explicit URL hashes so navigation from service pages reaches the homepage form.
