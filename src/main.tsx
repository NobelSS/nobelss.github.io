import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import HomePage from './pages/home.tsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ProjectPage from './pages/projects.tsx'
import CertificatePage from './pages/certicificates.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
        <Routes>
          <Route 
            path="/"
            element={<HomePage />}
          />
          <Route 
            path="/projects"
            element={<ProjectPage />}
          />
          <Route 
            path="/certificates"
            element={<CertificatePage />}
          />
        </Routes>
    </BrowserRouter>
  </StrictMode>,
)
