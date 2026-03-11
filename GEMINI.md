# GEMINI.md — AI Project Context

> This file provides context for AI assistants working on this project.

## Project Overview

**Unit Converter** is a frontend-only web app that converts between common measurement units (length, volume, mass) with a retro CRT terminal aesthetic. It is a learning/lab project focused on vanilla JS fundamentals, performance optimization, and SEO best practices.

- **Live URL:** https://unit-convert-six.vercel.app/
- **Repo:** https://github.com/EdGonzz/unit-convert
- **Author:** EdGonzz (@Ed_Gonzz_)

## Tech Stack

| Layer        | Technology                                  |
| ------------ | ------------------------------------------- |
| Bundler      | **Vite 7** (ES modules)                     |
| Styling      | **Tailwind CSS 4** (via `@tailwindcss/vite`) |
| Font         | **Space Mono** (`@fontsource/space-mono`)    |
| Testing      | **Vitest 4** (with `jsdom` environment)      |
| Package Mgr  | **pnpm**                                     |
| Deployment   | **Vercel**                                   |
| Language     | **JavaScript** (ESM, JSDoc typed)            |

> **Note:** The project uses **JavaScript with JSDoc annotations** for type safety, not TypeScript. Keep this convention when adding new code.

## Project Structure

```
unit-convert/
├── index.html              # SPA entry point (SEO meta, JSON-LD, noscript fallback)
├── package.json
├── vite.config.js           # Vite config + Tailwind plugin + path alias (@/)
├── tailwind.config.js       # Custom font family (Space Mono)
├── jsconfig.json            # Path alias: @/ → ./src/
├── public/
│   ├── favicon.png
│   ├── og-image.png
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── main.js              # App entry — state, render loop, event binding
│   ├── style.css            # Global styles (CSS vars, scanline animation, sr-only)
│   ├── utils.js             # format() helper
│   ├── conversions.js       # Pure conversion functions + constants
│   ├── dom-utils.js         # typeWriter() DOM animation utility
│   ├── components/
│   │   ├── Header.js        # Header template (input + [RUN] button)
│   │   └── ResultCard.js    # Result card template (title + live region)
│   ├── conversions.test.js  # Unit tests for conversion functions
│   ├── dom-utils.test.js    # Unit tests for typeWriter
│   ├── utils.test.js        # Unit tests for format()
│   └── render-benchmark.test.js  # Performance benchmark tests
├── .agents/skills/          # AI skill definitions
│   └── create-readme/
└── .agent/skills/           # Additional AI skill definitions
```

## Architecture & Patterns

### Rendering Strategy

The app uses a **mount-once, patch-later** pattern to avoid full DOM replacement:

1. On initial render, `main.js` builds the full HTML shell via `innerHTML` and calls `attachEvents()`.
2. On subsequent renders (user input changes), only the text nodes inside `#length-result`, `#volume-result`, and `#mass-result` are updated via `typeWriter()`.
3. This preserves event listeners and avoids layout thrashing.

### Components

Components are **template-literal functions** (not framework components). They return HTML strings and are only used during the initial mount:

- `Header(initialValue)` → returns the header with input field and [RUN] button.
- `ResultCard(title, id)` → returns a card with an `<article>`, heading, and `<p>` with `aria-live="polite"`.

### Conversion Logic

Pure functions in `conversions.js` that take a number and return `{ forward, reverse }`:

- `convertLength(value)` — meters ↔ feet (factor: `3.281`)
- `convertVolume(value)` — liters ↔ gallons (factor: `0.264`)
- `convertMass(value)` — kilograms ↔ pounds (factor: `2.204`)

### DOM Utilities

- `typeWriter(element, text, speed)` — Animates text character by character with cancellation support (clears previous timer via `element.__typewriterTimer`).

## Design System

### Visual Theme: Retro CRT Terminal

| Token           | Value                              |
| --------------- | ---------------------------------- |
| `--background`  | `#0d0d0d` (near-black)            |
| `--foreground`  | `#1F2937` (dark gray)             |
| `--primary`     | `#00ff00` (terminal green)        |
| `--glow`        | Multi-layer green text-shadow     |

- **Font:** Space Mono (monospace)
- **Scanline overlay:** CSS animation simulating CRT scanlines
- **`.sr-only`:** Screen-reader-only utility for accessibility

## Commands

```bash
pnpm dev           # Start Vite dev server
pnpm build         # Production build → dist/
pnpm preview       # Preview production build
pnpm test          # Run tests once (vitest run)
pnpm test:watch    # Run tests in watch mode
```

## SEO & Accessibility

- Full Open Graph + Twitter Card meta tags in `index.html`
- JSON-LD structured data (`WebApplication` schema)
- `<noscript>` fallback for crawlers
- `robots.txt` + `sitemap.xml` in `/public`
- Semantic HTML5 (`<main>`, `<header>`, `<article>`, `<section>`)
- `aria-label` on all interactive elements
- `aria-live="polite"` on result regions for screen reader updates
- `<label>` with `.sr-only` for the input field

## Conventions & Rules

1. **No TypeScript** — Use JSDoc (`@typedef`, `@param`, `@returns`) for type annotations.
2. **ESM only** — All files use `import`/`export` syntax.
3. **Path alias** — Use `@/` to reference `./src/` (configured in both `vite.config.js` and `jsconfig.json`).
4. **Pure functions** — Conversion logic must remain side-effect free and testable.
5. **Targeted DOM updates** — Never replace `innerHTML` on re-render; patch only changed text nodes.
6. **Accessibility first** — Every interactive element needs `aria-label` and keyboard focus support.
7. **Test coverage** — New logic should include Vitest tests alongside the implementation.

## Testing

Tests live next to source files with `.test.js` suffix. The test runner is **Vitest** with `globals: true` (no need to import `describe`, `it`, `expect` in test files, though current tests do import them explicitly).

- `conversions.test.js` — Unit tests + roundtrip integrity checks
- `dom-utils.test.js` — TypeWriter animation with fake timers
- `utils.test.js` — Format helper
- `render-benchmark.test.js` — Performance benchmarks for render optimization

## Deployment

The app is deployed on **Vercel** at `https://unit-convert-six.vercel.app/`. Push to `main` triggers automatic deployment.
