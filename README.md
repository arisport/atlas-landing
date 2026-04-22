# atlas-landing

Marketing website for [myatlas.fit](https://myatlas.fit). Built with [Astro](https://astro.build/) — zero JS by default, islands for interactive components.

## Setup

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
npm run preview  # preview production build
```

## Project structure

```
src/
├── layouts/
│   └── Layout.astro              # Base HTML, fonts, OG tags, pixel stubs
├── pages/
│   ├── index.astro               # Main landing page
│   └── download.astro            # iOS/Android smart redirect
├── components/
│   ├── Navbar.astro              # Sticky nav, hamburger mobile menu
│   ├── Hero.astro                # Headline + phone mockup placeholder
│   ├── PersonaSwitcher.astro     # 4 tabs with keyboard nav (JS island)
│   ├── FeatureShowcase.astro     # 3 alternating GIF placeholders
│   ├── FoundingPartner.astro     # Comparison table + application form
│   ├── ComingSoon.astro          # "What's next" section
│   └── Footer.astro              # Store badges, links
└── styles/
    └── global.css                # Design tokens as CSS variables
public/
├── favicon.svg
└── images/                       # Screenshots, GIFs (add during asset session)
```

## Application form → API

The founding partner form POSTs to `https://api.myatlas.fit/api/v1/onboarding/apply/`.

| Form label | API field | Value |
|---|---|---|
| Name | `contact_name` | text |
| Email | `email` | email |
| Phone | `phone_number` | tel |
| Gym / practice name | `gym_name` | text |
| Type dropdown | `gym_type` | `gym` / `personal_trainer` / `physiotherapist` / `other` |
| Tell us about your gym | `message` | textarea (optional) |

**Responses:** 201 success, 409 duplicate/already registered, 400 validation error.

## Deployment

Target: **Cloudflare Pages** at `myatlas.fit`.

- Build command: `npm run build`
- Output directory: `dist`
- Node version: 20+

## Pending before launch

- [ ] Replace Meta Pixel + TikTok Pixel `YOUR_PIXEL_ID` placeholders in `Layout.astro`
- [ ] Replace App Store / Google Play placeholder URLs in `Footer.astro` and `download.astro`
- [ ] GIF recording session — record 3 flows, replace placeholder divs
- [ ] Screenshots — replace phone mockup and persona tab placeholders
- [ ] Deploy to Cloudflare Pages, configure DNS
- [ ] Add `https://myatlas.fit` to `CORS_ORIGINS` env var on Render

## Design reference

- Decisions doc: `atlas/docs/marketing/landing-page-decisions.md`
- Design tokens: `atlas/design-tokens.json`
- Brand: Plus Jakarta Sans, Navy (#1B2A4A), Coral (#E8734A), Teal (#4ECDC4)
