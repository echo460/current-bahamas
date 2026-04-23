# Current Bahamas — CARRY-OVER.md
# Last updated: April 23, 2026 (Session 6 — final code-complete state)

---

## STATUS: CODE COMPLETE. WAITING ON MANUAL GATES.

The codebase is feature-complete for Phase 1. Everything below that says "manual" cannot be unblocked by another coding session — it requires Diver to take action in the real world first.

---

## LIVE NOW

| Item | URL / Location | Status |
|------|---------------|--------|
| Site | https://current-bahamas.vercel.app | ✅ 13 routes, 0 errors |
| GitHub | https://github.com/echo460/current-bahamas | ✅ 8 commits |
| Vercel project | prj_2VwB6xndNLDUJ8FKxCzQKjmNTUMO | ✅ |
| Vercel env vars | All 7 created (placeholders) | ✅ Ready to fill in |
| Linear project | https://linear.app/waterrunner/project/current-bahamas-f34e7c973c50 | ✅ 3 milestones, 10 issues |

---

## REPO CONTENTS — COMPLETE

### Next.js site (13 routes, all building clean)
- Homepage, services, who, intake, contact, privacy, terms, sitemap, robots
- OG image (edge-rendered 1200x630)
- 404 not-found page
- Contact form with success/error banner (Suspense + useSearchParams)
- Both API routes wired to Airtable + n8n webhook
- Security headers + www redirect in vercel.json
- Brand tokens, all segments/tiers/add-ons in brand.ts

### n8n workflows (8 total — all in /n8n-workflows/)
| Workflow | Priority | Trigger | Status |
|----------|----------|---------|--------|
| CB-ONBOARD-SEQ | P1 | New Airtable client | Ready to import |
| CB-DEADLINE-ALERT | P1 | Daily — items due ≤14 days | Ready to import |
| CB-MISSING-DOC | P1 | Daily — missing doc status | Ready to import |
| CB-PAYMENT-REMIND | P1 | Daily — payment due/overdue | Ready to import |
| CB-STATUS-DIGEST | P1 | Weekly Mon 8am | Ready to import |
| CB-HOURS-ALERT | P2 | Monthly end-of-month | Ready to import |
| CB-TCC-REMIND | P2 | Daily — TCC expiry ≤30 days | Ready to import |
| CB-AIRTABLE-EXPORT | P2 | Weekly Sun 11pm → Drive | Ready to import |

### Docs and templates (/docs/)
- airtable-schema.md — 6-table schema, field types, views, n8n field names
- drive-template.md — folder structure, naming convention, access rules, retention
- n8n-import-guide.md — step-by-step import, test, activate guide
- tally-intake-spec.md — 14-field Tally form spec with Airtable mappings
- templates/compliance-checklist-master.md — 7-section master checklist
- templates/status-snapshot-template.md — monthly traffic-light report
- templates/checklist-hospitality.md — hospitality-specific checklist
- templates/checklist-construction.md — contractor-specific checklist

### Generated collateral (not in repo — download from Claude)
- CB-OnePager-MonthlyComplianceCare.pdf
- CB-OnePager-FullComplianceOperations.pdf
- CB-OnePager-TCCRescue.pdf
- CB-EngagementLetter-Template.docx ← Save to Google Drive /_Templates/

---

## OPEN LINEAR ISSUES (10 total)

| ID | Title | Due | Blocked by |
|----|-------|-----|-----------|
| DI-63 | CB-001 · Register currentbahamas.com | Apr 22 | Nothing — do this NOW |
| DI-64 | CB-002 · Google Workspace + MFA | Apr 23 | Nothing — do this NOW |
| DI-65 | CB-003 · Entity decision | Apr 24 | Nothing |
| DI-66 | CB-004 · Bank account details | Apr 24 | DI-65 |
| DI-67 | CB-005 · WiPay call | Apr 26 | Nothing |
| DI-68 | CB-006 · Competitor fieldwork | Apr 26 | Nothing — Day 5 hard gate |
| DI-69 | CB-007 · Build Airtable base | Apr 27 | DI-63, DI-64 |
| DI-70 | CB-008 · Build Tally form + set TALLY_FORM_ID | May 1 | DI-69 |
| DI-71 | CB-009 · Import n8n workflows | May 8 | DI-69, DI-64 |
| DI-72 | CB-010 · PandaDoc engagement letter | May 5 | Nothing (template is built) |

---

## WHAT STILL NEEDS DOING (manual only)

### PRIORITY 1 — Do today / this week

| Action | How |
|--------|-----|
| Register currentbahamas.com | Namecheap or Cloudflare, ~$15/yr |
| Connect domain to Vercel | Vercel → Settings → Domains → add currentbahamas.com + www |
| Grant Vercel GitHub App access to current-bahamas | github.com → Settings → Applications → Vercel → Configure → add repo |
| Google Workspace setup — 3 emails + MFA | Google admin console |
| Entity decision | Internal — document in DI-65 |
| WiPay call — 4 questions | DI-67 — confirms or kills recurring billing path |
| Competitor fieldwork | DI-68 — 5 accountants + 5 owners + web search |

### PRIORITY 2 — This week / next week

| Action | How |
|--------|-----|
| Build Airtable base | Use docs/airtable-schema.md |
| Get Airtable API key + base ID | Airtable → Account → API |
| Fill in Vercel env vars | Vercel → Settings → Env Vars → AIRTABLE_API_KEY, AIRTABLE_BASE_ID |
| Fill in .env.local | Same values locally |
| Build Tally intake form | Use docs/tally-intake-spec.md |
| Set TALLY_FORM_ID in intake/page.tsx | One line — `const TALLY_FORM_ID = 'your-id'` |
| Import PandaDoc engagement letter | Use CB-EngagementLetter-Template.docx |
| Import n8n workflows | Use docs/n8n-import-guide.md |
| Build Google Drive folder structure | Use docs/drive-template.md |
| Portal ToS review → §5.6 matrix | IRD, NIB, MyGateway, Agriculture portals — Day 15 hard gate |
| DPA 2025 counsel review | Before first external client — hard gate |
| SHB Lodge onboarding simulation | Day 20 |

---

## ENV VARS TO FILL IN

After Airtable base is built, update these in two places:
1. .env.local (local development)
2. Vercel → current-bahamas → Settings → Environment Variables

| Variable | Value source |
|----------|-------------|
| AIRTABLE_API_KEY | Airtable → Account → API → Personal access token |
| AIRTABLE_BASE_ID | From Airtable base URL: airtable.com/[BASE_ID]/... |
| N8N_WEBHOOK_CONTACT | n8n → Webhook node → URL (create in CB-ONBOARD-SEQ or standalone) |
| N8N_WEBHOOK_INTAKE | n8n → Webhook node → URL |
| WIPAY_MERCHANT_KEY | WiPay → after merchant account setup |

---

## STACK SEPARATION (non-negotiable)
- n8n CB- workflows → Airtable CB base ONLY. Never Supabase. Never Water Runner tables.
- Vercel: current-bahamas project is separate from water-runner-web, landed-cost-co, andros-reef-arcade
- Linear: CB- issues under Diveintel team. Separate from WR- and DI- issues.
- Google Drive: CB client folders SEPARATE from SHB Lodge, SHBF, Androsia. No cross-folder sharing.
- Airtable: CB Operations base is separate from all Water Runner / Dive Intel schemas.
