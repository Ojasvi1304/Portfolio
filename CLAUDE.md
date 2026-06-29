# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # start dev server with HMR at http://localhost:5173
npm run build     # production build to dist/
npm run preview   # locally preview the production build
npm run lint      # run ESLint
```

No test runner is configured.

## Stack

- **React 19** (plain JSX, no TypeScript)
- **Vite 8** with `@vitejs/plugin-react` (uses Oxc transformer)
- **Tailwind CSS v4** via `@tailwindcss/vite` Vite plugin — no `tailwind.config.js` or `postcss.config.js`; configured in CSS via `@theme` blocks if custom tokens are needed
- **ESLint** with `eslint-plugin-react-hooks` and `eslint-plugin-react-refresh`

Single-page scroll portfolio — no routing library. All sections live on one page with `id` anchors.

## Structure

```
src/
  App.jsx                     # layout shell — imports and assembles all section components
  main.jsx                    # entry point
  index.css                   # only: @import "tailwindcss"
  assets/images/              # images imported as ES modules (Vite hashes at build time)
  data/                       # static JS content files — edit these to update portfolio data
    nav.js                    # navLinks[] — single source of truth for navbar + scroll-spy
    projects.js / skills.js / education.js / certifications.js
  hooks/
    useScrollSpy.js           # IntersectionObserver hook; returns the active section id
  components/
    common/                   # shared UI: SectionWrapper, SectionTitle, Button, Badge
    Navbar/ Hero/ About/ Skills/ Projects/ Education/ Certifications/ Contact/ Footer/
public/
  icons.svg                   # SVG sprite sheet — reference icons via <use href="/icons.svg#id">
```

## Key Conventions

- **Content lives in `src/data/`** — never hardcode portfolio content inside JSX components.
- **`nav.js` is the single source of truth** — `Navbar` iterates `navLinks` for links; `useScrollSpy` uses the same `href` values (strip `#`) as section IDs. Add/remove a section only here.
- **`SectionWrapper`** wraps every section and sets the `id` attribute that makes anchor scrolling work. Always use it for new sections.
- **No per-component CSS files** — styling is done entirely with Tailwind utility classes in JSX.
- Images in `src/assets/images/` are imported as ES modules. SVG icons in `public/` are referenced via the sprite pattern at runtime.
- The React Compiler is intentionally not enabled (see README for how to add it).
