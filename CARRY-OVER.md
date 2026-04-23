# Current Bahamas — CARRY-OVER.md
# Last updated: April 23, 2026 (Final session — handoff state)

---

## STATUS: CODE COMPLETE. ONE MANUAL STEP REMAINING (AIRTABLE BASE).

---

## LIVE NOW

| Item | URL | Status |
|------|-----|--------|
| Site | https://current-bahamas.vercel.app | ✅ 13 routes, all audits passed |
| GitHub | https://github.com/echo460/current-bahamas | ✅ 13 commits |
| Vercel project | prj_2VwB6xndNLDUJ8FKxCzQKjmNTUMO | ✅ env vars created (placeholders) |
| Linear | https://linear.app/waterrunner/project/current-bahamas-f34e7c973c50 | ✅ 10 issues |
| Notion Mission Control | https://www.notion.so/34bcd986d84681ec8256d7fe50e9f8d2 | ✅ |
| Airtable base | NOT CREATED YET | ⬜ See below |

---

## AIRTABLE — ONE MANUAL STEP THEN I CAN BUILD IT

The Airtable MCP is connected but cannot create bases (only tables within existing bases).

**You do:**
1. airtable.com → Add a base → Start from scratch → name it **CB Operations**
2. Paste the base ID (from the URL: `airtable.com/appXXXXXXXXXXXXXX/...`) into the next Claude session

**Claude does:**
Once you provide the base ID, the full schema can be built via MCP in one session:
- Table 1: Clients (25 fields)
- Table 2: Compliance Items
- Table 3: Documents
- Table 4: Projects
- Table 5: Hours Log
- Table 6: Payments
Schema spec: `/Users/brianbirch/projects/current-bahamas/docs/airtable-schema.md`

**After base is built:**
- Get API key: Airtable → Account → Developer hub → Personal access tokens
- Add to Vercel: Settings → Environment Variables → AIRTABLE_API_KEY + AIRTABLE_BASE_ID
- Add to .env.local locally

---

## WHAT'S BUILT (CODE — ALL DONE)

### Site routes (all passing, 0 errors)
- `/` — Homepage: hero, obligations strip, tier cards, how it works, ICP grid, FAQ (5q), CTA
- `/services` — All 3 tiers + feature lists + add-ons + scope disclaimer + CTA
- `/who` — ICP segment cards (7 segments)
- `/intake` — Native 3-step form (14 fields, submits to /api/intake)
- `/contact` — Contact form with success/error banner
- `/privacy` — DPA 2025 compliant
- `/terms` — 9 clauses
- `/sitemap.xml` — All 7 routes
- `/opengraph-image` — Edge-rendered 1200×630
- `/_not-found` — Custom 404
- `/api/contact` — POST → Airtable Contacts + n8n webhook
- `/api/intake` — POST ← native form / Tally → Airtable Clients + n8n

### n8n workflows (8 JSONs in /n8n-workflows/, ready to import)
CB-ONBOARD-SEQ, CB-DEADLINE-ALERT, CB-MISSING-DOC, CB-PAYMENT-REMIND,
CB-STATUS-DIGEST, CB-HOURS-ALERT, CB-TCC-REMIND, CB-AIRTABLE-EXPORT
Import guide: docs/n8n-import-guide.md

### Templates and docs
- docs/airtable-schema.md — 6-table schema
- docs/drive-template.md — folder structure + naming convention
- docs/n8n-import-guide.md — step-by-step n8n import
- docs/tally-intake-spec.md — Tally field spec (backup if native form is replaced)
- docs/templates/compliance-checklist-master.md
- docs/templates/status-snapshot-template.md
- docs/templates/checklist-hospitality.md
- docs/templates/checklist-construction.md
- docs/templates/checklist-fb.md
- docs/templates/checklist-nonprofit.md

### Collateral (built in Claude, save to Google Drive /_Templates/)
- CB-OnePager-MonthlyComplianceCare.pdf
- CB-OnePager-FullComplianceOperations.pdf
- CB-OnePager-TCCRescue.pdf
- CB-EngagementLetter-Template.docx (10 clauses, v5 §8.3 compliant)

---

## REMAINING MANUAL ACTIONS

| Action | Status |
|--------|--------|
| Register currentbahamas.com (CB-001) | ⬜ |
| Connect domain to Vercel | ⬜ After CB-001 |
| Google Workspace + MFA (CB-002) | ⬜ |
| Entity decision (CB-003) | ⬜ |
| Bank account details (CB-004) | ⬜ Blocked by CB-003 |
| WiPay call — 4 questions (CB-005) | ⬜ |
| Competitor fieldwork 5+5 (CB-006) | ⬜ Day 5 gate |
| Create Airtable base "CB Operations" | ⬜ Then give Claude the base ID |
| Build Google Drive folder structure | ⬜ Use docs/drive-template.md |
| Import n8n workflows | ⬜ Use docs/n8n-import-guide.md after Airtable + Google Workspace |
| PandaDoc engagement letter | ⬜ Template built, load it |
| Portal ToS review → §5.6 matrix | ⬜ Day 15 hard gate |
| DPA 2025 counsel review | ⬜ Before first external client |
| SHB Lodge onboarding simulation | ⬜ Day 20 |
| Vercel → GitHub auto-deploy connect | ⬜ github.com → Settings → Applications → Vercel → add current-bahamas repo |

---

## STACK SEPARATION (non-negotiable)
- n8n CB- workflows → Airtable CB base ONLY. Never Supabase. Never Water Runner tables.
- Vercel: current-bahamas separate from water-runner-web, landed-cost-co, andros-reef-arcade
- Linear: CB- issues under Diveintel team. Separate from DI- and WR-.
- Google Drive: CB client folders SEPARATE from SHB Lodge, SHBF, Androsia folders.
- Airtable: CB Operations base separate from all Water Runner / Dive Intel schemas.
