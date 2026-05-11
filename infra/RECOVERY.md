# Recovery Procedures — Bhaskarwar Estates

> What to do when something breaks. Calm, ordered, step-by-step.

---

## Philosophy

Most failures in this infrastructure are recoverable within minutes via Vercel's rollback feature. The primary risk is DNS misconfiguration, which can take up to 48 hours to propagate. Prevent this by following the DNS discipline in `DNS_STRUCTURE.md`.

---

## Scenario 1 — Bad Deployment (Site Down or Broken)

**Symptoms:** Site returns error, blank page, or broken UI after a push to main.

**Recovery:**

1. Go to [vercel.com](https://vercel.com) → Project: `bhaskarwar-estates`
2. Click **Deployments**
3. Find the last deployment marked ✅ (green, Ready)
4. Click `...` → **Promote to Production**
5. Confirm — site is restored in under 60 seconds

**Do not** try to hotfix and re-push under pressure. Rollback first, then diagnose calmly in a branch.

---

## Scenario 2 — DNS Misconfiguration (Site Unreachable)

**Symptoms:** bhaskarwar.co.in not resolving or returning wrong content after a DNS change.

**Recovery:**

1. Log in to Namecheap → Domain List → bhaskarwar.co.in → Advanced DNS
2. Verify records match exactly what is documented in `DNS_STRUCTURE.md`
3. Restore any incorrect records
4. DNS propagation: 5–30 minutes for most resolvers; up to 48h in worst case

**Prevention:** Never make DNS changes in haste. Always have `DNS_STRUCTURE.md` open as reference before touching any record.

---

## Scenario 3 — SSL Certificate Issue

**Symptoms:** Browser shows SSL warning on bhaskarwar.co.in.

**Recovery:**

1. Verify DNS records are correct (Vercel requires them to provision SSL)
2. Go to Vercel → Project → Settings → Domains
3. Click **Refresh** or **Renew** next to the affected domain
4. Vercel auto-provisions via Let's Encrypt — allow 5–10 minutes

If DNS is correct and SSL still fails: contact Vercel support.

---

## Scenario 4 — Build Failure (Deployment Stuck)

**Symptoms:** GitHub Actions CI failing, or Vercel deployment shows error.

**Recovery:**

1. Check GitHub Actions log for the failing step (lint, type-check, or build)
2. Fix the issue in a branch
3. Open a PR — preview deploy will confirm the fix
4. Merge to main once CI passes

**Do not** merge a branch with a failing CI. The pre-merge gate exists for this reason.

---

## Scenario 5 — Repository Access Lost

**Symptoms:** Unable to access GitHub repository.

**Recovery:**

1. GitHub account recovery: use backup codes or account recovery flow
2. Vercel is linked to GitHub — repository access restores Vercel automatically
3. Local development can continue from local clone even without GitHub access
4. Vercel continues to serve the last deployed build even without repository access

---

## Emergency Contacts

| System | Contact / Resource |
|--------|--------------------|
| Vercel status | status.vercel.com |
| Namecheap support | namecheap.com/support |
| GitHub status | githubstatus.com |

---

## What Is NOT a Recovery Scenario

- Normal code changes → use standard deployment flow
- Design changes → branch + PR + preview deploy + merge
- DNS improvements → plan carefully, document in DECISIONS.md, execute off-peak

---

*Last updated: 2026-05-12*
