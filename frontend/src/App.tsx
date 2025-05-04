import { Routes, Route, Navigate } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Home from './pages/Home'
import ClientPage from './pages/ClientPage'
import ProjectPage from './pages/ProjectPage'
import UnitPage from './pages/UnitPage'
import ElementPage from './pages/ElementPage'
import MaterialPage from './pages/MaterialPage'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/clients" element={<ClientPage />} />
      <Route path="/projects" element={<ProjectPage />} />
      <Route path="/units" element={<UnitPage />} />
      <Route path="/elements" element={<ElementPage />} />
      <Route path="/materials" element={<MaterialPage />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}
