# Current Bahamas — CARRY-OVER.md
# Last updated: April 23, 2026
# This file tracks build state between sessions

---

## LIVE NOW

| Item | URL / Location | Status |
|------|---------------|--------|
| Site | https://current-bahamas.vercel.app | ✅ Live (production deploy) |
| Vercel project | prj_2VwB6xndNLDUJ8FKxCzQKjmNTUMO | ✅ |
| Linear project | https://linear.app/waterrunner/project/current-bahamas-f34e7c973c50 | ✅ |
| Local repo | /Users/brianbirch/projects/current-bahamas/ | ✅ Committed |
| v5 Plan | /Users/brianbirch/projects/Current Bahamas/Current-Bahamas-PreProd-Plan-v5.docx | ✅ |

---

## COMMITTED, NOT YET PUSHED TO GITHUB

The local repo has 2 commits. GitHub repo does not exist yet.

**To create and push (run in Terminal):**
```bash
cd "/Users/brianbirch/projects/current-bahamas"

# Create repo on GitHub (will prompt for credentials)
curl -s -u "echo460" -X POST https://api.github.com/user/repos \
  -d '{"name":"current-bahamas","private":false,"description":"Current Bahamas — SME Compliance Coordination site"}' \
  | python3 -c "import sys,json; d=json.load(sys.stdin); print(d.get('html_url','error:'+d.get('message','')))"

# Add remote and push
git remote add origin https://github.com/echo460/current-bahamas.git
git push -u origin main
```

**After push:** Go to Vercel project → Settings → Git → Connect GitHub repo (echo460/current-bahamas) for auto-deploy on push.

---

## WHAT EXISTS IN THE REPO

```
src/lib/brand.ts                          ← All brand tokens, tiers, add-ons, segments
src/components/marketing/shared.tsx       ← MarketingHeader + MarketingFooter
src/app/layout.tsx                        ← Root layout, Inter font, metadata
src/app/globals.css                       ← Tailwind + CSS variables
src/app/page.tsx                          ← Full homepage
src/app/(marketing)/services/page.tsx    ← All 3 tiers + add-ons + scope disclaimer
src/app/(marketing)/who/page.tsx         ← ICP segment cards
src/app/(marketing)/intake/page.tsx      ← Tally embed placeholder
src/app/(marketing)/contact/page.tsx     ← Contact form → /api/contact
src/app/(marketing)/privacy/page.tsx     ← DPA 2025, cross-border, deletion rights
src/app/(marketing)/terms/page.tsx       ← 9-clause terms
src/app/api/contact/route.ts             ← POST handler (Airtable stub)
n8n-workflows/CB-ONBOARD-SEQ.json        ← Ready to import
n8n-workflows/CB-DEADLINE-ALERT.json     ← Ready to import
n8n-workflows/CB-MISSING-DOC.json        ← Ready to import
n8n-workflows/CB-PAYMENT-REMIND.json     ← Ready to import
n8n-workflows/CB-STATUS-DIGEST.json      ← Ready to import
docs/airtable-schema.md                  ← Full 6-table schema with field types
docs/drive-template.md                   ← Folder structure + naming convention + access rules
docs/n8n-import-guide.md                 ← Step-by-step n8n import + test + activate
.env.local                               ← All env var placeholders (not committed)
```

---

## WHAT STILL NEEDS TO BE BUILT

### Manual (requires Diver — no automation can do this)

| Item | Gate | Priority |
|------|------|----------|
| Register currentbahamas.com | CB-001 | P1 — today |
| Google Workspace + MFA | CB-002 | P1 — today |
| Entity structure decision | CB-003 | P1 — Day 2 |
| Bank account details (real values) | CB-004, blocked by CB-003 | P1 — Day 2 |
| WiPay call — 4 questions | CB-005 | P1 — Day 3 |
| Competitor fieldwork (5+5) | CB-006 | P1 — Day 5 |
| DPA 2025 counsel review | v5 gate R3/A9 | P1 — before client 1 |
| Airtable base — build from docs/airtable-schema.md | Day 4-5 | P1 |
| Google Drive folder structure — build from docs/drive-template.md | Day 7-8 | P1 |
| Import n8n workflows — follow docs/n8n-import-guide.md | Day 18-19 | P1 |
| Tally intake form — wire to Airtable | Day 10-11 | P1 |
| PandaDoc engagement letter — 10 clauses from v5 §8.3 | Day 14 | P1 |
| PandaDoc invoice template — with bank details in footer | Day 14 | P1 |
| Connect currentbahamas.com domain to Vercel | After CB-001 | P1 |
| Calendly setup — discovery call + review call slots | Day 19 | P1 |
| GitHub push + Vercel git connect | See CARRY-OVER commands above | P2 |
| Portal ToS review → update §5.6 matrix | Day 15 (hard gate before sales) | P1 |
| SHB Lodge onboarding simulation | Day 20 | P1 |

### Next Session Can Build (code)

| Item | Notes |
|------|-------|
| /api/contact route — wire to Airtable | Replace TODO stub with real Airtable POST |
| Tally form embed — replace placeholder in /intake | After form is built in Tally |
| CB-AIRTABLE-EXPORT n8n workflow | Manual build in n8n (no JSON stub exists yet) |
| Service one-pagers (3 PDFs) | Monthly Care, TCC Readiness, Exemption Package |
| Compliance checklist templates | By industry — Google Doc templates |
| Status snapshot template | Monthly deliverable template |

---

## LINEAR ISSUES (open)

| ID | Title | Due | Status |
|----|-------|-----|--------|
| DI-63 | CB-001 · Register currentbahamas.com | Apr 22 | Open |
| DI-64 | CB-002 · Google Workspace + MFA | Apr 23 | Open |
| DI-65 | CB-003 · Entity structure decision | Apr 24 | Open |
| DI-66 | CB-004 · Bank account details | Apr 24 | Open (blocked by DI-65) |
| DI-67 | CB-005 · WiPay call | Apr 26 | Open |
| DI-68 | CB-006 · Competitor fieldwork | Apr 26 | Open |

---

## ENVIRONMENT VARIABLES NEEDED

Fill in .env.local before these features work:

| Variable | Where to get |
|----------|-------------|
| AIRTABLE_API_KEY | Airtable → Account → Developer Hub → Personal Access Token |
| AIRTABLE_BASE_ID | Airtable base URL: airtable.com/[BASE_ID]/... |
| N8N_WEBHOOK_CONTACT | n8n → Create webhook node in a contact workflow |
| N8N_WEBHOOK_INTAKE | n8n → Create webhook node in intake workflow |
| WIPAY_MERCHANT_KEY | WiPay → after CB-005 call and merchant account live |

Also add to Vercel project env vars (Settings → Environment Variables):
- AIRTABLE_API_KEY
- AIRTABLE_BASE_ID

---

## VERCEL DOMAIN SETUP (after CB-001)

1. In Vercel → current-bahamas project → Settings → Domains
2. Add: currentbahamas.com and www.currentbahamas.com
3. Follow DNS instructions (add CNAME or A record at your registrar)
4. Wait for SSL provisioning (~5 min)

---

## STACK SEPARATION REMINDER

- n8n CB- workflows → Airtable CB base ONLY. Never Supabase. Never Water Runner tables.
- Vercel: current-bahamas is separate project from water-runner-web, landed-cost-co, andros-reef-arcade
- Linear: CB- issues under Diveintel team (DI- prefix). Separate from WR- and DI- dive intel issues.
- Google Drive: CB client folders SEPARATE from SHB Lodge, SHBF, Androsia folders. No cross-folder sharing.
