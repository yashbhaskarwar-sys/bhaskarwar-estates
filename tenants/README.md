# tenants/

**Purpose:** Tenant files and pipeline.

This directory holds documentation for every tenant — active, prospective, or past.

## Structure

Each tenant gets its own subdirectory:

```
tenants/
  TENANT-001/
    profile.md        — tenant overview, business type, contact
    agreement.md      — lease terms summary (not the full legal document)
    correspondence/   — key correspondence notes
    notes.md          — operational notes
```

## What Goes Here

- Tenant profiles
- Lease term summaries
- Correspondence records
- Tenant status notes
- Renewal and negotiation notes

## What Does NOT Go Here

- Full legal agreements — store originals in secure physical filing; note their location in `agreement.md`
- Financial records → `operations/`

## Status Tags

Use these in `profile.md`:

- `active` — lease signed, premises occupied
- `negotiating` — in active discussions
- `prospective` — identified, not yet in discussion
- `former` — lease ended
