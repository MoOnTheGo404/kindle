# Kindle

Kindle is a production-ready MVP website prototype for a compassionate story-sharing workspace for adults 40+ on the kidney transplant waitlist. It helps patients draft a simple, consent-first story around three prompts before sharing with trusted circles.

Kindle is not a donor-matching platform, not a tool to pressure people to donate, and not a replacement for transplant professionals.

## Core Flow

Patient boundary -> three guided prompts -> story preview -> patient approval -> trusted sharing.

Prominent product promise: **Kindle transforms a lonely worksheet into a supported storytelling system.**

## Tech Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Local mock data only
- No backend, database, or real authentication required
- GitHub Actions CI for lint, type check, and build

## Local Setup

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Scripts

```bash
npm run dev        # Start local development server
npm run lint       # Run Next.js lint checks
npm run typecheck  # Run TypeScript without emitting files
npm run build      # Create a production build
npm run start      # Serve the production build locally
```

## Folder Structure

```text
app/
  start/            Three-step story flow prototype
  globals.css       Tailwind base styles
  layout.tsx        Shared metadata, header, and footer
  page.tsx          Home page
components/         Shared UI components
public/             Open Graph placeholder asset
.github/workflows/  CI workflow
```

## Environment

Copy `.env.example` to `.env.local` if you want to set a local site URL.

```bash
cp .env.example .env.local
```

No secrets are required for this MVP.

## Deployment to Vercel

1. Push this repository to GitHub.
2. In Vercel, choose **Add New Project**.
3. Import the GitHub repository.
4. Keep the default framework preset: **Next.js**.
5. Use the default build command: `npm run build`.
6. Deploy.

The MVP does not require environment variables on Vercel. If you want absolute metadata URLs, set:

```text
NEXT_PUBLIC_SITE_URL=https://your-domain.example
```

## Connecting a Custom Domain in Vercel

1. Open the project in the Vercel dashboard.
2. Go to **Settings -> Domains**.
3. Add your custom domain.
4. Follow Vercel's DNS instructions for your registrar.
5. Wait for DNS verification and SSL provisioning.

## CI

GitHub Actions runs on pushes to `main` and `develop`, and on pull requests:

- install dependencies
- lint
- type check
- build

## Privacy Note

This MVP uses mock data and browser-only prototype state. It does not store real patient information, donor information, medical information, or campaign approvals. Any future production version should include formal privacy review, security controls, accessibility testing, transplant-center workflow validation, and legal/compliance review before handling real patient data.
