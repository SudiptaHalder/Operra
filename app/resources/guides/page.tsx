'use client'

import { useState } from 'react'
import { BookOpen, Download, Search, Loader2 } from 'lucide-react'
import { guides } from '@/data/guides'

export default function GuidesPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [downloading, setDownloading] = useState<string | null>(null)

  const filteredGuides = guides.filter(
    (guide) =>
      guide.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      guide.description.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleDownload = async (id: string) => {
    setDownloading(id)
    try {
      const res = await fetch(`/api/download?id=${id}`)
      const blob = await res.blob()

      const url = window.URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = `${id}.html`
      a.click()
      window.URL.revokeObjectURL(url)
    } catch (err) {
      alert('Download failed')
    } finally {
      setDownloading(null)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* HERO */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white py-20 text-center">
        <h1 className="text-4xl font-bold mb-4">Guides & eBooks</h1>
        <p className="text-indigo-100">
          Free resources to grow your business smarter with Trezbo
        </p>
      </div>

      {/* SEARCH */}
      <div className="max-w-5xl mx-auto px-4 mt-10">
        <div className="relative mb-8">
          <Search className="absolute left-3 top-3 text-gray-400" />
          <input
            type="text"
            placeholder="Search guides..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 py-3 rounded-xl border"
          />
        </div>

        {/* CARDS */}
        <div className="grid md:grid-cols-2 gap-6">
          {filteredGuides.map((guide) => (
            <div
              key={guide.id}
              className="bg-white p-6 rounded-xl border hover:shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-2">{guide.title}</h3>
              <p className="text-gray-600 mb-4">{guide.description}</p>

              <button
                onClick={() => handleDownload(guide.id)}
                className="w-full bg-indigo-600 text-white py-2 rounded-lg flex items-center justify-center gap-2"
              >
                {downloading === guide.id ? (
                  <>
                    <Loader2 className="animate-spin h-4 w-4" />
                    Downloading...
                  </>
                ) : (
                  <>
                    <Download className="h-4 w-4" />
                    Download Guide
                  </>
                )}
              </button>
            </div>
          ))}
        </div>

        {/* EMPTY STATE */}
        {filteredGuides.length === 0 && (
          <div className="text-center mt-20">
            <BookOpen className="mx-auto h-12 w-12 text-gray-300" />
            <p className="mt-4 text-gray-500">No guides found</p>
          </div>
        )}
      </div>
    </div>
  )
}