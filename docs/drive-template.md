# Current Bahamas — Google Drive Folder Template
# Version: 1.0 | April 2026

---

## Root Structure

```
CB Operations/               ← shared drive root
├── _Templates/              ← DO NOT modify without updating this doc
│   ├── Client-Folder-Template/
│   │   ├── 01-Business-Licence/
│   │   ├── 02-VAT/
│   │   ├── 03-NIB/
│   │   ├── 04-TCC/
│   │   ├── 05-Agriculture-Permits/
│   │   ├── 06-Exemptions-Concessions/
│   │   ├── 07-Payroll-Records/     ← Sensitive
│   │   ├── 08-Financial-Statements/
│   │   ├── 09-Engagement-Docs/
│   │   └── 10-Correspondence/
│   ├── Status-Snapshot-Template.gdoc
│   └── Compliance-Calendar-Template.gsheet
│
├── _Internal/               ← CB internal only, not shared with clients
│   ├── Operations/
│   │   ├── n8n-fallback-SOP.md    ← REQUIRED before Month 4 admin hire
│   │   ├── data-breach-log.gsheet
│   │   └── onboarding-checklist.gdoc
│   ├── Finance/
│   │   ├── CB-Invoices/
│   │   └── CB-Reconciliation/
│   └── Legal/
│       ├── Engagement-Letter-Template.gdoc
│       └── DPA-Counsel-Review/    ← Required before client 1 (v5 gate R3)
│
├── CB-Backups/              ← Automated backups only
│   ├── Airtable/            ← n8n CB-AIRTABLE-EXPORT drops weekly CSVs here
│   │   └── [YYYY-MM-DD]/
│   └── n8n/                 ← Weekly workflow JSON exports
│       └── [YYYY-MM-DD]/
│
└── Clients/                 ← One subfolder per client, created on onboarding
    └── [ClientCode]-[BusinessName]/   ← e.g. SHBL-SmallHopeBayLodge
        ├── 01-Business-Licence/
        ├── 02-VAT/
        ├── 03-NIB/
        ├── 04-TCC/
        ├── 05-Agriculture-Permits/
        ├── 06-Exemptions-Concessions/
        ├── 07-Payroll-Records/        ← SENSITIVE — named-user access only
        ├── 08-Financial-Statements/
        ├── 09-Engagement-Docs/
        │   ├── [ClientCode]_EngagementLetter_[YYYY-MM]_v1.pdf
        │   └── [ClientCode]_PrivacyNotice_[YYYY-MM]_v1.pdf
        └── 10-Correspondence/
```

---

## Client Code Convention

4–6 uppercase letters derived from business name. Must be unique.

| Business Name | Code |
|--------------|------|
| Small Hope Bay Lodge | SHBL |
| Small Hope Bay Foundation | SHBF |
| Androsia | ANDR |
| Andros Top Dive | ANTOP |
| Nassau Beach Hotel | NSBCH |

Register new codes in Airtable Clients table → "Client Code" field.

---

## File Naming Convention

```
[ClientCode]_[DocType]_[YYYY-MM]_v[N].[ext]
```

| Part | Values |
|------|--------|
| ClientCode | 4–6 uppercase letters (from Airtable) |
| DocType | BusinessLicence / VATReturn / NIBSchedule / TCC / AgPermit / FinancialStatement / EngagementLetter / BankStatement / PayrollRecord / Passport / PoliceCert / MedCert |
| YYYY-MM | Year and month of the document period (not upload date) |
| v[N] | v1 = original. v2+ = corrected or updated version. |

**Examples:**
- `SHBL_VATReturn_2026-03_v1.pdf`
- `ANTOP_BusinessLicence_2026_v1.pdf`
- `SHBF_TCC_2026-04_v1.pdf`
- `ANDR_EngagementLetter_2026-04_v1.pdf`

---

## Access Control Rules (from v5 §11.3 + §11.5)

| Folder | Access Level | Who |
|--------|-------------|-----|
| Clients/[code]/07-Payroll-Records/ | Named-user ONLY | Founder only until admin hire |
| Clients/[code]/08-Financial-Statements/ | Named-user ONLY | Founder + admin hire |
| Clients/[code]/ (all other) | Named-user | Founder + admin hire |
| _Internal/ | Named-user | Founder only |
| CB-Backups/ | Named-user | Founder only (automated writes from n8n service account) |
| _Templates/ | View-only for admin hire | |

**NEVER use "Anyone with the link" sharing for any client folder.**
**NEVER share Payroll-Records or Financial-Statements over WhatsApp or email attachment — Drive link only.**

---

## Onboarding Checklist — New Client Folder

When CB-ONBOARD-SEQ fires, manually complete within 24 hours:

1. [ ] Duplicate `_Templates/Client-Folder-Template/` into `Clients/`
2. [ ] Rename to `[ClientCode]-[BusinessName]`
3. [ ] Set named-user sharing: Founder + (admin hire if active)
4. [ ] Upload signed engagement letter to `09-Engagement-Docs/` using naming convention
5. [ ] Upload privacy notice to `09-Engagement-Docs/`
6. [ ] Add Drive folder link to Airtable Clients record
7. [ ] Request any immediate missing documents (add to Airtable Documents table with Status = missing)

---

## Sensitive Document Rules

**Highly sensitive** (Passport, PoliceCert, MedCert, PayrollRecord, BankStatement):
- Google Drive ONLY. Named-user access. Founder access only at launch.
- Never sent over WhatsApp under any circumstances.
- Never attached to email — share via Drive link with expiry if possible.
- Retained for engagement duration + 6 months, then permanently deleted.
- Deletion logged in `_Internal/Operations/data-breach-log.gsheet`.

**Phase 3 note:** Immigration documents (Passport, PoliceCert, MedCert) are Phase 3 only.
DPA 2025 counsel review is required before any Phase 3 client is onboarded.

---

## Retention Schedule

| Document Type | Retention | Action |
|--------------|-----------|--------|
| Tax / VAT records | 7 years | Archive to `/CB-Backups/Archive/[ClientCode]/` on offboard |
| NIB records | 7 years | Same |
| Business licence / TCC | 5 years | Same |
| Passports / police certs | Engagement + 6 months | Permanently delete, log in data-breach-log |
| Engagement letters | 7 years | Archive |
| Financial statements | 7 years | Archive |
