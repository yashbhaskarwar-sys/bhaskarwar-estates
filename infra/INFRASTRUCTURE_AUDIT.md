# Infrastructure Audit — Bhaskarwar Estates

> Audit conducted: 2026-05-12 (Phase 2 — Infrastructure Locking)

---

## Domain & DNS

| Item | Value | Status |
|------|-------|--------|
| Primary domain | bhaskarwar.co.in | ✅ Active |
| Canonical (www) | www.bhaskarwar.co.in | ✅ Active |
| Apex → www redirect | 307 (Vercel-managed) | ✅ Correct |
| DNS provider | Namecheap (dns1/dns2.registrar-servers.com) | ✅ Stable |
| Apex A record | 216.198.79.1 (Vercel Anycast) | ✅ Correct |
| www CNAME | cname.vercel-dns.com | ✅ Correct |
| MX records | Namecheap email forwarding (eforward1–5) | ✅ Present |
| SPF record | `v=spf1 include:spf.efwd.registrar-servers.com ~all` | ✅ Present |
| DMARC record | None | ⚠️ Missing — see risks |

**Cloudflare:** Not configured. DNS runs through Namecheap nameservers directly to Vercel. This is intentional and appropriate for the current scale. Vercel's edge network provides CDN, DDoS mitigation, and global distribution without Cloudflare overhead.

---

## SSL / TLS

| Item | Value | Status |
|------|-------|--------|
| Certificate provider | Vercel (Let's Encrypt) | ✅ Auto-managed |
| HSTS | `max-age=63072000` (2 years) | ✅ Strong |
| Protocol | HTTP/2 | ✅ |
| Forced HTTPS | Yes — Vercel enforces | ✅ |

---

## Deployment

| Item | Value | Status |
|------|-------|--------|
| Platform | Vercel | ✅ |
| Region | bom1 (Mumbai) | ✅ Correct for IN |
| Build command | `npm run build` | ✅ |
| Install command | `npm ci` | ✅ Reproducible |
| Output | `.next` | ✅ |
| Auto-deploy trigger | Push to `main` branch | ✅ |
| Preview deploys | On pull request | ✅ |
| Framework detection | Next.js (auto) | ✅ |

---

## Security Headers (Production Verified)

All headers confirmed present in live production response:

| Header | Value | Status |
|--------|-------|--------|
| `X-Frame-Options` | DENY | ✅ |
| `X-Content-Type-Options` | nosniff | ✅ |
| `Referrer-Policy` | strict-origin-when-cross-origin | ✅ |
| `Permissions-Policy` | camera, microphone, geolocation disabled | ✅ |
| `X-DNS-Prefetch-Control` | on | ✅ |
| `Content-Security-Policy` | Scoped to self + Google Fonts | ✅ |
| `Strict-Transport-Security` | max-age=63072000 (Vercel) | ✅ |
| `access-control-allow-origin` | `*` (Vercel default for static) | ℹ️ Acceptable |

---

## CI Pipeline

| Item | Value | Status |
|------|-------|--------|
| CI provider | GitHub Actions | ✅ |
| Triggers | push/PR to main | ✅ |
| Node version | 24 | ✅ |
| Steps | lint → type-check → build | ✅ |
| Cache | npm cache enabled | ✅ |

---

## Risks Identified

| Risk | Severity | Recommendation |
|------|----------|----------------|
| No DMARC record | Medium | Add `_dmarc.bhaskarwar.co.in TXT "v=DMARC1; p=reject; adkim=s; aspf=s"` — prevents domain spoofing in email |
| CSP `unsafe-inline` for scripts | Low | Required by Next.js hydration in production; acceptable trade-off |
| No uptime monitoring | Low | Consider a free uptime monitor (UptimeRobot or similar) once site goes beyond teaser phase |

---

## Cleanup Actions Taken (Phase 2)

- Removed deprecated `interest-cohort=()` from `Permissions-Policy` header (FLoC is dead; the directive is a no-op but better removed for clarity)
- Removed "Happy Birthday" personal message from public HeroSection; replaced with "Wani · Maharashtra" location mark
- Created `infra/` governance documentation

---

*Audit by: Claude Code — 2026-05-12*
*Next audit recommended: prior to Phase 2 tenant or parcel activation*
