# Current Bahamas — CARRY-OVER.md
# Last updated: April 23, 2026 (Session 5)

---

## LIVE NOW

| Item | URL / Location | Status |
|------|---------------|--------|
| Site | https://current-bahamas.vercel.app | ✅ Live — all 9 routes, 200 OK |
| GitHub repo | https://github.com/echo460/current-bahamas | ✅ 6 commits |
| Vercel project | prj_2VwB6xndNLDUJ8FKxCzQKjmNTUMO | ✅ |
| Linear project | https://linear.app/waterrunner/project/current-bahamas-f34e7c973c50 | ✅ 3 milestones, 6 issues |
| Local repo | /Users/brianbirch/projects/current-bahamas/ | ✅ Clean, pushed |
| v5 Plan | /Users/brianbirch/projects/Current Bahamas/Current-Bahamas-PreProd-Plan-v5.docx | ✅ |

---

## REPO CONTENTS (what's built)

### Next.js site
```
src/lib/brand.ts                          ← Brand tokens, tiers, add-ons, segments, regulatory scope
src/components/marketing/shared.tsx       ← MarketingHeader + MarketingFooter
src/app/layout.tsx                        ← Root layout, Inter font, metadata
src/app/globals.css                       ← Tailwind + CSS vars (--navy, --teal, --cream)
src/app/page.tsx                          ← Full homepage
src/app/sitemap.ts                        ← /sitemap.xml — all 7 routes
src/app/(marketing)/services/page.tsx    ← All 3 tiers + add-ons + scope disclaimer
src/app/(marketing)/who/page.tsx         ← ICP segment cards
src/app/(marketing)/intake/page.tsx      ← Tally embed slot (TALLY_FORM_ID placeholder)
src/app/(marketing)/contact/page.tsx     ← Contact form with success/error banners
src/app/(marketing)/privacy/page.tsx     ← DPA 2025, cross-border, deletion rights
src/app/(marketing)/terms/page.tsx       ← 9-clause terms
src/app/api/contact/route.ts             ← POST → Airtable Contacts + n8n webhook
src/app/api/intake/route.ts              ← POST ← Tally webhook → Airtable Clients + n8n
public/robots.txt                        ← Allow all, sitemap ref
vercel.json                              ← www redirect + security headers
```

### n8n workflow JSONs (ready to import at 100.84.125.27:5678)
```
n8n-workflows/CB-ONBOARD-SEQ.json        ← P1: new client → welcome email + ops alert
n8n-workflows/CB-DEADLINE-ALERT.json     ← P1: daily check, items due ≤14 days
n8n-workflows/CB-MISSING-DOC.json        ← P1: daily, missing doc reminders (3-email sequence)
n8n-workflows/CB-PAYMENT-REMIND.json     ← P1: daily, payment due/overdue reminders
n8n-workflows/CB-STATUS-DIGEST.json      ← P1: weekly Monday digest to ops@
n8n-workflows/CB-HOURS-ALERT.json        ← P2: end-of-month, flag clients >110% of hour budget
n8n-workflows/CB-AIRTABLE-EXPORT.json   ← P2: weekly Sunday CSV export to Drive
```

### Docs and templates
```
docs/airtable-schema.md                  ← 6-table schema with field types, views, n8n field names
docs/drive-template.md                   ← Folder structure, naming convention, access rules
docs/n8n-import-guide.md                 ← Step-by-step import, test, activate guide
docs/tally-intake-spec.md                ← Tally form field spec, keys, Airtable mappings
docs/templates/compliance-checklist-master.md ← 7-section per-client compliance checklist
docs/templates/status-snapshot-template.md    ← Monthly traffic-light status report for clients
```

### Service one-pagers (PDFs — built in sandbox, NOT in repo)
Save these to Google Drive /_Templates/:
- CB-OnePager-MonthlyComplianceCare.pdf
- CB-OnePager-FullComplianceOperations.pdf
- CB-OnePager-TCCRescue.pdf

---

## WHAT STILL NEEDS TO BE DONE

### Manual (requires Diver — code cannot do this)

