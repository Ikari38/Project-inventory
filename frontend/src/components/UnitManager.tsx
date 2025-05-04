import { useEffect, useState } from 'react'
import EntityPanel from './EntityPanel'
import api from '../api/axios'

interface Unit {
  id: number
  name: string
  project: number
}

export default function UnitManager() {
  const [units, setUnits] = useState<Unit[]>([])
  const [newUnit, setNewUnit] = useState('')
  const [projectId, setProjectId] = useState('')

  useEffect(() => {
    fetchUnits()
  }, [])

  const fetchUnits = async () => {
    try {
      const res = await api.get<Unit[]>('units/')
      setUnits(res.data)
    } catch (err) {
      console.error('Error fetching units', err)
    }
  }

  const addUnit = async () => {
    if (!newUnit.trim() || !projectId) return
    try {
      await api.post('units/', {
        name: newUnit,
        project: Number(projectId),
      })
      setNewUnit('')
      setProjectId('')
      fetchUnits()
    } catch (err) {
      console.error('Error adding unit', err)
    }
  }

  const deleteUnit = async (id: number) => {
    try {
      await api.delete(`units/${id}/`)
      fetchUnits()
    } catch (err) {
      console.error('Error deleting unit', err)
    }
  }

  return (
    <EntityPanel title="Units" onAdd={addUnit}>
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="Unit name"
          className="flex-1 px-4 py-2 rounded bg-white/10 border border-white/20 text-white placeholder-white/60"
          value={newUnit}
          onChange={(e) => setNewUnit(e.target.value)}
        />
        <input
          type="number"
          placeholder="Project ID"
          className="w-32 px-4 py-2 rounded bg-white/10 border border-white/20 text-white placeholder-white/60"
          value={projectId}
          onChange={(e) => setProjectId(e.target.value)}
        />
      </div>

      <div className="overflow-x-auto">
        <table className="w-full table-auto border-collapse">
          <thead>
            <tr className="text-left border-b border-white/20">
              <th className="py-2">ID</th>
              <th className="py-2">Name</th>
              <th className="py-2">Project</th>
              <th className="py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {units.length === 0 ? (
              <tr>
                <td colSpan={4} className="py-4 text-center text-white/60">
                  No units found.
                </td>
              </tr>
            ) : (
              units.map((unit) => (
                <tr key={unit.id} className="border-b border-white/10">
                  <td className="py-2">{unit.id}</td>
                  <td className="py-2">{unit.name}</td>
                  <td className="py-2">{unit.project}</td>
                  <td className="py-2">
                    <button
                      onClick={() => deleteUnit(unit.id)}
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
