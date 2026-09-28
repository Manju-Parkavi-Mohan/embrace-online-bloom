# AutoDome — Precision Fleet Solutions Website

Marketing and services website for **AutoDome** (Sharjah, UAE) — commercial-vehicle diagnostics, ECU services, training and workshop tools. Built with [TanStack Start](https://tanstack.com/start) (React 19 + Vite 7) and styled with Tailwind CSS v4.

Repository: https://github.com/Manju-Parkavi-Mohan/precision-fleet-solutions.git

## Tech Stack

| Layer      | Technology                                    |
| ---------- | --------------------------------------------- |
| Framework  | TanStack Start v1 (React 19, SSR/SSG)         |
| Build tool | Vite 7                                        |
| Styling    | Tailwind CSS v4 (CSS-first `@theme` tokens)   |
| UI kit     | shadcn-style components (`src/components/ui`) |
| Fonts      | Sora (headings) + Manrope (body)              |
| Language   | TypeScript                                    |

## Prerequisites

- **Node.js 20 or newer** — install via [nvm](https://github.com/nvm-sh/nvm#installing-and-updating) if you don't have it:
  ```sh
  nvm install 20
  nvm use 20
  ```
- **npm** (ships with Node).

## Local Setup

```sh
# 1. Clone the repository
git clone https://github.com/Manju-Parkavi-Mohan/precision-fleet-solutions.git
cd precision-fleet-solutions

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev
```

The site runs at **http://localhost:8080** (the terminal prints the exact URL). Hot reload is enabled — edits under `src/` refresh automatically.

## Available Scripts

| Command             | What it does                       |
| ------------------- | ---------------------------------- |
| `npm run dev`       | Start the dev server (hot reload)  |
| `npm run build`     | Production build                   |
| `npm run build:dev` | Development-mode build (prerender) |
| `npm run preview`   | Serve the production build locally |
| `npm run lint`      | Run ESLint                         |
| `npm run format`    | Format the codebase with Prettier  |

## Project Structure

```
src/
├── assets/                 # Images (hero photos, brand & partner logos)
├── components/
│   ├── site/               # Page sections (Hero, Services, Contact, etc.)
│   └── ui/                 # Reusable UI primitives (buttons, cards…)
├── lib/
│   ├── services.ts         # Service content: titles, copy, images, links
│   └── site.ts             # Site-wide config (contact info, storefront URL)
├── routes/
│   ├── __root.tsx          # App shell (fonts, metadata, global chrome)
│   ├── index.tsx           # Home page — section composition
│   └── services.$slug.tsx  # Individual service pages
├── styles.css              # Tailwind theme tokens & global styles
└── start.ts                # App bootstrap
```

Routes are file-based (`src/routes/`); `src/routeTree.gen.ts` is generated automatically — never edit it by hand.

## Design Conventions

Follow these rules when editing so the site stays consistent:

- **Colors** — defined as oklch tokens in `src/styles.css`. Never hardcode color utilities (`text-white`, `bg-[#…]`) in components; use semantic tokens (`bg-background`, `text-foreground`, `bg-primary`, …).
  - Palette principle: ~60% neutral background, ~30% brand blue / dark ink, ~10% amber accent.
  - Dark sections use the `.section-dark` class (never `bg-primary`) so child tokens invert automatically.
- **Typography** — Sora for display/headings (`var(--font-display)`), Manrope for body (`var(--font-sans)`); loaded via `<link>` tags in `src/routes/__root.tsx`.
- **Images** — stored as real files in `src/assets/` and imported directly (required for the Vercel deploy); no external asset pointers.
- **Contact form** — sends via mailto to md@autodome.ae, md@adlautomotive.com, sales@adlautomotive.com; name and phone are required fields.

## Deployment

The site is deployed to **Vercel**. After pushing to `main`, the deployment picks up the changes — no extra build configuration is needed (standard Vite output).
