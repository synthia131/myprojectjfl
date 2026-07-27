# CompanionRank — AI companion app review/affiliate site

## What's here
- `lib/tools.js` — **edit this first.** One object per tool: name, price, pros/cons, your
  affiliate link. Every page (homepage ranking, comparison table, individual reviews) pulls
  from this single file.
- `app/` — Next.js pages (homepage, /compare, /reviews/[slug], /blog, /legal/*)
- `components/TrustScore.jsx` — the privacy/features/value meter used throughout

## Before you launch
1. Fill in real tool names, pricing, and your affiliate links in `lib/tools.js`.
2. Replace the placeholder text in `app/legal/privacy`, `/terms`, `/disclosure` — the
   disclosure page especially matters, it's an FTC requirement for affiliate sites.
3. Write real pros/cons based on actually trying each tool (or at least their public reviews).

## Running locally
You'll need Node.js installed (v18+).

```bash
npm install
npm run dev
```

Then open http://localhost:3000

## Deploying (free)
1. Push this folder to a GitHub repo (create one on github.com, then
   `git init && git add . && git commit -m "init" && git remote add origin <your-repo-url> && git push -u origin main`)
2. Go to https://vercel.com, sign up (free), click "Add New Project," import your GitHub repo
3. Vercel auto-detects Next.js — just click Deploy
4. Buy a domain (Namecheap or Porkbun) and add it in Vercel's project settings → Domains

Every time you push to GitHub, Vercel redeploys automatically.

## Adding a CMS later (optional)
If you'd rather write reviews/blog posts in a UI instead of editing code, look at Sanity.io
(free tier) — you'd swap `lib/tools.js` for a Sanity query. Ask Claude for help wiring this up
once you're ready.
