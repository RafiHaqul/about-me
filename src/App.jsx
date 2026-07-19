import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar.jsx'
import HomePage from './pages/HomePage.jsx'
import ProjectDetailPage from './pages/ProjectDetailPage.jsx'

/**
 * React Router TIDAK mereset scroll position secara otomatis saat
 * navigasi (berbeda dari perilaku default browser saat pindah dokumen HTML
 * biasa). ScrollManager menangani dua skenario:
 *
 * 1. Berpindah KE halaman detail (path baru tanpa hash) → scroll ke atas.
 * 2. Berpindah KE beranda DENGAN hash (mis. "/#skills") → dibiarkan,
 *    karena HomePage sendiri yang akan scroll ke section terkait
 *    (lihat useEffect di HomePage.jsx) setelah section-nya selesai render.
 */
function ScrollManager() {
  const location = useLocation()

  useEffect(() => {
    if (!location.hash) {
      window.scrollTo({ top: 0, behavior: 'instant' })
    }
  }, [location.pathname, location.hash])

  return null
}

export default function App() {
  return (
    <div className="min-h-screen bg-paper">
      <ScrollManager />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/project/:id" element={<ProjectDetailPage />} />
        <Route
          path="*"
          element={
            <div className="min-h-screen flex items-center justify-center font-mono text-sm text-muted">
              404 — Halaman tidak ditemukan.
            </div>
          }
        />
      </Routes>
    </div>
  )
}
