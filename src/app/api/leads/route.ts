import { NextRequest, NextResponse } from 'next/server'
import { list } from '@vercel/blob'

const CSV_BLOB_PATH = 'leads/enquiries.csv'
const LEADS_SECRET = process.env.LEADS_SECRET

export async function GET(req: NextRequest) {
  const secret = req.nextUrl.searchParams.get('secret')
  if (!LEADS_SECRET || secret !== LEADS_SECRET) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const blobs = await list({ prefix: 'leads/' })
    const csvBlob = blobs.blobs.find((b) => b.pathname === CSV_BLOB_PATH)

    if (!csvBlob) {
      return new NextResponse('No leads yet', { status: 404 })
    }

    const res = await fetch(csvBlob.url)
    const csv = await res.text()

    return new NextResponse(csv, {
      headers: {
        'Content-Type': 'text/csv',
        'Content-Disposition': `attachment; filename="shield-fencing-leads-${new Date().toISOString().split('T')[0]}.csv"`,
      },
    })
  } catch (err) {
    console.error('Leads download error:', err)
    return NextResponse.json({ error: 'Failed to fetch leads' }, { status: 500 })
  }
}
