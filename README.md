# typicaladrian.dev

Personal portfolio for Adrian Rodriguez. One static page built with [Astro](https://astro.build), hosted on Render.

## Edit content

Everything on the page comes from [`src/data/site.ts`](src/data/site.ts): the header, Now / Previously, certifications, toolkit and project cards.

- Headshot: `src/assets/headshot.jpg`
- Scheduler screenshot: `src/assets/scheduler.png` (remove it and the card falls back to no image)
- Résumé: `public/Adrian_Rodriguez_Resume.pdf`. Replace the file and keep the name so the link stays stable.

## Run locally

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
```

## Deploy (Render + Porkbun)

1. Push this repo to GitHub.
2. In Render: **New → Blueprint**, pick the repo. `render.yaml` creates a free Static Site that builds with `npm ci && npm run build` and serves `dist/`, with `typicaladrian.dev` and `www.typicaladrian.dev` as custom domains.
3. In Porkbun → **typicaladrian.dev → DNS**, leave the existing `aischeduler` record alone and add the records the Render **Custom Domains** panel shows. Typically:
   - `ALIAS` record, host blank (apex), answer `<service>.onrender.com`. Or an `A` record to `216.24.57.1` if Render shows that instead.
   - `CNAME` record, host `www`, answer `<service>.onrender.com`.
   - Delete any Porkbun default parking `A`/`ALIAS`/`CNAME` records for the apex or `www` first, and any `AAAA` record on the apex.
4. Click **Verify** in Render. HTTPS certificates are issued automatically once DNS resolves.

Every push to `main` redeploys.
