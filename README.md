# Trendmark Landing

Premium, responsive pre-launch marketing site built with **React 19, TypeScript, Vite, and Emotion**.

## Development

```bash
npm install
npm run dev
npm run typecheck
npm run build
npm run preview
```

## Architecture

```text
src/
  pages/              # page composition, no feature business logic
  sections/           # isolated landing sections (Hero, Platform, Workflow, UseCases, FAQ, Contact)
  features/           # interactive/feature-bound components and fixture data
    navigation/
    market-preview/
    contact/
  shared/
    ui/               # reusable primitives (Button, Container, Reveal, SectionHeading)
    hooks/            # generic reusable hooks
    styles/           # Emotion theme, global reset, and Theme typing
    config/           # navigation and email constants
```

**Conventions:** Section folders own their content and layout. Feature-specific data remains within the corresponding feature. Generic components are kept minimal and shared only after they are genuinely reused. All presentation styling lives in Emotion (no CSS file). Data displayed in visualizations is illustrative sample data; no live search API is connected. Contact and early access link to `matteematics@gmail.com` via `mailto:`.

## Deploy

Import this repository to Vercel using the **Vite** framework preset. Build command: `npm run build`, output: `dist`. No environment variables are required.

## Limitations

The landing page is not yet backed by a live API or sign-up system. Verify the site using `npm run build` and browser testing before production launch.
