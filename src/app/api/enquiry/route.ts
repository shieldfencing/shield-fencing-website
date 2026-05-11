import { NextRequest, NextResponse } from 'next/server'
import { put, list } from '@vercel/blob'

export const maxDuration = 30

const TO_EMAIL = 'accounts@shieldfencing.com.au'
const CSV_BLOB_PATH = 'leads/enquiries.csv'

const GOOGLE_SHEET_WEBHOOK_URL = process.env.GOOGLE_SHEET_WEBHOOK_URL

const CSV_HEADERS = [
  'Timestamp',
  'Name',
  'Email',
  'Phone',
  'Suburb',
  'Project Types',
  'Fencing Length',
  'Wall Length',
  'Property Relation',
  'Shared Boundary',
  'Timeline',
  'Priority',
  'Details',
  'Price Alignment',
  'Referral',
]

async function appendToGoogleSheet(fields: Record<string, string>) {
  if (!GOOGLE_SHEET_WEBHOOK_URL) return
  try {
    await fetch(GOOGLE_SHEET_WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(fields),
    })
  } catch (err) {
    console.error('Google Sheet append error:', err)
  }
}

function escapeCSV(value: string): string {
  if (!value) return ''
  if (value.includes(',') || value.includes('"') || value.includes('\n')) {
    return `"${value.replace(/"/g, '""')}"`
  }
  return value
}

async function appendLeadToCSV(fields: Record<string, string>) {
  let existing = ''
  try {
    const blobs = await list({ prefix: 'leads/' })
    const csvBlob = blobs.blobs.find((b) => b.pathname === CSV_BLOB_PATH)
    if (csvBlob) {
      const res = await fetch(csvBlob.url)
      existing = await res.text()
    }
  } catch {
    // first entry — file doesn't exist yet
  }

  if (!existing) {
    existing = CSV_HEADERS.map(escapeCSV).join(',') + '\n'
  }

  const row = CSV_HEADERS.map((h) => escapeCSV(fields[h] ?? '')).join(',') + '\n'
  const updated = existing + row

  await put(CSV_BLOB_PATH, updated, { access: 'public', addRandomSuffix: false })
}

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
      files,
    } = body

    if (!name || !email || !phone) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const uploadedFiles = (files ?? []) as { url: string; filename: string }[]

    const imageExts = ['jpg', 'jpeg', 'png', 'gif', 'webp', 'heic', 'heif']
    const isImage = (name: string) => {
      const ext = name.split('.').pop()?.toLowerCase() ?? ''
      return imageExts.includes(ext)
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

    const fileSection = uploadedFiles.length > 0
      ? `<tr><td style="padding:12px 0;border-bottom:1px solid #e5e5e5;vertical-align:top;">
          <span style="font-size:12px;font-weight:600;color:#888;text-transform:uppercase;letter-spacing:0.05em;">Attachments (${uploadedFiles.length})</span>
          <table width="100%" cellpadding="0" cellspacing="0" style="margin-top:10px;"><tr>
          ${uploadedFiles.map((f) =>
            isImage(f.filename)
              ? `<td style="width:120px;padding:4px;vertical-align:top;"><a href="${f.url}" style="display:block;"><img src="${f.url}" width="120" style="width:120px;height:90px;object-fit:cover;border-radius:6px;display:block;" alt="${f.filename}" /></a><span style="font-size:10px;color:#888;display:block;margin-top:2px;word-break:break-all;">${f.filename}</span></td>`
              : `<td style="width:120px;padding:4px;vertical-align:top;"><a href="${f.url}" style="display:block;width:120px;height:90px;background:#f5f5f5;border-radius:6px;text-align:center;line-height:90px;font-size:24px;text-decoration:none;">📎</a><span style="font-size:10px;color:#888;display:block;margin-top:2px;word-break:break-all;"><a href="${f.url}" style="color:#db0695;">${f.filename}</a></span></td>`
          ).join('')}
          </tr></table>
        </td></tr>`
      : ''

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
              ${fileSection}
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
      const resendRes = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'Shield Fencing Website <noreply@shieldfencing.com.au>',
          to: [TO_EMAIL],
          subject: `${(name ?? '').split(' ')[0]} ${suburb || '—'} ${phone} ${email}`,
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
      console.log('=== ENQUIRY (no RESEND_API_KEY set) ===')
      console.log({ name, phone, email, suburb, projectList, timeline, details })
    }

    const sharedBoundaryLabel = sharedBoundary === 'yes'
      ? 'Yes — shared boundary'
      : sharedBoundary === 'no'
        ? 'No — fully within my property'
        : sharedBoundary === 'not-sure'
          ? 'Not sure'
          : sharedBoundary ?? ''

    try {
      await appendLeadToCSV({
        'Timestamp': new Date().toISOString(),
        'Name': name ?? '',
        'Email': email ?? '',
        'Phone': phone ?? '',
        'Suburb': suburb ?? '',
        'Project Types': projectList,
        'Fencing Length': fencingLength ?? '',
        'Wall Length': wallLength ?? '',
        'Property Relation': propertyRelation ?? '',
        'Shared Boundary': sharedBoundaryLabel,
        'Timeline': timeline ?? '',
        'Priority': priority ?? '',
        'Details': details ?? '',
        'Price Alignment': body.priceAlignment ?? '',
        'Referral': referral ?? '',
      })
    } catch (csvErr) {
      console.error('CSV append error:', csvErr)
    }

    const now = new Date()
    const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
    const dateLabel = `${months[now.getMonth()]} ${String(now.getDate()).padStart(2, '0')}`

    const sheetRow = {
      'Date': dateLabel,
      'Timestamp': now.toISOString(),
      'Name': name ?? '',
      'Email': email ?? '',
      'Phone': phone ?? '',
      'Suburb': suburb ?? '',
      'Project Types': projectList,
      'Fencing Length': fencingLength ?? '',
      'Wall Length': wallLength ?? '',
      'Property Relation': propertyRelation ?? '',
      'Shared Boundary': sharedBoundaryLabel,
      'Timeline': timeline ?? '',
      'Priority': priority ?? '',
      'Details': details ?? '',
      'Price Alignment': body.priceAlignment ?? '',
      'Referral': referral ?? '',
    }
    await appendToGoogleSheet(sheetRow)

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Enquiry API error:', err)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
