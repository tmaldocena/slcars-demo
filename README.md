# SL Cars

Car dealership website built with React, TypeScript, Tailwind CSS v4, Motion, and Vite.

## Tech stack

- **React 18** + **TypeScript** — type-safe components
- **Vite** — fast dev server and builds
- **Tailwind CSS v4** — utility-first CSS, `@theme` system
- **Motion** — declarative animations (formerly Framer Motion)
- **React Router v7** — client-side routing
- **react-helmet-async** — per-page SEO meta tags
- **Lucide React** — consistent icon set

## Features

- **Catalog** — 17 vehicles with search, brand/fuel/transmission filters, and sorting
- **Car detail** — image gallery with lightbox and swipe gestures, full specs and features
- **Financing simulator** — interactive loan calculator with sliders (price, down payment, term, rate)
- **About** — company story, values, stats, team section
- **Contact** — form with success state (logs to console; no backend)
- **Responsive** — dark glassmorphism UI, mobile-first layout, dynamic viewport height support
- **SEO** — `<Helmet>` titles and meta descriptions on every page

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Build

```bash
npm run build
npm run preview
```

Output goes to `dist/`. A `vercel.json` is included for SPA routing on Vercel.

## Project structure

```
src/
├── App.tsx                  # Routes (/, /catalogo, /catalogo/:id, /financiacion, /nosotros, *)
├── main.tsx                 # Entry point
├── index.css                # Tailwind v4 imports, utilities, custom slider styles
├── components/
│   ├── Layout.tsx           # Shared layout for non-home pages (Navbar + Outlet + Contact)
│   ├── Navbar.tsx           # Responsive navbar with variant prop (hero | page)
│   ├── HeroSection.tsx      # Full-screen hero with video/overlay
│   ├── HeroStatsCard.tsx    # Animated stat card overlaying hero
│   ├── HeroCorner.tsx       # Corner card with cutout SVG
│   ├── CarCard.tsx          # Reusable car card (used in catalog + featured)
│   ├── CarGallery.tsx       # Image gallery with lightbox and swipe
│   └── ContactSection.tsx   # Contact form + WhatsApp placeholder
├── pages/
│   ├── CatalogPage.tsx      # Search, filters, sort, results grid
│   ├── CarDetailPage.tsx    # Specs, description, features, CTAs
│   ├── FinancingPage.tsx    # Loan simulator, plans, how-it-works steps
│   ├── AboutPage.tsx        # Story, values, stats, team
│   └── NotFoundPage.tsx     # 404 page
└── data/
    └── cars.ts              # 17 vehicles, brand/fuel/transmission lists, why-us stats
```

## Notes

- WhatsApp buttons are disabled in the demo build. To enable, replace the disabled buttons with real WhatsApp links using your number.
- The contact form logs submissions to the browser console — no server endpoint is configured.
- Homepage preserves the hero layout exactly; all other pages use a shared Layout with a page-style navbar.
