# Nand Multispeciality Dental Clinic

Basic clinic website for **Nand Multispeciality Dental Clinic**, prepared under EverCodeStudio.

The agreed scope is **Package 1 — Basic Clinic Website** from the quotation dated 24 October 2026. The site is one public page with Home, About, Services, Gallery, and Contact. It does not include the Professional package: separate treatment pages, a dedicated dentist profile page, WhatsApp, live review widgets, Search Console setup, appointment booking, payments, an admin panel, or a CMS.

This repository is a local prototype. Do not connect the clinic’s domain until the clinic has confirmed its public details. Photographs on the page are licensed stock images of dental care, not pictures of this clinic.

## Technology stack

| Tool | Version used |
| --- | --- |
| Next.js | 16.4.3 (Active LTS, includes the 14 October 2026 security patches from 16.4.1) |
| React / React DOM | 19.3.1 |
| TypeScript | 5.9.3, strict mode |
| Tailwind CSS | 4.3.3, with `@tailwindcss/turbopack` 4.3.3 |
| ESLint | 10.13.0 with `eslint-config-next` 16.4.3 |
| Package manager | npm |

Node.js 20.9 or newer is required by Next.js. Use a current LTS release. As of 21 October 2026, the patched LTS lines are Node.js 22.23.4 and 24.22.1. This project was scaffolded on Node.js 24.16.0, which is older than that security release. Upgrade the local runtime before deployment. The app does not patch Node.js itself.

Cache Components and partial prefetching are turned off. This is a static brochure site and does not use `use cache` or Server Actions.

## Setup

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Other commands:

```bash
npm run lint
npm run typecheck
npm run audit
npm run build
npm run start
```

`next build` is not a substitute for `npm run lint` or `npm run typecheck`.

## Folder structure

```text
src/
  app/                 routes, global styles, sitemap, robots, social image
  components/layout/   header, footer, mobile navigation
  components/sections/ homepage sections
  components/ui/       small shared interface pieces
  config/clinic.ts     clinic facts
  lib/                 metadata, link checks, structured data
  types/clinic.ts      types for that configuration
  content/image-sources.ts  source and license notes for stock photographs
public/
  images/dental/       dental-care photographs used in page sections
  images/gallery/      dental-care photographs used in the gallery
  icons/mark.svg       header mark and the source for the favicon
```

## Where to update clinic information

Edit `src/config/clinic.ts` only. Do not put phone numbers, addresses, hours, dentist credentials, services, ratings, or testimonials in components.

Leave a value `null` or an array empty until the clinic confirms it. Empty phone, address, hours, dentist, and service fields are left off the page. They are not filled with sample text. Confirmed services use this shape:

```ts
{
  id: "short-unique-id",
  name: "Name approved by the clinic",
  description: "One or two factual sentences approved by the clinic.",
}
```

A verified rating, when the clinic supplies the numbers and the source, looks like this:

```ts
rating: {
  value: 4.8,
  reviewCount: 120,
  source: "Google Business Profile",
}
```

Do not type a rating from memory. DentalClinic structured data is generated only after a phone number and a street address are present, and it includes a rating only when `rating` passes the same checks as the reviews section. Opening hours are shown on the page and are not copied into structured data, because the free-text hours are not converted into schema times automatically.

`indexing.enabled` stays `false` until the real domain is in `siteUrl` and that indexing switch is turned on deliberately. Until then, pages send `noindex` and `robots.txt` disallows crawling. `siteUrl` must be an `https` origin with no path, for example `https://example.com`. The canonical URL is set from that origin and is omitted while it is null.

A local `npm run build` warns that social images fall back to `http://localhost:3000` while `siteUrl` is empty. That fallback is only for the machine where the build ran. On Vercel, Next.js uses the deployment host for those image URLs until `siteUrl` replaces it. Do not invent a domain to silence the warning.

## Images

The photographs in `public/images/dental/` and `public/images/gallery/` are Pexels stock images. They are not photographs of this clinic or its dentist. The page says so beside the pictures. Source pages, photographers, and the license are listed in `src/content/image-sources.ts`.

To replace a stock photograph with one supplied by the clinic:

