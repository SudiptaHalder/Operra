import React from 'react'
import { Document, Page, Text, View, StyleSheet, Font } from '@react-pdf/renderer'

// Register fonts
Font.register({
  family: 'Helvetica',
  fonts: [
    { src: 'https://fonts.gstatic.com/s/opensans/v18/mem8YaGs126MiZpBA-UFVZ0bf8pkAg.woff2' }
  ]
})

const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontFamily: 'Helvetica',
    fontSize: 11,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#4F46E5',
  },
  chapter: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
    backgroundColor: '#F3F4F6',
    padding: 8,
  },
  section: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 8,
    color: '#374151',
  },
  text: {
    fontSize: 11,
    marginBottom: 5,
    lineHeight: 1.5,
  },
  bullet: {
    fontSize: 11,
    marginBottom: 3,
    marginLeft: 15,
  },
  code: {
    fontSize: 10,
    fontFamily: 'Courier',
    backgroundColor: '#F9FAFB',
    padding: 8,
    marginVertical: 8,
  },
  table: {
    marginVertical: 10,
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
    paddingVertical: 5,
  },
  tableHeader: {
    backgroundColor: '#F3F4F6',
    fontWeight: 'bold',
  },
  tableCell: {
    flex: 1,
    fontSize: 10,
  },
  footer: {
    position: 'absolute',
    bottom: 30,
    left: 40,
    right: 40,
    textAlign: 'center',
    fontSize: 8,
    color: '#9CA3AF',
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
    paddingTop: 10,
  },
})

interface GuidePDFProps {
  title: string
  content: string
}

export const GuidePDF = ({ title, content }: GuidePDFProps) => {
  // Parse content into sections
  const lines = content.split('\n')
  const sections: { type: string; content: string }[] = []
  let currentSection: { type: string; content: string } = { type: 'text', content: '' }

  lines.forEach(line => {
    if (line.startsWith('# ')) {
      if (currentSection.content) sections.push(currentSection)
      currentSection = { type: 'title', content: line.replace('# ', '') }
      sections.push(currentSection)
      currentSection = { type: 'text', content: '' }
    } else if (line.startsWith('## ')) {
      if (currentSection.content) sections.push(currentSection)
      currentSection = { type: 'section', content: line.replace('## ', '') }
      sections.push(currentSection)
      currentSection = { type: 'text', content: '' }
    } else if (line.startsWith('---')) {
      // Skip separators
    } else if (line.trim() === '') {
      if (currentSection.content) {
        sections.push(currentSection)
        currentSection = { type: 'text', content: '' }
      }
    } else {
      currentSection.content += (currentSection.content ? '\n' : '') + line
    }
  })
  if (currentSection.content) sections.push(currentSection)

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Title */}
        <Text style={styles.title}>{title}</Text>
        
        {/* Content sections */}
        {sections.map((section, idx) => {
          if (section.type === 'section') {
            return (
              <Text key={idx} style={styles.section}>
                {section.content}
              </Text>
            )
          } else if (section.type === 'title') {
            return (
              <Text key={idx} style={styles.chapter}>
                {section.content}
              </Text>
            )
          } else if (section.content.trim()) {
            // Split into paragraphs
            const paragraphs = section.content.split('\n')
            return (
              <View key={idx}>
                {paragraphs.map((para, pIdx) => {
                  if (para.startsWith('- ') || para.startsWith('• ')) {
                    return (
                      <Text key={pIdx} style={styles.bullet}>
                        • {para.substring(2)}
                      </Text>
                    )
                  } else if (para.match(/^\d+\./)) {
                    return (
                      <Text key={pIdx} style={styles.bullet}>
                        {para}
                      </Text>
                    )
                  } else if (para.startsWith('```')) {
                    return null
                  } else if (para.includes('|')) {
                    // Simple table rendering
                    const cells = para.split('|').filter(c => c.trim())
                    return (
                      <View key={pIdx} style={styles.tableRow}>
                        {cells.map((cell, cIdx) => (
                          <Text key={cIdx} style={styles.tableCell}>
                            {cell.trim()}
                          </Text>
                        ))}
                      </View>
                    )
                  } else if (para.trim()) {
                    return (
                      <Text key={pIdx} style={styles.text}>
                        {para}
                      </Text>
                    )
                  }
                  return null
                })}
              </View>
            )
          }
          return null
        })}
        
        {/* Footer */}
        <Text style={styles.footer}>
          © {new Date().getFullYear()} Trezbo - Business Management Software | trezbo.com
        </Text>
      </Page>
    </Document>
  )
}
