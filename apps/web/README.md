# Beyond Learning — Website

The public website for **Beyond Learning**, a law-focused education and mentorship platform.

This app lives at `apps/web` inside the Beyond Learning pnpm + Turborepo monorepo. It is built with Next.js (App Router), TypeScript and Tailwind CSS v4.

## Development

Run commands from the monorepo root:

```bash
pnpm install
pnpm dev        # start the dev server at http://localhost:3000
```

## Checks and builds

```bash
pnpm lint       # ESLint
pnpm typecheck  # TypeScript (tsc --noEmit)
pnpm build      # production build
```

To run a command for this app only, use `pnpm --filter web <script>`.

## Structure

- `src/app` — routes, root layout and global styles (brand tokens live in `globals.css`)
- `src/config/site.ts` — central site identity (name, tagline, description)
- `public` — static assets
