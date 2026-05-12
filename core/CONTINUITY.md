# Continuity & Governance — Bhaskarwar Estates

> Rules for maintaining institutional discipline across time, contributors, and context.

---

## Documentation Discipline

1. **Write before you act.** Significant actions — acquisitions, agreements, structural changes — must be documented before or immediately after execution.
2. **Update CURRENT_STATE.md monthly** at minimum. It is the primary operational dashboard.
3. **Log decisions in DECISIONS.md** when they are: irreversible, financially significant, strategically directional, or likely to be questioned later.
4. **CHANGELOG.md** records what changed and when. It is not a dev log — it is an institutional record.
5. **MASTER_CONTEXT.md** is the single source of truth. If facts change, update it there first.

---

## Commit Discipline

- Commit messages are institutional records. Write them as if a future operator will rely on them.
- Format: `scope: brief summary of what changed and why`
- Examples:
  - `parcels: add PARCEL-001 survey summary for Wani site A`
  - `tenants: update TENANT-001 status to active — lease signed 2026-06-01`
  - `ops: add tenant onboarding SOP`
- Never commit broken documentation or incomplete files without a TODO note.

---

## Operational Continuity

- Every directory has a README.md explaining its purpose. Keep these current.
- New operational processes go in `operations/sops/` before they are relied upon.
- Nothing exists only in someone's head — if it matters, it is written down.

---

## Update Philosophy

- Update documents when facts change — not on a schedule for its own sake.
- A stale document is worse than no document: it is actively misleading.
- If you cannot update a document now, add a `> NOTE: This section is pending update as of [date].` callout.

---

## Anti-Overengineering Principles

1. **Markdown first.** If plain text serves the purpose, use it. No database until a database is genuinely required.
2. **One source of truth.** Do not duplicate information across files. Reference, don't repeat.
3. **No speculative structure.** Create directories and files when they are needed, not when they might be needed.
4. **Simple over clever.** A clear directory and a clear filename beats any tagging system.
5. **Technology serves operations.** Do not adopt tools because they are interesting — adopt them because they solve a real problem.
6. **Calm execution.** Urgency is a sign something was not planned. Plan early, execute calmly.

---

## File Naming Conventions

| Context | Convention | Example |
|---------|-----------|---------|
| Parcel records | `PARCEL-NNN/` subdirectory | `PARCEL-001/` |
| Tenant records | `TENANT-NNN/` subdirectory | `TENANT-001/` |
| Dated documents | `YYYY-MM_description.md` | `2026-05_market-notes.md` |
| SOPs | `sop-[process-name].md` | `sop-tenant-onboarding.md` |
| Archive | Prefix with archive date | `2026-05_old-readme.md` |

---

*This document should be revisited annually or when the operational team expands.*
