# Security Baseline — Bhaskarwar Estates

> Minimum security posture for the public site and operational infrastructure.
> Verified against live production: 2026-05-12.

---

## HTTP Security Headers (Production — Verified)

All headers are set in `next.config.ts` and confirmed present in live response headers.

| Header | Current Value | Requirement |
|--------|--------------|-------------|
| `X-Frame-Options` | `DENY` | ✅ Required — prevents clickjacking |
| `X-Content-Type-Options` | `nosniff` | ✅ Required — prevents MIME sniffing |
| `Referrer-Policy` | `strict-origin-when-cross-origin` | ✅ Required |
| `Permissions-Policy` | camera, mic, geolocation disabled | ✅ Required |
| `Content-Security-Policy` | Scoped (see detail below) | ✅ Required |
| `Strict-Transport-Security` | `max-age=63072000` | ✅ Vercel-provided, 2yr |
| `X-DNS-Prefetch-Control` | `on` | ✅ |

### CSP Detail

```
default-src 'self'
script-src 'self' 'unsafe-inline'       ← Next.js hydration requirement
style-src 'self' 'unsafe-inline' https://fonts.googleapis.com
font-src 'self' https://fonts.gstatic.com
img-src 'self' data: blob:
connect-src 'self'
frame-ancestors 'none'
base-uri 'self'
form-action 'self'
```

`unsafe-inline` for scripts is required by Next.js for client-side hydration. This is an accepted trade-off for a Next.js app — it cannot be removed without switching to a fundamentally different rendering model.

---

## DNS Security

| Item | Status | Notes |
|------|--------|-------|
| SPF | ✅ Present | `v=spf1 include:spf.efwd.registrar-servers.com ~all` |
| DMARC | ⚠️ Missing | **Action required** — see DNS_STRUCTURE.md |
| DNSSEC | Not configured | Optional for this phase |

**Priority action:** Add DMARC TXT record at `_dmarc.bhaskarwar.co.in`.

---

## Repository Security

| Item | Status |
|------|--------|
| `.env*` files in `.gitignore` | ✅ |
| No secrets in codebase | ✅ (verified — no API keys, tokens, or credentials) |
| Vercel project.json committed | ✅ (contains only project/org ID — safe) |
| `settings.local.json` in `.gitignore` | ✅ |
| Dependency lock file (`package-lock.json`) | ✅ Committed |
| `npm ci` used in CI and Vercel | ✅ Reproducible installs |

---

## Access Control

| System | Access Discipline |
|--------|-------------------|
| GitHub | Only authorised maintainers should have write access to `main` |
| Vercel | Linked to GitHub — access follows GitHub team membership |
| Namecheap | Domain registrar access is critical — use 2FA, store credentials securely |

**Namecheap 2FA:** If not already enabled, enable it. A compromised domain registrar account is the highest-severity risk for this infrastructure.

---

## What Is NOT in Scope (and should remain out)

- No user authentication system — none needed for a teaser site
- No database — no data to protect
- No payment processing — not applicable
- No third-party analytics — not installed (no tracking pixels, no GA, no Segment)
- No cookie consent — no cookies set (no analytics, no session)

**Keeping scope narrow is itself a security posture.**

---

## Baseline Review Triggers

Review this document and revalidate production headers when:
- Any change is made to `next.config.ts`
- A new third-party service is added (fonts, analytics, etc.)
- CSP is modified for any reason
- The site moves beyond a teaser to a functional product

---

*Last verified: 2026-05-12*
*Verification method: `curl -sI https://www.bhaskarwar.co.in`*
