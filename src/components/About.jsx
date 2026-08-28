import { SHEET_URLS } from '../utils/sheetFetcher.js'
import { useSheetData } from '../utils/useSheetData.js'

/**
 * Struktur kolom Google Sheets yang diharapkan (baris pertama = header):
 * Kategori | Skill
 *
 * Contoh baris:
 * Profile   | 
 * lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.
 */

export default function About() {
  const { data, isLoading, isError, errorMessage } = useSheetData(SHEET_URLS.profile)

  return (
    <section id="about" className="px-6 py-24 border-t border-line">
      <div className="max-w-6xl mx-auto grid md:grid-cols-[0.4fr_0.6fr] gap-12">
        <div>
          <p className="terminal-eyebrow mb-3">cat about.md</p>
          <h2 className="font-display font-bold text-3xl">Tentang Saya</h2>
        </div>

        <div className=" leading-relaxed space-y-4 text-base md:text-lg">
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
            <div className="space-y-4">
              {data.map((row, index) => (
                <p key={index}>{row.About_Me}</p>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
