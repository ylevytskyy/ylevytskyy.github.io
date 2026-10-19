# AGENTS.md — portfolio · Personal profile and interactive Terminator HUD portfolio (Astro, React, Tailwind CSS)

Instructions for any coding agent working in this repo, in any harness. This is the project
layer; the shared engineering core and task pipeline live in the workspace library.
Precedence: direct user instruction > this file > the shared core.

## Shared core
Shared engineering core and task pipeline: `../../agents/CORE.md`, `../../agents/pipeline.md`.

## Stack & tooling
- **Astro 5+** with `@astrojs/react` and Tailwind CSS v4 (`@tailwindcss/vite`).
- Interactive HUD elements built as lightweight React islands with `lucide-react`.
- Facts source: verified facts and achievements from `../cv/master.md` and public GitHub repositories (`ylevytskyy`).
- NDA compliance: use public descriptors for client projects; no confidential client names or brands.

## Commands
- Install: `pnpm install`
- Dev server (port 5101): `pnpm dev --port 5101`
- Build (static): `pnpm build`
- Preview: `pnpm preview`
- Lint / verify: `pnpm build`

## Delivery
- CI: GitHub Actions (.github/workflows/deploy.yml)
- Release: GitHub Pages auto-deploy on push to master/main
- Deploy target: GitHub Pages (https://ylevytskyy.github.io)
- Environments: local dev, production GitHub Pages
- Secrets location: none (public static site)
- Monitoring: none
