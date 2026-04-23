import { NextRequest, NextResponse } from 'next/server'

// Current Bahamas — Intake form webhook handler
// Called by Tally.so webhook on form submission
// Writes to Airtable Clients table as a new lead record

export async function POST(request: NextRequest) {
  try {
    // Tally sends JSON webhook payload
    const payload = await request.json()

    // Tally webhook structure: { formId, responseId, fields: [{key, label, value}] }
    const fields = payload.fields ?? []
    const get = (key: string) => fields.find((f: { key: string }) => f.key === key)?.value ?? ''

    const businessName   = get('businessName')
    const contactName    = get('contactName')
    const email          = get('email')
    const whatsapp       = get('whatsapp')
    const island         = get('island')
    const industry       = get('industry')
    const staffCount     = get('staffCount')
    const vatRegistered  = get('vatRegistered')
    const importActive   = get('importActive')
    const govFacing      = get('govFacing')
    const biggestPain    = get('biggestPain')
    const currentApproach = get('currentApproach')
    const interestedTier = get('interestedTier')
    const hearAboutUs    = get('hearAboutUs')

    if (!email || !businessName) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const airtableKey  = process.env.AIRTABLE_API_KEY
    const airtableBase = process.env.AIRTABLE_BASE_ID

    if (airtableKey && airtableBase) {
      const res = await fetch(
        `https://api.airtable.com/v0/${airtableBase}/Clients`,
        {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${airtableKey}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            fields: {
              'Business Name':     businessName,
              'Contact Name':      contactName,
              'Email':             email,
              'WhatsApp':          whatsapp,
              'Island':            island,
              'Industry':          industry,
              'External/Internal': 'external',
              'Status':            'onboarding',
              'Tier':              interestedTier || '',
              'VAT Registered':    vatRegistered === 'Yes',
              'Import Active':     importActive === 'Yes',
              'Gov Facing':        govFacing === 'Yes',
              'Notes':             `Staff: ${staffCount}\nBiggest pain: ${biggestPain}\nCurrent approach: ${currentApproach}\nHeard via: ${hearAboutUs}`,
              'Onboard Date':      new Date().toISOString().split('T')[0],
            },
          }),
        }
      )

      if (!res.ok) {
        const err = await res.text()
        console.error('Airtable intake write failed:', err)
        return NextResponse.json({ error: 'Airtable write failed' }, { status: 500 })
      }

      const record = await res.json()
      console.log('[CB-INTAKE] Created Airtable record:', record.id)
    } else {
      console.log('[CB-INTAKE] Airtable not configured. Intake submission:', { businessName, email })
    }

    // Trigger n8n CB-ONBOARD-SEQ via webhook if configured
    // (Airtable trigger will also fire it, but webhook is faster)
    const n8nWebhook = process.env.N8N_WEBHOOK_INTAKE
    if (n8nWebhook) {
      fetch(n8nWebhook, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ businessName, contactName, email, whatsapp, island, industry }),
      }).catch(err => console.error('n8n intake webhook failed:', err))
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Intake webhook error:', err)
    return NextResponse.json({ error: 'Internal error' }, { status: 500 })
  }
}
