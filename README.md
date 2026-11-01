# be excellent to each other

A single-page digital poster for **Rule #1** of [Happy Hacking Space](https://github.com/HappyHackingSpace):

> **be excellent to each other**

The page renders the rule as a print-ready poster (5:7 aspect ratio, black background) with an animated canvas of drifting white, red, and blue particles and a large Playfair Display headline. It is a companion piece to the Rule #2 poster, [do-ocracy](https://github.com/HappyHackingSpace/do-ocracy).

## What's here

- `app/page.tsx` — the poster itself, a single static page with a `<canvas>` particle animation; no routes, forms, or backend.
- `components/ui/` — a scaffolded [shadcn/ui](https://ui.shadcn.com/) component library; the poster page itself does not currently use these components.

## Tech stack

- [Next.js](https://nextjs.org/) 16 (App Router) with React 19 and TypeScript
- [Tailwind CSS](https://tailwindcss.com/) v4
- Geist and Playfair Display fonts (via `next/font`)

## Local development

The repo uses [pnpm](https://pnpm.io/) (see `pnpm-lock.yaml`); a `package-lock.json` is also checked in, so plain npm works too.

```bash
pnpm install
pnpm dev
```

Then open http://localhost:3000.

## Deployment

The app is a static single page and builds with `pnpm build`; it deploys cleanly to Vercel or any Node host (`pnpm start`). No live deployment URL is recorded in this repo at the moment.

## License

[MIT](LICENSE)

---

Part of [Happy Hacking Space](https://github.com/HappyHackingSpace) — a community space for hackers, crafters, and explorers.
