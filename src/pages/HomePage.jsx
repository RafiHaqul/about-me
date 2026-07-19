import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Hero from '../components/Hero.jsx'
import About from '../components/About.jsx'
import Skills from '../components/Skills.jsx'
import ProjectsGrid from '../components/ProjectsGrid.jsx'
import Publications from '../components/Publications.jsx'
import Contact from '../components/Contact.jsx'

export default function HomePage() {
  const location = useLocation()

  // Menangani kasus: user datang dari halaman lain (mis. /project/2) lewat
  // link "/#skills". Begitu HomePage selesai mount, kita baca location.hash
  // lalu scroll ke section yang sesuai. Tanpa ini, browser akan mencoba
  // scroll ke hash SEBELUM elemen section sempat ter-render, sehingga
  // gagal / posisi salah.
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '')
      const target = document.getElementById(id)
      target?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [location.hash])

  return (
    <>
      <Hero />
      <About />
      <Skills />
      <ProjectsGrid />
      <Publications />
      <Contact />
    </>
  )
}
