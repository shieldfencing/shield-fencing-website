import { handleUpload, type HandleUploadBody } from '@vercel/blob/client'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const body = (await req.json()) as HandleUploadBody

  try {
    const jsonResponse = await handleUpload({
      body,
      request: req,
      onBeforeGenerateToken: async () => ({
        allowedContentTypes: [
          'image/jpeg', 'image/png', 'image/webp', 'image/heic', 'image/heif',
          'application/pdf',
          'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        ],
        maximumSizeInBytes: 15 * 1024 * 1024,
      }),
      onUploadCompleted: async () => {},
    })
    return NextResponse.json(jsonResponse)
  } catch (err) {
    console.error('Upload error:', err)
    return NextResponse.json({ error: 'Upload failed' }, { status: 500 })
  }
}
