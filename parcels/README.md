# parcels/

**Purpose:** Land and parcel records.

This directory holds documentation for every parcel of land associated with Bhaskarwar Estates — owned, leased, under negotiation, or under consideration.

## Structure

Each parcel gets its own subdirectory:

```
parcels/
  PARCEL-001/
    summary.md       — key facts, location, area, status
    survey.md        — survey details and dimensions
    title.md         — title/ownership notes
    notes.md         — operational notes and history
```

## What Goes Here

- Survey records
- Title and ownership documentation notes
- Area measurements
- Zoning and land-use notes
- Development briefs
- Photographs (filenames should be descriptive)

## What Does NOT Go Here

- Tenant agreements → `tenants/`
- Construction contracts → `operations/`
- Financial summaries → `operations/`

## Status Tags

Use these consistently in `summary.md` files:

- `owned` — title held
- `leased` — operating lease
- `negotiating` — active acquisition discussions
- `prospective` — identified but not yet engaged
- `disposed` — no longer part of portfolio