| Item | How | Gate | Priority |
|------|-----|------|----------|
| Register currentbahamas.com | Namecheap or Cloudflare | CB-001 | P1 — NOW |
| Connect domain to Vercel | Vercel → Settings → Domains | After CB-001 | P1 |
| Google Workspace + MFA | Google admin console | CB-002 | P1 — NOW |
| Entity decision | Internal | CB-003 | P1 |
| Bank account details in Airtable | Manual entry | CB-004 (blocked by CB-003) | P1 |
| WiPay call — 4 questions | Phone | CB-005 | P1 |
| Competitor fieldwork (5+5+web) | Calls + search | CB-006 | P1 — Day 5 gate |
| DPA 2025 counsel review | Bahamian legal counsel | v5 §R3 — before client 1 | P1 |
| Build Airtable base | Use docs/airtable-schema.md | Day 4–5 | P1 |
| Build Tally intake form | Use docs/tally-intake-spec.md | Day 10–11 | P1 |
| Set TALLY_FORM_ID in src/app/(marketing)/intake/page.tsx | 1-line edit | After Tally form built | P1 |
| Add env vars to Vercel | Settings → Env Vars | After Airtable base live | P1 |
| Build Google Drive folder structure | Use docs/drive-template.md | Day 7–8 | P1 |
| Import n8n workflows | Use docs/n8n-import-guide.md | Day 18–19 | P1 |
| Create Tally → Airtable integration | Tally dashboard | After base + form live | P1 |
| Set Tally webhook to /api/intake | Tally settings | Same | P1 |
| PandaDoc engagement letter | Use v5 §8.3 10 clauses | Day 14 | P1 |
| Portal ToS review → §5.6 matrix | IRD/NIB/MyGateway/Agriculture portals | Day 15 (sales hard gate) | P1 |
| SHB Lodge onboarding simulation | Internal | Day 20 | P1 |
| Vercel → GitHub auto-deploy | Vercel Settings → Git → Connect echo460/current-bahamas | Any time | P2 |
| Anchor client pricing decision | SHB Lodge/SHBF/Androsia free Month 1? | CB open decision #4 | P2 |
| WiPay merchant account application | After CB-005 confirms recurring billing | CB-005 output | P2 |

### Code (next session can build)

| Item | Notes |
|------|-------|
| Set TALLY_FORM_ID in intake/page.tsx | One line — needs Tally form ID first |
| Add AIRTABLE_API_KEY + AIRTABLE_BASE_ID to .env.local | After Airtable base is built |
| Add Vercel env vars via Vercel MCP | Can do programmatically once values are known |

---

## ENVIRONMENT VARIABLES

Fill in .env.local locally AND add to Vercel project env vars:

| Variable | Where to get |
|----------|-------------|
| AIRTABLE_API_KEY | Airtable → Account → API → Personal Access Token |
| AIRTABLE_BASE_ID | Airtable base URL: airtable.com/[BASE_ID]/... |
| N8N_WEBHOOK_CONTACT | n8n → Webhook node in a contact-intake workflow |
| N8N_WEBHOOK_INTAKE | n8n → Webhook node in CB-ONBOARD-SEQ |
| WIPAY_MERCHANT_KEY | WiPay → after merchant account setup (CB-005 → CB-006) |

---

## LINEAR OPEN ISSUES

| ID | Title | Due | Status |
|----|-------|-----|--------|
| DI-63 | CB-001 · Register currentbahamas.com | Apr 22 | Open |
| DI-64 | CB-002 · Google Workspace + MFA | Apr 23 | Open |
| DI-65 | CB-003 · Entity structure decision | Apr 24 | Open |
| DI-66 | CB-004 · Bank account details | Apr 24 | Open — blocked by DI-65 |
| DI-67 | CB-005 · WiPay call | Apr 26 | Open |
| DI-68 | CB-006 · Competitor fieldwork (Day 5 gate) | Apr 26 | Open |

---

## STACK SEPARATION (non-negotiable)

- n8n CB- workflows → Airtable CB base ONLY. Never Supabase. Never Water Runner tables.
- Vercel: current-bahamas separate from water-runner-web, landed-cost-co, andros-reef-arcade
- Linear: CB- issues under Diveintel team. Separate from DI- dive intel and WR- water runner issues.
- Google Drive: CB client folders SEPARATE from SHB Lodge, SHBF, Androsia. No cross-folder sharing.
- Airtable: CB base is its own base, not a table in Water Runner / Dive Intel schemas.
