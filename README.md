# HERBAYU Portfolio

A light editorial portfolio built with Next.js App Router, TypeScript, Tailwind CSS, and Framer Motion. It presents Herbayu's supplied profile, project themes, and professional experience without claiming unverified results or live integrations.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Validate and build

```bash
npm run lint
npx tsc --noEmit
npm run build
```

## Content configuration

Edit the centralized files in `src/data/`:

- `profile.ts` — name, tagline, education, experience, interests, metadata, and contact details.
- `projects.ts` — project themes, categories, statuses, and available technology details.
- `lab.ts` — future experiment concepts and optional external links.
- `skills.ts` — capability groups.

Only publish contact links once verified. The email and social URLs are intentionally blank until real public details are supplied. Birth date is kept out of the interface by default; change `showBirthDate` only if it should be displayed.

Project statuses currently say **Status to confirm** because evidence for their implementation state was not provided. Add screenshots, contribution details, and verified statuses before making stronger claims. No company data, live demos, external deployments, or portfolio inquiry backend is configured. The contact section will not collect form submissions.

## Before public deployment

1. Confirm project statuses, contributions, screenshots, and which work may be publicly shown.
2. Add the professional email and real LinkedIn/GitHub URLs to `profile.ts`, if desired.
3. Confirm permission to name organizations and publish project or brand material.
4. Configure and test a contact service before adding a working inquiry form.
5. Add the production domain and a branded social preview image when they are available.
6. Run lint, type-check, and the production build after content changes.
