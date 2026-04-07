import { NextRequest, NextResponse } from 'next/server'
import { guides } from '@/data/guides'

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

  // Create HTML content that looks like a PDF
  const htmlContent = `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>${guide.title}</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      max-width: 800px;
      margin: 0 auto;
      padding: 40px;
      color: #333;
    }
    h1 {
      color: #4F46E5;
      text-align: center;
      font-size: 28px;
      margin-bottom: 30px;
    }
    h2 {
      color: #1F2937;
      font-size: 22px;
      margin-top: 30px;
      margin-bottom: 15px;
      border-bottom: 2px solid #E5E7EB;
      padding-bottom: 8px;
    }
    h3 {
      color: #374151;
      font-size: 18px;
      margin-top: 20px;
      margin-bottom: 10px;
    }
    ul, ol {
      margin: 10px 0;
      padding-left: 30px;
    }
    li {
      margin: 5px 0;
    }
    table {
      width: 100%;
      border-collapse: collapse;
      margin: 15px 0;
    }
    th, td {
      border: 1px solid #E5E7EB;
      padding: 8px;
      text-align: left;
    }
    th {
      background-color: #F3F4F6;
      font-weight: bold;
    }
    code {
      background-color: #F3F4F6;
      padding: 2px 4px;
      border-radius: 4px;
      font-family: monospace;
    }
    hr {
      border: none;
      border-top: 1px solid #E5E7EB;
      margin: 20px 0;
    }
    .footer {
      margin-top: 50px;
      padding-top: 20px;
      border-top: 1px solid #E5E7EB;
      text-align: center;
      font-size: 12px;
      color: #9CA3AF;
    }
    @media print {
      body {
        margin: 0;
        padding: 20px;
      }
    }
  </style>
</head>
<body>
  <h1>${guide.title}</h1>
  <div class="content">
    ${guide.content
      .split('\n')
      .map(line => {
        if (line.startsWith('# ')) {
          return `<h1>${line.substring(2)}</h1>`
        } else if (line.startsWith('## ')) {
          return `<h2>${line.substring(3)}</h2>`
        } else if (line.startsWith('### ')) {
          return `<h3>${line.substring(4)}</h3>`
        } else if (line.startsWith('- ') || line.startsWith('• ')) {
          return `<li>${line.substring(2)}</li>`
        } else if (line.match(/^\d+\./)) {
          return `<li>${line}</li>`
        } else if (line.startsWith('---')) {
          return `<hr/>`
        } else if (line.includes('|') && line.includes('-|-')) {
          return '' // Skip table separator
        } else if (line.includes('|')) {
          const cells = line.split('|').filter(c => c.trim())
          if (cells.length > 0) {
            return `<tr>${cells.map(c => `<td>${c.trim()}</td>`).join('')}</tr>`
          }
          return line
        } else if (line.trim() === '') {
          return '<br/>'
        } else if (line.startsWith('```')) {
          return ''
        } else {
          return `<p>${line}</p>`
        }
      })
      .join('\n')}
  </div>
  <div class="footer">
    © ${new Date().getFullYear()} Trezbo - Business Management Software | trezbo.com
  </div>
</body>
</html>`

  // Return as HTML file (can be opened in browser and printed as PDF)
  return new NextResponse(htmlContent, {
    headers: {
      'Content-Type': 'text/html',
      'Content-Disposition': `attachment; filename="${guide.id}.html"`,
      'Cache-Control': 'no-cache',
    },
  })
}
