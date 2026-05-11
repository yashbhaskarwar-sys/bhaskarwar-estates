# Infrastructure Phase 2 Summary — Bhaskarwar Estates

> Infrastructure Locking phase executed: 2026-05-12

---

## Infra Audit Findings

### Domain & DNS

- **bhaskarwar.co.in** resolves correctly to Vercel (216.198.79.1 Anycast)
- **www.bhaskarwar.co.in** via CNAME to cname.vercel-dns.com — correct
- Apex to www redirect: 307 — correct Vercel canonical behaviour
- DNS provider: Namecheap nameservers — stable, no Cloudflare (intentional)
- SPF record present and correct for Namecheap email forwarding
- **DMARC record: MISSING** — highest-priority DNS action remaining

### Cloudflare

Not configured. Assessment: **not required for this phase.** Vercel's edge network provides CDN, DDoS mitigation, and global distribution. Adding Cloudflare would introduce proxy complexity without meaningful benefit for a static teaser site. Documented in `DNS_STRUCTURE.md` with guidance for future consideration.

### SSL / TLS

- HTTPS enforced by Vercel
- HSTS: `max-age=63072000` (2 years) — strong
- HTTP/2: confirmed
- Certificates: Let's Encrypt via Vercel auto-management — no action required

### Deployment Health

- Auto-deploy on push to `main`: confirmed active
- CI pipeline (lint → type-check → build) on GitHub Actions: confirmed
- Vercel region: bom1 (Mumbai) — correct for India
- Build method: `npm ci` — reproducible, correct

---

## Deployment Findings

- Deployment pipeline is clean and functional
- No broken environment variables (none needed at this stage)
- CI enforces lint + type-check + build before merge gate — correct discipline
- Preview deployments active on PRs — enables safe visual review before production

---

## Security Findings

### Headers (Production Verified)

All seven required security headers confirmed present in live production response:
`X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`, `Content-Security-Policy`, `Strict-Transport-Security`, `X-DNS-Prefetch-Control`.

CSP is appropriately scoped — no unnecessary external origins permitted.

### Repository

- No secrets, tokens, or credentials found in codebase
- `.env*` correctly gitignored
- `package-lock.json` committed — reproducible installs
- `npm ci` used in both CI and Vercel — correct

### Identified Issues

| Issue | Severity | Status |
|-------|----------|--------|
| No DMARC record | Medium | ⚠️ Action required (DNS change — outside repo) |
| `interest-cohort=()` deprecated directive | Low | ✅ Removed |

---

## Cleanup Actions Taken

| Action | File |
|--------|------|
| Removed "Happy Birthday" from HeroSection | `src/components/HeroSection.tsx` |
| Replaced with "Wani · Maharashtra" location mark | `src/components/HeroSection.tsx` |
| Removed deprecated `interest-cohort=()` from Permissions-Policy | `next.config.ts` |
| Created `infra/INFRASTRUCTURE_AUDIT.md` | New file |
| Created `infra/DEPLOYMENT_FLOW.md` | New file |
| Created `infra/DNS_STRUCTURE.md` | New file |
| Created `infra/RECOVERY.md` | New file |
| Created `infra/SECURITY_BASELINE.md` | New file |

---

## Risks Identified

| Risk | Severity | Action |
|------|----------|--------|
| No DMARC record | Medium | Add `_dmarc.bhaskarwar.co.in TXT "v=DMARC1; p=reject; adkim=s; aspf=s"` in Namecheap DNS |
| No uptime monitoring | Low | Consider UptimeRobot free tier when site moves past teaser phase |
| Namecheap 2FA status unknown | Medium | Verify 2FA is enabled on Namecheap account — domain registrar compromise is highest-severity risk |
| CSP `unsafe-inline` for scripts | Low | Required by Next.js; accepted trade-off; documented |

---

## Recommended Future Sequence

1. **Immediate (DNS — 5 minutes):** Add DMARC TXT record at `_dmarc.bhaskarwar.co.in` in Namecheap Advanced DNS. See `DNS_STRUCTURE.md` for exact value.
2. **Immediate (Account security):** Verify Namecheap 2FA is active.
3. **Phase 3 (Operational):** Begin parcel documentation in `parcels/`. Write `core/GOVERNANCE.md`.
4. **When site evolves beyond teaser:** Review CSP and security headers against new functionality. Add uptime monitoring.
5. **If email at bhaskarwar.co.in is used:** Verify SPF alignment and add DKIM once an email provider is chosen.

---

*Phase 2 executed by: Claude Code (claude-sonnet-4-6)*
*Date: 2026-05-12*
