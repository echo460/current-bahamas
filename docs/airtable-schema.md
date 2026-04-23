# Current Bahamas — Airtable Base Schema
# Version: 1.0 | April 2026
# Base name: CB Operations
# Separation policy: CB base is SEPARATE from Water Runner / Dive Intel Supabase — never cross-write

---

## Table 1: Clients

| Field | Type | Notes |
|-------|------|-------|
| Business Name | Single line text | Primary record name |
| Contact Name | Single line text | Main point of contact |
| Email | Email | Client-facing email |
| WhatsApp | Phone | WhatsApp number for comms |
| Tier | Single select | T1 – Monthly Compliance Care / T2 – Full Compliance Operations / T3 – Enterprise Back-Office |
| Monthly Fee | Currency | $250 / $700 / $1,500 |
| Island | Single select | New Providence / Andros / Abaco / Exuma / Eleuthera / Grand Bahama / Other |
| Industry | Single select | Hospitality / Construction / F&B / Retail / Marine-Tours / Nonprofit / Multi-Entity / Other |
| External/Internal | Single select | external / internal-proving-ground |
| Status | Single select | active / onboarding / paused / offboarded |
| Billing Method | Single select | bank-transfer / wipay / stripe-us-entity |
| Billing Reference | Single line text | Invoice prefix or WiPay subscription ID |
| Onboard Date | Date | |
| Hours This Month | Number | Updated via Hours Log rollup |
| Hour Budget | Formula | IF(Tier='T1', 4, IF(Tier='T2', 10, 22)) |
| Hour Ceiling | Formula | IF(Tier='T1', 5.5, IF(Tier='T2', 13, 27)) |
| Over Budget | Formula | Hours This Month > Hour Budget |
| VAT Registered | Checkbox | |
| NIB Employer | Checkbox | |
| Import Active | Checkbox | |
| Gov Facing | Checkbox | Government contracts or payment collection |
| Notes | Long text | Internal notes |
| Compliance Items | Link to Compliance Items | |
| Documents | Link to Documents | |
| Projects | Link to Projects | |
| Hours Log | Link to Hours Log | |
| Payments | Link to Payments | |

**Views needed:**
- All Clients (grid)
- External Only (filter: External/Internal = external)
- Active Only (filter: Status = active)
- Over Budget This Month (filter: Over Budget = true)
- By Tier (group by Tier)

---

## Table 2: Compliance Items

| Field | Type | Notes |
|-------|------|-------|
| Name | Formula | {Business Name} & " – " & {Item Type} |
| Client | Link to Clients | |
| Item Type | Single select | Business Licence / VAT Return / NIB Contribution / TCC / Agriculture Permit / FIDEA Application / NIB Registration / Other |
| Period | Single line text | e.g. "2026 Annual" or "March 2026" |
| Due Date | Date | |
| Status | Single select | current / at-risk / overdue / complete / not-applicable |
| Owner | Single select | CB / Client / Shared |
| Documents | Link to Documents | Supporting docs for this item |
| Reminder Count | Number | Auto-incremented by n8n |
| Last Actioned | Date | |
| Notes | Long text | |

**Views needed:**
- All Items (grid, sort by Due Date asc)
- At Risk + Overdue (filter: Status = at-risk OR overdue)
- Due This Month (filter: Due Date within current month)
- By Client (group by Client)

---

## Table 3: Documents

| Field | Type | Notes |
|-------|------|-------|
| Name | Formula | {Client Code} & "_" & {Doc Type} & "_" & {Period} |
| Client | Link to Clients | |
| Compliance Item | Link to Compliance Items | |
| Doc Type | Single select | BusinessLicence / VATReturn / NIBSchedule / TCC / AgPermit / FinancialStatement / EngagementLetter / BankStatement / PayrollRecord / Passport / PoliceCert / MedCert / Other |
| Period | Single line text | e.g. "2026" or "2026-03" |
| Drive Link | URL | Google Drive file URL |
| Status | Single select | current / expiring / missing / archived |
| Expiry Date | Date | For licences, certs with expiry |
| Upload Date | Date | |
| Verified By | Single line text | Who checked the document |
| Sensitivity | Single select | highly-sensitive / sensitive / business-operational / administrative |
| Version | Number | v1 = original, v2+ = superseded |
| Reminder Count | Number | n8n increments for missing docs |
| Last Reminded | Date | |

