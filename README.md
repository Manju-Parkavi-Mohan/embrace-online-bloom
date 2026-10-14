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
- **Contact form** — posts to `/api/contact` (`src/routes/api/contact.ts`), which emails md@autodome.ae and office@autodome.ae via SMTP from office@autodome.ae. Name and phone are required. SMTP settings come from environment variables (see `.env.example`).

## Deployment (Hostinger Node.js)

`npm run build:node` produces a Node server in `.output/` — start it with `node .output/server/index.mjs` (uses the `PORT` env var).

1. In hPanel → **Websites → Add website → Node.js Web App** (Business/Cloud plan) — or use a VPS.
2. Connect this GitHub repo (or upload the project zip without `node_modules`).
3. Build settings: Node **20+**, install `npm install`, build `npm run build:node`, entry file `.output/server/index.mjs` (or start command `npm start`).
4. Add environment variables from `.env.example` (`SMTP_PASS` = the office@autodome.ae mailbox password from hPanel → Emails).
5. Deploy, then attach the domain (autodome.ae) and enable SSL.
6. Submit the contact form on the live site and confirm all three inboxes receive it.

**VPS alternative:** `git clone`, `npm install`, `npm run build:node`, create `.env`, run `npx pm2 start .output/server/index.mjs --name autodome` (with env vars exported), and proxy the domain to the port with Nginx.
