// Data publikasi bisa juga dipindah ke Google Sheets dengan pola yang sama
// seperti Skills/Projects (kolom: Judul, Jurnal, Tahun, Link). Untuk contoh
// ini dibuat sebagai array tetap karena jumlahnya biasanya sedikit.
const PUBLICATIONS = [
  {
    title: 'Implementation of SSL-Vision Transformer (ViT) for Multi-Lung Disease Classification on X-Ray Images',
    journal: 'Politeknik Negeri Batam',
    year: '2025',
    link: 'https://doi.org/10.30871/jaic.v10i1.11844',
  },
  {
    title: 'IMPLEMENTASI VISION TRANSFORMER (VIT) UNTUK KLASIFIKASI MULTI-PENYAKIT PARU PADA CITRA X-RAY',
    journal: 'Universitas AMIKOM Yogyakarta',
    year: '2025',
    link: 'https://eprints.amikom.ac.id/id/eprint/31316/',
  },
]

export default function Publications() {
  return (
    <section id="publications" className="px-6 py-24 border-t border-line bg-panel">
      <div className="max-w-6xl mx-auto">
        {/* <p className="terminal-eyebrow mb-3">cat publications.bib</p> */}
        <h2 className="font-display font-bold text-3xl mb-10">Publikasi</h2>

        <ul className="space-y-6">
          {PUBLICATIONS.map((pub) => (
            <li
              key={pub.title}
              className="border-b border-line pb-6 last:border-none flex flex-col md:flex-row md:items-baseline md:justify-between gap-2"
            >
              <div>
                <h3 className="font-display font-medium text-lg">{pub.title}</h3>
                <p className="text-muted text-sm mt-1">
                  {pub.journal} &middot; {pub.year}
                </p>
              </div>
              <a
                href={pub.link}
                className="font-mono text-sm text-accent hover:underline whitespace-nowrap"
              >
                Baca Publikasi →
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
