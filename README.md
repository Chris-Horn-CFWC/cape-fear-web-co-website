# Cape Fear Web Co. — Website

Marketing website for Cape Fear Web Co., a web design studio based in Wilmington, NC serving the Cape Fear region.

**[Live site →](https://www.capefearweb.co/)**

## What's included

- **Homepage** — Hero, services, portfolio, testimonials, pricing, FAQ
- **Blog** — SEO-focused articles on web design, local SEO, and small business
- **Legal pages** — Privacy Policy, Terms of Service
- **Contact** — Form (Formspree) with project type selection
- **Responsive + dark mode** — Mobile-first layout with theme toggle

## Tech stack

- **Vite** — Build tool
- **React 18** — UI
- **TypeScript** — Type safety
- **Tailwind CSS** — Styling
- **shadcn/ui** — Component library (Radix UI)
- **React Router** — Client-side routing

## Getting started

```sh
npm install
npm run dev
```

Runs at [http://localhost:8080](http://localhost:8080).

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |
| `npm run test` | Run tests |

## Project structure

```
src/
├── components/     # Reusable UI components
├── pages/          # Route-level pages
├── hooks/          # Custom React hooks
├── data/           # Static data (blog posts)
├── lib/            # Utilities
└── test/           # Vitest tests
```
