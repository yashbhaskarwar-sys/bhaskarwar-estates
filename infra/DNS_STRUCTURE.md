# DNS Structure — Bhaskarwar Estates

> Current DNS configuration for bhaskarwar.co.in. Verified 2026-05-12.

---

## DNS Provider

**Namecheap** — nameservers: `dns1.registrar-servers.com`, `dns2.registrar-servers.com`

Cloudflare is NOT in use. DNS resolves directly from Namecheap to Vercel's infrastructure. This is intentional — Vercel's edge network provides CDN and DDoS resilience without the added complexity of a Cloudflare proxy layer for a static teaser site.

---

## Current Records

| Type | Host | Value | Purpose |
|------|------|-------|---------|
| A | @ | 216.198.79.1 | Apex → Vercel Anycast IP |
| CNAME | www | cname.vercel-dns.com | www → Vercel |
| MX | @ | eforward1–5.registrar-servers.com | Namecheap email forwarding |
| TXT | @ | `v=spf1 include:spf.efwd.registrar-servers.com ~all` | Email SPF |

---

## Missing Records (Recommended)

### DMARC

No DMARC record currently exists. This means the domain is vulnerable to email spoofing — bad actors can send email appearing to come from @bhaskarwar.co.in.

**Recommended action (Namecheap → Advanced DNS → Add TXT record):**

| Type | Host | Value |
|------|------|-------|
| TXT | _dmarc | `v=DMARC1; p=reject; adkim=s; aspf=s; rua=mailto:admin@bhaskarwar.co.in` |

`p=reject` instructs mail servers to reject any email that fails SPF/DKIM — the strongest protection.
Adjust `rua` to a monitored mailbox if email reporting is desired.

---

## Redirect Behaviour

- `http://bhaskarwar.co.in` → `https://bhaskarwar.co.in` (Vercel enforces HTTPS)
- `https://bhaskarwar.co.in` → `https://www.bhaskarwar.co.in` (307 redirect, Vercel canonical)
- `https://www.bhaskarwar.co.in` → Site (200 OK)

---

## Cloudflare — Position

Cloudflare is not configured and is not recommended for this phase.

**Reasons:**
- Vercel already provides edge CDN, DDoS mitigation, and global distribution
- Adding Cloudflare introduces orange-cloud proxying complexity
- SSL certificate management becomes more complex with CF in front of Vercel
- Cloudflare free tier adds latency overhead on small sites with single-region routing

**If Cloudflare is added in future:** Use DNS-only mode (grey cloud) to preserve Vercel's direct CDN benefits, rather than proxied mode. Document the decision in DECISIONS.md before proceeding.

---

## TTLs

All records should use Namecheap's default "Auto" TTL (~1800 seconds). Do not set very short TTLs unless a DNS migration is actively in progress — short TTLs increase DNS query load and offer no benefit in a stable configuration.

---

*Last verified: 2026-05-12*
*Next review: when any DNS change is made, or annually*
