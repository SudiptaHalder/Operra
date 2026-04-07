import { NextRequest, NextResponse } from 'next/server'
import { renderToStream } from '@react-pdf/renderer'
import { guides } from '@/data/guides'
import { GuidePDF } from '@/lib/pdf-generator'

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const id = searchParams.get('id')

  if (!id) {
    return NextResponse.json({ error: 'Guide ID required' }, { status: 400 })
  }

  const guide = guides.find(g => g.id === id)

  if (!guide) {
    return NextResponse.json({ error: 'Guide not found' }, { status: 404 })
  }

  try {
    // Generate PDF stream
    const pdfStream = await renderToStream(
      <GuidePDF title={guide.title} content={guide.content} />
    )

    // Convert stream to buffer
    const chunks: Uint8Array[] = []
    for await (const chunk of pdfStream as any) {
      chunks.push(chunk)
    }
    const pdfBuffer = Buffer.concat(chunks)

    // Return PDF
    return new NextResponse(pdfBuffer, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `attachment; filename="${guide.id}.pdf"`,
        'Content-Length': pdfBuffer.length.toString(),
      },
    })
  } catch (error) {
    console.error('PDF generation error:', error)
    return NextResponse.json({ error: 'Failed to generate PDF' }, { status: 500 })
  }
}