**IMPORTANT — sensitivity rules (from v5 §11.3):**
- highly-sensitive (Passport, PoliceCert, MedCert, PayrollRecord, BankStatement): Google Drive ONLY, never Airtable. This field is for tracking only — DO NOT store scans here.
- sensitive (VATReturn, NIBSchedule, TCC, FinancialStatement, EngagementLetter): Drive link only, access controlled
- Drive link must point to the file, never embed the file in Airtable

**Naming convention:** [ClientCode]_[DocType]_[YYYY-MM]_v[N].pdf
Example: SHBL_VATReturn_2026-03_v1.pdf

---

## Table 4: Projects (Add-On Work)

| Field | Type | Notes |
|-------|------|-------|
| Name | Single line text | e.g. "ANTOP – TCC Rescue April 2026" |
| Client | Link to Clients | |
| Project Type | Single select | TCC Rescue / Document Cleanup / VAT Backfile / Exemption Package / Onboarding Audit / Import Readiness / Other |
| Scope | Long text | Written deliverable list — defined before work begins |
| Fee | Currency | |
| Hours Budgeted | Number | |
| Hours Actual | Number | Updated via Hours Log rollup |
| Margin | Formula | (Fee - (Hours Actual * 85)) / Fee |
| Status | Single select | scoped / in-progress / review / complete / invoiced |
| Start Date | Date | |
| End Date | Date | |
| Invoiced | Checkbox | |
| Invoice Number | Single line text | |
| Notes | Long text | |

---

## Table 5: Hours Log

| Field | Type | Notes |
|-------|------|-------|
| Date | Date | |
| Client | Link to Clients | |
| Project | Link to Projects | Optional — for project work |
| Task | Single line text | Short description |
| Hours | Number | Decimal, e.g. 0.5 |
| Category | Single select | delivery / admin / sales / internal |
| Notes | Long text | |

**Monthly review:** Compare Hours Log rollup vs Client.Hour Budget. Any client at >110% triggers CB-HOURS-ALERT n8n workflow.

---

## Table 6: Payments

| Field | Type | Notes |
|-------|------|-------|
| Invoice Number | Single line text | e.g. CB-2026-001 |
| Client | Link to Clients | |
| Amount | Currency | |
| Due Date | Date | |
| Paid Date | Date | |
| Method | Single select | bank-transfer / wipay / stripe |
| Status | Single select | pending / paid / overdue / cancelled |
| Reference | Single line text | Bank reference or WiPay transaction ID |
| Notes | Long text | |

**Invoice numbering:** CB-[YYYY]-[NNN] e.g. CB-2026-001
**Reconciliation:** Founder checks within 2 business days of due date. Manual until WiPay is live.

---

## Automation fields for n8n

n8n reads from and writes to this base. Key field names must match exactly:
- Clients: "Business Name", "Email", "Tier", "External/Internal", "Status"
- Compliance Items: "Due Date", "Status", "Item Type", "Reminder Count"
- Documents: "Status", "Doc Type", "Reminder Count", "Last Reminded"
- Payments: "Due Date", "Status", "Amount", "Invoice Number"

n8n credentials: Airtable API key stored in n8n credential store (never in workflow JSON).
Base ID stored in n8n credential store or environment variable — never hardcoded.

---

## Backup

Weekly automated export via n8n CB-AIRTABLE-EXPORT workflow:
- Every Sunday 11pm → CSV of all tables → Google Drive /CB-Backups/Airtable/[YYYY-MM-DD]/
- Restore test: quarterly, import CSV to blank base, verify record counts
- This must be active before the second external client is onboarded (v5 gate A6)
