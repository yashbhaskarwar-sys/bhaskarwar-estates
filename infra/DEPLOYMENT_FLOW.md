# Deployment Flow — Bhaskarwar Estates

> How code moves from local development to production at bhaskarwar.co.in.

---

## Flow Overview

```
Local edit
    ↓
git push to main (or merge PR)
    ↓
GitHub Actions CI
  → lint
  → type-check
  → build
    ↓
Vercel (on CI pass + push to main)
  → install (npm ci)
  → build (npm run build)
  → deploy to bom1 (Mumbai)
    ↓
bhaskarwar.co.in live update
  (typically < 60 seconds from push)
```

---

## Environments

| Environment | Trigger | URL |
|-------------|---------|-----|
| Production | Push to `main` | bhaskarwar.co.in / www.bhaskarwar.co.in |
| Preview | Pull request opened/updated | Auto-generated Vercel preview URL |

---

## Deployment Discipline

1. **Never push directly to main for structural changes.** Use a branch and PR. CI must pass before merge.
2. **Every push to main is a production deployment.** Treat it accordingly.
3. **Preview deploys are free and instant** — use them to verify visual changes before merging to main.
4. **`npm ci` (not `npm install`)** is used for reproducible, lockfile-exact installs. Never change this.
5. **Do not add secrets to the codebase.** Environment variables go in Vercel → Project → Environment Variables only.

---

## Environment Variables

Currently: none required (teaser site has no external dependencies).

When environment variables become necessary:
- Set them in Vercel Project Settings → Environment Variables
- Scope to the appropriate environment (Production / Preview / Development)
- Never commit `.env` files — `.gitignore` already excludes them

---

## Rollback Procedure

Vercel retains all previous deployments. To roll back:

1. Go to Vercel → Project → Deployments
2. Find the last known-good deployment
3. Click the `...` menu → **Promote to Production**

This takes effect in under 60 seconds with no rebuild required.

See `RECOVERY.md` for full rollback and recovery procedures.

---

## Adding a New Domain or Subdomain

1. Vercel → Project → Settings → Domains → Add domain
2. Note the DNS records Vercel requires
3. Add records in Namecheap → Advanced DNS
4. SSL auto-provisions within minutes

Do not add subdomains speculatively. Add them when there is a real operational need.

---

## Monitoring

Currently: no active uptime monitor beyond Vercel's own status.

For future: if site availability becomes operationally critical, add a free uptime monitor (e.g., UptimeRobot) and point alerts to a responsible email.

---

*Last updated: 2026-05-12*
