# Current Bahamas — n8n Workflow Import Guide
# Version: 1.0 | April 2026
# Instance: 100.84.125.27:5678 (Windows PC, Tailscale)

---

## Separation Policy

CB- workflows write ONLY to Airtable CB base.
NEVER cross-write to Supabase or Water Runner tables.
All alerts go to ops@currentbahamas.com — no Slack.

---

## Step 1: Set Up Credentials in n8n

Create these credentials BEFORE importing workflows.
Use the n8n REST API method (not UI export) to ensure proper encryption.

### 1a. Airtable credential
- Name: `CB-Airtable`
- Type: Airtable Token Api
- API Key: [your Airtable personal access token]
- Base ID: [CB Operations base ID — get from Airtable URL]

### 1b. Gmail credential (ops@currentbahamas.com)
- Name: `CB-Gmail-Ops`
- Type: Gmail OAuth2
- Account: ops@currentbahamas.com
- Scopes: gmail.send, gmail.readonly

### 1c. Gmail credential (hello@currentbahamas.com)  
- Name: `CB-Gmail-Hello`
- Type: Gmail OAuth2
- Account: hello@currentbahamas.com

---

## Step 2: Import Workflows

All workflow JSON files are in `/Users/brianbirch/projects/current-bahamas/n8n-workflows/`

Import order (P1 workflows first):

1. `CB-ONBOARD-SEQ.json` — triggers on new Airtable client record
2. `CB-DEADLINE-ALERT.json` — daily check for items due ≤14 days
3. `CB-MISSING-DOC.json` — daily check for missing documents
4. `CB-PAYMENT-REMIND.json` — daily payment due/overdue reminders
5. `CB-STATUS-DIGEST.json` — weekly Monday 8am ops summary email

Import method:
- Go to n8n → Workflows → Import from File
- Select each JSON file
- After import, open each workflow and:
  - Replace all credential references with CB-Airtable / CB-Gmail-Ops
  - Verify Airtable base IDs are correct
  - Set to INACTIVE until tested

---

## Step 3: Test Each Workflow

Before activating any workflow, test manually:

### CB-ONBOARD-SEQ test:
1. Add a test record to Airtable Clients with External/Internal = external
2. Execute workflow manually
3. Verify: welcome email sent to test address, ops@ alert received
4. Delete test record

### CB-DEADLINE-ALERT test:
1. Add a test Compliance Item with Due Date = today + 10 days, Status = current
2. Execute manually
3. Verify: client email sent, ops@ alert sent, Status updated to at-risk
4. Delete test record

### CB-MISSING-DOC test:
1. Add a test Document with Status = missing
2. Execute manually
3. Verify: email sent to client, Reminder Count incremented to 1
4. Delete test record

### CB-PAYMENT-REMIND test:
1. Add a test Payment with Due Date = today + 3, Status = pending
2. Execute manually
3. Verify: "3 days before" email sent
4. Delete test record

### CB-STATUS-DIGEST test:
1. Ensure at least one at-risk item and one missing doc exist
2. Execute manually
3. Verify: digest email received at ops@currentbahamas.com
4. Check counts match Airtable

---

## Step 4: Activate Workflows

Only activate after all tests pass.
Activate in this order: ONBOARD-SEQ → DEADLINE-ALERT → MISSING-DOC → PAYMENT-REMIND → STATUS-DIGEST

---

## Step 5: Backup Workflow

After all P1 workflows are active and tested, add the backup workflow:

`CB-AIRTABLE-EXPORT` (manual setup — not a JSON file):
- Trigger: Schedule, Sunday 11pm
- Node 1: Airtable → List all records from each table (6 tables)
- Node 2: Convert to CSV
- Node 3: Google Drive → Upload to /CB-Backups/Airtable/[date]/
- Must be active BEFORE second external client is onboarded (v5 gate A6)

---

## Migration Trigger (v5 §11.7)

**Hard trigger:** If external active clients exceed 10 OR any SLA language appears in any engagement letter:
→ Migrate to cloud.n8n.io or DigitalOcean VPS within 30 days.

Current setup (founder PC) is acceptable for pilot. Not acceptable for production beyond 10 clients.

---

## Manual Fallback SOP

If n8n is unreachable (PC down, internet outage):

1. Open Airtable CB Operations base
2. Go to Compliance Items view → "At Risk + Overdue"
3. For each item: manually email client using Gmail (ops@currentbahamas.com)
4. Go to Documents view → filter Status = missing
5. For each: manually email client requesting document
6. Go to Payments view → filter Status = pending, Due Date = today
7. For each: manually email billing@currentbahamas.com reminder
8. Log the manual fallback in _Internal/Operations/n8n-fallback-SOP.md with date and items handled

This SOP must be documented at `/CB Operations/_Internal/Operations/n8n-fallback-SOP.md` in Google Drive before the admin hire in Month 4.
