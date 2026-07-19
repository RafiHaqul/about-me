import { SHEET_URLS } from '../utils/sheetFetcher.js'
import { useSheetData } from '../utils/useSheetData.js'

/**
 * Struktur kolom Google Sheets yang diharapkan (baris pertama = header):
 * Kategori | Skill
 *
 * Contoh baris:
 * Web Dev   | ReactJS
 * Web Dev   | Laravel
 * Data & AI | Python
 * Data & AI | Random Forest
 * Data & AI | Vision Transformer (ViT)
 * Data & AI | NLP
 * Tools     | Git
 */
export default function Skills() {
  const { data, isLoading, isError, errorMessage } = useSheetData(SHEET_URLS.skills)

  const groupedSkills = data.reduce((acc, row) => {
    const category = row.Kategori || 'Lainnya'
    const skillName = row.Skill || row['Nama Skill']
    if (!skillName) return acc
    if (!acc[category]) acc[category] = []
    acc[category].push(skillName)
    return acc
  }, {})

  return (
    <section id="skills" className="px-6 py-24 border-t border-line bg-panel">
      <div className="max-w-6xl mx-auto">
        {/* <p className="terminal-eyebrow mb-3">ls skills/</p> */}
        <h2 className="font-display font-bold text-3xl mb-10">Keahlian</h2>

        {isLoading && (
          <div className="font-mono text-sm text-muted flex items-center gap-3">
            <span className="w-3 h-3 rounded-full bg-accent animate-ping" />
            Mengambil data dari Google Sheets...
          </div>
        )}

        {isError && !isLoading && (
          <div className="font-mono text-sm text-red-600 border border-red-200 bg-red-50 rounded-md p-4">
            Gagal memuat data keahlian: {errorMessage}
          </div>
        )}

        {!isLoading && !isError && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(groupedSkills).map(([category, skillList]) => (
              <div key={category}>
                <h3 className="font-display font-semibold text-sm uppercase tracking-wide text-accent mb-4">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillList.map((skill) => (
                    <span
                      key={skill}
                      className="font-mono text-xs border border-line rounded-md px-3 py-1.5 bg-paper"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
