import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './App.css'

const isProductionDomain = ['rafihaqul.my.id', 'www.rafihaqul.my.id'].includes(
  window.location.hostname,
)

if (isProductionDomain) {
  const targetPath = '/about-me/'
  const isApexDomain = window.location.hostname === 'rafihaqul.my.id'
  const isRootPath = window.location.pathname === '/'
  const isAboutMePath = window.location.pathname === '/about-me'

  if (isApexDomain || isRootPath || isAboutMePath) {
    window.location.replace(
      `https://www.rafihaqul.my.id${targetPath}${window.location.search}${window.location.hash}`,
    )
  }
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/about-me">
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
