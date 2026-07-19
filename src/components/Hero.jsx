import heroImage from '../assets/pp.webp'

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center pt-16 px-6 max-w-6xl mx-auto"
    >
      <div className="w-full flex flex-col lg:flex-row items-center gap-12">
        <div className="w-full max-w-sx lg:max-w-xs">
          <div className="relative">
            <div className="absolute inset-0 bg-box/10 rounded-full blur-3xl" />
            <img
              src={heroImage}
              alt="Foto profil"
              className="relative w-full aspect-square object-cover rounded-full border border-line shadow-[0_20px_60px_rgba(0,0,0,0.12)]"
            />
          </div>
        </div>

        <div className="flex-1">
          <p className="eyebrow">01 — profil</p>

          <div className="bbox-frame inline-block">
            <h1 className="font-display font-semibold text-4xl md:text-6xl leading-[1.05] text-ink max-w-3xl">
              Rafi Haqul Baasith S.Kom
            </h1>
          </div>

          <p className="mt-6 text-lg text-muted max-w-xl">
            Lulusan S1 Informatika dengan pengalaman di bidang {' '}
            <span className="text-ink font-medium">Data Processing, Mechine Learning/Deep Learning, Web Development </span>{' '}
            dan{' '}
            <span className="text-ink font-medium">Computer Vision</span>.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="/#projects"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="px-5 py-3 bg-box text-white font-mono text-xs uppercase tracking-wide rounded hover:opacity-90 transition-opacity"
            >
              Lihat Proyek
            </a>
            <a
              href="/#contact"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="px-5 py-3 border border-line text-ink font-mono text-xs uppercase tracking-wide rounded hover:border-box hover:text-box transition-colors"
            >
              Hubungi Saya
            </a>
          </div>
        </div>

        
      </div>
    </section>
  )
}
