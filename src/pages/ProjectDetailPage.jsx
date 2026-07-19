import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { SHEET_URLS } from '../utils/sheetFetcher.js'
import { useSheetData } from '../utils/useSheetData.js'

export default function ProjectDetailPage() {
  const { id } = useParams()
  const { data, isLoading, isError, errorMessage } = useSheetData(SHEET_URLS.projects)

  // Fix untuk bug scroll: React Router TIDAK otomatis mereset posisi scroll
  // saat pindah dari HomePage (yang sudah di-scroll jauh ke bawah, mis. ke
  // section Projects) menuju ProjectDetailPage. Tanpa ini, halaman detail
  // akan langsung terbuka di posisi scroll yang sama seperti halaman
  // sebelumnya, seolah-olah "meloncat" ke tengah konten.
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [id])

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center font-mono text-sm text-muted">
        <span className="w-3 h-3 rounded-full bg-accent animate-ping mr-3" />
        Memuat detail proyek...
      </div>
    )
  }

  if (isError) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4 px-6 text-center">
        <p className="font-mono text-sm text-red-600">
          Gagal memuat data proyek: {errorMessage}
        </p>
        <Link to="/" className="font-mono text-sm text-accent hover:underline">
          ← Kembali ke Beranda
        </Link>
      </div>
    )
  }

  const project = data.find((item) => String(item.ID) === String(id))

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4 px-6 text-center">
        <p className="font-mono text-sm text-muted">
          Proyek dengan ID "{id}" tidak ditemukan.
        </p>
        <Link to="/" className="font-mono text-sm text-accent hover:underline">
          ← Kembali ke Beranda
        </Link>
      </div>
    )
  }

  return (
    <article className="min-h-screen px-6 pt-28 pb-20">
      <div className="max-w-3xl mx-auto">
        <Link
          to="/#projects"
          className="font-mono text-sm text-accent hover:underline inline-block mb-8"
        >
          ← Kembali ke semua proyek
        </Link>

        <span className="font-mono text-xs text-detect">{project.Kategori}</span>
        <h1 className="font-display font-bold text-3xl md:text-4xl mt-2 mb-4">
          {project.Judul}
        </h1>

        <div className="flex flex-wrap gap-2 mb-8">
          {(project['Tech Stack'] || '')
            .split(',')
            .filter(Boolean)
            .map((tech) => (
              <span
                key={tech}
                className="font-mono text-xs border border-line rounded px-2.5 py-1 text-muted"
              >
                {tech.trim()}
              </span>
            ))}
        </div>

        {project['Github Link'] && (
          <a
            href={project['Github Link']}
            target="_blank"
            rel="noreferrer"
            className="inline-block font-mono text-sm bg-ink text-paper px-5 py-2.5 rounded-md hover:bg-accent transition-colors mb-10"
          >
            Lihat Repository →
          </a>
        )}

        {/*
          "Konten Detail" boleh berisi HTML dasar dari Google Sheets (mis.
          <p>, <h3>, <ul>, <img>). Kita render dengan dangerouslySetInnerHTML
          karena sumber datanya adalah spreadsheet milik sendiri (trusted
          source), bukan input dari pengguna publik.
        */}
        <div
          className="prose-content leading-relaxed text-ink [&_h3]:font-display [&_h3]:font-semibold [&_h3]:text-xl [&_h3]:mt-8 [&_h3]:mb-3 [&_p]:mb-4 [&_p]:text-muted [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:mb-4 [&_ul]:text-muted [&_img]:rounded-lg [&_img]:my-6"
          dangerouslySetInnerHTML={{
            __html: 
            // project['Konten Detail'] || 
            `<p>${project['Deskripsi'] || ''}</p>`,
          }}
        />
      </div>
    </article>
  )
}
