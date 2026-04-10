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
      referral,
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

    const row = (label: string, value: string) => value ? `
      <tr>
        <td style="padding:12px 0;border-bottom:1px solid #e5e5e5;vertical-align:top;">
          <span style="font-size:12px;font-weight:600;color:#888;text-transform:uppercase;letter-spacing:0.05em;">${label}</span><br/>
          <span style="font-size:14px;color:#111;margin-top:3px;display:block;">${value}</span>
        </td>
      </tr>` : ''

    const emailHtml = `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f0ede8;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f0ede8;padding:32px 16px;">
    <tr><td align="center">
      <table width="100%" cellpadding="0" cellspacing="0" style="max-width:480px;background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 1px 4px rgba(0,0,0,0.08);">

        <!-- Header -->
        <tr>
          <td style="padding:24px 28px 16px;border-bottom:1px solid #e5e5e5;">
            <p style="margin:0;font-size:11px;font-weight:700;color:#db0695;text-transform:uppercase;letter-spacing:0.08em;">New Enquiry</p>
            <p style="margin:6px 0 0;font-size:20px;font-weight:700;color:#111;">Shield Fencing</p>
          </td>
        </tr>

        <!-- Project details -->
        <tr>
          <td style="padding:4px 28px 0;">
            <table width="100%" cellpadding="0" cellspacing="0">
              ${row('What type of project are you planning?', projectList)}
              ${fencingLength ? row('Approximate total fencing length', fencingLength) : ''}
              ${wallLength ? row('Approximate total wall length', wallLength) : ''}
              ${propertyRelation ? row('Property relation', propertyRelation) : ''}
              ${sharedBoundary ? row('Shared boundary', sharedBoundary === 'yes' ? 'Yes — shared boundary' : sharedBoundary === 'no' ? 'No — fully within my property' : 'Not sure') : ''}
              ${timeline ? row('When are you hoping to have your fencing project started?', timeline) : ''}
              ${priority ? row('Beyond the quality of the fence itself, what matters most to you when choosing a fencing contractor?', priority) : ''}
              ${details ? row('Project details (optional)', details) : ''}
              ${body.priceAlignment ? row('Does this general investment range align with what you had in mind?', body.priceAlignment) : ''}
              ${referral ? row('How did you hear about us?', referral) : ''}
            </table>
          </td>
        </tr>

        <!-- Contact details (2-col) -->
        <tr>
          <td style="padding:16px 28px 24px;">
            <table width="100%" cellpadding="0" cellspacing="0" style="border-top:1px solid #e5e5e5;padding-top:16px;">
              <tr>
                <td width="50%" style="vertical-align:top;padding-bottom:12px;">
                  <span style="font-size:12px;font-weight:600;color:#888;text-transform:uppercase;letter-spacing:0.05em;">First name</span><br/>
                  <span style="font-size:14px;color:#111;margin-top:3px;display:block;">${name}</span>
                </td>
                <td width="50%" style="vertical-align:top;padding-bottom:12px;">
                  <span style="font-size:12px;font-weight:600;color:#888;text-transform:uppercase;letter-spacing:0.05em;">Phone number</span><br/>
                  <a href="tel:${phone}" style="font-size:14px;color:#111;text-decoration:none;margin-top:3px;display:block;">${phone}</a>
                </td>
              </tr>
              <tr>
                <td width="50%" style="vertical-align:top;">
                  <span style="font-size:12px;font-weight:600;color:#888;text-transform:uppercase;letter-spacing:0.05em;">Email</span><br/>
                  <a href="mailto:${email}" style="font-size:14px;color:#db0695;text-decoration:none;margin-top:3px;display:block;">${email}</a>
                </td>
                <td width="50%" style="vertical-align:top;">
                  <span style="font-size:12px;font-weight:600;color:#888;text-transform:uppercase;letter-spacing:0.05em;">Suburb</span><br/>
                  <span style="font-size:14px;color:#111;margin-top:3px;display:block;">${suburb || '—'}</span>
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="padding:12px 28px;border-top:1px solid #e5e5e5;text-align:center;">
            <span style="font-size:12px;color:#aaa;">Sent from <strong style="color:#888;">Shield Fencing</strong></span>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`

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
          subject: `${name} · ${suburb || '—'} · ${phone} · ${email}`,
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
