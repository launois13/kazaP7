import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from "./components/Header.jsx"
import './main.scss'
import './sass/header.scss'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