1. Save a `.jpg`, `.png`, or `.webp` file under `public/images/`.
2. Update the matching item in `clinic.heroImage`, `clinic.aboutImage`, `clinic.servicesImage`, or `clinic.gallery`.
3. Set `src`, `alt`, `width`, and `height`.
4. Remove the stock-photo caption for that picture only when it really shows this clinic.
5. Update `src/content/image-sources.ts`.

`alt` should describe the actual photograph. Remote image hosts are not allowed. SVG files are served directly and are not passed through Next.js image optimization.

The header mark is `public/icons/mark.svg`. The favicon is `src/app/icon.svg`. The mark is a simple wordmark device, not an official clinic logo. Update both files if the mark changes.

## Google links

`googleReviewsUrl` currently holds the supplied profile link:

`https://share.google/ALv6DJhtud0ik8I9A`

A direct request did not resolve that short link to a public Maps place, so it is labeled as the supplied profile link. It is not used as a directions URL and it does not provide a star rating. Replace it with the permanent Google reviews URL when the clinic confirms one.

`googleMapsUrl` is empty. Set it to an `https` Google Maps directions URL after the address is confirmed. Allowed hosts are `share.google`, `google.com`, `www.google.com`, `maps.google.com`, `maps.app.goo.gl`, `g.page`, and `goo.gl`.

## Security and quality checks

Reviewed on 24 October 2026, before installation:

- [Next.js blog](https://nextjs.org/blog) and the [14 October 2026 security update](https://nextjs.org/blog/nextjs-security-update-october-14-2026)
- [Next.js support policy](https://nextjs.org/support-policy): 16.x is Active LTS
- GitHub advisories GHSA-673q-mjm6-r5xr, GHSA-2464-fhr4-w9xw, and GHSA-p3m5-59mp-jv5r, patched in Next.js 16.4.1
- React advisories GHSA-xqc2-xf4c-x3h3 and GHSA-h3gv-c5rc-p453, patched in `react-server-dom-*` 19.3.1
- npm `latest` for `next` was 16.4.3, a stable bug-fix release after 16.4.1. Canary, beta, and release-candidate tags were not installed.

The installed `next` package vendors a React Server Components build whose version string is `19.3.0-canary-278794d7-20261002`. The October advisories name Next.js 16.4.1 as the patched package. That version string was not treated as proof of the patch. The site does not enable Cache Components, `use cache`, or Server Actions. `sharp` 0.35.5 satisfies the image-optimizer workaround, and SVG optimization is not enabled.

The Content Security Policy allows `'unsafe-inline'` for scripts and styles so the static App Router page can keep its bootstrap snippets and font styles. A nonce policy would make the page dynamic on every request. `'unsafe-eval'` is added only in development. `upgrade-insecure-requests` is not set, because Vercel already redirects HTTP to HTTPS and that directive breaks a local production server on `http://localhost`. There is no contact form, API route, server action, secret, or remote image host.

This is not a claim that the application is free of vulnerabilities. Remaining items:

- Upgrade the local Node.js runtime to 24.22.1 or 22.23.4. The October 2026 Node.js security release is not applied by this repository.
- The CSP still allows inline scripts, so a future injection bug would not be fully blocked.
- Dependency risk remains if packages are upgraded without reading the audit output.
- The Google share link is unverified.
- HSTS is sent in production without preload. Add preload only after the real domain is confirmed.

Run `npm run lint`, `npm run typecheck`, `npm run audit`, and `npm run build` before a demo deploy. Do not hide a failing check with a broad lint or TypeScript suppression.

No `.env` file is required. Do not commit secrets.

## Deploy to Vercel

1. Initialize git when you are ready and commit `package-lock.json` with the source.
2. Import the repository in Vercel. The framework preset is Next.js. No environment variables are required.
3. Use Node.js 22.x or 24.x on Vercel, on a release that includes the October 2026 security fixes.
4. Review the preview URL before attaching the clinic domain.
5. After the domain and clinic facts are confirmed, set `siteUrl` and `indexing.enabled` in `src/config/clinic.ts`, then redeploy.

Do not point the clinic’s live domain at this prototype until the clinic has confirmed the public details that are still missing.
