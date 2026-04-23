import { NextRequest, NextResponse } from 'next/server'

// Contact form handler
// TODO: wire to Airtable once base is live
// POST body: name, email, subject, message

export async function POST(request: NextRequest) {
  try {
    const body = await request.formData()
    const name    = body.get('name')?.toString() ?? ''
    const email   = body.get('email')?.toString() ?? ''
    const subject = body.get('subject')?.toString() ?? ''
    const message = body.get('message')?.toString() ?? ''

    if (!name || !email || !subject || !message) {
      return NextResponse.redirect(new URL('/contact?error=missing', request.url))
    }

    // TODO: POST to Airtable Contacts table
    // const airtableRes = await fetch(`https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}/Contacts`, {
    //   method: 'POST',
    //   headers: { Authorization: `Bearer ${process.env.AIRTABLE_API_KEY}`, 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ fields: { Name: name, Email: email, Subject: subject, Message: message, Source: 'website-contact' } }),
    // })

    // TODO: trigger n8n CB-CONTACT webhook

    console.log('Contact form submission:', { name, email, subject })
    return NextResponse.redirect(new URL('/contact?success=true', request.url))
  } catch (err) {
    console.error('Contact form error:', err)
    return NextResponse.redirect(new URL('/contact?error=server', request.url))
  }
}
