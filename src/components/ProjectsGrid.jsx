import { Link } from 'react-router-dom'
import { SHEET_URLS } from '../utils/sheetFetcher.js'
import { useSheetData } from '../utils/useSheetData.js'

/**
 * Struktur kolom Google Sheets yang diharapkan (baris pertama = header):
 * ID | Judul | Kategori | Deskripsi Singkat | Tech Stack | Github Link | Konten Detail
 */
export default function ProjectsGrid() {
  const { data, isLoading, isError, errorMessage } = useSheetData(SHEET_URLS.projects)

  return (
    <section id="projects" className="px-6 py-24 border-t border-line">
      <div className="max-w-6xl mx-auto">
        {/* <p className="terminal-eyebrow mb-3">ls projects/ -l</p> */}
        <h2 className="font-display font-bold text-3xl mb-10">Proyek</h2>

        {isLoading && (
          <div className="font-mono text-sm text-muted flex items-center gap-3">
            <span className="w-3 h-3 rounded-full bg-accent animate-ping" />
            Mengambil data proyek dari Google Sheets...
          </div>
        )}

        {isError && !isLoading && (
          <div className="font-mono text-sm text-red-600 border border-red-200 bg-red-50 rounded-md p-4">
            Gagal memuat data proyek: {errorMessage}
          </div>
        )}

        {!isLoading && !isError && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.map((project) => (
              <article
                key={project.ID}
                className="bbox-frame border border-line rounded-lg p-6 bg-panel flex flex-col"
              >
                <span className="font-mono text-xs text-detect mb-2">
                  {project.Kategori}
                </span>
                <h3 className="font-display font-semibold text-lg mb-2">
                  {project.Judul}
                </h3>
                <p className="text-muted text-sm flex-1 mb-4">
                  {project['Deskripsi Singkat']}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-5">
                  {(project['Tech Stack'] || '')
                    .split(',')
                    .filter(Boolean)
                    .map((tech) => (
                      <span
                        key={tech}
                        className="font-mono text-[11px] border border-line rounded px-2 py-1 text-muted"
                      >
                        {tech.trim()}
                      </span>
                    ))}
                </div>

                <Link
                  to={`/project/${project.ID}`}
                  className="font-mono text-sm text-accent hover:underline self-start"
                >
                  Baca Selengkapnya →
                </Link>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
