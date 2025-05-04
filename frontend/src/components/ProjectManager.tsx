import { useEffect, useState } from 'react'
import EntityPanel from './EntityPanel'
import api from '../api/axios'

interface Project {
  id: number
  name: string
  client: number
}

export default function ProjectManager() {
  const [projects, setProjects] = useState<Project[]>([])
  const [newProject, setNewProject] = useState('')
  const [clientId, setClientId] = useState('')

  useEffect(() => {
    fetchProjects()
  }, [])

  const fetchProjects = async () => {
    try {
      const res = await api.get<Project[]>('projects/')
      setProjects(res.data)
    } catch (err) {
      console.error('Error fetching projects', err)
    }
  }

  const addProject = async () => {
    if (!newProject.trim() || !clientId) return
    try {
      await api.post('projects/', {
        name: newProject,
        client: Number(clientId),
      })
      setNewProject('')
      setClientId('')
      fetchProjects()
    } catch (err) {
      console.error('Error adding project', err)
    }
  }

  const deleteProject = async (id: number) => {
    try {
      await api.delete(`projects/${id}/`)
      fetchProjects()
    } catch (err) {
      console.error('Error deleting project', err)
    }
  }

  return (
    <EntityPanel title="Projects" onAdd={addProject}>
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="Project name"
          className="flex-1 px-4 py-2 rounded bg-white/10 border border-white/20 text-white placeholder-white/60"
          value={newProject}
          onChange={(e) => setNewProject(e.target.value)}
        />
        <input
          type="number"
          placeholder="Client ID"
          className="w-32 px-4 py-2 rounded bg-white/10 border border-white/20 text-white placeholder-white/60"
          value={clientId}
          onChange={(e) => setClientId(e.target.value)}
        />
      </div>

      <div className="overflow-x-auto">
        <table className="w-full table-auto border-collapse">
          <thead>
            <tr className="text-left border-b border-white/20">
              <th className="py-2">ID</th>
              <th className="py-2">Name</th>
              <th className="py-2">Client</th>
              <th className="py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {projects.length === 0 ? (
              <tr>
                <td colSpan={4} className="py-4 text-center text-white/60">
                  No projects found.
                </td>
              </tr>
            ) : (
              projects.map((project) => (
                <tr key={project.id} className="border-b border-white/10">
                  <td className="py-2">{project.id}</td>
                  <td className="py-2">{project.name}</td>
                  <td className="py-2">{project.client}</td>
                  <td className="py-2">
                    <button
                      onClick={() => deleteProject(project.id)}
                      className="text-sm text-red-400 hover:text-red-200 transition"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </EntityPanel>
  )
}
