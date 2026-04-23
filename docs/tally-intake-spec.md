# Current Bahamas — Tally Intake Form Field Specification
# Version 1.0 | April 2026
# Build this form at tally.so. Connect to Airtable CB Operations > Clients table.
# Webhook endpoint: POST https://currentbahamas.com/api/intake

---

## Form Title: "Book a Free Compliance Review"
## Form description: "Tell us about your business. We'll review your compliance situation and get back to you within 1 business day."

---

## PAGE 1: Your Business

### Field 1
- **Label:** Business name
- **Type:** Short text
- **Required:** Yes
- **Field key:** businessName
- **Airtable mapping:** Business Name

### Field 2
- **Label:** Your name
- **Type:** Short text
- **Required:** Yes
- **Field key:** contactName
- **Airtable mapping:** Contact Name

### Field 3
- **Label:** Email address
- **Type:** Email
- **Required:** Yes
- **Field key:** email
- **Airtable mapping:** Email

### Field 4
- **Label:** WhatsApp number (optional — for faster updates)
- **Type:** Phone
- **Required:** No
- **Field key:** whatsapp
- **Airtable mapping:** WhatsApp

### Field 5
- **Label:** Which island are you based on?
- **Type:** Dropdown
- **Required:** Yes
- **Field key:** island
- **Options:** New Providence / Nassau · Andros · Abaco · Exuma · Eleuthera · Grand Bahama · Other
- **Airtable mapping:** Island

### Field 6
- **Label:** What type of business are you?
- **Type:** Dropdown
- **Required:** Yes
- **Field key:** industry
- **Options:** Hotel / Lodge / Villa · Restaurant / Café / Catering · Retail · Construction / Contracting · Marine / Tours / Activities · Nonprofit / Foundation · Multi-entity / Group · Other
- **Airtable mapping:** Industry

### Field 7
- **Label:** Roughly how many staff do you have?
- **Type:** Dropdown
- **Required:** No
- **Field key:** staffCount
- **Options:** Just me · 2–5 · 6–15 · 16–30 · 31–50 · 50+
- **Airtable mapping:** Notes (appended)

---

## PAGE 2: Your Compliance Situation

### Field 8
- **Label:** Are you VAT registered?
- **Type:** Multiple choice
- **Required:** No
- **Field key:** vatRegistered
- **Options:** Yes · No · Not sure
- **Airtable mapping:** VAT Registered (Yes → checked)

### Field 9
- **Label:** Do you import goods into The Bahamas?
- **Type:** Multiple choice
- **Required:** No
- **Field key:** importActive
- **Options:** Yes, regularly · Yes, occasionally · No
- **Airtable mapping:** Import Active (Yes → checked)

### Field 10
- **Label:** Do you work with the government or apply for government grants?
- **Type:** Multiple choice
- **Required:** No
- **Field key:** govFacing
- **Options:** Yes · No · Occasionally
- **Airtable mapping:** Gov Facing (Yes → checked)

### Field 11
- **Label:** What's your biggest compliance headache right now?
- **Type:** Long text
- **Required:** No
- **Placeholder:** e.g. "I never know when my VAT is due" or "I need a TCC and don't know where to start"
- **Field key:** biggestPain
- **Airtable mapping:** Notes (appended)

### Field 12
- **Label:** What do you currently do for compliance admin?
- **Type:** Multiple choice
- **Required:** No
- **Field key:** currentApproach
- **Options:** I handle it myself · My accountant handles it · I have a bookkeeper · It doesn't really get done · Other
- **Airtable mapping:** Notes (appended)

---

## PAGE 3: Service Interest

### Field 13
- **Label:** Which service sounds most interesting?
- **Type:** Multiple choice
- **Required:** No
- **Field key:** interestedTier
- **Options:**
  - Monthly Compliance Care ($250/month) — calendar, reminders, status reports
  - Full Compliance Operations ($700/month) — everything plus TCC readiness and exemption monitoring
  - Enterprise Back-Office ($1,500/month) — multi-entity, monthly reporting pack
  - I'm not sure yet — just want a review
- **Airtable mapping:** Tier (approximate)

### Field 14
- **Label:** How did you hear about Current Bahamas?
- **Type:** Dropdown
- **Required:** No
- **Field key:** hearAboutUs
- **Options:** Word of mouth · Google search · LinkedIn · Facebook · Referral from accountant · Referral from friend/colleague · Other
- **Airtable mapping:** Notes (appended)

---

## CONFIRMATION PAGE

**Title:** "Thanks — we'll be in touch within 1 business day."
**Body:** "We've received your details and will review your compliance situation. Expect a message from hello@currentbahamas.com or a WhatsApp from our team. In the meantime, feel free to email us with any urgent questions."

---

## TALLY SETTINGS

- **Notifications:** Send email to hello@currentbahamas.com on each submission
- **Webhook:** POST https://currentbahamas.com/api/intake
- **Airtable integration:** Also connect natively via Tally → Airtable integration as a backup to the webhook
- **Redirect after submit:** No redirect — show confirmation page

---

## FIELD KEY REFERENCE (for webhook mapping in /api/intake/route.ts)

```
businessName   → Clients: Business Name
contactName    → Clients: Contact Name
email          → Clients: Email
whatsapp       → Clients: WhatsApp
island         → Clients: Island
industry       → Clients: Industry
staffCount     → Clients: Notes (appended)
vatRegistered  → Clients: VAT Registered
importActive   → Clients: Import Active
govFacing      → Clients: Gov Facing
biggestPain    → Clients: Notes (appended)
currentApproach→ Clients: Notes (appended)
interestedTier → Clients: Tier (approximate — CB confirms on onboarding call)
hearAboutUs    → Clients: Notes (appended)
```

All new submissions → Status: onboarding, External/Internal: external, Onboard Date: today.
