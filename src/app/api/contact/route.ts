import { NextRequest, NextResponse } from 'next/server'

// Current Bahamas — Contact form handler
// Writes to Airtable Clients table (as a lead/contact record)
// Requires env vars: AIRTABLE_API_KEY, AIRTABLE_BASE_ID

export async function POST(request: NextRequest) {
  try {
    const body = await request.formData()
    const name    = body.get('name')?.toString().trim() ?? ''
    const email   = body.get('email')?.toString().trim() ?? ''
    const subject = body.get('subject')?.toString().trim() ?? ''
    const message = body.get('message')?.toString().trim() ?? ''

    if (!name || !email || !subject || !message) {
      return NextResponse.redirect(new URL('/contact?error=missing', request.url))
    }

    // Write to Airtable — Contacts table (separate from Clients)
    const airtableKey  = process.env.AIRTABLE_API_KEY
    const airtableBase = process.env.AIRTABLE_BASE_ID

    if (airtableKey && airtableBase) {
      const airtableRes = await fetch(
        `https://api.airtable.com/v0/${airtableBase}/Contacts`,
        {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${airtableKey}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            fields: {
              'Name':      name,
              'Email':     email,
              'Subject':   subject,
              'Message':   message,
              'Source':    'website-contact',
              'Status':    'new',
              'Submitted': new Date().toISOString(),
            },
          }),
        }
      )

      if (!airtableRes.ok) {
        const err = await airtableRes.text()
        console.error('Airtable contact write failed:', err)
        // Don't fail the user — log and continue
      }
    } else {
      // Airtable not yet configured — log to console
      console.log('[CB-CONTACT] Airtable not configured. Submission:', { name, email, subject })
    }

    // Trigger n8n CB-CONTACT webhook if configured
    const n8nWebhook = process.env.N8N_WEBHOOK_CONTACT
    if (n8nWebhook) {
      fetch(n8nWebhook, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, subject, message, source: 'website-contact' }),
      }).catch(err => console.error('n8n webhook failed:', err))
    }

    return NextResponse.redirect(new URL('/contact?success=true', request.url))
  } catch (err) {
    console.error('Contact form error:', err)
    return NextResponse.redirect(new URL('/contact?error=server', request.url))
  }
}
