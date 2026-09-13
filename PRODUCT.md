# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Two audiences arrive at the same page and skim it for different things.

**Hiring clients** — owners, operations leads, and CTOs at small and mid-size companies in Colombia and LatAm who want a specific thing built: a WhatsApp assistant, an API, an integration, an automation. They arrive from a referral, a LinkedIn profile, or a WhatsApp message. They are not evaluating code; they are deciding whether this person can be trusted with a system their business will depend on. They skim for a minute on a phone, then either write or leave.

**Technical evaluators** — recruiters and engineering leads screening for a backend or AI-integration role, often remote and outside Colombia. They read in English, want the stack named precisely, and look for evidence that the work ran in production rather than in a course project.

## Product Purpose

The personal portfolio of Diego Jaramillo Calderón, a backend and AI-integration developer in Medellín, Colombia. It exists to convert a visitor into a conversation — a form submission, an email, or a WhatsApp message. Success is a qualified inbound message; the site is the top of that funnel and its only job.

## Positioning

Diego does not integrate an AI API into a demo. He owns whole systems end to end — the channel layer, the retrieval layer, the scheduling layer, the advisor panel, the security hardening, the tests, and the deploy pipeline — and keeps them running in production for paying tenants.

He is a Systems Engineering student at Universidad EAFIT who is simultaneously registered as CTO of IKONICO before the Cámara de Comercio, and who sets the technical direction the company ships on. That combination — student credentials, production accountability, decision authority — is the thing a neighboring portfolio cannot truthfully copy.

He leads rather than executes tickets: he chooses the architecture, decides what gets cut, runs the delivery cadence against a client decision-maker, and answers for the result. The page must carry that authority, and it must carry it through evidence a reader can check, because a leadership claim without a system behind it reads as noise to both audiences.

## Operating Context

- Based in Medellín, Colombia; works in GMT-5 and schedules in `America/Bogota`.
- Works in Spanish with local clients and English with remote ones. Also speaks French.
- Reachable by email, LinkedIn, GitHub, and phone/WhatsApp; a contact form posts to Web3Forms with no backend of its own.
- The live site is `diegojaramillo.netlify.app`, deployed on Netlify.

## Capabilities and Constraints

**Stack of this site:** Next.js 16 (App Router), Tailwind CSS v4, lucide-react, TypeScript. No animation library: motion is CSS. Deployed to Netlify as a static-friendly build.

**Required behavior:**

- The site must be bilingual, Spanish and English, with a language switch in the top navigation. **English is the default** for any visitor without a saved choice, including the server render, metadata, and link preview (decided by Diego 2026-09-13). Language choice persists across visits.
- **The site copy never mentions the embeddable web chat** (confirmed by Diego 2026-09-13). The IKONICO AI chat widget still loads from `app/layout.tsx` via `next/script`, but Diego plans to remove it, so no claim, section, or capability may depend on it. While it remains, its script `id` (`ikonico-chat-script`) is load-bearing — see the README.
- Must stay fast and accessible: keyboard focus visible, reduced motion respected, readable contrast, responsive to phone width.

**Diego's current capability inventory** (confirmed 2026-09-12, extended 2026-09-13; this replaces the stale list the old site shipped):

- *Systems he owns end to end:* NestJS 10 in strict TypeScript, FastAPI and Flask in Python, Express in Node. Architecture, delivery, and the production on-call for them.
- *Data:* PostgreSQL with pgvector, multi-tenant row-level security through a dedicated database role, Supabase, MongoDB Atlas including Vector Search, async SQLAlchemy 2.x.
- *AI engineering:* works across Gemini, Claude, Codex, Hermes, OpenCode, Kimi and other models and agents; PyTorch; retrieval-augmented generation over 768-dimension embeddings, tool and function calling, behavior-rule prompt systems with anti prompt-injection, sentiment and summarization passes, local embedding inference with `@xenova/transformers` to remove per-query API cost.
- *The Claude toolchain, at an operator level:* Claude Code, Model Context Protocol servers, Skills, hooks, subagents, multi-CLI orchestration across agents, and Obsidian as the knowledge base for projects. This is how projects of this size get run, not a side interest.
- *Channels and integrations:* WhatsApp Cloud API end to end — webhooks with HMAC-SHA256 verification, outbound sending, message templates, System User tokens — plus Evolution API, the Meta Graph API, Google Calendar OAuth, and n8n automation workflows.
- *Security:* tenant isolation under RLS, fail-closed webhook signature verification, single-use OAuth state nonces, login lockout, per-route rate limiting, Helmet CSP, MIME allowlist with magic-byte validation, per-tenant media quotas.
- *Machine learning:* member of a machine-learning research seedbed (*semillero*) at Universidad EAFIT. **Open fact — the seedbed's exact name and focus still need to come from Diego; do not invent them.**
- *Delivery:* CI/CD pipelines, Docker and Kubernetes, Jest and pytest suites, strict TypeScript, Railway, Cloudflare Pages, Netlify, Git.

