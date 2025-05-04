import { useEffect, useState } from 'react'
import EntityPanel from './EntityPanel'
import api from '../api/axios'

interface Material {
  id: number
  name: string
  project: number
  unit: number | null
  element: number | null
}

export default function MaterialManager() {
  const [materials, setMaterials] = useState<Material[]>([])
  const [name, setName] = useState('')
  const [projectId, setProjectId] = useState('')
  const [unitId, setUnitId] = useState('')
  const [elementId, setElementId] = useState('')

  useEffect(() => {
    fetchMaterials()
  }, [])

  const fetchMaterials = async () => {
    try {
      const res = await api.get<Material[]>('materials/')
      setMaterials(res.data)
    } catch (err) {
      console.error('Error fetching materials', err)
    }
  }

  const addMaterial = async () => {
    if (!name.trim() || !projectId) return
    try {
      await api.post('materials/', {
        name,
        project: Number(projectId),
        unit: unitId ? Number(unitId) : null,
        element: elementId ? Number(elementId) : null,
      })
      setName('')
      setProjectId('')
      setUnitId('')
      setElementId('')
      fetchMaterials()
    } catch (err) {
      console.error('Error adding material', err)
    }
  }

  const deleteMaterial = async (id: number) => {
    try {
      await api.delete(`materials/${id}/`)
      fetchMaterials()
    } catch (err) {
      console.error('Error deleting material', err)
    }
  }

  return (
    <EntityPanel title="Materials" onAdd={addMaterial}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <input
          type="text"
          placeholder="Material name"
          className="px-4 py-2 rounded bg-white/10 border border-white/20 text-white placeholder-white/60"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Project ID"
          className="px-4 py-2 rounded bg-white/10 border border-white/20 text-white placeholder-white/60"
          value={projectId}
          onChange={(e) => setProjectId(e.target.value)}
        />
        <input
          type="number"
          placeholder="Unit ID"
          className="px-4 py-2 rounded bg-white/10 border border-white/20 text-white placeholder-white/60"
          value={unitId}
          onChange={(e) => setUnitId(e.target.value)}
        />
        <input
          type="number"
          placeholder="Element ID"
          className="px-4 py-2 rounded bg-white/10 border border-white/20 text-white placeholder-white/60"
          value={elementId}
          onChange={(e) => setElementId(e.target.value)}
        />
      </div>

      <div className="overflow-x-auto">
        <table className="w-full table-auto border-collapse">
          <thead>
            <tr className="text-left border-b border-white/20">
              <th className="py-2">ID</th>
              <th className="py-2">Name</th>
              <th className="py-2">Project</th>
              <th className="py-2">Unit</th>
              <th className="py-2">Element</th>
              <th className="py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {materials.length === 0 ? (
              <tr>
                <td colSpan={6} className="py-4 text-center text-white/60">
                  No materials found.
                </td>
              </tr>
            ) : (
              materials.map((m) => (
                <tr key={m.id} className="border-b border-white/10">
                  <td className="py-2">{m.id}</td>
                  <td className="py-2">{m.name}</td>
                  <td className="py-2">{m.project}</td>
                  <td className="py-2">{m.unit ?? '-'}</td>
                  <td className="py-2">{m.element ?? '-'}</td>
                  <td className="py-2">
                    <button
                      onClick={() => deleteMaterial(m.id)}
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
