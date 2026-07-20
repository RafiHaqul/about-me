import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const NAV_LINKS = [
  { label: 'Tentang', hash: 'about' },
  { label: 'Keahlian', hash: 'skills' },
  { label: 'Proyek', hash: 'projects' },
  { label: 'Publikasi', hash: 'publications' },
  { label: 'Kontak', hash: 'contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Jika ada hash di URL saat landing di "/", scroll ke section setelah render.
  useEffect(() => {
    if (isHome && location.hash) {
      const el = document.getElementById(location.hash.replace('#', ''))
      if (el) {
        // beri delay singkat agar layout sempat ter-render penuh
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 50)
      }
    }
  }, [isHome, location.hash])

  function handleNavClick(e, hash) {
    e.preventDefault()

    if (isHome) {
      // Sudah di beranda: cukup smooth-scroll ke section.
      const el = document.getElementById(hash)
      el?.scrollIntoView({ behavior: 'smooth' })
    } else {
      // Di halaman lain (mis. detail proyek): navigasi balik ke "/"
      // lalu biarkan useEffect di atas menangani scroll setelah pindah halaman.
      navigate(`/#${hash}`)
    }
  }

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors ${
        scrolled ? 'bg-paper/90 backdrop-blur border-b border-line' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="/#hero"
          onClick={(e) => handleNavClick(e, 'hero')}
          className="font-display font-semibold text-ink tracking-tight"
        >
          RafiHaqul
        </a>

        <ul className="hidden md:flex items-center gap-7 font-mono text-xs uppercase tracking-wide text-muted">
          {NAV_LINKS.map((link) => (
            <li key={link.hash}>
              <a
                href={`/#${link.hash}`}
                onClick={(e) => handleNavClick(e, link.hash)}
                className="hover:text-box transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