**Deliberately retired from the site.** The old portfolio led with GPT-4, DALL·E, GPT-3.5, "LangChain basics" and "Docker basics". Those model names are obsolete and the word "basics" misdescribes the current level. GPT-3.5 and DALL·E survive in exactly one place — the FarmWay project description, where they are historical fact about what that 2025 project used — and nowhere else.

**Hard constraint — nothing from the IKONICO AI internals ships here.** Tenant organization IDs, advisor-panel passwords, API keys, phone number IDs, WABA IDs, and the client decision-maker's name are internal. The case study describes architecture and outcomes only.

## Brand Commitments

- Name: Diego Jaramillo. Handles: `github.com/dajaramilc`, `linkedin.com/in/diegojaramilloo`.
- The client IKONICO LATAM may be named as a client. Confirmed by Diego.
- Voice: plain and concrete. He describes what a system does and what it runs on, not what it "empowers."
- No mention of the embeddable web chat anywhere on the site. Channels are described as WhatsApp.

## Evidence on Hand

Real, verifiable work. No invented metrics, no invented testimonials, no invented client logos.

**IKONICO AI** — multi-tenant AI assistant SaaS, in production for IKONICO LATAM.
- NestJS 10 (TypeScript strict) · PostgreSQL with pgvector on Supabase, row-level security enforced through a dedicated `app_tenant` role · Gemini 2.5 Flash · React 18 + Vite · Railway + Cloudflare Pages.
- Four tenant organizations live on one codebase, isolated by RLS inside per-request transactions.
- Channel-agnostic sending layer behind WhatsApp Cloud API, inbound and outbound.
- Retrieval over 768-dimension embeddings in pgvector, feeding a per-tenant knowledge base.
- Appointment booking through Google Calendar OAuth, with slot generation per business hours and timezone.
- Handoff to a human advisor, sentiment read on demand, and an inactivity auto-close cron with an atomic claim.
- Security: HMAC-SHA256 signature verification on the WhatsApp webhook (fail-closed), single-use nonce on the OAuth state, login lockout, per-route rate limiting, MIME allowlist plus magic-byte validation and per-tenant media quotas.
- 167 commits between 2026-05-22 and 2026-09-12, still shipping. 422 Jest tests passing.

**MAGNETO** — semantic job recommender built with Magneto Empleos. Node.js + Express, MongoDB Atlas Vector Search, BGE embeddings run locally via `@xenova/transformers` so there is no per-query API cost.

**GroupsApp** — hybrid messaging platform. Async FastAPI with SQLAlchemy 2.x, PostgreSQL on Supabase, JWT auth with roles, file handling split between AWS S3 and local storage. Real-time achieved with HTTP polling instead of WebSockets, a deliberate cost trade.

**FarmWay** — agricultural auction platform. Flask + MongoDB Atlas, DALL·E generating product images when a rural seller has no photo, GPT-3.5 generating recommendations from purchase history.

**Assets:** `public/profile.jpeg` (headshot supplied by Diego 2026-09-12; shown inside the hero prism). No logo mark exists. No client logos are licensed for use.

## Product Principles

1. **Proof over adjectives.** Every claim on the page points at a system that runs. The strongest asset is a production system with numbers a reader can check.
2. **Production is the differentiator.** Lead with what survived contact with real users and real money; student projects are supporting evidence, not the headline.
3. **Two readers, one page.** A business owner on a phone and an engineering lead on a laptop must both find what they came for without a detour.
4. **Specific beats impressive.** Name the database, the protocol, the trade-off. Vagueness reads as inexperience to the technical reader and as evasion to the business one.
5. **Client confidence is a constraint, not a section.** What is published about a client's system is limited to what a client would be glad to see published.

## Accessibility & Inclusion

Bilingual by requirement, not by nicety: a Colombian business owner should never have to read English to hire him. Keyboard focus must remain visible, motion must respect `prefers-reduced-motion`, and text must stay legible at phone width, where most referral traffic lands.
