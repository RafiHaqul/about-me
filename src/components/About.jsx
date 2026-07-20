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
            Saya mahasiswa tingkat akhir Informatika dengan jalur minat di bidang informatika 
            seperti <strong className="text-ink">Web Developer</strong>{' '}
            untuk membangun aplikasi web yang functional, dan{' '}
            <strong className="text-ink">Data Processing atau AI/ML Engineer</strong> untuk
            mengembangkan algoritma prediktif dan otomasi sistem yang mampu mengolah 
            data kompleks menjadi solusi cerdas yang efisien.
          </p>
          <p>
            Ketertarikan utama saya adalah bagaimana sebuah data dapat diolah menjadi 
            informasi yang berguna, dan bagaimana informasi itu dapat disajikan dalam 
            bentuk aplikasi yang dapat digunakan oleh orang lain. 
            Kombinasi antara kemampuan teknis dan pemahaman mendalam tentang data 
            adalah kunci untuk menciptakan solusi yang inovatif dan berdampak.
          </p>
        </div>
      </div>
    </section>
  )
}
