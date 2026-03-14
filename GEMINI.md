# GEMINI.md — AI Project Context

> Quick-start context for AI assistants. For deep dives, see [`docs/`](./docs/).

## What Is This?

**Unit Converter** — frontend-only SPA that converts length, volume, and mass units with a retro CRT terminal aesthetic. Learning/lab project focused on vanilla JS fundamentals.

- **Live:** https://unit-convert-six.vercel.app/
- **Repo:** https://github.com/EdGonzz/unit-convert
- **Author:** EdGonzz (@Ed_Gonzz_)

## Tech Stack

| Layer       | Technology                    |
| ----------- | ----------------------------- |
| Bundler     | Vite 7                       |
| Styling     | Tailwind CSS 4               |
| Testing     | Vitest 4 (jsdom)             |
| Package Mgr | pnpm                         |
| Deploy      | Vercel (auto-deploy on push) |
| Language    | **JavaScript (ESM, JSDoc)**  |

## Commands

```bash
pnpm dev           # Dev server
pnpm build         # Production build → dist/
pnpm test          # Run tests once
pnpm test:watch    # Tests in watch mode
```

## Conventions & Rules

1. **No TypeScript** — Use JSDoc (`@typedef`, `@param`, `@returns`) for type annotations.
2. **ESM only** — All files use `import`/`export`.
3. **Path alias** — `@/` → `./src/` (configured in `vite.config.js` + `jsconfig.json`).
4. **Pure functions** — Conversion logic must be side-effect free and testable.
5. **Targeted DOM updates** — Never replace `innerHTML` on re-render; patch only changed text nodes.
6. **Accessibility first** — Every interactive element needs `aria-label` and keyboard focus.
7. **Test coverage** — New logic must include Vitest tests alongside the implementation.

## Documentation Map

| Need to understand…       | Go to                                                              |
| ------------------------- | ------------------------------------------------------------------ |
| Architecture & stack      | [`docs/arquitectura/README.md`](./docs/arquitectura/README.md)     |
| Design patterns           | [`docs/arquitectura/patrones.md`](./docs/arquitectura/patrones.md) |
| Data flow & state         | [`docs/arquitectura/flujo-de-datos.md`](./docs/arquitectura/flujo-de-datos.md) |
| Visual theme & tokens     | [`docs/arquitectura/sistema-de-diseno.md`](./docs/arquitectura/sistema-de-diseno.md) |
| Accessibility (a11y)      | [`docs/arquitectura/accesibilidad.md`](./docs/arquitectura/accesibilidad.md) |
| SEO strategy              | [`docs/arquitectura/seo.md`](./docs/arquitectura/seo.md)          |
| Testing strategy          | [`docs/arquitectura/testing.md`](./docs/arquitectura/testing.md)   |
| Architecture decisions    | [`docs/decisions/`](./docs/decisions/)                             |
| Dev setup                 | [`docs/runbooks/desarrollo-local.md`](./docs/runbooks/desarrollo-local.md) |
| Feature guides            | [`docs/runbooks/agregar-conversion.md`](./docs/runbooks/agregar-conversion.md) |
| Troubleshooting           | [`docs/runbooks/troubleshooting.md`](./docs/runbooks/troubleshooting.md) |
| Deploy process            | [`docs/runbooks/deploy.md`](./docs/runbooks/deploy.md) |
