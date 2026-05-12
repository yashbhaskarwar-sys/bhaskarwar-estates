# infra/

**Purpose:** Deployment configuration and infrastructure notes.

This directory holds documentation and configuration references for the technical infrastructure supporting Bhaskarwar Estates' public presence and operational tooling.

## Current Infrastructure

| System | Provider | Notes |
|--------|----------|-------|
| Public site | Vercel | Auto-deploy on push to main |
| Domain | Namecheap | bhaskarwar.co.in |
| DNS | Vercel DNS | A record + CNAME configured |
| SSL | Vercel (automatic) | No manual management required |
| CI | GitHub Actions | Build, lint, type-check on push |
| Region | Vercel `bom1` | Mumbai — appropriate for IN users |

## Key Files (repo root)

- `vercel.json` — Vercel deployment configuration
- `.github/workflows/ci.yml` — CI pipeline
- `DEPLOY.md` — Deployment guide

## Philosophy

- Keep infrastructure minimal and managed
- Prefer Vercel defaults over custom configuration
- No self-hosted infrastructure unless operationally justified
- Document every non-obvious configuration decision
