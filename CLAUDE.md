# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

A single-page marketing site for Elo Sun Yoga, a yoga instructor. Built with React 19 + Vite, plain CSS (no framework), GSAP for animations, and EmailJS for the contact form (no backend). Deployed on Vercel (`vercel.json` rewrites all paths to `index.html` for client-side routing).

## Commands

- `npm run dev` — start the Vite dev server
- `npm run build` — production build
- `npm run preview` — preview the production build locally
- `npm run lint` — run ESLint over the project

There is no test suite configured.

## Architecture

- Routing is minimal (`src/App.jsx`, react-router-dom): `/` renders `ConstructionPage`, and the real marketing site lives behind `/test` as `Home`. The site is currently in a "coming soon" state — when asked to work on "the site" content-wise, check whether the change belongs on the live `ConstructionPage` or the full `Home` page behind `/test`.
- `Home` (`src/Page/Home/Home.jsx`) is a single long page composed of section components rendered in order inside `<main>`: `Navbar`, `Hero`, `About`, `Yoga`, `Pricing`, `Contact`. There's no nested routing within the page — navigation is scroll-to-section (see `Navbar`).
- Each page/section lives in its own folder under `src/Page/<Name>/` with a co-located `.jsx` and `.css` file of the same base name (e.g. `Page/Princing/Pricing.jsx` + `Pricing.css`). Note the `Princing` folder name is a typo but the exported component/file is `Pricing` — don't "fix" the folder name without checking all imports.
- Shared components (currently just `Navbar`) live under `src/components/<Name>/` with the same co-located CSS pattern.
- Styling is plain CSS per component, imported directly into the component file. There's no shared design-token file or CSS-in-JS — check sibling `.css` files for existing class naming conventions before adding new styles.
- The contact form (`src/Page/Contact/Contact.jsx`) submits directly to EmailJS from the client using hardcoded service/template/public IDs (no env vars, no server). Treat this as intentional for this project's scale — don't introduce a backend unless asked.
- Static assets (images used in content) are in `public/`; a few build-time imported assets are in `src/assets/`.
