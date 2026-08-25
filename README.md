# Diego Jaramillo — Portfolio

Personal portfolio website built with Next.js 16, Tailwind CSS v4, and Framer Motion. Showcases my work as a Backend Developer & AI Integration Specialist.

**Live site:** [https://diegojaramillo.netlify.app/]

## Stack

- **Framework:** Next.js 16 (App Router)
- **Styles:** Tailwind CSS v4
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Font:** Inter + DM Mono
- **Contact form:** Web3Forms
- **AI assistant:** IKONICO AI embeddable widget
- **Deploy:** Netlify

## Features

- Dark theme with electric cyan accents
- Smooth scroll animations on every section
- Project cards with detail modals
- Fully responsive (mobile-first)
- SEO + OpenGraph + Twitter Card metadata
- Contact form with email delivery (no backend)
- AI assistant widget on every page (see below)
- Lighthouse score 95+

## Sections

| # | Section | Description |
|---|---------|-------------|
| 1 | Hero | Intro, CTA buttons, tech stack badges |
| 2 | About | Bio + quick facts (location, availability) |
| 3 | Skills | Tech stack grouped by category |
| 4 | Projects | GroupsApp · MAGNETO · FarmWay |
| 5 | Services | AI Chatbots · APIs · Integrations · Automation |
| 6 | Contact | Form + email, LinkedIn, GitHub, phone |

## AI assistant

A floating chat widget is embedded site-wide from `app/layout.tsx` via
`next/script`. It is served by [IKONICO AI](https://ikonico-ai.pages.dev) and
renders in its own iframe, so it cannot touch this site's DOM or styles.

```tsx
<Script
  id="ikonico-chat-script"
  src="https://ikonico-ai.pages.dev/widget.js"
  data-org-id="..."
  strategy="afterInteractive"
/>
```

Two things worth knowing before changing this:

- **The `id` is not cosmetic.** `widget.js` reads its `data-org-id` from
  `document.currentScript`, which is `null` when `next/script` injects the tag
  after hydration. The script then falls back to `script[data-org-id]` and to
  `#ikonico-chat-script`, so that exact id keeps the fallback chain working.
- **The domain must be authorized on the IKONICO AI side**, in both the backend
  allowlist and the `frame-ancestors` header. If this site ever moves to another
  domain, the chat stops loading there with no visible error — the browser just
  refuses to render the iframe. Register the new domain before switching.

## Run locally

```bash
npm install
npm run dev
# → http://localhost:3000
```

## Contact

- Email: diegojaramillocalderon@gmail.com
- LinkedIn: [linkedin.com/in/diegojaramilloo](https://www.linkedin.com/in/diegojaramilloo/)
- GitHub: [github.com/dajaramilc](https://github.com/dajaramilc)
