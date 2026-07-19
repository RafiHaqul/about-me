export default function About() {
  return (
    <section id="about" className="px-6 py-24 border-t border-line">
      <div className="max-w-6xl mx-auto grid md:grid-cols-[0.4fr_0.6fr] gap-12">
        <div>
          {/* <p className="terminal-eyebrow mb-3">cat about.md</p> */}
          <h2 className="font-display font-bold text-3xl">Tentang Saya</h2>
        </div>

        <div className="text-muted leading-relaxed space-y-4 text-base md:text-lg">
          <p>
            Saya mahasiswa tingkat akhir Informatika dengan dua jalur minat yang saling
            melengkapi: <strong className="text-ink">Software Engineering</strong>{' '}
            untuk membangun aplikasi functional, dan{' '}
            <strong className="text-ink">Data Processing / Computer Vision</strong> untuk
            menjawab pertanyaan yang tidak bisa diselesaikan dengan logika if-else biasa.
          </p>
          <p>
            Di sisi rekayasa perangkat lunak, saya terbiasa membangun aplikasi web{' '}
            <em>full-stack</em> dari desain basis data, REST API, hingga antarmuka yang
            responsif. Di sisi riset, saya banyak bereksperimen dengan model klasik
            seperti Random Forest, xgboost dan sebagainya ataupun arsitektur modern 
            seperti Vision Transformer atau YOLO untuk <strong className="text-ink">Computer Vision</strong>.
          </p>
          <p>
            Ketertarikan utama saya adalah bagaimana sebuah data dapat diolah menjadi 
            informasi yang berguna, dan bagaimana informasi itu dapat disajikan dalam 
            bentuk aplikasi yang dapat digunakan oleh orang lain. Saya percaya bahwa 
            kombinasi antara kemampuan teknis dan pemahaman mendalam tentang data 
            adalah kunci untuk menciptakan solusi yang inovatif dan berdampak.
          </p>
        </div>
      </div>
    </section>
  )
}
