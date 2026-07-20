import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // atau isi dengan IP spesifik Anda, misal: '192.168.1.100'
    base: "https://rafihaqul.github.io/about-me"
  }

})
