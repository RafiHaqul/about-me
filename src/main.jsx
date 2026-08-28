import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './App.css'

if (window.location.pathname === '/') {
  window.location.replace(`/about-me/${window.location.hash}`)
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/about-me">
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
