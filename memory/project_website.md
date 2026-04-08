---
name: Shield Fencing Website Project
description: Next.js website built at /website — stack, structure, and deployment notes
type: project
---

New website built with Next.js 15 + Tailwind CSS, replacing WordPress/Elementor.

**Why:** Elementor had aesthetic limitations, site was hard to navigate, poor photo display, no blog.

**Stack:** Next.js 15 (App Router), TypeScript, Tailwind CSS, Inter font, Resend for email.

**Deployment target:** Vercel (point shieldfencing.com.au DNS from GoDaddy to Vercel).

**How to apply:** When making changes to the website, work in `/Users/shieldfencing/SF/shield-fencing-ai/website/src/`.

**Key files:**
- Brand colours in `tailwind.config.ts`: `#130314` (dark), `#db0695` (magenta)
- Reviews data: `src/lib/reviews.ts`
- Blog posts: `src/posts/*.md` (add new .md files here)
- Multi-step form: `src/components/QuoteForm.tsx`
- Email API: `src/app/api/enquiry/route.ts` — needs `RESEND_API_KEY` in `.env.local`

**To add new blog posts:** Create a new `.md` file in `src/posts/` with frontmatter: title, date, excerpt, category, readTime.

**To deploy:** `npm run build` then push to GitHub and connect to Vercel. Set `RESEND_API_KEY` in Vercel environment variables.
