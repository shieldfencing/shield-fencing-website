import { NextRequest, NextResponse } from 'next/server'

// ─── Configure your email recipient here ──────────────────────────────────────
const TO_EMAIL = 'accounts@shieldfencing.com.au'

// Using Resend (recommended) — add RESEND_API_KEY to your .env.local
// Alternatively swap this out for any email provider

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()

    const {
      projectTypes,
      fencingLength,
      wallLength,
      propertyRelation,
      sharedBoundary,
      timeline,
      priority,
      details,
      name,
      email,
      phone,
      suburb,
    } = body

    // Basic validation
    if (!name || !email || !phone) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const projectLabels: Record<string, string> = {
      'retaining-wall': 'Retaining Wall',
      colorbond: 'Colorbond® Fence',
      timber: 'Timber Fence',
    }

    const projectList = (projectTypes as string[])
      .map((t) => projectLabels[t] ?? t)
      .join(', ')

    const emailHtml = `
      <h2>New Enquiry from Shield Fencing Website</h2>
      <table cellpadding="8" style="border-collapse:collapse;width:100%;font-family:sans-serif;font-size:14px;">
        <tr style="background:#f6f4f6">
          <td><strong>Name</strong></td>
          <td>${name}</td>
        </tr>
        <tr>
          <td><strong>Phone</strong></td>
          <td><a href="tel:${phone}">${phone}</a></td>
        </tr>
        <tr style="background:#f6f4f6">
          <td><strong>Email</strong></td>
          <td><a href="mailto:${email}">${email}</a></td>
        </tr>
        <tr>
          <td><strong>Suburb</strong></td>
          <td>${suburb || '—'}</td>
        </tr>
        <tr style="background:#f6f4f6">
          <td><strong>Project Types</strong></td>
          <td>${projectList}</td>
        </tr>
        ${fencingLength ? `<tr><td><strong>Fencing Length</strong></td><td>${fencingLength}</td></tr>` : ''}
        ${wallLength ? `<tr style="background:#f6f4f6"><td><strong>Wall Length</strong></td><td>${wallLength}</td></tr>` : ''}
        <tr>
          <td><strong>Property Relation</strong></td>
          <td>${propertyRelation || '—'}</td>
        </tr>
        <tr style="background:#f6f4f6">
          <td><strong>Shared Boundary</strong></td>
          <td>${sharedBoundary || '—'}</td>
        </tr>
        <tr>
          <td><strong>Timeline</strong></td>
          <td>${timeline || '—'}</td>
        </tr>
        <tr style="background:#f6f4f6">
          <td><strong>Priority</strong></td>
          <td>${priority || '—'}</td>
        </tr>
        ${details ? `<tr><td><strong>Additional Details</strong></td><td>${details}</td></tr>` : ''}
      </table>
    `

    const apiKey = process.env.RESEND_API_KEY

    if (apiKey) {
      // Send via Resend
      const resendRes = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'Shield Fencing Website <noreply@shieldfencing.com.au>',
          to: [TO_EMAIL],
          subject: `New Enquiry: ${name} — ${projectList}`,
          html: emailHtml,
          reply_to: email,
        }),
      })

      if (!resendRes.ok) {
        const err = await resendRes.text()
        console.error('Resend error:', err)
        return NextResponse.json({ error: 'Email failed' }, { status: 500 })
      }
    } else {
      // Fallback: just log (useful in dev)
      console.log('=== ENQUIRY (no RESEND_API_KEY set) ===')
      console.log({ name, phone, email, suburb, projectList, timeline, details })
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Enquiry API error:', err)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
