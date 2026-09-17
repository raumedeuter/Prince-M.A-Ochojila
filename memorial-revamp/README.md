# Prince Michael Adakole Ochojila — Memorial Site (Revamp)

React + Tailwind CSS v4 rebuild of the original memorial site.

## Running locally

```bash
npm install
npm run dev
```

Then open the URL it prints (usually http://localhost:5173).

## What's in this version so far

- Home page (hero, biography preview, gallery preview, memory wall CTA)
- Biography page (chaptered, with a scroll-spy nav — sticky sidebar on
  desktop, horizontal pill scroller on mobile)
- Shared Header (with working mobile menu) and Footer
- Routing set up with React Router — Gallery, Memory Wall, Condolences,
  and Credits pages are linked in the nav but not built yet. Clicking
  them will currently go nowhere until those pages are added in the
  next steps.

## Structure

```
src/
  components/   Header, Footer, Layout
  pages/        One file per route (Home so far)
  index.css     Tailwind + theme tokens (palette, fonts)
public/
  images/       All original photos, carried over
  audio/        Memorial playlist tracks, carried over
```

## Design tokens

Defined in `src/index.css` under `@theme`:
- `ivory` `#F4EFE6` — background
- `ink` `#1A1512` — text
- `oxblood` / `oxblood-dark` `#7C1D1D` / `#5E1515` — primary accent
- `gold` `#B08D3E` — sparing detail accent
- Fonts: Fraunces (display/headings), Inter (body)
