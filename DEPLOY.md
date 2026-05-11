# Deployment Guide — Bhaskarwar Estates

## Step 1 — Push to GitHub

```bash
# One-time: create a new GitHub repo (call it "bhaskarwar-estates")
# Then connect your local repo to it:
git remote add origin https://github.com/YOUR_USERNAME/bhaskarwar-estates.git
git branch -M main
git push -u origin main
```

---

## Step 2 — Deploy to Vercel

1. Go to **vercel.com** → **Add New Project**
2. Import the `bhaskarwar-estates` GitHub repository
3. Vercel auto-detects Next.js — no config changes needed
4. Click **Deploy**

Your site will be live at `bhaskarwar-estates.vercel.app` within ~60 seconds.

---

## Step 3 — Connect bhaskarwar.co.in (Namecheap)

### In Vercel:
1. Go to your project → **Settings** → **Domains**
2. Add: `bhaskarwar.co.in`
3. Also add: `www.bhaskarwar.co.in`
4. Vercel will show you DNS records to set

### In Namecheap:
1. Log in → **Domain List** → `bhaskarwar.co.in` → **Manage**
2. Go to **Advanced DNS** tab
3. Delete any existing A records or CNAME for `@` and `www`
4. Add these records:

| Type  | Host | Value                    | TTL  |
|-------|------|--------------------------|------|
| A     | @    | 216.198.79.1             | Auto |
| CNAME | www  | cname.vercel-dns.com     | Auto |

> Vercel's IP: `216.198.79.1` (Anycast IP — confirmed live from DNS audit May 2026)

5. Save changes — DNS propagates in 5–30 minutes
6. Vercel auto-provisions your SSL certificate (HTTPS) at no cost

---

## Step 4 — Verify

Once DNS propagates:
- `https://bhaskarwar.co.in` → 307 redirects to www (Vercel canonical)
- `https://www.bhaskarwar.co.in` → live site (primary)

---

## Future deployments

Every `git push` to `main` triggers an automatic Vercel redeploy.
Preview deployments are created for every pull request.

---

## Environment Variables (when needed later)

Set in Vercel → Project → Settings → Environment Variables.
Never commit `.env.local` to git.
