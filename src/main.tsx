import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import HomePage from './pages/home.tsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ProjectPage from './pages/projects.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
        <Routes>
          <Route 
            path="/"
            element={<HomePage />}
          />
          <Route 
            path="/project"
            element={<ProjectPage />}
          />
        </Routes>
    </BrowserRouter>
  </StrictMode>,
)
